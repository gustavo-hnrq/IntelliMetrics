import Menu from "@/components/layout/menu";
import TabelaPecas from "@/components/tables/table-pecas";

export default function TelaInstrumentos() {
  return (
    <div>
      <Menu />
      <div className="h-screen bg-backgroundcinza pt-10">
        <TabelaPecas />
      </div>
    </div>
  );
}