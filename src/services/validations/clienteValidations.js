import z from 'zod';

export const clienteValidation = z.object({
    nomeEmpresa: z.string().min(1, "Numero minimo de caracteres não atingido ").max(60, "Numero maximo de caracteres ultrapassado"),
    representante: z.string().min(1, "Numero minimo de caracteres não atingido ").max(60, "Numero maximo de caracteres ultrapassado"),
    email: z.string().email("E-mail inválido!").min(1, "Numero minimo de caracteres não atingido ").max(60, "Numero maximo de caracteres ultrapassado"),
    telefone: z.string().min(1, "Numero minimo de caracteres não atingido ").max(12, "Numero maximo de caracteres ultrapassado"),
    endereco: z.string().min(1, "Numero minimo de caracteres não atingido ").max(100, "Numero maximo de caracteres ultrapassado"),
    cnpj: z.string({invalid_type_error:"Tipo invalido"}).length(14, "É necessario 14 caracteres"),
    status: z.enum(['ativo', 'inativo'])
})