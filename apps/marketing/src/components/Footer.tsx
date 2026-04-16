// apps/marketing/src/components/Footer.tsx
"use client";

import { Mail, Phone, ArrowRight, BookOpen, Users, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";


export function Footer() {
  /**
   * Abre o chatbot usando múltiplos métodos
   * Igual ao comportamento do botão "Agendar Reunião"
   */
  const handleOpenChat = () => {
    console.log('🚀 Tentando abrir chat...');

    // Método 1: Data attribute [data-chat-button]
    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
    if (chatButton) {
      console.log('✅ Chat aberto via [data-chat-button]');
      chatButton.click();
      return;
    }

    // Método 2: Classe .floating-chat-button
    const floatingButton = document.querySelector('.floating-chat-button') as HTMLElement;
    if (floatingButton) {
      console.log('✅ Chat aberto via .floating-chat-button');
      floatingButton.click();
      return;
    }

    // Método 3: Tawk.to API
    if (typeof window !== 'undefined' && (window as any).Tawk_API?.maximize) {
      console.log('✅ Chat aberto via Tawk.to');
      (window as any).Tawk_API.maximize();
      return;
    }

    // Método 4: Intercom
    if (typeof window !== 'undefined' && (window as any).Intercom) {
      console.log('✅ Chat aberto via Intercom');
      (window as any).Intercom('show');
      return;
    }

    // Método 5: Crisp
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      console.log('✅ Chat aberto via Crisp');
      (window as any).$crisp.push(['do', 'chat:open']);
      return;
    }

    // Método 6: Custom event (fallback)
    console.log('📡 Dispatching custom openChat event');
    window.dispatchEvent(new CustomEvent('openChat', { 
      bubbles: true,
      detail: { source: 'footer-cta' }
    }));

    // Método 7: Procurar iframe de chat
    const chatIframes = document.querySelectorAll(
      'iframe[title*="chat" i], iframe[id*="chat" i], iframe[class*="chat" i]'
    );
    
    if (chatIframes.length > 0) {
      console.log('🔍 Chat iframe encontrado');
      const iframe = chatIframes[0] as HTMLIFrameElement;
      const container = iframe.parentElement;
      
      if (container) {
        // Tornar visível se estiver oculto
        container.style.display = 'block';
        container.style.visibility = 'visible';
        container.style.opacity = '1';
        
        // Simular click
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        container.dispatchEvent(clickEvent);
      }
    }

    console.warn('⚠️ Nenhum método de chat funcionou');
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* Main Grid - 4 Columns */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Recursos */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Recursos</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/blog" 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/cases" 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="/docs" 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Documentação
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Empresa</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#sobre" 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a 
                  href="/#equipa" 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Equipa
                </a>
              </li>
              <li>
                <a 
                  href="/#faq" 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Legal</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/termos"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidade"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Políticas de privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidade"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Dados e cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA + Contacto */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Contacto</h4>
            </div>
            
            {/* CTA Button - ABRE O CHAT */}
            <button 
              onClick={handleOpenChat}
              type="button"
              className="w-full mb-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
              aria-label="Abrir chat para falar connosco"
            >
              <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Fale connosco
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Contact Info */}
            <div className="space-y-2">
              <a 
                href="mailto:krondleai@gmail.com" 
                className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                aria-label="Enviar email para krondleai@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">krondleai@gmail.com</span>
              </a>
              <a 
                href="tel:+351XXXXXXXXX" 
                className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                aria-label="Ligar para +351 XXX XXX XXX"
              >
                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">+351 XXX XXX XXX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Krondle. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
