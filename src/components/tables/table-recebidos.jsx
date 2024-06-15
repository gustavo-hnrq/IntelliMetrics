import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; 
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalReceba from "../modals/receba";
import ModalVisualizarReceba from "../modals/recebaVisualizar";

const columns = [
  { key: "pk_idRecebimento", label: "ID" },
  { key: "setor", label: "Setor" },
  { key: "recebidoNaPrevisao", label: "Recebido na Previsão"},
  { key: "clienteConcorda", label: "Cliente Concorda"},
  { key: "pessoaContatada", label: "Pessoa Contatada"}
];

export default function TabelaRecebidos() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Estado para armazenar a linha selecionada

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

  const handleVisualizarClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  return (
    <div>
      <TabelaFlex
        nome={"Itens Recebidos"}
        data={data}
        columns={columns}
        buttonAdd={<ModalReceba/>}
        buttonVisualizar={<ModalVisualizarReceba onClose={handleCloseModal} rowData={selectedRow} />}
        onVisualizarClick={handleVisualizarClick}
      />
    </div>
  );
}
