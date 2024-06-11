import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.svg";

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
            <img className="w-8 h-8" src={logo} alt="logo" />
          </div>
          <div className="h-full px-4 py-4 ">
            <ul className="space-y-3 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="ms-3">Início</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Certificados
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Relatórios
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Instrumentos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Peças</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Ordens de Serviço
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 hover:text-blue-600"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Clientes
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
