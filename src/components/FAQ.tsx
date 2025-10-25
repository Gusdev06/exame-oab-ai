import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o agente de IA?",
    answer: "Nosso agente de IA foi treinado com milhares de questões e conteúdos da OAB dos últimos 10 anos. Ele funciona direto no WhatsApp, respondendo suas dúvidas, gerando simulados personalizados e acompanhando seu progresso em tempo real."
  },
  {
    question: "Preciso ter conhecimentos técnicos?",
    answer: "Não! É super simples. Basta ter WhatsApp no celular. Você conversa com o agente como se fosse um professor particular, fazendo perguntas e recebendo respostas instantâneas."
  },
  {
    question: "As questões são realmente das provas anteriores?",
    answer: "Sim! Nossa base de dados inclui questões oficiais da OAB dos últimos 10 anos, além de questões inéditas criadas seguindo o mesmo padrão da banca examinadora."
  },
  {
    question: "Posso usar no celular e computador?",
    answer: "Sim! O WhatsApp funciona em qualquer dispositivo. Você pode estudar pelo celular, tablet ou computador, mantendo todo seu histórico sincronizado."
  },
  {
    question: "Qual a taxa de aprovação dos alunos?",
    answer: "Nossa taxa de aprovação é de 89%, significativamente acima da média nacional. Isso porque nosso sistema adapta o conteúdo ao nível e necessidades específicas de cada estudante."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas."
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
