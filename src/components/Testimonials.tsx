import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Santos",
    role: "Aprovada OAB XLI",
    content: "Usei o agente de IA por apenas 3 meses e passei de primeira! Os comentários detalhados das questões e as dicas personalizadas me ajudaram a estudar de forma muito mais eficiente do que eu imaginava.",
    rating: 5
  },
  {
    name: "Rafael Oliveira",
    role: "Aprovado OAB XLII",
    content: "Ter a possibilidade de tirar dúvidas a qualquer hora pelo WhatsApp foi fundamental. A IA explica de forma clara e direta, muito melhor do que vários cursinhos que já fiz.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Aprovada OAB XLIV",
    content: "Os simulados adaptativos focaram exatamente nas minhas dificuldades. Em 2 meses minha nota subiu 40%. Recomendo demais!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Histórias de <span className="text-success">Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos estudantes aprovados têm a dizer
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-success/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-10 h-10 text-primary/20" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-success text-success" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
