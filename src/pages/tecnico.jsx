import Menu from "@/components/layout/menu";
import { CardGestor } from "@/components/cards/cards";
import { TabelaFlex } from "@/components/tables/table-flex";
// ALTERAR O DATABASE
import clientes from "@/components/tables/data";
import ModalMembro from "@/components/modals/membro";

import proposta from "@/assets/proposta.svg";
import relatorio from "@/assets/relatorios.svg";
import certificado from "@/assets/certificados.svg";

const columns1 = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Membro" },
];

const columns2 = [
  { key: "name", label: "Nome" },
  { key: "email", label: "Email" },
  { key: "cargo", label: "Cliente" },
];

export default function TelaTecnico() {
  return (
    <div>
      <Menu />
      <div className="max-md:ml-0 p-10 bg-backgroundcinza">
        <div className="ml-80 px-10">
          <h1 className="text-3xl font-bold mb-4">Seja bem-vindo</h1>
          <div className="flex gap-2">
            <CardGestor
              numero={27}
              texto={"Propostas Recebidas"}
              svg={proposta}
            />
            <CardGestor
              numero={32}
              texto={"Relatórios Gerados"}
              svg={relatorio}
            />
            <CardGestor
              numero={129}
              texto={"Certificados Cadastrados"}
              svg={certificado}
            />
            <CardGestor
              numero={129}
              texto={"Clientes Adicionados"}
              svg={proposta}
            />
          </div>
        </div>
        <div className="mt-10">
          <TabelaFlex
            nome={"Adicionar Membros"}
            data={clientes}
            columns={columns1}
            button={<ModalMembro />}
          />
        </div>
      </div>
    </div>
  );
}
