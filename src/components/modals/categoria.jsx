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
  } from "@/components/ui/alert-dialog"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { Label } from "@/components/ui/label"
  import { PlusCircle } from "lucide-react"

  import { regiserCategory } from "@/services/categorias"
  import { useForm } from "react-hook-form";
  import Swal from "sweetalert2";
  import { useState, useEffect } from "react";
   
  export default function ModalCategoria() {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({});

     // BIBLIOTECA PARA RETORNAR MENSAGEM DA RESPOSTA DA API
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
  
    async function onSubmitCategoria(data) {
      try {
        const response = await regiserCategory(data);
        // return response;
        console.log(data);
        return Toast.fire({
          title: `${response.data}`,
          icon: "success",
        });
      } catch (err) {
        console.log("Erro: ", err);
        return Toast.fire({
          title: `${err.message}`,
          icon: "error",
        });
      }
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4"/>Adicionar categoria
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-96">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Categoria</AlertDialogTitle>
            <AlertDialogDescription>
            <div className="grid gap-2">
              <Label>Categoria</Label>
              <Input {...register("nome")} placeholder="Digite aqui " />
            </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleSubmit(onSubmitCategoria)()}>Adicionar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }