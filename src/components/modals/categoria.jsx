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
   
  export default function ModalCategoria() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4"/>Adicionar categoria
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-96">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Categoria</AlertDialogTitle>
            <AlertDialogDescription>
            <div className="grid gap-2">
              <Label>Categoria</Label>
              <Input placeholder="Digite aqui " />
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