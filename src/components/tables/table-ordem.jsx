import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; 
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalOrdem from "@/components/modals/ordem";
import ModalVisualizarOrdem from "../modals/ordemVisualizar";

const columns = [
  { key: "titulo", label: "Titulo" },
  { key: "tipo", label: "Tipo" },
  { key: "email", label: "Email" },
  { key: "telefone", label: "Telefone" },
  { key: "status", label: "Status" },
];

export default function TabelaOrdens() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Estado para armazenar a linha selecionada


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

  const handleVisualizarClick = (rowData) => {
    setSelectedRow(rowData); // Define a linha selecionada
  };

  const handleCloseModal = () => {
    setSelectedRow(null); // Limpa a linha selecionada ao fechar a modal
  };

  
  return (
    <div>
      <TabelaFlex
        nome={"Ordem de Serviço"}
        data={data}
        columns={columns}
        buttonAdd={<ModalOrdem />}
        buttonVisualizar={<ModalVisualizarOrdem onClose={handleCloseModal} rowData={selectedRow} />}
        onVisualizarClick={handleVisualizarClick}
      />
    </div>
  );
}
