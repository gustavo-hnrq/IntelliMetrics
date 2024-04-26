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
import { Textarea } from "@/components/ui/textarea";
import { EscolherData } from "@/components/ui/date-picker";
import { PlusCircle } from "lucide-react";

export default function ModalOrdem() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Ordem de Serviço
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold mb-3">
            Ordem de Serviço
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <Label>Titulo</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Código da Ordem</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Responsável</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Tipo </Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Peça</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Data de Início</Label>
                <EscolherData />
              </div>
              <div>
                <Label>Data de Término</Label>
                <EscolherData />
              </div>
              <div className="col-span-2">
                <Label>Descricação</Label>
                <Textarea placeholder="Digite a descrição aqui..." />
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
  );
}
