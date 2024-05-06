import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function IncertMicrometro() {
  return (
    
        <div className="flex flex-col justify-between w-full">
          {/* ------------------ FORMULÁRIO ------------------ */}
          <form className="flex flex-col w-full items-center">
            {/* ------------------ DIV PARA COLOCAR A BORDA E  OS BOTÕES FICAREM PARA FORA ------------------ */}
            <div className="w-[95%] flex flex-col justify-between rounded-xl bg-white shadow-xl box-shadow border ">
              {/* DIV PARA A PARTE DE CIMA, COM O TITULO E OS NUMERO DE CERTIFICADO */}
              <div className="flex flex-col items-center py-10 px-4 justify-between xl:flex-row lg:flex-row 2xl:flex-row md:flex-col">
                <h1 className="text-black font-bold text-3xl ">
                  Incerteza De Medição De Micrômetros
                </h1>

                {/* ------------------ DIV COM O A CAIXA COM OS NÚMEROS DE CERTIFICADOS ------------------ */}
                <div className="rounded-md border-2 w-full border-black p-4 xl:w-[30%] lg:w-[30%] 2xl:w-[30%] md:mt-10">
                  <p className="flex flex-row justify-between text-[#5A5A5A] font-bold">
                    NR. OS: <span>0</span>
                  </p>
                  <p className="flex flex-row justify-between text-[#5A5A5A] font-bold">
                    NR. Certif: <span>0</span>
                  </p>
                </div>
              </div>

              {/* ------------------ COMEÇO DOS DADOS GERAIS DOS PADRÕES ------------------ */}
              <h4 className="text-black font-extrabold uppercase text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                dados gerais dos padrões
              </h4>

              {/* ------------------ COMEÇO DA TABELA COM OS BLOCOS PADRÕES ------------------ */}
              <p className="px-10 font-semibold text-xl mt-10 mb-2">
                Blocos padrão
              </p>

              {/* ------------------ DIV PARA AS 3 TABELSA ------------------ */}
              <div className="flex flex-col px-5 xl:flex-row lg:flex-row 2xl:flex-row lg:justify-around">
                {/* ------------------ DIV COM 2 TABELAS ------------------ */}
                <div className="w-full h-auto px-5 mb-10 flex flex-col justify-center items-center xl:w-[50%] lg:w-[49%]  2xl:w-[50%]">
                  {/* ------------------ DIV COM TABELA DO 0-25mm ------------------ */}
                  <div class="relative shadow-md w-full rounded-xl border-2 z-10 mb-5">
                    {/* ------------------ TABELA DO 0-25mm ------------------ */}
                    <table class="w-full text-sm text-center z-0">
                      {/* ------------------ INFORMAÇÕES DA ESQUEDA ------------------ */}
                      <thead>
                        <tr class="bg-white  hover:bg-gray-50 ">
                          <th rowspan="6" class="px-6 py-3 rounded-l-xl">
                            0-25mm
                          </th>
                        </tr>
                      </thead>

                      {/* ------------------ (CONTEÚDO) INFORMAÇÕES DO CENTRO E DIREITA ------------------ */}
                      <tbody>
                        <tr class="bg-white border-b hover:bg-gray-50 border-l ">
                          <th class="px-6 py-3 border-l rounded-r-xl text-left">
                            Identificação
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            SUI-048
                          </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50 ">
                          <th class="px-6 py-3 border-l rounded-r-xl text-left">
                            Certificado
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            722/22
                          </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50 ">
                          <th class="px-6 py-3  border-l rounded-r-xl text-left ">
                            Validade
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            Fev/24
                          </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50 ">
                          <th class="px-6 py-3 border-l rounded-r-xl text-left">
                            Incerteza
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            0,08 + L/1500
                          </td>
                        </tr>
                        <tr class="bg-white  hover:bg-gray-50 ">
                          <th class="px-6 py-3 border-l rounded-b-xl text-left">
                            Rastreabilidade
                          </th>
                          <td class="px-6 py-3 rounded-r-xl rounded-b-xl text-right">
                            CAL-1058
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* ------------------ DIV COM A TABELA DO 25-50mm ------------------ */}
                  <div class="relative shadow-md rounded-xl border-2 w-full">
                    {/* ------------------ TABELA DO 25-50mm ------------------ */}
                    <table class="w-full text-sm text-center ">
                      <thead>
                        <tr class="bg-white  hover:bg-gray-50 ">
                          <th rowSpan="6" class="px-6 py-3 rounded-l-xl">
                            25-50mm
                          </th>
                        </tr>
                      </thead>

                      {/* ------------------ (CONTEÚDO) INFORMAÇÕES DO CENTRO E DIREITA ------------------ */}
                      <tbody>
                        <tr class="bg-white border-b hover:bg-gray-50 border-l ">
                          <th class="px-6 py-3 border-l rounded-r-xl text-left">
                            Identificação
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            SUI-048
                          </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50 ">
                          <th class="px-6 py-3 border-l rounded-r-xl text-left">
                            Certificado
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            722/22
                          </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50 ">
                          <th class="px-6 py-3  border-l rounded-r-xl text-left ">
                            Validade
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            Fev/24
                          </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-gray-50 ">
                          <th class="px-6 py-3 border-l rounded-r-xl text-left">
                            Incerteza
                          </th>
                          <td class="px-6 py-3 rounded-r-xl text-right">
                            0,08 + L/1500
                          </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 ">
                          <th class="px-6 py-3 border-l rounded-b-xl text-left">
                            Rastreabilidade
                          </th>
                          <td class="px-6 py-3 rounded-r-xl rounded-b-xl text-right">
                            CAL-1058
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ------------------ DIV COM 1 TABELA (DIREITA) ------------------ */}
                <div className="w-full h-auto px-5 mb-10 xl:w-[50%] lg:w-[49%]  2xl:w-[50%]">
                  <div class="relative shadow-md rounded-xl border-2 z-10  ">
                    {/* ------------------ TABELA DE ERRO DE MONTAGEM  ------------------ */}
                    <table class=" text-sm text-center w-full table-fixed">
                      <thead className="">
                        <tr class="border-b bg-white rounded-r-xl rounded-b-xl ">
                          <th
                            colSpan="3"
                            class="px-6 py-3 rounded-l-xl rounded-r-xl rounded-b-xl"
                          >
                            Erro devido a montagem de blocos (mm)
                          </th>
                        </tr>
                        <tr class="border-b uppercase bg-zinc-200">
                          <th class="px-6 py-3 text-left">faixa</th>
                          <th class="px-6 py-3  text-center">montagem</th>
                          <th class="px-6 py-3  text-right">erro</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr class="border-b hover:bg-gray-50">
                          <td class="px-6 py-4 text-left">25 - 50</td>
                          <td class="px-6 py-4 text-center">25 + 22,8</td>
                          <td class="px-6 py-4 text-right">$2999</td>
                        </tr>
                        <tr class="border-b hover:bg-gray-50">
                          <td class="px-6 py-4 text-left">50 - 75</td>
                          <td class="px-6 py-4 text-center">50 + 22,8</td>
                          <td class="px-6 py-4 text-right">$2999</td>
                        </tr>
                        <tr class="border-b hover:bg-gray-50">
                          <td class="px-6 py-4 text-left">75 - 100</td>
                          <td class="px-6 py-4 text-center">75 + 22,8</td>
                          <td class="px-6 py-4 text-right">$2999</td>
                        </tr>
                        <tr class="border-b hover:bg-gray-50">
                          <td class="px-6 py-4 text-left">100 - 125</td>
                          <td class="px-6 py-4 text-center">100 + 25</td>
                          <td class="px-6 py-4 text-right">$2999</td>
                        </tr>
                        <tr class="border-b hover:bg-gray-50">
                          <td class="px-6 py-4 text-left">125 - 150</td>
                          <td class="px-6 py-4 text-center">100 + 25 + 22,8</td>
                          <td class="px-6 py-4 text-right">$2999</td>
                        </tr>
                        <tr class="border-b hover:bg-gray-50">
                          <td class="px-6 py-4 text-left">150 - 175</td>
                          <td class="px-6 py-4 text-center">100 + 50 + 22,8</td>
                          <td class="px-6 py-4 text-right">$2999</td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                          <td class="px-6 py-4 text-left  rounded-r-xl rounded-b-xl">
                            175 - 200
                          </td>
                          <td class="px-6 py-4 text-center  rounded-r-xl rounded-b-xl">
                            100 + 75 + 22,8
                          </td>
                          <td class="px-6 py-4 text-right  rounded-r-xl rounded-b-xl">
                            $2999
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <p className="px-10 font-semibold text-xl mt-10 mb-2">
                Termômetro
              </p>

              <div className="px-10 w-full mb-10">
                <div class="relative shadow-md rounded-xl border-2 z-10 mb-5 w-full">
                  <table class="w-full text-sm z-0">
                    <tr class=" border-b hover:bg-gray-50 rounded-r-xl ">
                      <th class="px-6 py-3 text-left rounded-r-xl">
                        Identificação
                      </th>
                      <td class="px-6 py-3 rounded-r-xl text-right">
                        1017709 / SUI-119
                      </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50 ">
                      <th class="px-6 py-3   text-left">Correção</th>
                      <td class="px-6 py-3  text-right">0,5 °C</td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50 ">
                      <th class="px-6 py-3   text-left ">Rastreabilidade</th>
                      <td class="px-6 py-3  text-right">Cal-0127</td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50 ">
                      <th class="px-6 py-3  text-left">Certificado</th>
                      <td class="px-6 py-3 text-right">LV01750-39766-22-R0 </td>
                    </tr>
                    <tr class="bg-white  hover:bg-gray-50 ">
                      <th class="px-6 py-3  rounded-b-xl text-left">
                        Validade
                      </th>
                      <td class="px-6 py-3 rounded-r-xl rounded-b-xl text-right">
                        Novembro de 2024{" "}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row lg:flex-row 2xl:flex-row w-full px-10 mb-10  justify-center items-center gap-5">
                <div className="w-full lg:w-2/4 xl:w-2/4 2xl:w-2/4 ">
                  <p className="font-semibold text-xl mt-10 mb-2">
                    Plano/Paralelo óptico (12mm)
                  </p>
                  <div class="relative shadow-md w-full rounded-xl border-2 z-10 w-full">
                    <table class="w-full text-sm z-0">
                      <tr class=" border-b hover:bg-gray-50 rounded-r-xl ">
                        <th class="px-6 py-3 text-left rounded-r-xl">
                          Identificação
                        </th>
                        <td class="px-6 py-3 rounded-r-xl text-right">
                          SUI-087{" "}
                        </td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3   text-left">Certificado</th>
                        <td class="px-6 py-3  text-right">04614/22</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3   text-left ">Validade</th>
                        <td class="px-6 py-3  text-right">Nov/24</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">Rastreabilidade</th>
                        <td class="px-6 py-3 text-right">CAL-0031</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">
                          Incerteza de Planeta
                        </th>
                        <td class="px-6 py-3 text-right">0,00007 mm</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">Erro de Planeta</th>
                        <td class="px-6 py-3 text-right">0,00012 mm</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">
                          Incerteza de Paralelismo
                        </th>
                        <td class="px-6 py-3 text-right">0,00005 mm</td>
                      </tr>
                      <tr class="bg-white  hover:bg-gray-50 ">
                        <th class="px-6 py-3  rounded-b-xl text-left">
                          Erro de Paralelismo
                        </th>
                        <td class="px-6 py-3 rounded-r-xl rounded-b-xl text-right">
                          0,00036 mm
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div className="w-full lg:w-2/4 xl:w-2/4 2xl:w-2/4 ">
                  <p className="font-semibold text-xl mt-10 mb-2">
                    Plano/Paralelo óptico (25mm)
                  </p>
                  <div class="relative shadow-md w-full rounded-xl border-2 z-10 w-full">
                    <table class="w-full text-sm z-0">
                      <tr class=" border-b hover:bg-gray-50 rounded-r-xl ">
                        <th class="px-6 py-3 text-left rounded-r-xl">
                          Identificação
                        </th>
                        <td class="px-6 py-3 rounded-r-xl text-right">
                          SUI-003
                        </td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3   text-left">Certificado</th>
                        <td class="px-6 py-3  text-right">04637/22</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3   text-left ">Validade</th>
                        <td class="px-6 py-3  text-right">Nov/24</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">Rastreabilidade</th>
                        <td class="px-6 py-3 text-right">CAL-0031</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">
                          Incerteza de Planeta
                        </th>
                        <td class="px-6 py-3 text-right">0,00007 mm</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">Erro de Planeta</th>
                        <td class="px-6 py-3 text-right">0,00013 mm</td>
                      </tr>
                      <tr class="bg-white border-b hover:bg-gray-50 ">
                        <th class="px-6 py-3  text-left">
                          Incerteza de Paralelismo
                        </th>
                        <td class="px-6 py-3 text-right">0,00015 mm</td>
                      </tr>
                      <tr class="bg-white  hover:bg-gray-50 ">
                        <th class="px-6 py-3  rounded-b-xl text-left">
                          Erro de Paralelismo
                        </th>
                        <td class="px-6 py-3 rounded-r-xl rounded-b-xl text-right">
                          0,00019 mm
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <h4 className="text-black font-extrabold uppercase text-base w-full py-3 px-4 bg-[#DBDBDB] mt-10">
                Incerteza da Medição
              </h4>
              <div className="w-full h-auto px-5 py-10 flex flex-col justify-center items-center overflow-x-auto">
                <div class=" shadow-md rounded-xl border-2 w-full ">
                  {/* ------------------ TABELA DE ERRO DE MONTAGEM  ------------------ */}
                  <table class="w-full text-sm text-center z-0 table-fixed text-[8px] lg:text-sm md:text-[8px]">
                    <thead className=" sm:text-[10px]">
                      <tr class="border-b bg-zinc-200 rounded-r-xl rounded-b-xl  uppercase">
                        <th class="px-2 py-3 rounded-tl-xl text-left">
                          Grandeza
                        </th>
                        <th class="px-2 py-3 text-center">Estimativa</th>
                        <th class="px-2 py-3 text-center">INCERTEZA PADRÃO</th>
                        <th class="px-2 py-3 text-center" colSpan={2}>
                          DISTRIBUIÇAO DE PROBABILIDADE
                        </th>
                        <th class="px-2 py-3 text-center">
                          COEFICIENTE DE SENSIBILIDADE
                        </th>
                        <th class="px-2 py-3 text-center">
                          CONTRIBUIÇÃO PARA A INCERTEZA
                        </th>
                        <th class="px-2 py-3 text-right rounded-tr-xl ">
                          GRAUS DE LIBERDADE
                        </th>
                      </tr>
                      <tr class="border-b bg-zinc-100 text-zinc-500">
                        <td class="px-6 py-3 text-left w-10">Xi</td>
                        <td class="px-6 py-3  text-center"></td>
                        <td class="px-6 py-3  text-center"></td>
                        <td class="px-6 py-3  text-center">Tipo</td>
                        <td class="px-6 py-3  text-center">Divisor</td>
                        <td class="px-6 py-3  text-center">Ci</td>
                        <td class="px-6 py-3  text-center">Ui(y) mm</td>
                        <td class="px-6 py-3  text-right">Vi ouVeff</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="border-b hover:bg-gray-50">
                        <td class="px-6 py-4 text-left">25 - 50</td>
                        <td class="px-6 py-4 text-center">25 + 22,8</td>
                        <td class="px-6 py-4 text-center">$2999</td>
                        <td class="px-6 py-4 text-center">$2999</td>
                        <td class="px-6 py-4 text-center">$2999</td>
                        <td class="px-6 py-4 text-center">$2999</td>
                        <td class="px-6 py-4 text-center">$2999</td>
                        <td class="px-6 py-4 text-center">$2999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
  );
}
