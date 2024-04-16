import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function IncertPaquimetro() {
    

    return (
        <div>

        <form class="flex flex-col w-full items-center">
          <div className="flex flex-col justify-between w-[90%] border border-primary rounded-lg bg-[#FCFCFC]">

            <div className="full p-6">
                <h1 className="text-black font-bold text-3xl">Incerteza De Medição Do Paquímetro</h1>
            </div>
        
          </div>
          {/* BOTÕES DO FORMULÁRIO */}
          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
            <Button className="w-[200px]">Adicionar</Button>
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
          </div>
        </form>
    </div>



    );
}