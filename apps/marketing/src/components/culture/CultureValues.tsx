// apps/marketing/src/components/culture/CultureValues.tsx

"use client"

import { motion } from "framer-motion"
import { Heart, Zap, Users, Target, Sparkles, Award, LucideIcon } from "lucide-react"

interface Value {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

const values: Value[] = [
  {
    icon: Heart,
    title: "Cliente no Centro",
    description: " O sucesso do cliente, é o nosso sucesso, por isso as nossas decisões são a pensar nos nossos clientes",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Inovação Constante",
    description: "Atualizamos o Krondle regularmente com novas integrações, melhorias de IA e métricas mais avançadas.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "Espírito de Equipa",
    description: "Juntos somos mais fortes. Colaboração e respeito são a base do nosso trabalho.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Menos tempo ao telefone, mais marcações confirmadas.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Sparkles,
    title: "Simplicidade",
    description: "Tecnologia poderosa não precisa ser complicada. Tornamos o complexo simples.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Não nos contentamos com 'bom ou suficiente'. Somos obcecados com a excelência e vamos procurar sempre evoluir.",
    gradient: "from-pink-500 to-rose-600"
  }
]

interface CultureValuesProps {
  variant?: "gradient" | "default";
}

export function CultureValues({ variant = "default" }: CultureValuesProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Os Nossos Valores
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Princípios que nos guiam em tudo o que fazemos
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all hover:shadow-xl">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}