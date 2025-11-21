// apps/marketing/src/components/how-it-works/HowItWorksCTA.tsx

import { Button } from "@krondle/common";
import { ArrowRight, Rocket } from "lucide-react";

export function HowItWorksCTA() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Card principal com gradiente */}
                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white shadow-2xl">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">

                        {/* Lado esquerdo */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                                <Rocket className="h-4 w-4" />
                                <span>Setup em menos de 5 minutos</span>
                            </div>

                            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight">
                                Pronto para ver o Krondle
                                <br /> a trabalhar por si?
                            </h2>

                            <p className="mt-4 max-w-xl text-sm sm:text-base text-cyan-50/90">
                                Siga os passos da página ou experimente diretamente com o nosso assistente virtual.
                                Em poucos cliques terá um fluxo completo de marcações automatizado.
                            </p>
                        </div>

                        {/* Lado direito – CTAs */}
                        <div className="flex flex-col items-stretch lg:items-end gap-4">

                            <div className="flex flex-col gap-3 w-full max-w-xs">
                                {/* Botão principal – Agendar reunião */}
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-white/70 text-white bg-white/10 hover:bg-white/15"
                                >
                                    <a href="/agendar-demo">
                                        <span>Agendar reunião</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navegação cruzada igual aos outros CTAs */}
                <div className="mt-8 text-center text-sm sm:text-base">
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                        Ainda a explorar o Krondle?
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
                        <a
                            href="/features"
                            className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
                        >
                            Ver funcionalidades →
                        </a>

                        <a
                            href="/pricing"
                            className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
                        >
                            Ver preços →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}