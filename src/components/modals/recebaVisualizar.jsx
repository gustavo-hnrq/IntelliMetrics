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

  export default function ModalVisualizarReceba({ rowData, onClose }) {

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-0">
            <EyeIcon className="h-4 w-4 text-primary" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-6xl">
          <AlertDialogHeader>
              <AlertDialogTitle className="text-3xl font-bold mb-3">
                Cadastrar Recebimento
              </AlertDialogTitle>
              
            <AlertDialogDescription>
            {rowData && (
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="gap-2 col-span-2 ">
                <Label>Pessoa Contatada </Label>
                <Input readOnly defaultValue={rowData.pessoaContatada} />
              </div>
              <div>
                <Label>Código da Ordem de Serviço</Label>
                <Input readOnly defaultValue={rowData.fk_idOs} />
              </div>
              <div>
                <Label>N° da Proposta</Label>
                <Input readOnly defaultValue={rowData.nProposta} />
              </div>
              <div>
                <Label>Setor</Label>
                <Input readOnly defaultValue={rowData.setor} />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input readOnly defaultValue={rowData.nNotaFiscal} />
              </div>
              <div>
                <Label>Data de Recebimento</Label>
                <Input readOnly defaultValue={rowData.dataDeRecebimento} />
              </div>
              <div>
                <Label>Responsável / Usuário</Label>
                <Input readOnly defaultValue={rowData.fk_idUsuario} />
              </div>
              <div>
                <Label>Recebido na Previsão</Label>
                <Input readOnly defaultValue={rowData.recebidoNaPrevisao} />
              </div>
              <div>
                <Label>Cliente Concorda c/ nova previsão (caso houve atraso)</Label>
                <Input readOnly defaultValue={rowData.clienteConcorda} />
              </div>
              <div>
                <Label>Previsão de Início</Label>
                <Input readOnly defaultValue={rowData.previsaoInicio} />
              </div>
              <div>
                <Label>Previsão de Término</Label>
                <Input readOnly defaultValue={rowData.previsaoTermino} />
              </div>
              <div>
                <Label>Data da Assinatura</Label>
                <Input readOnly defaultValue={rowData.dataAssinatura} />
              </div>
              <div>
                <Label>Data da Contatação</Label>
                <Input readOnly defaultValue={rowData.dataContatada} />
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
  