import { RocketIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";

export default function LoginPage() {
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
          <form class="flex flex-col pt-3 gap-5">
            <div class="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Digite aqui o seu email" />
            </div>
            <div class="flex flex-col gap-2">
              <Label>Senha</Label>
              <Input type="password" placeholder="Digite aqui sua senha" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox />
              <Label>Manter logado</Label>
            </div>
            <Link to="/gestor"><Button className="w-full">Logar</Button></Link>
            
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
