import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo1 from "../../assets/logo1.svg";
import { Link } from "react-router-dom";

export default function SideBarMobile() {
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
              <Link to="/gestor"
                className="flex items-center p-2 transition-all	ease-in	text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="ms-3">Início</span>
              </Link>
            </li>
            <li>
              <Link
                to="/relatorios"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Relatórios
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
                to="/pecas"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Peças</span>
              </Link>
            </li>
            <li>
              <Link
                to="/ordenserecebidos"
                className="flex items-center p-2 transition-all	ease-in text-gray-900 rounded-lg hover:bg-primary hover:text-white hover:shadow-md"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ordens e Recebidos
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
