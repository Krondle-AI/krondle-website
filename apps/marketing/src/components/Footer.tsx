// apps/marketing/src/components/Footer.tsx
import { Calendar, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                Krondle
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Plataforma inteligente de agendamento com IA para pequenas e médias empresas.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Produto
            </h3>
            <ul className="space-y-3">
              {["Funcionalidades", "Preços", "API", "Documentação"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Empresa
            </h3>
            <ul className="space-y-3">
              {["Sobre Nós", "Blog", "Carreiras", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4" />
                <span>krondleai@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4" />
                <span>+351 XXX XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2025 Krondle. Projeto Académico ISCTE - Grupo 4
          </p>
        </div>
      </div>
    </footer>
  );
}