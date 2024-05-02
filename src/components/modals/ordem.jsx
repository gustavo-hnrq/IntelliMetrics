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
import { Switch } from "@/components/ui/switch"

export default function ModalOrdem() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Ordem de Serviço
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl">
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">Ordem de Serviço</AlertDialogTitle>
            <div className="flex flex-col">
              <Label>status</Label>
              <Switch aria-readonly />
            </div>
          </div>
          <AlertDialogDescription>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label>Titulo</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Tipo</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Responsável/Usuario</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Contratante</Label>
                <Input placeholder="Digite aqui " />
              </div>
              
              <div>
                <Label>Contato do Contratante</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>E-mail do Contratante</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Cliente</Label>
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
  );
}
