import { z } from 'zod';

export const pecaValidation = z.object({
    idOs: z
        .string()
        .or(z.number())
        .refine(value => typeof value === 'string' || typeof value === 'number', {
            message: 'O ID da ordem de serviço deve ser uma string ou um número válido.'
        }),
    idCliente: z
        .string()
        .or(z.number())
        .refine(value => typeof value === 'string' || typeof value === 'number', {
            message: 'O ID do cliente deve ser uma string ou um número válido.'
        }),
    nome: z.string().min(1).max(60),
    material: z.string().min(1).max(60),
    nDesenho: z
        .string()
        .or(z.number())
        .refine(value => typeof value === 'string' || typeof value === 'number', {
            message: 'O número do desenho deve ser uma string ou um número válido.'
        }),
    descricao: z.string().min(1).max(300),
    estadoEmbalagem: z.string().toLowerCase(),
});
