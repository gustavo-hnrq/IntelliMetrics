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
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { EyeIcon } from "lucide-react";

export default function ModalVisualizarOrdem({ rowData, onClose }) {

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button variant="outline" className="h-8 w-8 p-0">
            <EyeIcon className="h-4 w-4 text-primary" />
          </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-5xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold mb-3">Ordem de Serviço</AlertDialogTitle>
          <AlertDialogDescription>
          {rowData && (
            <div>
                <div className="grid grid-cols-3 gap-3">
              <div>
                <Label>N° da Ordem de Serviço</Label>
                <Input readOnly defaultValue={rowData.pk_idOs} />
              </div>
              <div >
                <Label>Titulo</Label>
                <Input readOnly defaultValue={rowData.titulo} />
              </div>
              <div>
                <Label>Responsável/Usuario</Label>
                <Input readOnly defaultValue={rowData.fk_idUsuario} />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div>
                <Label>Tipo</Label>
                <Input readOnly defaultValue={rowData.tipo} />
              </div>
              <div>
                <Label>Status</Label>
                <Input readOnly defaultValue={rowData.status} />
              </div>
              <div>
                <Label>Data de Início</Label>
                <Input readOnly defaultValue={rowData.dataInicio} />
              </div>
              <div>
                <Label>Data de Término</Label>
                <Input readOnly defaultValue={rowData.dataTermino} />
              </div>
              <div>
                <Label>Cliente</Label>
                <Input readOnly defaultValue={rowData.fk_idCliente} />
              </div>
              <div>
                <Label>Contratante</Label>
                <Input readOnly defaultValue={rowData.contratante} />
              </div>

              <div>
                <Label>Contato do Contratante</Label>
                <Input readOnly defaultValue={rowData.telefone} />
              </div>
              <div>
                <Label>E-mail do Contratante</Label>
                <Input readOnly defaultValue={rowData.email} />
              </div>
            </div>

            <div className="mt-4">
              <Label>Descrição</Label>
              <Input readOnly defaultValue={rowData.descricao} />
            </div>
            </div>
          )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Fechar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
