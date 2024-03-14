import { RocketIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ForgotPassword() {
  return (
    <div class="flex flex-wrap max-sm:">
      <div class="flex w-full flex-col md:w-1/2">
        <div class="lg:w-[28rem] max-sm:w-[18rem] mx-auto my-auto flex flex-col justify-center pt-32 md:justify-start md:px-6 md:pt-0">
          <p class="text-left text-3xl font-bold">Redefinir senha</p>
          <Alert className="flex flex-col w-full my-5">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Bem-vindo!</AlertTitle>
            <AlertDescription>
            Insira uma uma nova senha para acessar o nosso sistema.
            </AlertDescription>
          </Alert>
          <form class="flex flex-col pt-3 gap-5">
            <div class="flex flex-col gap-2">
              <Label>Senha</Label>
              <Input type="email" placeholder="Minimo 8 caracteres" />
            </div>
            <div class="flex flex-col gap-2">
              <Label>Confirmar Senha</Label>
              <Input type="password" placeholder="Minimo 8 caracteres" />
            </div>
            <Button>Redefinir</Button>
            <a href="#" className="hover:underline text-blue-600 text-sm">
              Já possui uma conta?
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
