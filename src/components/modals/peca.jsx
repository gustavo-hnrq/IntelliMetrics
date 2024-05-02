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
 
export default function ModalPeca() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Peça
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-auto" >
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Peça</AlertDialogTitle>
            <Input className="w-36" placeholder="Código da Ordem" />
          </div>
          <AlertDialogDescription className="flex flex-col">
          <div className="grid grid-cols-2 gap-3">
            <div className="gap-2">
              <Label>Cliente</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Nome</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Nº do Desenho</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Material</Label>
              <Input placeholder="Digite aqui " />
            </div>
          </div>
          <div className="mt-4">
            <Label>Descrição</Label>
            <Input className="h-24" placeholder="Digite aqui " />
          </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Adicionar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}