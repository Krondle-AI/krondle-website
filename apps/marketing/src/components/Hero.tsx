// apps/marketing/src/components/Hero.tsx
import { Button } from "@krondle/common/components/ui/button";
import { ArrowRight, Play, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Trigger expansion animation after component mounts
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ 
          scale: isExpanded ? 1 : 0.3, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Gradient blobs */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isExpanded ? 1 : 0.8, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Automação 100% com IA
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-8xl mb-6"
            >
              Nunca mais perca{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  uma marcação
                </span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: isExpanded ? 1 : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M1 8C50 3 150 1 299 8"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#0891b2" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed lg:text-2xl"
            >
              O Krondle responde clientes, agenda marcações e gere o seu negócio{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                automaticamente via WhatsApp
              </span>
              . Disponível 24/7, sem intervenção humana.
            </motion.p>

            {/* Benefits List */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-4 mb-10"
            >
              {[
                "Setup em 5 minutos, sem conhecimentos técnicos",
                "IA que conversa como humano em português",
                "Integração nativa com WhatsApp, Instagram e Gmail",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all px-8 py-7 text-lg"
              >
                Agendar Demo com a Equipa
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 px-8 py-7 text-lg group hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Ver Vídeo (2 min)
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="mt-10 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Sem cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cancele quando quiser</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ 
              opacity: isExpanded ? 1 : 0, 
              scale: isExpanded ? 1 : 0.8,
              rotateY: isExpanded ? 0 : -20
            }}
            transition={{ duration: 1, delay: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative lg:pl-8"
            style={{ perspective: '1000px' }}
          >
            {/* Chat Interface */}
            <motion.div 
              className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-950 p-8 shadow-2xl border border-slate-700/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-xl" />
              
              {/* Chat Header */}
              <div className="relative flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">Krondle Bot</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Online agora
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="relative space-y-4">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="flex justify-end"
                >
                  <div className="rounded-2xl rounded-tr-none bg-slate-700 p-4 max-w-[85%]">
                    <p className="text-sm text-slate-200">
                      Olá! Quero marcar um corte para amanhã às 15h
                    </p>
                    <span className="text-xs text-slate-400 mt-1 block">14:23</span>
                  </div>
                </motion.div>

                {/* Bot message */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-600 to-blue-600 p-4 max-w-[85%] shadow-lg shadow-cyan-500/20">
                    <p className="text-sm font-medium text-white">
                      Perfeito! Tenho disponível às 15h e às 16h30. Qual prefere? 😊
                    </p>
                    <span className="text-xs text-cyan-100 mt-1 block">14:23</span>
                  </div>
                </motion.div>

                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  className="flex justify-end"
                >
                  <div className="rounded-2xl rounded-tr-none bg-slate-700 p-4 max-w-[85%]">
                    <p className="text-sm text-slate-200">15h está ótimo!</p>
                    <span className="text-xs text-slate-400 mt-1 block">14:24</span>
                  </div>
                </motion.div>

                {/* Bot confirmation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-600 to-blue-600 p-4 max-w-[85%] shadow-lg shadow-cyan-500/20">
                    <p className="text-sm font-medium text-white">
                      ✅ Marcação confirmada para amanhã às 15h!
                      <br />
                      <br />
                      Vai receber um lembrete 2h antes. Até amanhã! 👋
                    </p>
                    <span className="text-xs text-cyan-100 mt-1 block">14:24</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 0.5 }}
                transition={{ duration: 0.5, delay: 3.2 }}
                className="absolute -top-4 -right-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-lg"
              >
                🤖 100% Automático
              </motion.div>
            </motion.div>

            {/* Floating stats - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-2xl border border-slate-200 dark:border-slate-700 hidden lg:block"
            >
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">2.3s</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Tempo de resposta médio</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}