import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { EscolherData } from "@/components/ui/date-picker";
import { ptBR } from 'date-fns/locale';



export default function ResulMicrometro() {
  const [linhas, setLinhas] = useState([
    {
      id: 1,
      valores: ["", "", "", "", "", "", "", ""], // Array de strings vazias representando os valores da linha
    },
  ]);

  // Define um estado 'inputs' que inicialmente contém um array com duas strings vazias.
  const [inputs, setInputs] = useState(["", ""]);

  // Função para adicionar um novo elemento vazio ao array 'inputs'
  const adicionarMetrologistas = () => {
    // Clona o array 'inputs' existente e adiciona uma nova string vazia ao final
    setInputs([...inputs, ""]);
  };

  // Função para adicionar uma nova linha ao array 'linhas'
  const adicionarLinha = () => {
    // Cria uma nova linha com um 'id' incrementado em relação ao número de linhas existentes e valores iniciais vazios.
    const novaLinha = {
      id: linhas.length + 1, // Incrementa o 'id' para manter a unicidade
      valores: ["", "", "", "", "", "", "", ""], // Array de strings vazias representando os valores da linha
    };
    // Clona o array 'linhas' existente e adiciona a nova linha ao final
    setLinhas([...linhas, novaLinha]);
  };

  return (
    <div>
      <form class="flex flex-col w-full items-center">
        <div className="flex flex-col justify-between w-[90%] border rounded-lg bg-[#FCFCFC]">
          {/* METROLOGISTAS */}
          <div className="full p-6">
            <h1 className="text-black font-bold text-3xl">
              Resultado De Medição De Micrômetros
            </h1>
          </div>

          {/* INFOS */}
          <div className="overflow-x-auto w-full py-3 px-4">
            <div className="w-full py-3">
              {/* SEÇÃO INFORMAÇÕES MICROMETRO */}
              <div className="flex w-full py-6 gap-7 px-4">
                <div className="grid grid-cols-4 w-full gap-3">
                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[10%]">Interessado</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[10%]">Endereço</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[23%]">Contratante</Label>
                    <Input placeholder="Digite aqui " />
                    <Label className="w-[23%]">Nº da OS </Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[23%]">Obj. Medido</Label>
                    <Input placeholder="Digite aqui " />
                    <Label className="w-[23%]">Nº do Certif.</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[23%]">Fabricante</Label>
                    <Input placeholder="Digite aqui " />
                    <Label className="w-[23%]">Código</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[23%]">Ident. Cliente</Label>
                    <Input placeholder="Digite aqui " />
                    <Label className="w-[23%]">Faixa Nominal</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[23%]">Resolução</Label>
                    <Input placeholder="Digite aqui " />
                    <Label className="w-[23%]">Faixa Calibrada</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[10%]">Data de Recebimento</Label>
                    <Input placeholder="Digite aqui " />
                  </div>

                  <div className="flex flex-row items-center col-span-4 gap-2">
                    <Label className="w-[23%]">
                      Inspeção do instrumento (OK / NOK)
                    </Label>
                    <Input placeholder="Digite aqui " />
                    <Label className="w-[23%]">Faixa Calibrada</Label>
                    <Input placeholder="Digite aqui " />
                  </div>
                </div>
              </div>

              <div className="py-4">
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB]">
                  PLANEZA
                </h4>
              </div>



              {/* TABELA DE PLANEZA */}
              <div className="min-w-full rounded-md p-2">
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead colSpan={5} className="text-center border">CONTAGEM DE FRANJA</TableHead>
                      <TableHead rowSpan={2} className="text-center border">Desvio Padrão (mm)</TableHead>
                      <TableHead rowSpan={2} className="text-center border">Planeza média (mm)</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead className="border"></TableHead>
                      <TableHead className="border">Res. 1</TableHead>
                      <TableHead className="border">Res. 2</TableHead>
                      <TableHead className="border">Res. 3</TableHead>
                      <TableHead className="border">Média</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-white">
                      <TableCell className="border min-w-24">C. Móvel</TableCell>
                      <TableCell className="border p-0"><input className="p-5" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className=" p-5" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className=" p-5" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className=" p-5" type="number" /></TableCell>
                      <TableCell className="border">#DIV/0!</TableCell>
                      <TableCell className="border text-center" rowSpan={2}>0,0000</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-white">
                      <TableCell className="border min-w-24">C. Fixo</TableCell>
                      <TableCell className="border p-0"><input className="p-5" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5" type="number" /></TableCell>
                      <TableCell className="border">#DIV/0!</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              {/* FIM TABELA PLANEZA */}

              <div className="py-4">
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB]">
                  PARALELISMO
                </h4>
              </div>

              {/* TABELA PARALELISMO */}
              <div className="min-w-full rounded-md p-2">
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead colSpan={1} rowSpan={2} className="text-center border">Valor Nominal do Paralelo</TableHead>
                      <TableHead colSpan={4} rowSpan={1} className="text-center border">CONTAGEM DE FRANJAS</TableHead>
                      <TableHead colSpan={6} rowSpan={1} className="text-center border">Máximo Paralelismo</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead colSpan={3} className="text-center border">Contato Móvel+Contato Fixo</TableHead>
                      <TableHead rowSpan={1} className="text-center border">Resultado</TableHead>
                      <TableHead colSpan={1} className="text-center border">Nº de Franjas</TableHead>
                      <TableHead rowSpan={1} className="text-center border">Valor em mm</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="hover:bg-white">
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0 min-w-full bg-gray-300"></TableCell>
                      <TableCell className="border p-0 min-w-full bg-gray-300"></TableCell>
                      <TableCell className="text-center border p-0 min-w-full">0</TableCell>
                      <TableCell className="text-center border p-0 min-w-full">0</TableCell>
                      <TableCell className="text-center border p-0 min-w-full">0,0000</TableCell>
                    </TableRow>

                    <TableRow className="hover:bg-white">
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0 min-w-full bg-gray-300"></TableCell>
                      <TableCell className="border p-0 min-w-full bg-gray-300"></TableCell>
                      <TableCell className="text-center border p-0 min-w-full">0</TableCell>
                      <TableCell colSpan={2} className="border p-0 min-w-full bg-gray-300"></TableCell>
                    </TableRow>

                    <TableRow className="hover:bg-white">
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0 min-w-full bg-gray-300"></TableCell>
                      <TableCell className="border p-0 min-w-full bg-gray-300"></TableCell>
                      <TableCell className="text-center border p-0 min-w-full">0</TableCell>
                      <TableCell colSpan={2} className="border p-0 min-w-full bg-gray-300"></TableCell>
                    </TableRow>

                    <TableRow className="hover:bg-white">
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border p-0 min-w-full">0</TableCell>
                      <TableCell colSpan={2} className="border p-0 min-w-full bg-gray-300"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              {/* FIM TABELA PARALELISMO */}

              <div className="py-4">
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB]">
                  CONTROLE DIMENSIONAL  (Valores da tabela em mm)
                </h4>
              </div>

              {/* INICIO TABELA CONTROLE DIMENSIONAL */}
              <div className="min-w-full rounded-lg p-2">
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead rowSpan={2} className="text-center border">Valor do Padrão</TableHead>
                      <TableHead colSpan={3} className="text-center border">Indicação do Instrumento</TableHead>
                      <TableHead rowSpan={2} className="text-center border">Média</TableHead>
                      <TableHead rowSpan={2} className="text-center border">Tendência</TableHead>
                      <TableHead rowSpan={2} className="text-center border">Desvio Padrão</TableHead>
                      <TableHead rowSpan={2} className="text-center border">Desvio Padrão Médio</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead className="border">1</TableHead>
                      <TableHead className="border">2</TableHead>
                      <TableHead className="border">3</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell className="text-center">0,000</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell rowSpan={11} className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">2,500</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">5,100</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">7,700</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">10,300</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">12,900</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">15,000</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">17,600</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">20,200</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">22,800</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-center">25,000</TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="border p-0"><input className="p-5 w-full" type="number" /></TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                      <TableCell className="text-center border">#DIV/0!</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              {/* FIM TABELA CONTROLE DIMENSIONAL */}

              <div>
                <div className="flex w-full py-6 gap-7 px-4">
                  <div className="grid grid-cols-4 w-full gap-3">
                    <Label className="w-23">Método de medição: IT-SUI-515 </Label>
                    <div className="flex flex-row items-center col-span-4 gap-2">
                      <Label className="w-[23%]">Versão</Label>
                      <Input placeholder="Digite aqui " />
                      <Label className="w-[23%]">Termômetro</Label>
                      <Input placeholder="SUI-119" />
                      <Label className="w-[23%]">Correção </Label>
                      <Input placeholder="0.5°C " />
                    </div>

                    <div className="flex flex-row items-center col-span-4 gap-2">
                      <Label className="w-[30%]">Temperatura inicial</Label>
                      <Input placeholder="Digite aqui " />
                      <Label className="w-[30%]">Temperatura final</Label>
                      <Input placeholder="Digite aqui " />
                    </div>

                    <div className="flex flex-row items-center col-span-2 gap-2">
                      <Label className="w-[30%]">Temperatura final</Label>
                      <Input placeholder="Digite aqui " />
                    </div>
                  </div>
                </div>

                <div className="flex w-[30%] py-6 gap-7 px-4">
                  <div className="w-full gap-3">
                    <Label>Responsável por Assinar o Certificado:</Label>
                    <Input placeholder="Digite aqui"></Input>
                  </div>
                </div>

                <div className="flex items-center w-full py-2 gap-7 px-4">
                  <div className="w-full gap-3 items-center">
                    <Label>Técnico</Label>
                    <Input placeholder="Digite aqui" />
                  </div>
                  <Label>Assinatura</Label>
                  <div className="border-solid border-b-2 border-gray-300 w-full h-5"></div>
                  <Label className="w-[50%]">Data da Calibração</Label>
                  <EscolherData locale={ptBR} />
                </div>

                <div className="flex items-center w-full py-2 gap-7 px-4">
                  <div className="w-full gap-3 items-center">
                    <Label>Verificação/Supervisão</Label>
                    <Input placeholder="Digite aqui" />
                  </div>
                  <Label>Assinatura</Label>
                  <div className="border-solid border-b-2 border-gray-300 w-full h-5"></div>
                  <Label className="w-[50%]">Data da Calibração</Label>
                  <EscolherData locale={ptBR} />
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* BOTÕES DO FORMULÁRIO */}
        <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
          <Button className="w-[200px]">Adicionar</Button>
          <Button variant="outline">
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
