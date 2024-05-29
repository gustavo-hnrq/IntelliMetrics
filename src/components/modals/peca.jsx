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
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { regiserPieces } from "@/services/pecas";
import { useForm } from "react-hook-form";
import { pecaValidation } from "@/services/validations/pecaValidations";
import { Error } from "@/components/ui/error";
import Swal from "sweetalert2";

export default function ModalPeca() {
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


  // USEFORM PARA PEGAR OS DADOS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pecaValidation),
  });

  
  // função de registrar a peça
  async function handleRegisterPiece(data) {
    try {
      // transforma o id do cliente, ordem e desenho em int pois vem como string
      data.idCliente = parseInt(data.idCliente);
      data.idOs = parseInt(data.idOs);
      data.nDesenho = parseInt(data.nDesenho);
      data.estadoEmbalagem.toLowerCase();
      
      // console.log("estou chamandooo", data);
      // chama a função da api e coloca na variavel response a resposta
      const response = await regiserPieces(data);

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

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Peça
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-auto">
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">
              Adicionar Peça
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="flex flex-col">
            <div className="grid grid-cols-2 gap-3">
              <div className="gap-2">
                <Label>Cliente</Label>
                {/* select para agilizar na hora de adicionar o cliente */}
                <Input
                  placeholder="Id Cliente "
                  {...register("idCliente")}
                />

                {errors.idCliente && (
                  <Error message={errors.idCliente.message} />
                )}
              </div>
              <div>
                <Label>Nome</Label>
                <Input
                  placeholder="Digite aqui "
                  {...register("nome")}
                />
                {errors.nome && <Error message={errors.nome.message} />}
              </div>
              <div>
                <Label>Cód. da Ordem de Serviço</Label>
                {/* select para agilizar na hora de adicionar a order */}
                <Input
                  placeholder="Id da Ordem "
                  {...register("idOs")}
                />
                {errors.idOs && <Error message={errors.idOs.message} />}
              </div>
              <div>
                <Label>Estado da Embalagem</Label>
                <Input
                  placeholder="bom / ruim / medio"
                  {...register("estadoEmbalagem")}
                />
                
                {errors.estadoEmbalagem && (
                  <Error message={errors.estadoEmbalagem.message} />
                )}
              </div>

              <div>
                <Label>Nº do Desenho</Label>
                <Input
                  placeholder="Digite aqui "
                  type="number"
                  {...register("nDesenho")}
                />
                {errors.nDesenho && <Error message={errors.nDesenho.message} />}
              </div>
              <div>
                <Label>Material</Label>
                <Input
                  placeholder="Digite aqui "
                  {...register("material")}
                />
                {errors.material && <Error message={errors.material.message} />}
              </div>
            </div>

            <div className="mt-4">
              <Label>Descrição</Label>
              <Input
                className="h-24"
                placeholder="Digite aqui "
                {...register("descricao")}
              />
              {errors.descricao && <Error message={errors.descricao.message} />}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleSubmit(handleRegisterPiece)()}
          >
            Adicionar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
