import React, { useState, useEffect } from "react";
import axios from "axios";
import { TabelaFlex } from "@/components/tables/table-flex";
import ModalPeca from "@/components/modals/peca";

const columns = [
  { key: "pk_idPeca", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "nDesenho", label: "N Desenho" },
  { key: "nomeEmpresa", label: "Cliente" },
];

export default function TabelaPecas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pecasResponse = await axios.get("https://api-intelli.calmsand-31c018e9.brazilsouth.azurecontainerapps.io/getAllPieces");
        const pecas = pecasResponse.data;

        const pecasCompletos = await Promise.all(pecas.map(async (peca) => {
          const clienteResponse = await axios.get(`https://api-intelli.calmsand-31c018e9.brazilsouth.azurecontainerapps.io/client/${peca.fk_idCliente}`);
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

  return (
    <div>
        <TabelaFlex
          nome={"Adicionar Peça"}
          data={data}
          columns={columns}
          button={<ModalPeca />}
        />
    </div>
  );
}