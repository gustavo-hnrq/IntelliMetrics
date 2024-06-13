import { RocketIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { Signin } from "../services/collaborator";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/schemas/signinSchema";
import Swal from "sweetalert2";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });
  const [apiErrors, setApiErrors] = useState("");

  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  useEffect(() => {
    Cookies.remove("token");
  }, []);

  async function handleSubimitForm(data) {
    try {
      const response = await Signin(data);
      if (response && response.token) {
        Cookies.set("token", response.token, { expires: 1 });
        navigate("/gestor");
        Cookies.set("usuario", response.Nome);
        Cookies.set("email", response.email);
        Cookies.set("usuario", response.Nome);
        return Toast.fire({
          title: `${response.mensagem}`,
          text: `Bem vindo ${Cookies.get('usuario').charAt(0).toUpperCase() + Cookies.get('usuario').slice(1)}`,
          icon: "success",
        });
      }
    } catch (error) {
      if (error.response.status === 401) {
        return Toast.fire({
          title: `Credenciais Inválidas`,
          icon: "error",
        });
      } else if (error.response.status === 403) {
        return Toast.fire({
          title: `Usuário não autorizado`,
          text: "status: Inativo",
          icon: "error",
        });
      } else if (error.response.status === 404) {
        return Toast.fire({
          title: `Usuário não encontrado`,
          icon: "error",
        });
      } else {
        console.log(error.response);
        return Toast.fire({
          title: `Erro interno no servidor`,
          icon: "error",
        });
      }
    }
  }

  return (
    <div className="flex flex-wrap max-sm:">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] max-sm:w-[18rem] mx-auto my-auto flex flex-col justify-center pt-32 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl font-bold">Login</p>
          <Alert className="flex flex-col w-full my-5">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Bem-vindo!</AlertTitle>
            <AlertDescription>
              Por favor, faça login para acessar sua conta.
            </AlertDescription>
          </Alert>
          {apiErrors && (
            <Alert variant="destructive">
              <AlertTitle>Erro ao fazer o login</AlertTitle>
              <AlertDescription>{apiErrors}</AlertDescription>
            </Alert>
          )}
          <form
            className="flex flex-col pt-3 gap-5"
            onSubmit={handleSubmit(handleSubimitForm)}
          >
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Digite aqui o seu email"
                {...register("email")}
              />
              {errors.email && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.email.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("senha")}
              />
              {errors.senha && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.senha.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox />
              <Label>Manter logado</Label>
            </div>
            <Button type="submit">Logar</Button>
            <Link
              href="#"
              className="hover:underline text-blue-600 text-sm"
              to={"/forgot"}
            >
              Esqueceu a sua senha?
            </Link>
          </form>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-cover bg-[url('@/assets/gear.png')] md:block md:w-1/2 "/>
    </div>
  );
}
