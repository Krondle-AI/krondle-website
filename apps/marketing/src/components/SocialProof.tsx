import { Building2, Star, Users } from "lucide-react";

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
          Confiado por PMEs em todo Portugal
        </p>
        
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
              <Users className="h-6 w-6 text-cyan-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900">500+</div>
            <div className="text-sm text-slate-600">Empresas Ativas</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
              <Building2 className="h-6 w-6 text-cyan-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900">50K+</div>
            <div className="text-sm text-slate-600">Marcações Automáticas</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
              <Star className="h-6 w-6 text-cyan-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900">4.9/5</div>
            <div className="text-sm text-slate-600">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
}