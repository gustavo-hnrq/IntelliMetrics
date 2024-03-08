import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        {/* IMAGEM */}
        <div className="hidden w-1/2 h-screen md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_Wallpaper.jpg/2560px-Black_Wallpaper.jpg"
            className="object-cover w-full h-full"
            alt="Background Image"
          />
        </div>

        <div className="flex justify-center items-center h-screen p-8 min-w-96 w-1/2 flex-col">
          <h1 className="my-5 text-2xl font-bold md:text-4xl">Login</h1>
          <p className="mb-4 text-gray-600 text-md">
            Entre com seu email e senha
          </p>
          <hr className="h-px my-5 bg-gray-200 border-0" />
          <form className="w-96"> 
            <div className="mb-4">
              <Label className="text-md">Email</Label>
              <Input placeholder="exemplo@gmail.com" />
            </div>
            <div className="mb-4">
              <Label className="text-md">Senha</Label>
              <Input placeholder="Minimo 8 caracteres " />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox />
              <Label>Manter logado</Label>
            </div>
            <Button className="w-full">Entrar</Button>
          </form>
            
        </div>
      </div>
    </section>
  );
}
