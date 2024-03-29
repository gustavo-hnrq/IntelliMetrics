// AddRelatorio.js
import Menu from "@/components/layout/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddRelatorio() {
  return (
    <div className="flex">
      <Menu />

      {/* RELTÓRIO */}
      <div className="flex flex-col bg-[#E5F1FF] pt-20 items-center  w-screen gap-5 ">
        {/* TITULO E NÚMERO DO RELATÓRIO */}
        <div className="flex flex-row justify-between w-[90%]">
          <h1 className="text-black font-bold text-3xl">
            Relatório de Exercício de Medição
          </h1>
          <span className="text-primary font-bold text-xl">n° rem...</span>
        </div>

        {/* COMEÇO DO FORMULÁRIO */}
        <form class="flex flex-col w-full items-center">
          <div className="flex flex-col justify-between w-[90%] border border-primary rounded-lg bg-[#FCFCFC]">
            {/* METROLOGISTAS */}
            <div className="full p-6">
              <h4 className="text-[#3F3F3F] font-bold text-sm pb-2">
                METROLOGISTAS
              </h4>
              <div className="flex flex-row w-full justify-between">
                {/* COLUNA DE INPUT */}
                <div className="flex flex-col gap-3 w-[49%]">
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                </div>
                {/* COLUNA DE INPUT */}
                <div className="flex flex-col gap-3 w-[49%]">
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                  <Input type="text" placeholder="Digite o nome..." />
                </div>
              </div>
            </div>

            {/* CONDIÇÕES AMBIENTAIS */}
            <div>
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

            <div>
              <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                mensurados(m)
              </h4>

              {/* tabela */}
            </div>

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

              {/* inputs com inici, termini e tempo total */}

              <div className="flex flex-col w-full justify-between py-6 px-4">
                {/* COLUNA DE INPUT */}
                <div className="flex flex-row w-full justify-between py-3 gap-7 px-4">
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
                <div className="flex flex-row w-full justify-between py-3 gap-7 px-4">
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
