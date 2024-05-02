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
 
export default function ModalInstrumento() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Instrumento
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Instrumento</AlertDialogTitle>
          <AlertDialogDescription>
          <div className="grid grid-cols-3 gap-3">
            <div className="gap-2">
              <Label>Interessado/Cliente</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Código da Ordem de Serviço</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Categoria</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Nome</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Nº de Série</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Identificação do Cliente</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Fabricante</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Faixa Nominal - FN</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Unidade de Medida / FN</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Divisão/Resolução</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Unidade de medida - Div/Res</Label>
              <Input placeholder="Digite aqui " />
            </div>
            <div>
              <Label>Órgão Responsável</Label>
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