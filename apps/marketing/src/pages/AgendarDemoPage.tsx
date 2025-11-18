// apps/marketing/src/pages/AgendarDemoPage.tsx

import { ChatWidget } from '../components/chat/ChatWidget'
import { Button } from '@krondle/common'
import { Calendar, Clock, CheckCircle, MessageCircle } from 'lucide-react'

export function AgendarDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan-600 bg-cyan-50 rounded-full">
              📅 Demonstração Gratuita
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Agende uma Demo Gratuita
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Veja o Krondle em ação. 30 minutos que vão transformar a gestão do seu negócio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Lado Esquerdo: Informações */}
            <div className="space-y-8">
              {/* O que vamos ver */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">
                  O que vamos ver na demo:
                </h2>
                <ul className="space-y-3">
                  {[
                    'Como o bot responde clientes automaticamente',
                    'Integração com WhatsApp Business e Instagram',
                    'Dashboard de gestão e calendário',
                    'Analytics em tempo real',
                    'Customização para o seu tipo de negócio',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Detalhes */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <Clock className="w-8 h-8 text-cyan-500 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Duração</h3>
                  <p className="text-slate-600 text-sm">30 minutos via Zoom</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <Calendar className="w-8 h-8 text-cyan-500 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Horários</h3>
                  <p className="text-slate-600 text-sm">Seg-Sex, 10h-18h</p>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100">
                <h3 className="font-semibold text-slate-900 mb-4">
                  ✅ Totalmente gratuito
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Sem compromisso</li>
                  <li>• Sem cartão de crédito</li>
                  <li>• Demonstração personalizada</li>
                  <li>• Suporte em português</li>
                </ul>
              </div>
              
              {/* Fallback WhatsApp */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-3">
                  Prefere falar diretamente connosco?
                </p>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <a
                    href="https://wa.me/351912345678?text=Olá,%20quero%20agendar%20uma%20demo%20do%20Krondle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Lado Direito: Chat Widget */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-slate-900">
                    Agende pelo chat
                  </h2>
                  <p className="text-slate-600">
                    Use o nosso bot para agendar de forma rápida e automática.
                    É assim que o Krondle funciona! 🚀
                  </p>
                </div>
                
                <div className="text-center py-8 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                  <MessageCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-500 mb-4">
                    O chat vai aparecer no canto inferior direito
                  </p>
                  <p className="text-xs text-slate-400">
                    👇 Clique no ícone azul para começar
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Chat Widget - Floating */}
      <ChatWidget mode="prototype" />
    </div>
  )
}
