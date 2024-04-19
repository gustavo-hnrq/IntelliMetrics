import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Button
} from "@/components/ui/button";

import {
  Input
} from "@/components/ui/input";

import { ChevronLeft, ChevronRight } from "lucide-react"


export function TabelaFlex({ nome, data, columns, button }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const rowsPerPage = 10;

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setCurrentPage(1);
    setSearchQuery(event.target.value);
  };

  return (
    <div className="ml-80 max-md:ml-0 p-10">
      <h1 className="text-3xl font-bold mb-4">{nome}</h1>
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Pesquisar..."
          className="max-w-sm"
          value={searchQuery}
          onChange={handleSearch}
        />
        {button}
      </div>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="font-bold">
              {columns.map((column, index) => (
                <TableHead className="font-bold text-md	" key={index}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>{item[column.key]}</TableCell>
                ))}
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
          <ChevronLeft className="h-4 w-4"  />
          </Button> 

          <Button
            className=""
            variant="outline"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredData.length}
          >
            <ChevronRight className="h-4 w-4"  />
          </Button>
        </div>
      </div>
    </div>
  );
}
