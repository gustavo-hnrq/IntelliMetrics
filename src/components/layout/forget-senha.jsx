import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgetPage() {
  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        {/* IMAGEM */}
        <div className="hidden w-3/4 h-screen md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_Wallpaper.jpg/2560px-Black_Wallpaper.jpg"
            className="object-cover w-full h-full"
            alt="Background Image"
          />
        </div>
        <div className="flex justify-center items-center h-screen p-8 min-w-96 w-1/4 flex-col">
          <h1 className="my-5 text-2xl font-bold md:text-4xl">Redefinir Senha</h1>
          <p className="text-gray-600 text-md">
            Entre com uma nova senha para acessar o sistema
          </p>
          <hr className="h-px my-3 bg-gray-200 border-0" />
          <form className="w-80"> 
            <div className="mb-4">
              <Label className="text-md">Senha</Label>
              <Input placeholder="Minimo 8 caracteres " />
            </div>
            <div className="mb-4">
              <Label className="text-md">Confirmar Senha</Label>
              <Input placeholder="Minimo 8 caracteres " />
            </div>
            <Button className="w-full my-3">Redefinir</Button>
          </form>
          <p className="text-neutral-950 text-md font-semibold">
            Já possui uma conta? <a className="underline decoration-2 text-primary" href="/"> Clique aqui</a>
          </p>
            
        </div>
      </div>
    </section>
  );
}
