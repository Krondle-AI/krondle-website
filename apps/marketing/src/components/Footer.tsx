// apps/marketing/src/components/Footer.tsx
"use client";

import { Mail, Phone, ArrowRight, BookOpen, Users, FileText, MessageCircle } from "lucide-react";

export function Footer() {
  const handleOpenChat = () => {
    const chatButton = document.querySelector('[data-chat-button], .floating-chat-button') as HTMLElement;
    if (chatButton) chatButton.click();
    else if ((window as any).Tawk_API?.maximize) (window as any).Tawk_API.maximize();
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* Main Grid - 4 Columns COMPACTO */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Recursos */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Recursos</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="/cases" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="/docs" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Documentação</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Empresa</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="/#sobre" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Sobre nós</a></li>
              <li><a href="/#equipa" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Equipa</a></li>
              <li><a href="/#faq" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Legal</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="/termos" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Termos</a></li>
              <li><a href="/privacidade" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacidade</a></li>
              <li><a href="/cookies" className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* CTA + Contacto JUNTOS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-slate-900 dark:text-white">Contacto</h4>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={handleOpenChat}
              className="w-full mb-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agendar reunião
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Contact Info */}
            <div className="space-y-2">
              <a href="mailto:krondleai@gmail.com" className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                krondleai@gmail.com
              </a>
              <a href="tel:+351XXXXXXXXX" className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +351 XXX XXX XXX
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}