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
import { ScrollArea } from "../ui/scroll-area";
import { PlusCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { getAllClient } from "@/services/cliente";
import { getAllOrders } from "@/services/ordemServico";
import { getAllCategory } from "@/services/categorias";

import { regiserTools } from "@/services/instrumentos";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";





export default function ModalInstrumento() {

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

  async function handleRegisterTools(data) {
    try {

      data.idCliente = parseInt(data.idCliente);
      data.idOs = parseInt(data.idOs);
      data.idCategoria = parseInt(data.idCategoria);
      
      // console.log("estou chamandooo", data);
      const response = await regiserTools(data);

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

  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [category, setCategory] = useState([]);

  async function getClientes() {
    try {
      const response = await getAllClient();
      setClients(response.data);
    } catch (error) {
      return error.message;
    }
  }
  async function getOrders() {
    try {
      const response = await getAllOrders();
      setOrders(response.data);
    } catch (error) {
      return error.message;
    }
  }
  async function getCategory() {
    try {
      const response = await getAllCategory();
      setCategory(response.data);
    } catch (error) {
      return error.message;
    }
  }

  useEffect(() => {
    getClientes();
    getOrders();
    getCategory();
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Instrumento
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl">
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">
              Adicionar Membro
            </AlertDialogTitle>
            <div className="flex flex-col">
              <Select {...register("idOs")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a Ordem" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* {orders.map((orders) => (
                        <SelectItem value={orders.pk_idOs}>{orders.pk_idOs}</SelectItem>
                      ))} */}
                      </SelectGroup>
                      
                    </SelectContent>
                  </Select>
            </div>
          </div>
          <AlertDialogDescription>
            <div className="grid grid-cols-3 gap-3">
              <div className="gap-2">
                <Label>Interessado/Cliente</Label>
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
                <Label>Estado da Embalagem</Label>
                <Select {...register("estadoEmbalagem")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bom1">Bom</SelectItem>
                    <SelectItem value="medio">Médio</SelectItem>
                    <SelectItem value="ruim">Ruim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Categoria</Label>
                <Select {...register("idCategoria")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea className="h-[150px] rounded-md border p-2">
                        {/* {category.map((category) => (
                          <SelectItem value={category.pk_idCategoria}>{category.nome}</SelectItem>
                        ))} */}
                      </ScrollArea>
                    </SelectContent>
                  </Select>
              </div>
              <div>
                <Label>Nome</Label>
                <Input {...register("nome")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nº de Série</Label>
                <Input {...register("nSerie")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Identificação do Cliente</Label>
                <Input {...register("identificacaoCliente")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Fabricante</Label>
                <Input {...register("fabricante")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Faixa Nominal - FN</Label>
                <Select {...register("faixaNominalNum")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <ScrollArea className="h-[180px] rounded-md border p-2">
                      <SelectItem value="0-2">0-2</SelectItem>
                      <SelectItem value="1-25">1-25</SelectItem>
                      <SelectItem value="25-50">25-50</SelectItem>
                      <SelectItem value="50-75">50-75</SelectItem>
                      <SelectItem value="75-100">75-100</SelectItem>
                      <SelectItem value="100-125">100-125</SelectItem>
                      <SelectItem value="125-150">125-150</SelectItem>
                      <SelectItem value="150-175">150-175</SelectItem>
                      <SelectItem value="175-200">175-200</SelectItem>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Unidade de Medida / FN</Label>
                <Select {...register("faixaNominalUni")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm">mm</SelectItem>
                    <SelectItem value="pol">pol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Divisão/Resolução</Label>
                <Input {...register("divisaoResolucaoNum")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Unidade de medida - Div/Res</Label>
                <Select {...register("divisaoResolucaoUni")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm">mm</SelectItem>
                    <SelectItem value="pol">pol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Órgão Responsável</Label>
                <Input {...register("orgaoResponsavel")} placeholder="Digite aqui " />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleSubmit(handleRegisterTools)()}>Adicionar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
