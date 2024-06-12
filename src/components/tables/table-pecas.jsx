import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; 
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalPeca from "@/components/modals/peca";
import ModalVisualizarPeca from "../modals/pecaVisualizar";

const columns = [
  { key: "pk_idPeca", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "nDesenho", label: "N Desenho" },
  { key: "nomeEmpresa", label: "Cliente" },
];

export default function TabelaPecas() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // Estado para armazenar a linha selecionada


  useEffect(() => {
    const fetchData = async () => {
      try {
        const pecasResponse = await axiosInstance.get("/getAllPieces");
        const pecas = pecasResponse.data;

        const pecasCompletos = await Promise.all(pecas.map(async (peca) => {
          const clienteResponse = await axiosInstance.get(`/client/${peca.fk_idCliente}`);
          const cliente = clienteResponse.data[0];

          return {
            ...peca,
            nomeEmpresa: cliente.nomeEmpresa,
          };
        }));

        setData(pecasCompletos);
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
          nome={"Adicionar Peça"}
          data={data}
          columns={columns}
          buttonAdd={<ModalPeca />}
          buttonVisualizar={<ModalVisualizarPeca onClose={handleCloseModal} rowData={selectedRow} />}
        onVisualizarClick={handleVisualizarClick}
        />
    </div>
  );
}
