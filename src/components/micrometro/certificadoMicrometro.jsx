import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import selo from "../../assets/selo certificado.png";

export default function CertPaquimetro() {

    return (
      
            <form class="flex flex-col w-full items-center">
              <div className="flex flex-col justify-between w-[90%] border border-primary rounded-lg bg-[#FCFCFC]">

                <div className="flex flex-row justify-between full p-6">
                  <div className="static mr-5">
                    <p className="text-black text-center font-bold text-3xl">CERTIFICADO DE CALIBRAÇÃO</p>
                    <h1 className="text-black text-center font-bold text-lg">LABORATÓRIO DE CALIBRAÇÃO SUICLAB</h1>
                    <h1 className="text-black text-center font-bold text-lg">Rede Brasileira de Calibração </h1>
                    <h1 className="text-black text-center font-bold text-lg">Laboratório de Calibração Acreditado pela Cgcre de acordo com a ABNT NBR ISO/IEC 17025, sob o número CAL 158</h1>
                  </div>
                  <img className="float-right" src={selo}/>
                </div>


                <div className="full p-6">
                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F] pt-6 text-sm w-[15%] ">
                      Interessado
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F]  py-6 text-sm w-[15%] ">
                      Endereço
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[15%] ">
                      Contratante
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
                </div>



                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                  1- OBJETO CALIBRADO:
                </h4>
                <div className="p-6">
                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[15%] ">
                      Obj. Medido
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row w-full justify-between py-6 gap-7 ">
                    {/* COLUNA DE INPUT */}
                    <div className="flex flex-col gap-3 w-[50%]">
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                          Faixa Nominal
                        </Label>
                        <Input type="text" placeholder="Digite o nome..." />
                      </div>
                      <div className="flex flex-row gap-3  items-center">
                        <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                          Fabricante
                        </Label>
                        <Input type="text" placeholder="Digite o nome..." />
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                          Ident. Cliente
                        </Label>
                        <Input type="text" placeholder="Digite o nome..." />
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                          Data de Recebimento
                        </Label>
                        <Input type="text" placeholder="Digite o nome..." />
                      </div>
                    </div>
                    {/* COLUNA DE INPUT */}
                    <div className="flex flex-col gap-3 w-[50%]">
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                          Divisão
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
                          N° da OS
                        </Label>
                        <Input type="text" placeholder="Digite o nome..." />
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Label className="font-bold text-[#3F3F3F] text-sm w-[35%] ">
                          Data de Calibração
                        </Label>
                        <Input type="text" placeholder="Digite o nome..." />
                      </div>
                    </div>
                  </div>
                </div>


                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                  2- PADRÕES UTILIZADOS NA CALIBRAÇÃO:
                </h4>  
                <div className="p-6">
                <h3 className="text-black font-bold text-md">Blocos-padrão</h3>
                <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F] pt-6 text-sm w-[15%] ">
                      Referência:
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F]  py-6 text-sm w-[15%] ">
                      N° do Certficado:
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F] text-sm w-[15%] ">
                      Validade:
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <Label className="font-bold text-[#3F3F3F] py-6 text-sm w-[15%] ">
                      Rastreabilidade:
                    </Label>
                    <Input type="text" placeholder="Digite o nome..." />
                  </div>
    
                </div>

                {/* TITULO */}
                <div className="flex flex-row text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                  <h1 className="mr-20">3- MÉTODO DE CALIBRAÇÃO</h1> <h1 className="mr-20">IT-SUI-503</h1> <h1>Versão 11</h1>                                                                 
                </div> 
                <div className="p-6">
                  <h3 className="text-black font-bold text-md">Os valores encontrados, foram determinados por comparação contra padrões rastreados ao padrão nacional.</h3>
                  <div className=" flex flex-row">
                    <h3 className="text-black mr-20 font-bold text-md">Condições ambientais durante as medições: </h3><h3>Temperatura: (20+-2)°C</h3>
                  </div>
                </div>

                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                  4- RESULTADOS OBTIDOS:
                </h4>  
                <div className="p-6">
                  <h3 className="text-black font-bold text-md">Os valores apresentados nas tabelas estão em mm</h3>
                </div>

                {/* TITULO */}
                <h4 className="text-black font-extrabold text-base w-full py-3 px-4 bg-[#DBDBDB] uppercase">
                  5- OBSERVAÇÕES
                </h4> 
                <div className="p-6 w-[90%]">
                <h3 className="text-black font-bold text-md">- O instrumento foi calibrado na posição vertical.</h3>
                <h3 className="text-black font-bold text-md">- A terminologia utilizada é compativel com Vocabulário Internacional de Metrologia.</h3>
                <h3 className="text-black font-bold text-md">- “A incerteza expandida relatada é baseada em uma incerteza padrão combinada multiplicada
                 por um fator de abrangência k (ver acima); o qual para uma distribuição t com veff graus de liberdade efetivos,
                  para um nível de confiança de aproximidade 95%”</h3>
                </div>

            </div>


            
        
          <div className="w-[90%] flex flex-row justify-end items-center py-5 gap-3">
            <Button className="w-[200px]">Adicionar</Button>
            <Button className="w-[200px] border-[#858585] border-2 bg-transparent text-[#949494] font-semibold hover:bg-[#858585] hover:text-white">
              Cancelar
            </Button>
          </div>
        </form>



    );
}