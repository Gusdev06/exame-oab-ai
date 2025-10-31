import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "💬 Como funciona a Bia?",
    answer: "A Bia é uma mentora inteligente treinada com 10 anos de provas da OAB. Ela funciona direto no WhatsApp, respondendo suas dúvidas, criando simulados personalizados e acompanhando seu progresso em tempo real. É como ter uma professora particular disponível 24/7 que conhece tudo sobre a OAB."
  },
  {
    question: "📱 Posso falar com a Bia pelo WhatsApp?",
    answer: "SIM! A Bia está sempre disponível no WhatsApp. Você pode conversar com ela a qualquer hora do dia ou da noite, fazer perguntas, pedir simulados ou tirar dúvidas. É só mandar mensagem e ela responde na hora!"
  },
  {
    question: "❓ E se eu não passar mesmo estudando com a Bia?",
    answer: "89% dos alunos que estudam com a Bia passam na 1ª tentativa — mais que o dobro da média nacional. Além disso, oferecemos garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro. Mas lembre-se: a Bia é uma ferramenta poderosa, mas seu esforço e dedicação também são fundamentais para a aprovação."
  },
  {
    question: "✅ Posso cancelar quando quiser?",
    answer: "SIM! A assinatura é mensal e você pode cancelar a qualquer momento, sem burocracia e sem multas. Não há fidelidade nem contratos longos. Você paga apenas enquanto estiver usando a Bia."
  },
  {
    question: "⏱️ Quanto tempo leva para ver resultados?",
    answer: "A maioria dos alunos relata melhora significativa nos estudos em 7-14 dias de uso da Bia. Em 30 dias, muitos aumentam suas notas em até 40%. O tempo exato depende da sua dedicação e de quão frequente você estuda com a Bia."
  },
  {
    question: "🤔 Preciso ter conhecimentos técnicos para usar a Bia?",
    answer: "Não! É super simples. Basta ter WhatsApp no celular. Você conversa com a Bia como se fosse uma amiga ou professora, fazendo perguntas naturalmente e recebendo respostas claras e instantâneas."
  },
  {
    question: "📚 A Bia realmente conhece as provas da OAB?",
    answer: "Sim! A Bia foi treinada com questões oficiais da OAB dos últimos 10 anos. Ela conhece todos os padrões da banca examinadora e sabe exatamente o que mais cai nas provas. É como ter acesso à experiência de milhares de questões aplicadas."
  },
  {
    question: "🛡️ Tem garantia?",
    answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar da Bia ou achar que ela não é para você, devolvemos 100% do seu investimento, sem perguntas. Você não tem nada a perder."
  }
];

const FAQ = () => {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.kirvano.com/0108b276-b048-4524-91c3-2c8ae9b2dbae';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            ❓ Perguntas Frequentes Sobre a Bia
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre como a Bia pode te ajudar a passar na OAB
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA FAQ */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou o que procurava? Tire suas dúvidas direto no WhatsApp!
          </p>
          <button
            className="inline-flex items-center justify-center bg-[#00C853] hover:bg-[#00B34A] text-white font-semibold px-8 py-4 text-base lg:text-lg rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C853] shadow-lg hover:shadow-xl"
            onClick={handleGoToCheckout}
            data-cta="faq_primary"
            data-variant="A"
            aria-label="Tirar minha dúvida com a Bia"
          >
            ❓ Tirar minha dúvida com a Bia
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
