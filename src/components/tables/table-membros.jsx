import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalVisualizarMembro from "../modals/membroVisualizar";
import ModalEditMembro from "../modals/membroEdit";
import ModalMembro from "../modals/membro";

const columns = [
  { key: "nome", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
];

export default function TabelaMembros() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axiosInstance.get("/allUsers");
        const users = usersResponse.data;

        setData(users);
      } catch (error) {
        console.error("Erro ao carregar dados da API:", error);
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
        nome={"Adicionar Membro"}
        data={data}
        columns={columns}
        buttonAdd={<ModalMembro />}
        buttonVisualizar={<ModalVisualizarMembro onClose={handleCloseModal} rowData={selectedRow} />}
        buttonEdit={<ModalEditMembro rowData={selectedRow} />}
        onVisualizarClick={handleVisualizarClick}
      />
    </div>
  );
}
