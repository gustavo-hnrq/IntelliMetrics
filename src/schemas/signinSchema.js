import z from "zod";

export const signinSchema = z.object({
    email: z.string().nonempty("O email é obrigatório").email().toLowerCase(),
    senha: z.string().nonempty("A senha é obrigatória").min(6, "A senha precias ter no mínimo 6 caracteres"),
})