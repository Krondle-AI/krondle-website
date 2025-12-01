// apps/marketing/src/components/BentoFeatures.tsx
import { motion } from "framer-motion";
import { Bot, Clock, TrendingUp, Zap, MessageCircle, Sparkles } from "lucide-react";

export function BentoFeatures() {
  return (
    <section id="features" className="px-6 py-24 lg:px-8 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Tecnologia de ponta
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl mb-4"
          >
            Feito para pequenos negócios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Automação profissional sem complexidade. Tudo o que precisa num só lugar.
          </motion.p>
        </div>

        {/* Bento Grid - ESTRATÉGIA HÍBRIDA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Row 1: IA Bot (span 8) + 24/7 (span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-8 group"
          >
            {/* Light: Gradiente colorido | Dark: Slate com border cyan */}
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-850 p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-700 dark:border-l-4 dark:border-l-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center h-full">
                {/* Left side - text */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Assistente Virtual Inteligente
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    IA treinada para o seu negócio. Conversa naturalmente em português e aprende com cada interação.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-medium">
                      WhatsApp
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                      Instagram
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-medium">
                      Gmail
                    </span>
                  </div>
                </div>

                {/* Right side - chat mockup */}
                <div className="w-full lg:w-80 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-slate-700">
                  <div className="space-y-3">
                    <div className="flex gap-2 items-end">
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-slate-900 dark:text-white max-w-[80%]">
                        Olá! Preciso marcar corte amanhã 🙋‍♂️
                      </div>
                    </div>
                    <div className="flex gap-2 items-end justify-end">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl rounded-br-sm px-4 py-3 text-sm text-white max-w-[80%]">
                        Claro! Tenho 14h e 16h disponíveis. Qual prefere?
                      </div>
                    </div>
                    <div className="flex gap-2 items-end">
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-slate-900 dark:text-white max-w-[80%]">
                        14h está perfeito! ✅
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 group"
          >
            {/* Mantém gradiente colorido em ambos os modos */}
            <div className="h-full rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <Clock className="h-12 w-12 text-white mb-6 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Sempre Online
                </h3>
                <p className="text-blue-100">
                  Responde clientes a qualquer hora, mesmo quando está fechado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Setup (span 4) + Analytics (span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 group"
          >
            {/* Mantém gradiente colorido em ambos os modos */}
            <div className="h-full rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <Zap className="h-12 w-12 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  5 Minutos
                </h3>
                <p className="text-purple-100">
                  Configure tudo sem complicações. Interface simples e intuitiva.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-8 group"
          >
            {/* Light: Gradiente colorido | Dark: Slate com border indigo */}
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-850 p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-700 dark:border-l-4 dark:border-l-indigo-500 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Insights do Seu Negócio
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  Dashboards com métricas em tempo real. Saiba quais serviços faturam mais, períodos de maior procura e clientes recorrentes.
                </p>

                {/* Stats preview */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">247</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Marcações</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">+40%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Crescimento</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">4.9</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}