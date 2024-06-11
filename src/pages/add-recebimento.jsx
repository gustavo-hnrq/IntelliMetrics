// AddRelatorio.js
import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import senai from "../assets/Senai Logotipo_destaque.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function AddRecebimento() {
  const navigate = useNavigate();
  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/");
  }
  
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div className="flex">
      <Menu />
      {/* RELTÓRIO */}
      <div className="flex flex-col bg-backgroundcinza pt-20 ml-80 pl-10 items-center  w-screen gap-5 ">
        {/* COMEÇO DO FORMULÁRIO */}
        <form class="flex flex-col w-full items-center">
          <div className="flex flex-col p-6 justify-between w-[90%] border  rounded-lg bg-[#FCFCFC]">
            <div className="flex flex-row mb-5 border-2 border-black">
              <div className="border-r-2 w-[25%] border-black p-6">
                <img className="w-52 h-32" src={senai} />
              </div>

              <div className="flex flex-col w-[50%]">
                <div className="border-b-2 p-2 border-black h-[50%]">
                  <h1 className="text-black font-bold text-left text-lg">
                    Área:
                  </h1>
                  <h1 className="text-black font-bold text-center text-2xl">
                    lABORATÓRIO DE CALIBRAÇÃO SUIÇLAB
                  </h1>
                </div>
                <div className="p-2">
                  <h1 className="text-black font-bold text-left text-lg">
                    Título:
                  </h1>
                  <h1 className="text-black font-bold text-center text-2xl">
                    Resultado de Medição de Paquimetro
                  </h1>
                </div>
              </div>

              <div className="border-l-2 w-[25%] border-black">
                <div className="border-b-2 p-2 border-black h-[50%]">
                  <h1 className="text-black font-bold text-left text-lg">
                    Código/Versão
                  </h1>
                  <h1 className="text-black font-bold text-center text-2xl">
                    F03501 v.06
                  </h1>
                </div>
                <div className="p-2">
                  <h1 className="text-black font-bold text-left text-lg">
                    Fase atual do documento
                  </h1>
                  <h1 className="text-black font-bold text-center text-2xl">
                    Produção
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="gap-2 col-span-2 ">
                <Label>Código da Ordem de Serviço</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Código da Ordem de Serviço</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Setor</Label>
                y6n h <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Data de Recebimento</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Código da Ordem de Serviço</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Setor</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Data de Recebimento</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Data de Recebimento</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input placeholder="Digite aqui " />
              </div>

              <div className="bg-slate-300 col-span-2 h-72 rounded-md" />

              <div>
                <Label>Data de Recebimento</Label>
                <Input placeholder="Digite aqui " />
              </div>
              <div>
                <Label>Nota Fiscal</Label>
                <Input placeholder="Digite aqui " />
              </div>
            </div>
          </div>

          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
            <Button className="w-[200px]">Adicionar</Button>
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
          </div>
        </form>
        {/* FIM DO FORMULÁRIO */}
      </div>
    </div>
  );
}
