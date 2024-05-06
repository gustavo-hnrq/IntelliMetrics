
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

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
              <h4 className="text-[#3F3F3F] font-bold text-sm pb-2">
                METROLOGISTAS
              </h4>
            </div>


            {/* OBJETO DE MEDIÇÃO */}
        
            {/* MENSURADOS */}
            <div>
              {/* TITULO */}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                mensurados(m)
              </h4>

              {/* tabela */}
              <div className="overflow-x-auto w-full py-3 px-4">
                <table className="min-w-full border-collapse border border-black rounded-lg">
                  {/* TITULO DA TABELA */}
                  <thead className="bg-[#DBDBDB]">
                    <tr>
                      <th
                        scope="col"
                        className="py-4 tracking-wider border-collapse border border-black"
                      >
                        M
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        Dimensão Nominal
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        1° Valor
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        2° Valor
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        3° Valor
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        4° Valor
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        Média
                      </th>
                      <th
                        scope="col"
                        className="py-4 border-collapse border border-black"
                      >
                        Amplitude
                      </th>
                    </tr>
                  </thead>
                  {/* CORPO DA TABELA */}
                  <tbody className="bg-white border-collapse border border-black">
                    {linhas.map((linha, index) => (
                      <tr key={linha.id}>
                        {linha.valores.map((valor, colIndex) => (
                          <td
                            key={colIndex}
                            className="whitespace-nowrap p-0 border-collapse border border-black"
                          >
                            <Input
                              type="text"
                              value={valor}
                              onChange={(e) => (e, index, colIndex)}
                              className="border-x-2 border-y-none m-0 rounded-none"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* BOTÃO ONDE ELE ADICIONA QUANTAS LINHAS FOR NECESSÁRIAS */}
                <div className="w-full flex flex-row justify-end items-center py-5 gap-3">
                  <Button onClick={adicionarLinha}>Adicionar Linha</Button>
                </div>
              </div>
              {/* INUPUTS */}
              <div>
                <div className="flex flex-col w-full py-3 px-4">
                  <Label className="text-[#3F3F3F] font-extrabold text-base w-full py-1 px-4 bg-[#DBDBDB] rounded-t-lg">
                    Notas (Peça):
                  </Label>
                  <Input
                    type="text"
                    placeholder="Digite o nome..."
                    className="rounded-b-lg rounded-t-none h-[200px]"
                  />
                </div>
              </div>
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
