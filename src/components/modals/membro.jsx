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
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useForm } from "react-hook-form"
import { regiserMembro } from "@/services/membros"
import Swal from "sweetalert2"
 
export default function ModalMembro() {
  const {register, handleSubmit, formState: {errors}} = useForm({});

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

  async function onSubmitForm(data){
    try{
      const response = await regiserMembro(data);
      // console.log(data)

      // retorna o resultado com a bliblioteca de alert, que foi definido la em cima
      return Toast.fire({
        title: `${response.data}`,
        icon: "success",
      });
    }catch(error){
      console.log(error);
    }

  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Membro
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
        <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Membro</AlertDialogTitle>
            <div className="flex flex-col">
              <Label>status</Label>
              <Switch aria-readonly />
            </div>
          </div>
          <AlertDialogDescription>
          <div className="grid gap-2">
            <Label>Nome</Label>
            <Input placeholder="Digite aqui " {...register("nome")}/>
            <Label>Email</Label>
            <Input placeholder="exemplo@exemplo.com" {...register("email")}/>
            <Label>Cargo</Label>
            <Input placeholder="gestor / tecnico" {...register("cargo")}/>
          </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleSubmit(onSubmitForm)()}>Adicionar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}