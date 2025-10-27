# OAB IA - Assistente Inteligente para Aprovação na OAB

![OAB IA Logo](public/logo-oab.svg)

## 🎯 Sobre o Projeto

OAB IA é uma plataforma de estudos inteligente que utiliza Inteligência Artificial para ajudar estudantes a se prepararem para o Exame da Ordem dos Advogados do Brasil (OAB). 

### Principais Recursos

- 🤖 **Agente de IA Especializado**: Treinado com todas as edições do Exame da OAB
- 📱 **Estudos via WhatsApp**: Tire dúvidas e pratique questões direto no seu celular
- 📊 **Simulados Personalizados**: Questões reais adaptadas ao seu nível
- 24/7 **Suporte Contínuo**: Disponível a qualquer hora do dia
- ✅ **Alto Índice de Aprovação**: Mais de 5.000 aprovados em 2024

## 🛠️ Tecnologias

Este projeto foi construído com:

- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React** - Biblioteca UI
- **shadcn/ui** - Componentes UI
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```sh
# 1. Clone o repositório
git clone <YOUR_GIT_URL>

# 2. Entre no diretório do projeto
cd exame-oab-ai

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

```sh
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria a build de produção
npm run preview      # Preview da build de produção
npm run lint         # Executa o linter
```

## 📁 Estrutura do Projeto

```
exame-oab-ai/
├── public/          # Arquivos públicos estáticos
│   └── logo-oab.svg # Logo oficial do projeto
├── src/
│   ├── components/  # Componentes React
│   │   ├── ui/     # Componentes base (shadcn)
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── pages/      # Páginas da aplicação
│   ├── hooks/      # Custom hooks
│   ├── lib/        # Utilitários
│   └── App.tsx     # Componente principal
└── index.html      # HTML principal
```

## 🎨 Design e UI

O design utiliza:
- Paleta de cores moderna com gradientes azuis e verdes
- Componentes reutilizáveis do shadcn/ui
- Animações suaves e responsivas
- Layout mobile-first

## 📄 Licença

© 2025 OAB IA. Todos os direitos reservados.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ para ajudar futuros advogados
