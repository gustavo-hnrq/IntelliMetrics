import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalCliente from "../modals/cliente";
import ModalVisualizarCliente from "../modals/clienteVisualizar";
// import ModalCliente from "@/components/modals/cliente";

const columns = [
  { key: "pk_idCliente", label: "ID" },
  { key: "nomeEmpresa", label: "Nome" },
  { key: "representante", label: "Representante" },
  { key: "email", label: "Email" },
  { key: "telefone", label: "Telefone" },
  { key: "status", label: "Status" },
];

export default function TabelaClientes() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Estado para armazenar a linha selecionada


  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsResponse = await axiosInstance.get("/getAllClients");
        const clients = clientsResponse.data;

        setData(clients);
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
        nome={"Adicionar Cliente"}
        data={data}
        columns={columns}
        buttonAdd={<ModalCliente />}
        buttonVisualizar={<ModalVisualizarCliente onClose={handleCloseModal} rowData={selectedRow} />}
        onVisualizarClick={handleVisualizarClick}
      />
    </div>
  );
}
