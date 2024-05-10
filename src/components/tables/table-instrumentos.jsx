import React, { useState, useEffect } from "react";
import axios from "axios";
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalInstrumento from "@/components/modals/instrumento";

const columns = [
  { key: "pk_idInstrumento", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "fabricante", label: "Fabricante" },
  { key: "nomeEmpresa", label: "Cliente" },
  { key: "categoria", label: "Categoria" },
];

export default function TabelaInstrumentos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const instrumentosResponse = await axios.get("https://api-intelli.calmsand-31c018e9.brazilsouth.azurecontainerapps.io/getAllTools");
        const instrumentos = instrumentosResponse.data;

        // Mapear os instrumentos para buscar informações adicionais de cliente e categoria
        const instrumentosCompletos = await Promise.all(instrumentos.map(async (instrumento) => {
          const clienteResponse = await axios.get(`https://api-intelli.calmsand-31c018e9.brazilsouth.azurecontainerapps.io/client/${instrumento.fk_idCliente}`);
          const cliente = clienteResponse.data[0];
          const categoriaResponse = await axios.get("https://api-intelli.calmsand-31c018e9.brazilsouth.azurecontainerapps.io/allCategorys");

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

  return (
    <div>
        <TabelaFlex
          nome={"Adicionar Instrumentos"}
          data={data}
          columns={columns}
          button={<ModalInstrumento />}
        />
    </div>
  );
}