import Menu from "@/components/layout/menu";
import { useNavigate } from "react-router-dom";
import TabelaRecebidos from "@/components/tables/table-recebidos";
import { useEffect } from "react";
import Cookies from "js-cookie";


export default function TelaRecebidos() {
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
      <div className="h-screen bg-backgroundcinza pt-10 max-md:pt-20">
        <TabelaRecebidos />
      </div>
    </div>
  );
}
