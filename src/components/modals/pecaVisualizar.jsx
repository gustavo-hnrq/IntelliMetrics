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
  
  export default function ModalVisualizarPeca({ rowData, onClose }) {
   
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-0">
            <EyeIcon className="h-4 w-4 text-primary" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-auto">
          <AlertDialogHeader>
            <div className="flex flex-row w-full justify-between">
              <AlertDialogTitle className="text-3xl font-bold mb-3">
                Peça
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="flex flex-col">
            {rowData && (
                <div>
                    <div className="grid grid-cols-2 gap-3">
                <div className="gap-2">
                  <Label>Cliente</Label>
                  <Input readOnly defaultValue={rowData.fk_idCliente} />
                </div>
                <div>
                  <Label>Nome</Label>
                  <Input readOnly defaultValue={rowData.nome} />
                </div>
                <div>
                  <Label>Cód. da Ordem de Serviço</Label>
                  <Input readOnly defaultValue={rowData.fk_idOs} />
                </div>
                <div>
                  <Label>Estado da Embalagem</Label>
                  <Input readOnly defaultValue={rowData.estadoEmbalagem} />
                </div>
                <div>
                  <Label>Nº do Desenho</Label>
                  <Input readOnly defaultValue={rowData.nDesenho} />
                </div>
                <div>
                  <Label>Material</Label>
                  <Input readOnly defaultValue={rowData.material} />
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
  