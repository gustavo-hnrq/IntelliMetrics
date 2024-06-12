import proposta from "@/assets/proposta.svg";
import relatorio from "@/assets/relatorios.svg";
import certificado from "@/assets/certificados.svg";
import user from "@/assets/user.svg"
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig";

export function CardGestor() {
  const [numeroRelatorios, setNumeroRelatorios] = useState(0);
  const [numeroClientes, setNumeroClientes] = useState(0);
  const [numeroProposta, setNumeroProposta] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [relatoriosResponse, clientesResponse, propostaResponde] = await Promise.all([
          axiosInstance.get("/getAllReports"),
          axiosInstance.get("/getAllClients"),
          axiosInstance.get("/getAllOrders")
        ]);

        const relatorios = relatoriosResponse.data;
        const clientes = clientesResponse.data;
        const proposta = propostaResponde.data;

        setNumeroRelatorios(relatorios.length);
        setNumeroClientes(clientes.length);
        setNumeroProposta(proposta.length);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-4 w-full">
      <div className="gap-y-1 p-4 bg-white border border-slate-200 rounded-md h-full">
        <div>
        <img
          className="p-2 border shadow-sm h-10 w-10 border-slate-200 rounded-md"
          src={relatorio}
          alt="icon"
        />
        <p className="text-gray-500 text-lg">Relatórios Gerados</p>
        </div>
        <h1 className="text-3xl font-bold">{numeroRelatorios}</h1>
      </div>
      {/* <div className="gap-y-1 p-4 bg-white border border-slate-200 rounded-md h-full">
        <img
          className="p-2 border shadow-sm h-10 w-10 border-slate-200 rounded-md"
          src={certificado}
          alt="icon"
        />
        <p className="text-gray-500 text-lg">Certificados Cadastrados</p>
        <h1 className="text-3xl font-bold">32</h1>
      </div> */}
      <div className="gap-y-1 p-4 bg-white border border-slate-200 rounded-md h-full">
        <img
          className="p-2 border shadow-sm h-10 w-10 border-slate-200 rounded-md"
          src={user}
          alt="icon"
        />
        <p className="text-gray-500 text-lg">Clientes Adicionados</p>
        <h1 className="text-3xl font-bold">{numeroClientes}</h1>
      </div>
      <div className="gap-y-1 p-4 bg-white border border-slate-200 rounded-md h-full">
        <img
          className="p-2 border shadow-sm h-10 w-10 border-slate-200 rounded-md"
          src={proposta}
          alt="icon"
        />
        <p className="text-gray-500 text-lg">Propostas Recebidas</p>
        <h1 className="text-3xl font-bold">{numeroProposta}</h1>
      </div>
    </div>
  );
}
