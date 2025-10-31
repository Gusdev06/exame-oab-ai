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
          
          <p className="text-lg lg:text-2xl opacity-95 max-w-2xl mx-auto leading-relaxed">
            Sua mentora inteligente está pronta para te guiar passo a passo até a aprovação.<br/>
            Mais de <strong>5.000 estudantes</strong> já conquistaram sua carteira — agora é a sua vez.
          </p>

          {/* Frase Emocional */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-xl lg:text-2xl font-bold text-white mb-2">
              💬 "Acreditamos no seu potencial."
            </p>
            <p className="text-base lg:text-lg opacity-90">
              Já ajudamos milhares de alunos a conquistarem seus sonhos. Você será o próximo.
            </p>
          </div>

          {/* CTA Principal */}
          <div className="pt-4">
            <button
              className="inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00B34A] text-white font-semibold px-10 py-5 text-lg lg:text-xl rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853] shadow-2xl hover:shadow-3xl w-full sm:w-auto"
              onClick={handleGoToCheckout}
              data-cta="closing_primary"
              data-variant="A"
              aria-label="Quero que a Bia me acompanhe até a aprovação"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              💚 Quero que a Bia me acompanhe até a aprovação
            </button>
          </div>

          <p className="text-base lg:text-lg opacity-90 mt-4">
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
              <span>💬 Disponível 24h no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
