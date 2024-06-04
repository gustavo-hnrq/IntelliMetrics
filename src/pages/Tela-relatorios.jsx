import Menu from "@/components/layout/menu";
import TabelaRelatorios from "@/components/tables/table-relatorios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaRelatorios() {
  const navigate = useNavigate();
  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/");
  }
  
  useEffect(() => {
    validateToken();
  }, []);
  
  return (
    <div>
      <Menu />
      <div className=" h-full bg-backgroundcinza pt-10">
        <TabelaRelatorios />
      </div>
    </div>
  );
}
