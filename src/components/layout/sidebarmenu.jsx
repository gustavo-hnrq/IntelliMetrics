import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function SideBarMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex justify-center items-center">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
      <div className="h-full px-4 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 hover:text-blue-600 group"
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
                <span className="flex-1 ms-3 whitespace-nowrap">Clientes</span>
              </a>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
