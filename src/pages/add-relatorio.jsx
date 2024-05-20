// AddRelatorio.js
import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddRelatorio() {
  // // Define um estado 'linhas' que inicialmente contém uma matriz com um objeto representando uma linha vazia.
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
    <div className="flex">
      <Menu />

      {/* RELTÓRIO */}
      <div className="flex flex-col bg-backgroundcinza pt-20 ml-80 pl-10 items-center  w-screen gap-5 ">
        {/* TITULO E NÚMERO DO RELATÓRIO */}
        <div className="flex flex-row justify-between w-[90%]">
          <h1 className="text-black font-bold text-3xl">
            Relatório de Exercício de Medição
          </h1>
          <span className="text-primary font-bold text-xl">n° rem...</span>
        </div>

        {/* COMEÇO DO FORMULÁRIO */}
        <form class="flex flex-col w-full items-center">
          <div className="flex flex-col justify-between w-[90%] border rounded-lg bg-[#FCFCFC]">
            {/* METROLOGISTAS */}
            <div className="full p-6">
              <h4 className="text-[#3F3F3F] font-bold text-sm pb-2">
                METROLOGISTAS
              </h4>
              <div className="flex flex-wrap w-full justify-between gap-3">
                {/* .map QUE ADICIONA A QUANTIDADE QUE O USUÁRIO QUEISER DE METROLOGISTAS */}
                {inputs.map((input, index) => (
                  <Input
                    key={index}
                    type="text"
                    placeholder="Digite o nome..."
                    className="w-[49%]"
                    value={input}
                  />
                ))}
              </div>
              <div className="w-full flex flex-row justify-end items-center py-5 gap-3">
                <Button onClick={adicionarMetrologistas}>
                  Adicionar Metrologistas
                </Button>
              </div>
            </div>

            {/* CONDIÇÕES AMBIENTAIS */}
            <div>
              {/* TITULO */}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                condições ambientais
              </h4>
              {/* COLUNA DE INPUT */}
              <div className="flex flex-row w-full justify-between py-6 gap-7 px-4">
                <div className="flex flex-row gap-3 w-[45%] items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm w-[45%] ">
                    Temperatura (C°)
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>

                <div className="flex flex-row gap-3 w-[55%] items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm w-[65%] ">
                    Umidade Relativa do Ar (%){" "}
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>
              </div>
            </div>

            {/* INSTURMENTO DE MEDIÇÃO */}
            <div>
              {/* TITULO */}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                instumento de medição
              </h4>
              <div className="flex flex-row w-full justify-between py-6 gap-7 px-4">
                {/* COLUNA DE INPUT */}
                <div className="flex flex-col gap-3 w-[60%]">
                  <div className="flex flex-row gap-3 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                      Denominação (C°)
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3  items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                      Fabricante (C°)
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                      Faixa nominal (C°)
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                {/* COLUNA DE INPUT */}
                <div className="flex flex-col gap-3 w-[40%]">
                  <div className="flex flex-row gap-3 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                      Nº de Série
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                      Código (NI)
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                      Resolução
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
              </div>
            </div>

            {/* CERTIFICADO DE CALIBRAÇÃO DO INSTRUMENTO  */}
            <div>
              {/* TITULO */}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                certificado de calibração do instrumento
              </h4>
              {/* COLUNA DE INPUT */}
              <div className="flex flex-row w-full justify-between py-6 gap-7 px-4">
                <div className="flex flex-row gap-3 w-[50%] items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm ">
                    Orgão
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>

                <div className="flex flex-row gap-3 w-[25%] items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm  ">
                    Número
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>

                <div className="flex flex-row gap-3 w-[25%] items-center">
                  <Label className="font-bold text-[#3F3F3F] text-sm  ">
                    Data
                  </Label>
                  <Input type="text" placeholder="Digite o nome..." />
                </div>
              </div>
            </div>

            {/* OBJETO DE MEDIÇÃO */}
            <div>
              {/* TITULO */}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                objeto de medição
              </h4>
              <div className="flex flex-col w-full justify-between py-6 px-4">
                {/* COLUNA DE INPUT */}
                <div className="flex flex-row w-full justify-between py-3 gap-7 px-4">
                  <div className="flex flex-row gap-3 w-[50%] items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm ">
                      Denominação
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row gap-3 w-[25%] items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm  ">
                      QTD
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row gap-3 w-[25%] items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm  ">
                      Código
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                {/* COLUNA DE INPUT */}
                <div className="flex flex-row w-full justify-between py-3 gap-7 px-4">
                  <div className="flex flex-row gap-3 w-[75%] items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm ">
                      Material
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row gap-3 w-[30%] items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm  ">
                      Desenho
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>
                <div className="flex flex-col w-full py-3 px-4">
                  <Label className="text-[#3F3F3F] font-extrabold text-base w-full py-1 px-4 bg-[#DBDBDB] rounded-t-lg">
                    Notas (Peça):
                  </Label>
                  <Input
                    type="text"
                    placeholder="Digite o nome..."
                    className="rounded-b-lg rounded-t-none h-[130px]"
                  />
                </div>
              </div>
            </div>

            {/* MENSURADOS */}
            <div>
              {/* TITULO */}
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                mensurandos(m)
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

                {/* COLUNA DE INPUTS */}
                <div className="flex flex-row w-full justify-between py-3 gap-7 px-4">
                  <div className="flex flex-row gap-3 w-[30%] items-center">
                    <Label className="font-bold text-[#828282] text-base w-[70%]">
                      Início:
                    </Label>
                    <Input
                      type="number"
                      placeholder="h"
                      max="24"
                      min="0"
                      className="placeholder:text-[#828282] font-bold"
                    />
                    <Input
                      type="number"
                      placeholder="min"
                      max="60"
                      min="0"
                      className="placeholder:text-[#828282] font-bold"
                    />
                  </div>

                  {/* COLUNA DE INPUTS */}
                  <div className="flex flex-row gap-3 w-[30%] items-center">
                    <Label className="font-bold text-[#828282] text-base w-[70%]">
                      Termino:
                    </Label>
                    <Input
                      type="number"
                      placeholder="h"
                      max="24"
                      min="0"
                      className="placeholder:text-[#828282] font-bold"
                    />
                    <Input
                      type="number"
                      placeholder="min"
                      max="60"
                      min="0"
                      className="placeholder:text-[#828282] font-bold"
                    />
                  </div>
                  {/* COLUNA DE INPUTS */}
                  <div className="flex flex-row gap-3 w-[30%] items-center">
                    <Label className="font-bold text-[#828282] text-base w-[500px]">
                      Tempo Total:
                    </Label>
                    <Input
                      type="number"
                      placeholder="h"
                      max="24"
                      min="0"
                      className="placeholder:text-[#828282] font-bold"
                    />
                    <Input
                      type="number"
                      placeholder="min"
                      max="60"
                      min="0"
                      className="placeholder:text-[#828282] font-bold"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full justify-between py-6 px-4">
                  {/* COLUNA DE INPUT */}
                  <div className="flex flex-row w-full justify-between py-3 gap-7 ">
                    <div className="flex flex-row gap-3 w-3/4 items-center">
                      <Label className="font-bold text-[#3F3F3F] text-base w-[15%]">
                        Local
                      </Label>
                      <Input type="text" placeholder="Digite o nome..." />
                    </div>

                    <div className="flex flex-row gap-3 w-1/4 items-center">
                      <Label className="font-bold text-[#3F3F3F] text-base  ">
                        Data
                      </Label>
                      <Input type="text" placeholder="Digite o nome..." />
                    </div>
                  </div>
                  {/* COLUNA DE INPUT */}
                  <div className="flex flex-row w-full justify-between py-3 gap-7">
                    <div className="flex flex-row gap-3 w-full items-center">
                      <Label className="font-bold text-[#3F3F3F] text-base w-[10%]">
                        Assinatura
                      </Label>
                      <Input type="text" placeholder="Digite o nome..." />
                    </div>
                  </div>
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
        {/* FIM DO FORMULÁRIO */}
      </div>
    </div>
  );
}
