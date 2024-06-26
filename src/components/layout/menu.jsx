import logo1 from "@/assets/logo1.svg";
import SideBarMobile from "@/components/layout/sidebar-mobile";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Cookies from "js-cookie";

export default function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div>
      <SideBarMobile />
      <div className="fixed top-0 left-0 bottom-0 w-80 text-azul transition-transform -translate-x-full md:translate-x-0 bg-white border-r-2 border-slate-200">
        <div className="p-4">
          <ul className="space-y-2 font-medium">
            <div className="m-5">
              <Link to="/gestor">
                <img src={logo1} alt="logo" />
              </Link>
            </div>
            <li>
              <Link
                to="/gestor"
                className="flex items-center p-2 transition-all	ease-in	text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="ms-3">Início</span>
              </Link>
            </li>
            <li>
              <Link
                to="/ordens"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ordens
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/recebidos"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Recebidos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/instrumentos"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Instrumentos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/paquimetro"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Certificado Paquímetro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/micrometro"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Certificado Micrômetro
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center p-2 rounded-lg m-5 fixed bottom-8 space-x-2">
          <div className="flex flex-col">
            <p className="font-bold">{Cookies.get('usuario').charAt(0).toUpperCase() + Cookies.get('usuario').slice(1)}</p>
            <p className="text-sm">{Cookies.get('email')}</p>
          </div>
        </div>
        <div className="fixed bottom-1 p-4 w-full">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="flex gap-2 h-8 w-full" variant="outline">
                Sair
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
                <AlertDialogDescription>
                Isso irá desconectar sua conta do sistema.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>
                  Sair
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
