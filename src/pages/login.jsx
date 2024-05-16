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
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/schemas/signinSchema";

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
        navigate("/addRelatorio");
      }
    } catch (error) {
      console.log("ErrorStatus:", error.response.status);
    }
  }

  const data = {
    email: "sophia@teste.com",
    senha: "Suiclab123",
  };
  Signin(data);

  return (
    <div class="flex flex-wrap max-sm:">
      <div class="flex w-full flex-col md:w-1/2">
        <div class="lg:w-[28rem] max-sm:w-[18rem] mx-auto my-auto flex flex-col justify-center pt-32 md:justify-start md:px-6 md:pt-0">
          <p class="text-left text-3xl font-bold">Login</p>
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
                register={register}
                name="email"
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
                register={register}
                name="senha"
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
            <a href="#" className="hover:underline text-blue-600 text-sm">
              Esqueceu a sua senha?
            </a>
          </form>
        </div>
      </div>
      <div class="pointer-events-none relative hidden h-screen select-none bg-gradient-to-r from-blue-800 to-indigo-900 md:block md:w-1/2 ">
        <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p class="mb-8 text-3xl font-semibold leading-10">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            officiis ratione ad quas, blanditiis minus ut! Dolorem voluptatum
            cumque mollitia illo explicabo".
          </p>
        </div>
      </div>
    </div>
  );
}
