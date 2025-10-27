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
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "WhatsApp inválido. Use formato: +5511999999999" })
    .min(10, { message: "WhatsApp inválido" })
    .max(20, { message: "WhatsApp muito longo" })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validar dados
      const validatedData = checkoutSchema.parse({ 
        name: name.trim(), 
        whatsapp: whatsapp.trim() 
      });

      // Aqui você vai colocar a URL do seu checkout
      // Os dados do usuário serão enviados como parâmetros
      const checkoutUrl = `https://seu-checkout.com?name=${encodeURIComponent(validatedData.name)}&whatsapp=${encodeURIComponent(validatedData.whatsapp)}`;
      
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
              placeholder="+5511999999999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              maxLength={20}
              className="text-base"
            />
            {/* <p className="text-xs text-muted-foreground">
              Inclua o código do país e DDD (exemplo: +5511999999999)
            </p> */}
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
