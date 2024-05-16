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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ModalInstrumento() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Instrumento
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl">
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">
              Adicionar Membro
            </AlertDialogTitle>
            <div className="flex flex-col">
              <Input placeholder="Código da Ordem" />
            </div>
          </div>

          <AlertDialogDescription>
            <div className="grid grid-cols-3 gap-3">
              <div className="gap-2">
                <Label>Interessado/Cliente</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Estado da Embalagem</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bom">Bom</SelectItem>
                    <SelectItem value="Medio">Médio</SelectItem>
                    <SelectItem value="Ruim">Ruim</SelectItem>
                  </SelectContent>
                </Select>
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
  );
}
