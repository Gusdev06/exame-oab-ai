import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "💬 Como funciona o agente de IA?",
    answer: "Nosso agente de IA foi treinado com 10 anos de provas da OAB. Ele funciona direto no WhatsApp, respondendo suas dúvidas, gerando simulados personalizados e acompanhando seu progresso em tempo real. É como ter um professor particular disponível 24/7."
  },
  {
    question: "❓ E se eu não aprovar mesmo usando a IA?",
    answer: "Nossa taxa de aprovação é de 89% na 1ª tentativa, mais que o dobro da média nacional. Além disso, oferecemos garantia de 7 dias - se não gostar, devolvemos 100% do seu dinheiro. Mas lembre-se: a IA é uma ferramenta poderosa, mas o seu esforço e dedicação também são fundamentais."
  },
  {
    question: "✅ Posso cancelar quando quiser?",
    answer: "SIM! Nossa assinatura é mensal e você pode cancelar a qualquer momento, sem burocracia e sem multas. Não há fidelidade nem contratos longos. Você paga apenas enquanto estiver usando."
  },
  {
    question: "⏱️ Quanto tempo leva para ver resultados?",
    answer: "A maioria dos nossos alunos relata melhora significativa nos estudos em 7-14 dias. Em 30 dias, muitos aumentam suas notas em até 40%. O tempo exato depende da sua dedicação e frequência de uso."
  },
  {
    question: "🤔 Preciso ter conhecimentos técnicos?",
    answer: "Não! É super simples. Basta ter WhatsApp no celular. Você conversa com o agente como se fosse um professor particular, fazendo perguntas e recebendo respostas instantâneas."
  },
  {
    question: "📚 As questões são realmente das provas anteriores?",
    answer: "Sim! Nossa base de dados inclui questões oficiais da OAB dos últimos 10 anos, além de questões inéditas criadas seguindo o mesmo padrão da banca examinadora."
  },
  {
    question: "📱 Posso usar no celular e computador?",
    answer: "Sim! O WhatsApp funciona em qualquer dispositivo. Você pode estudar pelo celular, tablet ou computador, mantendo todo seu histórico sincronizado."
  },
  {
    question: "🛡️ Tem garantia?",
    answer: "Sim! Oferecemos garantia de 7 dias. Se não ficar satisfeito com o produto, devolvemos 100% do seu investimento, sem perguntas. Você não tem nada a perder."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o agente de IA
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
      </div>
    </section>
  );
};

export default FAQ;
