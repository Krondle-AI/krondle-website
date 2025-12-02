// apps/marketing/src/components/FeaturesFlow.tsx
"use client";

import { Zap, MessageCircle, BarChart3, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function FeaturesFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      step: "Passo 1",
      subtitle: "Fala onde os clientes estão",
      icon: MessageCircle,
      gradient: "from-cyan-500 to-blue-600",
      title: "Cliente envia mensagem",
      description: "WhatsApp, Instagram ou Email – o assistente responde automaticamente em português.",
      tags: ["WhatsApp · Instagram DMs", "Tom do seu negócio"],
    },
    {
      step: "Passo 2",
      subtitle: "Marcações em piloto automático",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-600",
      title: "IA propõe horário e confirma",
      description: "Verifica disponibilidade em tempo real, sugere opções e confirma a marcação.",
      tags: ["Marcações 24/7", "Lembretes automáticos"],
    },
    {
      step: "Passo 3",
      subtitle: "Decisões guiadas por dados",
      icon: BarChart3,
      gradient: "from-indigo-500 to-purple-600",
      title: "Vê resultados em dashboard",
      description: "Acompanha marcações, serviços mais rentáveis e clientes fiéis num só ecrã.",
      tags: ["Serviços mais rentáveis", "Clientes recorrentes"],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Função para calcular posição de cada card na roda
  const getCardPosition = (index: number) => {
    const totalCards = steps.length;
    const relativeIndex = (index - activeIndex + totalCards) % totalCards;
    
    // Posições na roda (círculo vertical) - MAIS ESPAÇAMENTO
    const positions = [
      { y: 0, scale: 1, opacity: 1, zIndex: 10, blur: 0 },        // Centro (ativo)
      { y: 250, scale: 0.75, opacity: 0.4, zIndex: 5, blur: 3 },  // Baixo (mais longe)
      { y: -250, scale: 0.75, opacity: 0.4, zIndex: 5, blur: 3 }, // Cima (mais longe)
    ];

    return positions[relativeIndex] || positions[0];
  };

  return (
    <section className="bg-white dark:bg-slate-900 px-6 py-24 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header - MAIS ESPAÇO */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            Tudo o que precisa, sem complicações
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
          >
            Em três passos simples: do primeiro contacto até aos resultados em dashboard.
          </motion.p>
        </div>

        {/* Wheel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-20 flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Passo anterior"
            >
              <ChevronUp className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Próximo passo"
            >
              <ChevronDown className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </button>
          </div>

          {/* Wheel Cards */}
          <div className="relative h-[650px] flex items-center justify-center" style={{ perspective: "1500px" }}>
            {steps.map((item, index) => {
              const Icon = item.icon;
              const position = getCardPosition(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  animate={{
                    y: position.y,
                    scale: position.scale,
                    opacity: position.opacity,
                    filter: `blur(${position.blur}px)`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  style={{
                    position: 'absolute',
                    zIndex: position.zIndex,
                  }}
                  className="w-full max-w-3xl px-4"
                  onClick={() => !isActive && setActiveIndex(index)}
                >
                  <div className={`
                    rounded-3xl border-2 bg-white dark:bg-slate-900 
                    shadow-2xl transition-all duration-300 px-8 py-10
                    ${isActive 
                      ? 'border-cyan-400 dark:border-cyan-600 cursor-default' 
                      : 'border-slate-200 dark:border-slate-800 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700'
                    }
                  `}>
                    {/* Icon & Step Label */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-xl`}>
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {item.step}
                        </div>
                        <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-slate-600 dark:text-slate-300 mb-6">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl"
                      >
                        <span className="text-lg font-bold text-white">
                          0{index + 1}
                        </span>
                      </motion.div>
                    )}

                    {/* Gradient overlay for active card */}
                    {isActive && (
                      <div className={`
                        absolute inset-0 rounded-3xl opacity-5 
                        bg-gradient-to-br ${item.gradient}
                        pointer-events-none
                      `} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === activeIndex 
                    ? 'w-8 bg-cyan-600 dark:bg-cyan-500' 
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }
                `}
                aria-label={`Ir para passo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}