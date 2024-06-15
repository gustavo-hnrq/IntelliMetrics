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
import jsCookie from "js-cookie";

export default function ModalEditMembro({ rowData }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({});

  useEffect(() => {
    if (rowData) {
      setValue("nome", rowData.nome);
      setValue("cargo", rowData.cargo);
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
  
  async function onSubmitMembro(data) {
    try {
      console.log("Enviando dados:", data);
      const token = jsCookie.get("token"); // Retrieve the token from cookies
      
      const response = await axiosInstance.put(`/updateUser`, {
        email: rowData?.email,
        nome: data.nome,
        cargo: data.cargo
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      console.log("Resposta da API:", response.data); // Log API response for debugging
      Toast.fire({
        title: `Membro Alterado`,
        icon: "success",
      });
    } catch (err) {
      console.error("Erro ao alterar membro:", err);
      let errorMessage = "Erro ao alterar membro";
      
      if (err.response) {
        console.error("Erro de resposta:", err.response.data); // Log error response for debugging
        if (err.response.status === 401 && err.response.data.message === "Token inválido") {
          errorMessage = `Sua sessão expirou. Por favor, faça login novamente.`;
          // You may want to redirect the user to the login page here.
        } else if (err.response.status === 400) {
          errorMessage = `Erro ao alterar membro: ${err.response.data.message || 'Dados inválidos'}`;
        } else if (err.response.status === 409) {
          errorMessage = `Esse membro já está cadastrado`;
        } else {
          errorMessage = `Erro interno no servidor: ${err.response.data.message || 'Erro desconhecido'}`;
        }
      } else {
        errorMessage = `Erro de rede ou erro desconhecido: ${err.message}`;
      }
      
      Toast.fire({
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
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">
              Alterar Membro
            </AlertDialogTitle>
          </div>

          <AlertDialogDescription>
              <div>
                <Label>Nome</Label>
                <Input
                  placeholder="Digite aqui"
                  {...register("nome", { required: true })}
                />
                {errors.nome && <span>Nome é obrigatório</span>}
                <Label>Email</Label>
                <Input readOnly defaultValue={rowData?.email || ''} />
                <Label>Cargo</Label>
                <Input placeholder="gestor/tecnico" {...register("cargo", { required: true })} />
                {errors.cargo && <span>Cargo é obrigatório</span>}
              </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit(onSubmitMembro)}>
            Alterar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
