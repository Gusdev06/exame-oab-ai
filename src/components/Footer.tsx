import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0E14] border-t border-white/10 py-16 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-extrabold text-white">OABIA</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Conheça a <span className="text-emerald-400 font-semibold">Bia</span> sua mentora inteligente para passar na OAB
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Produto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#conheca-bia" className="hover:text-emerald-400 transition-colors duration-200">Como Funciona</a></li>
              <li><a href="#conheca-bia" className="hover:text-emerald-400 transition-colors duration-200">Recursos</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Preços</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Contato</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 <span className="font-semibold text-white">OABIA</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
