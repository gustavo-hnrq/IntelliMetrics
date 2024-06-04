import React, { useState, useEffect } from "react";
import axiosInstance from "../../../axiosConfig"; // Use o seu axiosInstance configurado
import { TabelaFlex } from "@/components/tables/table-flex";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const columns = [
  { key: "idRelatorio", label: "ID Relatório" },
  { key: "nomeInstrumento", label: "Instrumento" },
  { key: "nomePeca", label: "Peça" },
  { key: "localDaMedicao", label: "Local da Medição" },
  { key: "assinatura", label: "Assinatura" },
];

export default function TabelaRelatorios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const relatoriosResponse = await axiosInstance.get("/getAllReports");
        const relatorios = relatoriosResponse.data;

        const relatoriosCompletos = await Promise.all(
          relatorios.map(async (relatorio) => {
            const [instrumentoResponse, pecaResponse] = await Promise.all([
              axiosInstance.get(`/getTool/${relatorio.fk_idInstrumento}`),
              axiosInstance.get(`/piece/${relatorio.fk_idPeca}`),
            ]);
            const instrumento = instrumentoResponse.data[0];
            const peca = pecaResponse.data[0];

            return {
              idRelatorio: relatorio.pk_idRelatorio,
              nomeInstrumento: instrumento.nome,
              nomePeca: peca.nome,
              localDaMedicao: relatorio.localDaMedicao,
              assinatura: relatorio.assinatura,
            };
          })
        );

        setData(relatoriosCompletos);
      } catch (error) {
        console.error("Erro ao carregar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TabelaFlex
        nome={"Adicionar Relatório"}
        data={data}
        columns={columns}
        button={
          <Link to="/relatorioadd">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Relatório
            </Button>
          </Link>
        }
      />
    </div>
  );
}
