import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const checkoutSchema = z.object({
  name: z.string()
    .trim()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  whatsapp: z.string()
    .trim()
    .regex(/^\+55\d{11}$/, { message: "WhatsApp inválido. Digite DDD + número com 9 dígitos" })
    .length(14, { message: "WhatsApp deve conter DDD + 9 dígitos" })
});

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CheckoutDialog = ({ open, onOpenChange }: CheckoutDialogProps) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Função para formatar o número de WhatsApp
  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + número)
    const limited = numbers.slice(0, 11);
    
    // Aplica a máscara baseado no tamanho
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 6) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else if (limited.length <= 10) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 6)}-${limited.slice(6)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  // Handler para mudança no campo WhatsApp
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Remove a formatação para validar apenas os números
      const cleanWhatsApp = whatsapp.replace(/\D/g, '');
      
      // Adiciona o código do país (+55)
      const fullWhatsApp = `+55${cleanWhatsApp}`;
      
      // Validar dados
      const validatedData = checkoutSchema.parse({ 
        name: name.trim(), 
        whatsapp: fullWhatsApp 
      });

      // Aqui você vai colocar a URL do seu checkout
      // Os dados do usuário serão enviados como parâmetros
      const checkoutUrl = `https://pay.cakto.com.br/78t42ev_686798?name=${encodeURIComponent(validatedData.name)}&whatsapp=${encodeURIComponent(validatedData.whatsapp)}`;
      
      // Redirecionar para o checkout
      window.location.href = checkoutUrl;
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Dados inválidos",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Começar Agora</DialogTitle>
          <DialogDescription>
            Preencha seus dados para acessar o checkout e garantir sua aprovação na OAB
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(11) 94373-5978"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              required
              maxLength={15}
              className="text-base"
            />
            <p className="text-xs text-muted-foreground">
              Digite apenas os números com DDD
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-success to-success-glow hover:opacity-90"
            size="lg"
            disabled={isLoading}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {isLoading ? "Processando..." : "Ir para o Checkout"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Após a aprovação do pagamento, você receberá uma mensagem no WhatsApp
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
