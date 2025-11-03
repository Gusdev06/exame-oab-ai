import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a Bia?",
    answer: "A Bia é uma mentora inteligente treinada com 10 anos de provas da OAB. Ela funciona direto no WhatsApp, respondendo suas dúvidas, criando simulados personalizados e acompanhando seu progresso em tempo real. É como ter uma professora particular disponível 24/7 que conhece tudo sobre a OAB."
  },
  {
    question: "Posso falar com a Bia pelo WhatsApp?",
    answer: "SIM! A Bia está sempre disponível no WhatsApp. Você pode conversar com ela a qualquer hora do dia ou da noite, fazer perguntas, pedir simulados ou tirar dúvidas. É só mandar mensagem e ela responde na hora!"
  },
  {
    question: "E se eu não passar mesmo estudando com a Bia?",
    answer: "89% dos alunos que estudam com a Bia passam na 1ª tentativa, mais que o dobro da média nacional. Além disso, oferecemos garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro. Mas lembre-se: a Bia é uma ferramenta poderosa, mas seu esforço e dedicação também são fundamentais para a aprovação."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "SIM! A assinatura é mensal e você pode cancelar a qualquer momento, sem burocracia e sem multas. Não há fidelidade nem contratos longos. Você paga apenas enquanto estiver usando a Bia."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos alunos relata melhora significativa nos estudos em 7-14 dias de uso da Bia. Em 30 dias, muitos aumentam suas notas em até 40%. O tempo exato depende da sua dedicação e de quão frequente você estuda com a Bia."
  },
  {
    question: "Preciso ter conhecimentos técnicos para usar a Bia?",
    answer: "Não! É super simples. Basta ter WhatsApp no celular. Você conversa com a Bia como se fosse uma amiga ou professora, fazendo perguntas naturalmente e recebendo respostas claras e instantâneas."
  },
  {
    question: "A Bia realmente conhece as provas da OAB?",
    answer: "Sim! A Bia foi treinada com questões oficiais da OAB dos últimos 10 anos. Ela conhece todos os padrões da banca examinadora e sabe exatamente o que mais cai nas provas. É como ter acesso à experiência de milhares de questões aplicadas."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar da Bia ou achar que ela não é para você, devolvemos 100% do seu investimento, sem perguntas. Você não tem nada a perder."
  }
];

const FAQ = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-24 md:py-32 bg-[#0F1419] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
            Perguntas Frequentes Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Bia</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Tire suas dúvidas sobre como a Bia pode te ajudar a passar na OAB
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-white/10 rounded-2xl px-6 bg-white/5 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-bold pr-4 text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA FAQ Premium */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/10">
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Não encontrou o que procurava? Tire suas dúvidas direto no WhatsApp!
            </p>
            <button
              className="group relative inline-flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-semibold px-8 py-4 text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0F1419] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              onClick={handleGoToCheckout}
              data-cta="faq_primary"
              data-variant="A"
              aria-label="Tirar minha dúvida com a Bia"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Falar com a Bia</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
