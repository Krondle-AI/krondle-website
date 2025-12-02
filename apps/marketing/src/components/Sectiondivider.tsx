// apps/marketing/src/components/SectionDivider.tsx
// OPÇÃO B: Logo com ornamentos laterais decorativos

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "gradient" | "dots";
}

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8">
            {/* Left ornament */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex items-center justify-end gap-2"
            >
              <div className="h-px w-full max-w-xs bg-gradient-to-l from-cyan-500/50 to-transparent" />
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  />
                ))}
              </div>
            </motion.div>

            {/* Center logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <img 
                src="/logos/krondle_light_logo_clear.png" 
                alt="Krondle"
                className="w-16 h-16 object-contain"
              />
            </motion.div>

            {/* Right ornament */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex items-center justify-start gap-2"
            >
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  />
                ))}
              </div>
              <div className="h-px w-full max-w-xs bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative py-12">
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"
        />
      </div>
    </div>
  );
}