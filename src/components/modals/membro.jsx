import { useState } from "react";
import axiosInstance from "../../../axiosConfig"; // Importando o axiosInstance
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function ModalMembro({ onAddSuccess }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cargo: "",
    status: false // Assuming status is a boolean value, change it accordingly
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post("/newUser", formData);
      setIsOpen(false); // Fecha o modal
      onAddSuccess(); // Atualiza os dados da tabela
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <AlertDialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4"/> Adicionar Membro
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-96">
        <AlertDialogHeader>
          <div className="flex flex-row w-full justify-between">
            <AlertDialogTitle className="text-3xl font-bold mb-3">Adicionar Membro</AlertDialogTitle>
            <div className="flex flex-col">
              <Label>status</Label>
              <Switch aria-readonly />
            </div>
          </div>
          <AlertDialogDescription>
            <div className="grid gap-2">
              <Label>Nome</Label>
              <Input placeholder="Digite aqui " name="nome" value={formData.nome} onChange={handleChange} />
              <Label>Email</Label>
              <Input placeholder="Digite aqui " name="email" value={formData.email} onChange={handleChange} />
              <Label>Cargo</Label>
              <Input placeholder="Digite aqui " name="cargo" value={formData.cargo} onChange={handleChange} />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Adicionar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
