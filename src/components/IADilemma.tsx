import { AlertTriangle, CheckCircle, Brain, Database, Sparkles, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IADilemma = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/78t42ev_686798';
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0B1120] to-[#0F1419] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Impactante */}
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl">
              <AlertTriangle className="w-4 h-4" />
              O Problema Que Todos Conhecem
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
              Você Já Tentou Estudar com IA e Se Decepcionou?
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
              <strong className="text-gray-200">ChatGPT, Claude, Gemini...</strong> Todas elas têm o mesmo problema:<br/>
              <span className="text-red-400 font-semibold">Elas deliram nas respostas</span> porque não conhecem o padrão real das provas da OAB.
            </p>
          </div>

          {/* Comparação Visual Impactante */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* PROBLEMA - IA Genérica */}
            <Card className="border-2 border-red-500/30 bg-red-500/5 backdrop-blur-xl hover:border-red-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-3xl animate-fade-in">
              <CardContent className="p-8 lg:p-10 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">IA Genérica</h3>
                    <p className="text-red-400 text-sm font-medium">O Problema</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Não conhece provas anteriores</strong> da OAB
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Inventa respostas</strong> que parecem corretas, mas estão erradas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Te confunde mais</strong> do que ajuda no estudo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Perde tempo</strong> estudando conteúdo que não cai na prova
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-red-500/20">
                  <p className="text-lg text-red-300 font-semibold italic">
                    "A IA disse que estava certo, mas era completamente errado..."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Frustração comum dos estudantes</p>
                </div>
              </CardContent>
            </Card>

            {/* SOLUÇÃO - Bia */}
            <Card className="border-2 border-emerald-500/30 bg-emerald-500/5 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-3xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8 lg:p-10 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">A <span className="text-emerald-400">Bia</span></h3>
                    <p className="text-emerald-400 text-sm font-medium">A Solução</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Treinada com 10 anos de provas</strong> oficiais da OAB
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Conhece o padrão exato</strong> de perguntas e respostas da banca
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Respostas precisas</strong> baseadas em provas reais, não em suposições
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Foca no que realmente cai</strong> na prova, sem perder tempo
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-emerald-500/20">
                  <p className="text-lg text-emerald-300 font-semibold italic">
                    "Finalmente uma IA que não delira e me ajuda de verdade!"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Alunos aprovados com a Bia</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Destaque Principal - Copy Matadora */}
          <div className="max-w-5xl mx-auto text-center space-y-8 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 lg:p-16 border-2 border-emerald-500/20 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-bold backdrop-blur-xl mb-4">
              <Database className="w-5 h-5" />
              A Diferença Que Faz Toda a Diferença
            </div>
            
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Sem Delírios.</span> Sem Erros.<br/>
              <span className="text-white">Apenas Respostas Precisas</span> Baseadas em Provas Reais.
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Enquanto as IAs genéricas <strong className="text-red-400">inventam respostas</strong> porque não têm acesso às provas anteriores da OAB,<br/>
                a <strong className="text-emerald-400">Bia foi treinada especificamente</strong> com <strong className="text-white">10 anos de provas oficiais</strong>.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Database className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-3xl font-bold text-emerald-400">10 anos</p>
                  <p className="text-sm text-gray-400">De provas da OAB</p>
                </div>
                <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Brain className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-3xl font-bold text-emerald-400">0%</p>
                  <p className="text-sm text-gray-400">De respostas delirantes</p>
                </div>
                <div className="space-y-2 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-3xl font-bold text-emerald-400">89%</p>
                  <p className="text-sm text-gray-400">Taxa de aprovação</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-400 pt-4">
                <strong className="text-white">Não é mais uma IA genérica.</strong><br/>
                É uma <strong className="text-emerald-400">especialista em OAB</strong> que conhece o padrão da banca como ninguém.
              </p>
            </div>

            {/* CTA Premium */}
            <div className="pt-8">
              <button
                className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-10 py-5 text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0F1419] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                onClick={handleGoToCheckout}
                data-cta="dilemma_primary"
                data-variant="A"
                aria-label="Experimente a Bia sem delírios"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CheckCircle className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Quero Uma IA Que Não Delira</span>
              </button>
              <p className="text-sm text-gray-500 mt-6">
                Acesso imediato • Garantia de 7 dias • Disponível 24h no WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IADilemma;
