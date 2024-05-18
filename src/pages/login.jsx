import { RocketIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Signin } from "../services/collaborator";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/schemas/signinSchema";
import { AlertCircle } from "lucide-react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });
  const [apiErrors, setApiErrors] = useState("");
  const navigate = useNavigate();

  async function handleSubimitForm(data) {
    try {
      const response = await Signin(data);
      if (response && response.token) {
        Cookies.set("token", response.token, { expires: 1 });
        navigate("/gestor");
      } else {
        setApiErrors(
          "Erro ao fazer o login. Por favor, verifique suas credenciais."
        );
      }
    } catch (error) {
      console.log(
        "ErrorStatus:",
        error.response ? error.response.status : "Network Error"
      );
      setApiErrors(
        "Erro ao conectar-se ao servidor. Por favor, tente novamente mais tarde."
      );
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
                <Alert className="p-3" variant="destructive">
                  <AlertDescription className="flex items-center gap-x-2">
                    <AlertCircle />
                    {errors.email.message}
                  </AlertDescription>
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
                <Alert className="p-3" variant="destructive">
                  <AlertDescription className="flex items-center gap-x-2">
                    <AlertCircle />
                    {errors.senha.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox {...register("manterLogado")} />
              <Label>Manter logado</Label>
            </div>
            <Button type="submit">Logar</Button>
            <a href="#" className="hover:underline text-blue-600 text-sm">
              Esqueceu a sua senha?
            </a>
          </form>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-gradient-to-r from-blue-800 to-indigo-900 md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">
            "Transformamos dados em análises claras e convincentes, capacitando os usuários a tomar decisões informadas e impulsionar o sucesso de suas operações.".
          </p>
        </div>
      </div>
    </div>
  );
}
