// apps/marketing/src/components/Hero.tsx
import { Button } from "@krondle/common/components/ui/button";
import { ArrowRight, Play, Sparkles, Calendar, TrendingUp, Clock, Zap, Users, DollarSign } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax com mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const target = currentTarget as Window;
      const centerX = target.innerWidth / 2;
      const centerY = target.innerHeight / 2;
      
      mouseX.set((clientX - centerX) / 50);
      mouseY.set((clientY - centerY) / 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Mobile: COMEÇA RETO (0deg) → RODA sentido ANTI-HORÁRIO (positivo)
  const mobileRotateY = useTransform(scrollYProgress, [0, 0.3], [25, 0]);
  const mobileRotateX = useTransform(scrollYProgress, [0, 0.3], [12, 0]);
  const mobileScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  // Desktop: COMEÇA RETO (0deg) → RODA sentido ANTI-HORÁRIO (negativo)
  const desktopRotateY = useTransform(scrollYProgress, [0, 0.3], [-25, -0]);
  const desktopRotateX = useTransform(scrollYProgress, [0, 0.3], [12, 0]);
  const desktopScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900">
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
        
        {/* Floor reflection effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-100/50 to-transparent dark:from-slate-950/50 blur-2xl" />
      </div>

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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
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

        {/* DUAL MOCKUP: SUPER 3D E DRAMÁTICO */}
        <div className="relative w-full max-w-[1700px] mx-auto" style={{ perspective: "2000px" }}>
          <div className="flex items-center justify-center gap-12 lg:gap-24 px-4">
          
            {/* Mobile WhatsApp Mockup - ULTRA 3D */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 0 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative flex-shrink-0"
              style={{ 
                rotateY: mobileRotateY,
                rotateX: mobileRotateX,
                scale: mobileScale,
                x: smoothMouseX,
                y: smoothMouseY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[4rem] blur-3xl opacity-30 scale-110 -z-10" />
              
              <motion.div 
                className="relative bg-slate-900 dark:bg-slate-950 rounded-[4rem] p-[12px] border-[4px] border-slate-800 dark:border-slate-900 w-[360px]"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: `
                    60px 60px 120px rgba(0, 0, 0, 0.4),
                    -20px 20px 60px rgba(0, 0, 0, 0.25),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Phone notch - Dynamic Island com câmaras realistas */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-slate-900 dark:bg-slate-950 rounded-[20px] z-10 flex items-center justify-center px-3">
                  {/* Câmara frontal + Face ID */}
                  <div className="flex items-center gap-2">
                    {/* Câmara */}
                    <div className="w-[7px] h-[7px] rounded-full bg-slate-800 dark:bg-slate-900 ring-1 ring-slate-700/50" />
                    {/* Face ID / Sensor */}
                    <div className="w-[9px] h-[9px] rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-black" />
                  </div>
                </div>
                
                {/* Screen with inner glow */}
                <div 
                  className="relative bg-white dark:bg-slate-950 rounded-[3.5rem] overflow-hidden h-[720px] flex flex-col"
                  style={{
                    boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {/* WhatsApp Header */}
                  <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3.5 flex items-center gap-3 flex-shrink-0 shadow-md">
                    <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl ring-2 ring-white/20">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-[15px]">Barbearia Santos</div>
                      <div className="text-green-200 text-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                        online
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Messages */}
                  <div className="flex-1 p-5 space-y-2.5 bg-[#ECE5DD] dark:bg-slate-900 overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[75%] shadow-lg">
                        <p className="text-[13px] text-slate-900 dark:text-slate-100">Boa tarde! 👋</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#DCF8C6] dark:bg-cyan-900 rounded-xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%] shadow-lg">
                        <p className="text-[13px] text-slate-900 dark:text-white font-medium">Quero marcar corte!</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-lg">
                        <p className="text-[13px] text-slate-900 dark:text-slate-100">Tenho 15h e 16h30. Qual prefere? 😊</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.6 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#DCF8C6] dark:bg-cyan-900 rounded-xl rounded-tr-sm px-3.5 py-2.5 shadow-lg">
                        <div className="flex gap-1.5">
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-600"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-600"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-600"
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
                    className="bg-[#F0F0F0] dark:bg-slate-800 px-3 py-3 flex items-center gap-2.5 flex-shrink-0 border-t border-slate-200 dark:border-slate-700"
                  >
                    <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <div className="flex-1 bg-white dark:bg-slate-900 rounded-full px-4 py-2.5 text-[13px] text-slate-500 dark:text-slate-400 shadow-sm">
                      Escrever mensagem...
                    </div>
                    <button className="p-2.5 rounded-full bg-[#128C7E] hover:bg-[#075E54] transition-all shadow-lg hover:shadow-xl">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
                  </motion.div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[4rem] pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Desktop Mockup - ULTRA 3D */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 0 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.7, type: "spring" }}
              className="relative flex-shrink-0"
              style={{ 
                rotateY: desktopRotateY,
                rotateX: desktopRotateX,
                scale: desktopScale,
                x: smoothMouseX,
                y: smoothMouseY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-3xl opacity-25 scale-105 -z-10" />
              
              <div 
                className="relative rounded-3xl overflow-hidden border-[3px] border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 w-[800px]"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: `
                    60px 60px 120px rgba(0, 0, 0, 0.35),
                    -25px 25px 60px rgba(0, 0, 0, 0.2),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Browser header */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">app.krondle.com</span>
                    </div>
                  </div>
                  <div className="w-20" />
                </div>

                {/* Dashboard ANALYTICS */}
                <div className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
                  
                  {/* TOP STATS */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="grid grid-cols-3 gap-4 mb-8"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Setup</span>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">5 min</div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Disponível</span>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">24/7</div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Automático</span>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">100%</div>
                    </div>
                  </motion.div>

                  {/* CHART SECTION */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg mb-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">Marcações este mês</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">+32% vs mês anterior</p>
                      </div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">247</div>
                    </div>
                    
                    {/* Bar chart */}
                    <div className="flex items-end justify-between h-32 gap-3">
                      {[65, 45, 78, 56, 89, 72, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.6, delay: 1.4 + i * 0.1, type: "spring" }}
                          className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 rounded-t-lg shadow-lg"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-3">
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => (
                        <span key={day} className="text-sm text-slate-500 dark:text-slate-400 font-medium">{day}</span>
                      ))}
                    </div>
                  </motion.div>

                  {/* BOTTOM STATS */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Clientes ativos</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">1,234</div>
                      <div className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">+12% este mês</div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 shadow-lg">
                          <DollarSign className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Receita</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">3.458€</div>
                      <div className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">+18% este mês</div>
                    </div>
                  </motion.div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute -top-5 right-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 dark:from-white dark:to-white px-5 py-3 text-sm font-bold text-white dark:text-slate-900 shadow-2xl z-10"
              >
                🤖 100% Automático
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}