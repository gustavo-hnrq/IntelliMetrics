import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo1 from "../../assets/logo1.svg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
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
import { Button } from "../ui/button";

export default function SideBarMobile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="fixed flex items-center top-0 z-40 w-full transition-all hidden max-md:block bg-white w-full p-3 border-b-2 border-slate-200">
      <Sheet>
        <SheetTrigger>
          <div className="flex justify-center items-center">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="ml-9">
            <Link to="/gestor">
              <img className="w-64 h-16" src={logo1} alt="logo" />
            </Link>
          </div>
          <div className="h-full px-4 py-4">
            <ul className="space-y-2 font-medium">
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
                  <span className="flex-1 ms-3 whitespace-nowrap">Ordens</span>
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
              <p className="font-bold">
                {Cookies.get("usuario").charAt(0).toUpperCase() +
                  Cookies.get("usuario").slice(1)}
              </p>
              <p className="text-sm">{Cookies.get("email")}</p>
            </div>
          </div>
          <div className="fixed bottom-1 p-4 w-1/2">
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
