import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TabelaFlex({ nome, data, columns, buttonAdd, buttonVisualizar, buttonEdit, onVisualizarClick }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtra os dados com base na pesquisa
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      typeof value === "string" &&
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const rowsPerPage = 8;
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="ml-80 max-md:ml-0 px-10">
      <h1 className="text-3xl font-bold mb-4">{nome}</h1>
      <div className="flex justify-between max-lg:flex-col items-center py-4">
        <Input
          placeholder="Pesquisar..."
          className="max-w-sm"
          value={searchQuery}
          onChange={handleSearch}
        />
        {buttonAdd}
      </div>
      <div className="rounded-md border bg-white uppercase">
        <Table>
          <TableHeader>
            <TableRow className="font-bold">
              {columns.map((column, index) => (
                <TableHead className="font-bold text-md px-10" key={index}>
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column, columnIndex) => (
                  <TableCell className="px-10" key={columnIndex}>{item[column.key]}</TableCell>
                ))}
                <TableCell className="flex gap-x-3">
                  <div onClick={() => onVisualizarClick(item)}>
                    {buttonVisualizar}
                  </div>
                  <div onClick={() => onVisualizarClick(item)}>
                    {buttonEdit}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredData.length}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
