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
   
  export default function ModalRecebimento() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4"/> Cadastrar Recebidos
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-4xl">
          <AlertDialogHeader>
            <div className="flex flex-row  justify-between pb-6">
                <AlertDialogTitle className="text-3xl font-bold mb-3">Recebimento de Itens</AlertDialogTitle>
                <Input className="w-52" placeholder="N° da Proposta" />
            </div>
            <AlertDialogDescription>
            <div className="grid grid-cols-4 gap-3">
              <div className="gap-2">
                <Label>Código da Ordem de Serviço</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Setor</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Data de Recebimento</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input placeholder="Digite aqui " />
              </div>

              <div className="bg-slate-300 col-span-4 h-72 rounded-md"/>
              
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