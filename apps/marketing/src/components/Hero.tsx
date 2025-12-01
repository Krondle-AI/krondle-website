// apps/marketing/src/components/Hero.tsx
import { Button } from "@krondle/common/components/ui/button";
import { ArrowRight, Play, Sparkles, Calendar, TrendingUp, Clock, Zap, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-400/40 dark:bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-400/40 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-indigo-400/30 dark:from-cyan-500/15 dark:via-blue-500/15 dark:to-indigo-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Floating stat cards */}
     {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute top-32 left-8 hidden xl:block z-20"
      >
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">+247%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Marcações este mês</div>
            </div>
          </div>
        </div>
      </motion.div>*/}

     {/*<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute top-48 right-8 hidden xl:block z-20"
      >
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">2.3s</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Tempo de resposta</div>
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center mb-12">
          
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 dark:border-slate-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-900 dark:to-slate-900 px-4 py-1.5 text-xs font-medium text-cyan-700 dark:text-slate-400 mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
            </span>
            Automação inteligente para pequenos negócios
          </motion.div>

          {/* Giant headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.05]"
          >
            Nunca mais perca
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-slate-400 dark:to-slate-600 bg-clip-text text-transparent">
              uma marcação
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Agendamento automático via WhatsApp, Instagram e Gmail.
            <br />
            Disponível 24/7, sem intervenção humana.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 px-8 py-6 text-base font-medium rounded-xl transition-all"
            >
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Ver vídeo (2 min)
            </Button>
          </motion.div>

        </div>

        {/* DUAL MOCKUP: Desktop + Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-center">
          
          {/* Mobile WhatsApp Mockup (LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative bg-slate-900 dark:bg-slate-100 rounded-[3rem] p-2.5 shadow-2xl border-[3px] border-slate-800 dark:border-slate-300 w-72">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-3 bg-slate-900 dark:bg-slate-100 rounded-b-3xl z-10" />
              
              {/* Screen */}
              <div className="relative bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden h-[580px] flex flex-col">
                {/* WhatsApp Header */}
                <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3 flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">Barbearia Santos</div>
                    <div className="text-green-200 text-xs">online</div>
                  </div>
                </div>

                {/* WhatsApp Messages */}
                <div className="flex-1 p-4 space-y-2 bg-[#ECE5DD] dark:bg-slate-900 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-xs text-slate-900 dark:text-slate-100">Boa tarde! 👋</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#DCF8C6] dark:bg-cyan-900 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-xs text-slate-900 dark:text-white">Quero marcar corte!</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                      <p className="text-xs text-slate-900 dark:text-slate-100">Tenho 15h e 16h30. Qual prefere? 😊</p>
                    </div>
                  </motion.div>

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#DCF8C6] dark:bg-cyan-900 rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* WhatsApp Keyboard */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                  className="bg-[#F0F0F0] dark:bg-slate-800 px-3 py-2 flex items-center gap-2 flex-shrink-0 border-t border-slate-200 dark:border-slate-700"
                >
                  <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded-full px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                    Escrever mensagem...
                  </div>
                  <button className="p-2 rounded-full bg-[#128C7E] hover:bg-[#075E54] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Mockup (RIGHT) - ANALYTICS DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-8 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">app.krondle.com</span>
                  </div>
                </div>
                <div className="w-20" />
              </div>

              {/* Dashboard ANALYTICS */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
                
                {/* TOP STATS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="grid grid-cols-3 gap-3 mb-6"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                        <Clock className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Setup</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">5 min</div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Disponível</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                        <Sparkles className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Automático</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                  </div>
                </motion.div>

                {/* CHART SECTION */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm mb-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Marcações este mês</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">+32% vs mês anterior</p>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">247</div>
                  </div>
                  
                  {/* Simple bar chart */}
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[65, 45, 78, 56, 89, 72, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 rounded-t"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => (
                      <span key={day} className="text-xs text-slate-500 dark:text-slate-400">{day}</span>
                    ))}
                  </div>
                </motion.div>

                {/* BOTTOM STATS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                        <Users className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Clientes ativos</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">1,234</div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">+12% este mês</div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-green-500 to-teal-600">
                        <DollarSign className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Receita</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">3.458€</div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">+18% este mês</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="absolute -top-4 right-4 md:right-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 dark:from-white dark:to-white px-4 py-2 text-xs font-bold text-white dark:text-slate-900 shadow-lg z-10"
            >
              🤖 100% Automático
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}