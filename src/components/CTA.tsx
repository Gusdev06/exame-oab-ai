import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const CTA = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/8eb300e2-6abe-4539-850f-eaff3165d6a8';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoNHYyaC00ek0yMCAzMGg0djJoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto Para Garantir Sua Aprovação na OAB?
          </h2>
          
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já estão usando IA para estudar de forma mais inteligente e eficiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-success hover:bg-success-glow text-success-foreground shadow-2xl hover:shadow-success/50 transition-all hover:scale-105"
              onClick={handleGoToCheckout}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Garantir Minha Aprovação
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Acesso imediato após pagamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
