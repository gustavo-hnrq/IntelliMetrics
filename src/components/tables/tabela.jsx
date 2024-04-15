import { Tabela } from './table-flex';
import clientes from './data';

const columns = [
  { key: 'name', label: 'Nome' },
  { key: 'email', label: 'Email' },
  { key: 'cargo', label: 'Cargo' },
];

export function MinhaTabela() {
  return <Tabela data={clientes} columns={columns} />;
}