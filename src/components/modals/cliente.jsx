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
 
export default function ModalCliente() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Cliente
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent >
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Cliente</AlertDialogTitle>
            <div className="flex flex-col">
              <Label>status</Label>
              <Switch aria-readonly />
            </div>
          </div>

          <AlertDialogDescription>
          <div className="grid grid-cols-2 gap-3">
            <div className="gap-2">
              <Label>Nome da Empresa</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>CNPJ</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Telefone</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Representante</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Endereço</Label>
              <Input placeholder="Digite aqui " />
            </div>
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