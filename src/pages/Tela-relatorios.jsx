import Menu from "@/components/layout/menu";
import TabelaRelatorios from "@/components/tables/table-relatorios";

export default function TelaRelatorios() {
  return (
    <div>
      <Menu />
      <div className=" h-full bg-backgroundcinza pt-10">
        <TabelaRelatorios />
      </div>
    </div>
  );
}
