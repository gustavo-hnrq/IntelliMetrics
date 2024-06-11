import { RocketIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { refinePassword } from "@/services/validations/collaboratorValidation";
import { refineePassword } from "@/services/collaborator";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(refinePassword) });

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

  const navigate = useNavigate();

  async function handleRefinePassword(data) {
    try {
      const response = await refineePassword(data);
      navigate("/");
      return Toast.fire({
        title: `${response}`,
        text: "Faça seu login",
        icon: "success",
      });
    } catch (error) {
      if (error.response.status === 400) {
        return Toast.fire({
          title: `Não foi possivel redefinir senha`,
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

  useEffect(() => {
    Cookies.remove("token");
  }, []);

  return (
    <div className="flex flex-wrap max-sm:">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] max-sm:w-[18rem] mx-auto my-auto flex flex-col justify-center pt-32 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl font-bold">Redefinir senha</p>
          <Alert className="flex flex-col w-full my-5">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Bem-vindo!</AlertTitle>
            <AlertDescription>
              Insira uma uma nova senha para acessar o nosso sistema.
            </AlertDescription>
          </Alert>
          <form
            className="flex flex-col pt-3 gap-5"
            onSubmit={handleSubmit(handleRefinePassword)}
          >
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email que te mandaram"
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
                placeholder="Minimo 4 caracteres"
                {...register("senha")}
              />
              {errors.senha && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.senha.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Confirmar Senha</Label>
              <Input
                type="password"
                placeholder="Minimo 4 caracteres"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {errors.confirmPassword.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <Button type="submit">Redefinir</Button>
            <Link className="hover:underline text-blue-600 text-sm" to={"/"}>
              Já possui uma conta?
            </Link>
          </form>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-gradient-to-r from-blue-800 to-indigo-900 md:block md:w-1/2 ">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis ratione ad quas, blanditiis minus ut! Dolorem voluptatum
            cumque mollitia illo explicabo".
          </p>
        </div>
      </div>
    </div>
  );
}
