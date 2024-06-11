import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalMembro from "@/components/modals/membro";

const columns = [
  { key: "pk_idUsuario", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cargo" },
  { key: "status", label: "Status" },
];

export default function TabelaMembros() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axiosInstance.get("/allUsers");
        const users = usersResponse.data;

        setData(users); // Define os usuários recuperados na state 'data'
      } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TabelaFlex
        nome={"Adicionar Membro"}
        data={data}
        columns={columns}
        button={<ModalMembro />}
      />
    </div>
  );
}
