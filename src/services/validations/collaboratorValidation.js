import z from "zod";

export const refinePassword = z
  .object({
    email: z
      .string()
      .email("Email inválido.")
      .nonempty("O email é obrigatório.")
      .toLowerCase(),
    senha: z.string().min(4, "A senha precisa ter no minímo 4 caracteres"),
    confirmPassword: z
      .string()
      .min(4, "A senha precisa ter no minímo 4 caracteres"),
  })
  .refine((data) => data.senha === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
