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
  
  export default function ModalVisualizarCliente({ rowData, onClose }) {
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="h-8 w-8 p-0">
            <EyeIcon className="h-4 w-4 text-primary" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex flex-row w-full justify-between">
              <AlertDialogTitle className="text-3xl font-bold mb-3">
                Cliente
              </AlertDialogTitle>
            </div>
  
            <AlertDialogDescription>
            {rowData && (
              <div className="grid grid-cols-2 gap-3">
                <div className="gap-2">
                  <Label>Nome da Empresa</Label>
                  <Input readOnly defaultValue={rowData.nomeEmpresa} />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input readOnly defaultValue={rowData.email} />
                </div>
                <div>
                  <Label>CNPJ</Label>
                  <Input readOnly defaultValue={rowData.cnpj} />
                </div>
                <div>
                  <Label>Telefone</Label>
                  <Input readOnly defaultValue={rowData.telefone} />
                </div>
                <div>
                  <Label>Representante</Label>
                  <Input readOnly defaultValue={rowData.representante} />
                </div>
                <div>
                  <Label>Endereço</Label>
                  <Input readOnly defaultValue={rowData.endereco} />
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
  