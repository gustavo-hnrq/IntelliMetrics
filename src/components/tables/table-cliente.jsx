import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalCliente from "../modals/cliente";
import ModalVisualizarCliente from "../modals/clienteVisualizar";
import ModalEditCliente from "../modals/clienteEdit";

const columns = [
  { key: "nomeEmpresa", label: "Nome" },
  { key: "representante", label: "Representante" },
  { key: "email", label: "Email" },
  { key: "telefone", label: "Telefone" },
];

export default function TabelaClientes() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);


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
    setSelectedRow(rowData);
  };

  return (
    <div>
      <TabelaFlex
        nome={"Adicionar Cliente"}
        data={data}
        columns={columns}
        buttonAdd={<ModalCliente />}
        buttonVisualizar={<ModalVisualizarCliente rowData={selectedRow} />}
        buttonEdit={<ModalEditCliente rowData={selectedRow} />}
        onVisualizarClick={handleVisualizarClick}
      />
    </div>
  );
}
