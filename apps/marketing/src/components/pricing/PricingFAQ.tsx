"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Posso mudar de plano a qualquer momento?",
      answer: "Sim! Pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente e o valor é ajustado proporcionalmente."
    },
    {
      question: "Como mantêm os meus dados seguros?",
      answer: "Todos os dados são encriptados e armazenados de forma segura, seguindo padrões de segurança internacionais."
    },
    {
      question: "Há taxas de configuração ou custos escondidos?",
      answer: "Sim. Existe uma taxa de configuração de 50€ aplicada ao Plano Basic e ao Plano Pro. Esta taxa é isenta no plano Premium."
    },
    {
      question: "Como funciona o desconto anual?",
      answer: "Ao escolher o pagamento anual, obtém até 20% de desconto em relação ao pagamento mensal. O valor total é cobrado anualmente."
    },
    {
      question: "Posso cancelar a subscrição?",
      answer: "Sim, pode cancelar a qualquer momento. Não há contratos de permanência. Se cancelar, terá acesso ao serviço até ao fim do período já pago."
    },
    {
      question: "Que métodos de pagamento aceitam?",
      answer: "Aceitamos cartões de crédito/débito (Visa, Mastercard), Paypal e MBWay. Os pagamentos são processados de forma segura através do Stripe. -- INVENTEI"
    },
    {
      question: "Há suporte técnico incluído?",
      answer: "Sim! Todos os planos incluem suporte por email. Os planos Pro e Premium incluem suporte prioritário, e o Premium tem gestor de conta dedicado. -- CHAT"
    },
    {
      question: "O que acontece se exceder os limites do meu plano?",
      answer: "Será notificado quando se aproximar dos limites. Pode fazer upgrade para um plano superior a qualquer momento para continuar sem interrupções."
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Tire as suas dúvidas sobre preços e planos
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white border-2 border-slate-200 hover:border-cyan-500 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </div>

                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-slate-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="mailto:krondleai@gmail.com"
            className="text-cyan-600 hover:text-cyan-700 font-semibold"
          >
            Contacte-nos →
          </a>
        </motion.div>
      </div>
    </section>
  )
}