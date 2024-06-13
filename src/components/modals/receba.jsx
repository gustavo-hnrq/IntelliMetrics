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
  import { Switch } from "@/components/ui/switch";
  import { useForm } from "react-hook-form";
  import { SelectA } from "../ui/select2";
  import Swal from "sweetalert2";
  import { useState, useEffect } from "react";

 
  import { getAllUsers } from "@/services/membros";
  import { regiserReceipt } from "@/services/recebido";
  import { getAllOrders } from "@/services/ordemServico";

  export default function ModalReceba() {

    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    const PrevOptions = [
      { value: "sim", label: "Sim" },
      { value: "nao", label: "Não" },
    ];

    const novaOptions = [
      { value: "sim", label: "Sim" },
      { value: "nao", label: "Não" },
    ];

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
  
    async function onSubmitForm(data) {
      try {
        data.idUsuario = parseInt(data.idUsuario);
        data.idOrdem = parseInt(data.idOrdem);
        data.nProposta = parseInt(data.nProposta);
        data.nNotaFiscal = parseInt(data.nNotaFiscal);
        const response = await regiserReceipt(data);
        // console.log(data)
  
        // retorna o resultado com a bliblioteca de alert, que foi definido la em cima
        return Toast.fire({
          title: `${response.data}`,
          icon: "success",
        });
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 400) {
          return Toast.fire({
            title: `Erro ao cadastrar usuario`,
            icon: "error",
          });
        } else if (err.response.status === 409) {
          return Toast.fire({
            title: `Esse email já está em uso`,
            icon: "error",
          });
        } else {
          console.log(err.response);
          return Toast.fire({
            title: `Erro interno no servidor`,
            icon: "error",
          });
        }
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
    async function getOrders() {
      try {
        const response = await getAllOrders();
        setOrders(response.data);
      } catch (error) {
        return error.message;
      }
    }
    useEffect(() => {
      getUsuarios();
      getOrders();
    }, []);
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Cadastrar Recebimento
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-6xl">
          <AlertDialogHeader>
              <AlertDialogTitle className="text-3xl font-bold mb-3">
                Cadastrar Recebimento
              </AlertDialogTitle>
              
            <AlertDialogDescription>
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="gap-2 col-span-2 ">
                <Label>Pessoa Contatada </Label>
                <Input {...register("pessoaContatada")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Código da Ordem de Serviço</Label>
                <SelectA
                    options={orders.map((item) => ({
                      value: item.pk_idOs,
                      label: item.pk_idOs,
                    }))}
                    {...register("idOrdem")}
                  />
              </div>
              <div>
                <Label>N° da Proposta</Label>
                <Input type="number" {...register("nProposta")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Setor</Label>
                <Input {...register("setor")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input type="number" {...register("nNotaFiscal")} placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Data de Recebimento</Label>
                <Input {...register("dataDeRecebimento")} placeholder="xxxx-xx-xx" />
              </div>
              <div>
                <Label>Responsável / Usuário</Label>
                <SelectA
                  options={
                    users
                      ? users.map((item) => ({
                          value: item.pk_idUsuario,
                          label: item.nome,
                        }))
                      : []
                  }
                  {...register("idUsuario")}
                />
              </div>
              <div>
                <Label>Recebido na Previsão</Label>
                <SelectA
                  options={PrevOptions.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                  {...register("recebidoNaPrevisao")}
                />
              </div>
              <div>
                <Label>Cliente Concorda c/ nova previsão (caso houve atraso)</Label>
                <SelectA
                  options={novaOptions.map((item) => ({
                    value: item.value,
                    label: item.label,
                  }))}
                  {...register("clienteConcorda")}
                />
              </div>
              <div>
                <Label>Previsão de Início</Label>
                <Input {...register("previsaoInicio")} placeholder="xxxx-xx-xx" />
              </div>
              <div>
                <Label>Previsão de Término</Label>
                <Input {...register("previsaoTermino")} placeholder="xxxx-xx-xx" />
              </div>
              <div>
                <Label>Data da Assinatura</Label>
                <Input {...register("dataAssinatura")} placeholder="xxxx-xx-xx" />
              </div>
              <div>
                <Label>Data da Contatação</Label>
                <Input {...register("dataContatada")} placeholder="xxxx-xx-xx" />
              </div>
            </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleSubmit(onSubmitForm)()}>
              Adicionar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  