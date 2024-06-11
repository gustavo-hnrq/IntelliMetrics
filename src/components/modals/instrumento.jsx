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
import { PlusCircle } from "lucide-react";

import { getAllClient } from "@/services/cliente";
import { getAllOrders } from "@/services/ordemServico";
import { getAllCategory } from "@/services/categorias";

import { regiserTools } from "@/services/instrumentos";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { SelectA } from "../ui/select2";


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


  const [clientes, setClients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [category, setCategory] = useState([]);
  const estadoEmabalagemOption = [
    {value: "bom", label: "Bom"},
    {value: "medio", label: "Médio"},
    {value: "ruim", label: "Ruim"}
  ]

  const faixaNominalOption = [
    {value: "1-25", label: "1-25"},
    {value: "25-50", label: "25-50"},
    {value: "50-75", label: "50-75"},
    {value: "75-100", label: "75-100"},
    {value: "100-125", label: "100-125"},
    {value: "125-150", label: "125-150"},
    {value: "150-175", label: "150-175"},
    {value: "175-200", label: "175-200"}
  ]

  const unidadeFN = [
    {value: "mm", label: "mm"},
    {value: "pol", label: "pol"}
  ]

  const unidadeRD = [
    {value: "mm", label: "mm"},
    {value: "pol", label: "pol"}
  ]

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
      data.nSerie = parseInt(data.nSerie);
      data.divisaoResolucaoNum = parseFloat(data.divisaoResolucaoNum);
      
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
              Adicionar Instrumento
            </AlertDialogTitle>
            <div className="flex flex-col">
              <SelectA
                    options={orders.map((item) => ({
                      value: item.pk_idOs,
                      label: item.pk_idOs,
                    }))}
                    {...register("idOs")}
                  />
                  {errors.idOs && <Error message={errors.idOs.message} />}
            </div>
          </div>
          <AlertDialogDescription>
            <div className="grid grid-cols-3 gap-3">
              <div className="gap-2">
                <Label>Interessado/Cliente</Label>
                <SelectA
                  options={clientes.map((item) => ({
                    value: item.pk_idCliente,
                    label: item.nomeEmpresa,
                  }))}
                  {...register("idCliente")}
                />
                {errors.idCliente && (
                  <Error message={errors.idCliente.message} />
                )}
              </div>
              <div>
                <Label>Estado da Embalagem</Label>
                  <SelectA
                    options={estadoEmabalagemOption.map((item) => ({
                      value: item.value,
                      label: item.label,
                    }))}
                    {...register("estadoEmbalagem")}
                  />
                  

                  {errors.estadoEmbalagem && (
                    <Error message={errors.estadoEmbalagem.message} />
                  )}
              </div>
              <div>
                <Label>Categoria</Label>
                  <SelectA
                    options={category.map((item) => ({
                      value: item.pk_idCategoria,
                      label: item.nome,
                    }))}
                    {...register("idCategoria")}
                  />
              </div>
              <div>
                <Label>Nome</Label>
                <Input {...register("nome")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nº de Série</Label>
                <Input type="number" {...register("nSerie")} placeholder="Digite aqui " />
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
                  <SelectA
                    options={faixaNominalOption.map((item) => ({
                      value: item.value,
                      label: item.label,
                    }))}
                    {...register("faixaNominalNum")}
                  />

                  {/* {errors.estadoEmbalagem && (
                    <Error message={errors.estadoEmbalagem.message} />
                  )} */}
              </div>
              <div>
                <Label>Unidade de Medida / FN</Label> 
                <SelectA
                    options={unidadeFN.map((item) => ({
                      value: item.value,
                      label: item.label,
                    }))}
                    {...register("faixaNominalUni")}
                  />
              </div>
              <div>
                <Label>Divisão/Resolução</Label>
                <Input {...register("divisaoResolucaoNum")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Unidade de medida - Div/Res</Label> 
                <SelectA
                    options={unidadeRD.map((item) => ({
                      value: item.value,
                      label: item.label,
                    }))}
                    {...register("divisaoResolucaoUni")}
                  />
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
