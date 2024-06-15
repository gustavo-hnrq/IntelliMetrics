import Menu from "@/components/layout/menu";
import TabelaOrdens from "@/components/tables/table-ordem";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaOrdens() {
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
        <TabelaOrdens />
      </div>
    </div>
  );
}

