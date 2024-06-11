import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; 
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalOrdem from "@/components/modals/ordem";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const columns = [
  { key: "pk_idRecebimento", label: "ID" },
  { key: "setor", label: "Setor" },
  { key: "recebidoNaPrevisao", label: "Recebido na Previsão"},
  { key: "clienteConcorda", label: "Cliente Concorda"},
  { key: "pessoaContatada", label: "Pessoa Concorda"}
];

export default function TabelaRecebidos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await axiosInstance.get("/getAllReceipts");
        const orders = ordersResponse.data;

        setData(orders);
      } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TabelaFlex
        nome={"Itens Recebidos"}
        data={data}
        columns={columns}
        button={<Link to="/recebimento"><Button>Adicionar Recebimento</Button></Link>}
      />
    </div>
  );
}
