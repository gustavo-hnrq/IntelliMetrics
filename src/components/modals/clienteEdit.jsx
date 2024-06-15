import React, { useEffect } from "react";
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
import { Edit } from "lucide-react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../axiosConfig";
import Swal from "sweetalert2";

export default function ModalEditCliente({ rowData }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({});
  
    useEffect(() => {
      if (rowData) {
        setValue("pk_idCliente", rowData.pk_idCliente);
        setValue("nomeEmpresa", rowData.nomeEmpresa);
        setValue("email", rowData.email);
        setValue("cnpj", rowData.cnpj);
        setValue("telefone", rowData.telefone);
        setValue("representante", rowData.representante);
        setValue("endereco", rowData.endereco);
      }
    }, [rowData, setValue]);
  
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  
    async function onSubmitCliente(data) {
      try {
        console.log("Enviando dados:", data);
        const response = await axiosInstance.put(`/updateClient/${data.pk_idCliente}`, data);
        console.log("Resposta da API:", response);
        return Toast.fire({
          title: `Cliente Alterado`,
          icon: "success",
        });
      } catch (err) {
        console.error("Erro ao alterar cliente:", err);
        let errorMessage = "Erro ao alterar cliente";
        if (err.response) {
          if (err.response.status === 400) {
            errorMessage = `Erro ao alterar cliente: ${err.response.data.message || 'Dados inválidos'}`;
          } else if (err.response.status === 409) {
            errorMessage = `Esse cliente já está cadastrado`;
          } else {
            errorMessage = `Erro interno no servidor: ${err.response.data.message || 'Erro desconhecido'}`;
          }
        } else {
          errorMessage = `Erro de rede ou erro desconhecido: ${err.message}`;
        }
        return Toast.fire({
          title: errorMessage,
          icon: "error",
        });
      }
    }
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="h-8 w-8 p-0">
            <Edit className="h-4 w-4 text-primary" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex flex-row w-full justify-between">
              <AlertDialogTitle className="text-3xl font-bold mb-3">
                Alterar Cliente
              </AlertDialogTitle>
            </div>
  
            <AlertDialogDescription>
              <div className="grid grid-cols-2 gap-3">
                <div className="gap-2">
                  <Label>Nome da Empresa</Label>
                  <Input
                    placeholder="Digite aqui"
                    {...register("nomeEmpresa", { required: true })}
                  />
                  {errors.nomeEmpresa && <span>Nome da Empresa é obrigatório</span>}
                </div>
                <div>
                  <Label>Email</Label>
                  <Input placeholder="Digite aqui" {...register("email", { required: true })} />
                  {errors.email && <span>Email é obrigatório</span>}
                </div>
                <div>
                  <Label>CNPJ</Label>
                  <Input placeholder="Digite aqui" {...register("cnpj", { required: true })} />
                  {errors.cnpj && <span>CNPJ é obrigatório</span>}
                </div>
                <div>
                  <Label>Telefone</Label>
                  <Input placeholder="Digite aqui" {...register("telefone", { required: true })} />
                  {errors.telefone && <span>Telefone é obrigatório</span>}
                </div>
                <div>
                  <Label>Representante</Label>
                  <Input
                    placeholder="Digite aqui"
                    {...register("representante", { required: true })}
                  />
                  {errors.representante && <span>Representante é obrigatório</span>}
                </div>
                <div>
                  <Label>Endereço</Label>
                  <Input placeholder="Digite aqui" {...register("endereco", { required: true })} />
                  {errors.endereco && <span>Endereço é obrigatório</span>}
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit(onSubmitCliente)}>
              Alterar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
