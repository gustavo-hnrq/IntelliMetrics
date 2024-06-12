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
  
  export default function ModalVisualizarInstrumento({ rowData, onClose }) {
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-0">
            <EyeIcon className="h-4 w-4 text-primary" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-4xl">
          <AlertDialogHeader>
            <div className="flex flex-row w-full justify-between">
              <AlertDialogTitle className="text-3xl font-bold mb-3">
                Instrumento
              </AlertDialogTitle>
              {rowData && (
              <div className="flex flex-col">
                <Input readOnly defaultValue={rowData.fk_idOs} />
              </div>
              )}
            </div>
            <AlertDialogDescription>
            {rowData && (
              <div className="grid grid-cols-3 gap-3">
                <div className="gap-2">
                  <Label>Interessado/Cliente</Label>
                  <Input readOnly defaultValue={rowData.fk_idCliente} />
                </div>
                <div>
                  <Label>Estado da Embalagem</Label>
                  <Input readOnly defaultValue={rowData.estadoEmbalagem} />
                </div>
                <div>
                  <Label>Categoria</Label>
                  <Input readOnly defaultValue={rowData.fk_idCategoria} />
                </div>
                <div>
                  <Label>Nome</Label>
                  <Input readOnly defaultValue={rowData.nome} />
                </div>
                <div>
                  <Label>Nº de Série</Label>
                  <Input readOnly defaultValue={rowData.nSerie} />
                </div>
                <div>
                  <Label>Identificação do Cliente</Label>
                  <Input readOnly defaultValue={rowData.identificacaoCliente} />
                </div>
                <div>
                  <Label>Fabricante</Label>
                  <Input readOnly defaultValue={rowData.fabricante} />
                </div>
                <div>
                  <Label>Faixa Nominal - FN</Label>
                  <Input readOnly defaultValue={rowData.faixaNominalNum} />
                </div>
                <div>
                  <Label>Unidade de Medida / FN</Label> 
                  <Input readOnly defaultValue={rowData.faixaNominalUni} />
                </div>
                <div>
                  <Label>Divisão/Resolução</Label>
                  <Input readOnly defaultValue={rowData.divisaoResolucaoNum} />
                </div>
                <div>
                  <Label>Unidade de medida - Div/Res</Label> 
                  <Input readOnly defaultValue={rowData.divisaoResolucaoUni} />
                </div>
                <div>
                  <Label>Órgão Responsável</Label>
                  <Input readOnly defaultValue={rowData.orgaoResponsavel} />
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
  