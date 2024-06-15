import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalInstrumento from "@/components/modals/instrumento";
import ModalVisualizarInstrumento from "../modals/instrumentoVisualizar";
import ModalCategoria from "../modals/categoria";
  
const columns = [
  { key: "nome", label: "Nome" },
  { key: "fabricante", label: "Fabricante" },
  { key: "nomeEmpresa", label: "Cliente" },
  { key: "categoria", label: "Categoria" },
];

export default function TabelaInstrumentos() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const instrumentosResponse = await axiosInstance.get("/getAllTools");
        const instrumentos = instrumentosResponse.data;

        const instrumentosCompletos = await Promise.all(instrumentos.map(async (instrumento) => {
          const clienteResponse = await axiosInstance.get(`/client/${instrumento.fk_idCliente}`);
          const cliente = clienteResponse.data[0];
          const categoriaResponse = await axiosInstance.get("/allCategorys");

          return {
            ...instrumento,
            nomeEmpresa: cliente.nomeEmpresa,
            categoria: categoriaResponse.data.find(cat => cat.pk_idCategoria === instrumento.fk_idCategoria).nome
          };
        }));

        setData(instrumentosCompletos);
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
          nome={"Adicionar Instrumentos"}
          data={data}
          columns={columns}
          buttonAdd={<div className="flex gap-x-2"><ModalInstrumento /><ModalCategoria /></div> }
          buttonVisualizar={<ModalVisualizarInstrumento onClose={handleCloseModal} rowData={selectedRow} />}
          onVisualizarClick={handleVisualizarClick}
        />
    </div>
  );
}
