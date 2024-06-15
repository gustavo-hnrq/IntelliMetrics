import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeIcon } from "lucide-react";

export default function ModalVisualizarMembro({ rowData, onClose }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-0">
          <EyeIcon className="h-4 w-4 text-primary" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
        <AlertDialogTitle className="text-3xl font-bold mb-3">Membro</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          {rowData && (
            <div>
              <Label>Nome</Label>
              <Input readOnly defaultValue={rowData.nome} />
              <Label>Email</Label>
              <Input readOnly defaultValue={rowData.email} />
              <Label>Cargo</Label>
              <Input readOnly defaultValue={rowData.cargo} />
            </div>
          )}
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Fechar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
