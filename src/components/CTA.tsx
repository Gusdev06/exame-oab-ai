import { Button } from "@/components/ui/button";
import { MessageCircle, Lock, Shield } from "lucide-react";

const CTA = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoNHYyaC00ek0yMCAzMGg0djJoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
            ⚖️ Está Pronto Para Passar na OAB?
          </h2>
          
          <p className="text-lg lg:text-2xl opacity-95 max-w-2xl mx-auto">
            Mais de <strong>5.000 estudantes</strong> já aprovaram com o mesmo agente de IA.<br/>
            Agora é a sua vez de conquistar sua carteira e mudar sua carreira.
          </p>

          {/* CTA Principal */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base lg:text-xl px-10 py-8 bg-[#00C853] hover:bg-[#00B34A] text-white font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
              onClick={handleGoToCheckout}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              💬 Começar Agora com o Agente de IA
            </Button>
          </div>

          <p className="text-base lg:text-lg opacity-90">
            Acesso imediato • Garantia de 7 dias • Cancele quando quiser
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 pt-6 text-sm lg:text-base opacity-90">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>🔒 Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>💬 Suporte humano 24h via WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
