import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { registerClient } from "@/services/cliente";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { SelectA } from "../ui/select2";

export default function ModalCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const status = [
    {value: "ativo", label: "ativo"},
    {value: "inativo", label: "inativo"}
  ]

   // BIBLIOTECA PARA RETORNAR MENSAGEM DA RESPOSTA DA API
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

  async function onSubmitCliente(data) {
    try {
      const response = await registerClient(data);
      // return response;
      console.log(data);
      return Toast.fire({
        title: `${response.data}`,
        icon: "success",
      });
    } catch (err) {
      console.log("Erro: ", err);
      return Toast.fire({
        title: `${err.message}`,
        icon: "error",
      });
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Cliente
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">
              Adicionar Cliente
            </AlertDialogTitle>
          </div>

          <AlertDialogDescription>
            <div className="grid grid-cols-2 gap-3">
              <div className="gap-2">
                <Label>Nome da Empresa</Label>
                <Input
                  placeholder="Digite aqui "
                  {...register("nomeEmpresa")}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input placeholder="Digite aqui " {...register("email")} />
              </div>
              <div>
                <Label>CNPJ</Label>
                <Input placeholder="Digite aqui " {...register("cnpj")} />
              </div>
              <div>
                <Label>Telefone</Label>
                <Input placeholder="Digite aqui " {...register("telefone")} />
              </div>
              <div>
                <Label>Representante</Label>
                <Input
                  placeholder="Digite aqui "
                  {...register("representante")}
                />
              </div>
              <div>
                <Label>Endereço</Label>
                <Input placeholder="Digite aqui " {...register("endereco")} />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleSubmit(onSubmitCliente)()}>Adicionar</AlertDialogAction>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
