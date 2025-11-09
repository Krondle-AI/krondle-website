export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Krondle</h3>
            <p className="mt-2 text-sm text-slate-400">
              Agendamento inteligente para PMEs
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Contacto</a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          © 2025 Krondle. ISCTE - Grupo 4
        </div>
      </div>
    </footer>
  );
}