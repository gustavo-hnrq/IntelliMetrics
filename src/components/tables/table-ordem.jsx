import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalOrdem from "@/components/modals/ordem";

const columns = [
  { key: "titulo", label: "Titulo" },
  { key: "tipo", label: "Tipo" },
  { key: "representante", label: "Representante" },
  { key: "email", label: "Email" },
  { key: "telefone", label: "Telefone" },
  { key: "status", label: "Status" },
];

export default function TabelaOrdens() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await axiosInstance.get("/getAllOrders");
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
        nome={"Ordem de Serviço"}
        data={data}
        columns={columns}
        button={<ModalOrdem />}
      />
    </div>
  );
}
