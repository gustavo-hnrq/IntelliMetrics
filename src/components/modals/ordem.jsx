import React from "react";
import { useEffect, useState } from "react";
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
import { EscolherData } from "@/components/ui/date-picker";
import { PlusCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getAllClient } from "@/services/cliente";
import { getAllUsers } from "@/services/membros";

import { regiserOrders } from "@/services/ordemServico";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { Error } from "@/components/ui/error";
import { zodResolver } from "@hookform/resolvers/zod";
// import { ordemValidation } from "@/services/validations/ordemValidations";


export default function ModalOrdem() {

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

      const [clients, setClients] = useState([]);
      const [users, setUsers] = useState([]);

      async function handleRegisterOrder(data) {
        try {
          
          data.idOs = parseInt(data.idOs);
          data.idCliente = parseInt(data.idCliente);
          data.idUsuario = parseInt(data.idUsuario);
          // data.estadoEmbalagem.toLowerCase();
          
          const response = await regiserOrders(data);
    
          // retorna o resultado com a bliblioteca de alert, que foi definido la em cima
          return Toast.fire({
            title: `${response.data}`,
            icon: "success",
          });
        } catch (error) {
          // retorna o erro
          
          return Toast.fire({
            title: `${error}`,
            icon: "error",
          });
        }
      }


      async function getClientes() {
        try {
          const response = await getAllClient();
          setClients(response.data);
        } catch (error) {
          return error.message;
        }
      }
      async function getUsuarios() {
        try {
          const response = await getAllUsers();
          setUsers(response.data);
        } catch (error) {
          return error.message;
        }
      }
      useEffect(() => {
        getClientes();
        getUsuarios();
      }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Ordem de Serviço
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-5xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold mb-3">Ordem de Serviço</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid grid-cols-3 gap-3">
              <div>
                  <Label>N° da Ordem de Serviço</Label>
                  <Input placeholder="Digite aqui " {...register("idOs")}/>
                </div>
              <div >
                  <Label>Titulo</Label>
                  <Input placeholder="Digite aqui " {...register("titulo")}/>
                </div>
                <div>
                  <Label>Responsável/Usuario</Label>
                  <Select {...register("idUsuario")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea className="h-[180px] rounded-md border p-2">
                        {users.map((users) => (
                          <SelectItem value={users.pk_idUsuario}>{users.nome}</SelectItem>
                        ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                  </div>
              </div>
            <div className="grid grid-cols-4 gap-3">
                <div>
                  <Label>Tipo</Label>
                  <Select {...register("tipo")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="calibracao">Calibração</SelectItem>
                      <SelectItem value="medicao">Medição</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Status</Label>
                  <Select {...register("status")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="em espera">Em espera</SelectItem>
                      <SelectItem value="concluida">Concluída</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                    <Label>Data de Início</Label>
                    {/* <EscolherData {...register("dataInicio")}/> */}
                    <Input placeholder="xxxx-xx-xx " {...register("dataInicio")}/>
                  </div>
                  <div>
                    <Label>Data de Término</Label>
                    {/* <EscolherData {...register("dataTermino")}/> */}
                    <Input placeholder="xxxx-xx-xx " {...register("dataTermino")}/>
                  </div>
                  <div>
                  <Label>Cliente</Label>
                  <Select {...register("idCliente")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className="h-[180px] rounded-md border p-2">
                      {/* {clients.map((clients) => (
                        <SelectItem value={clients.pk_idCliente}>{clients.nomeEmpresa}</SelectItem>
                      ))} */}
                    </ScrollArea>
                  </SelectContent>
                </Select>
                </div>
                <div>
                  <Label>Contratante</Label>
                  <Input placeholder="Digite aqui " {...register("contratante")} />
                </div>
                
                <div>
                  <Label>Contato do Contratante</Label>
                  <Input placeholder="Digite aqui " {...register("telefone")}/>
                </div>
                <div>
                  <Label>E-mail do Contratante</Label>
                  <Input placeholder="Digite aqui " {...register("email")}/>
                </div>
            </div>

              <div className="mt-4">
                <Label>Descrição</Label>
                <Input className="h-24" placeholder="Digite aqui " {...register("descricao")}/>
              </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleSubmit(handleRegisterOrder)()}>Adicionar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
