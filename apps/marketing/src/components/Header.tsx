import { Button } from "@krondle/common/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../providers/theme-provider";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Krondle
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link to="/features" className="text-sm font-semibold hover:text-primary">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-semibold hover:text-primary">
            Preços
          </Link>
          <Link to="/howitworks" className="text-sm font-semibold hover:text-primary">
            Como Funciona
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button>

          <Button 
            asChild
            className="bg-gradient-to-r from-cyan-600 to-blue-600"
          >
            <Link to="/agendar-demo">
              Agendar Reunião
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-3 pt-2">
            <Link 
              to="/features" 
              className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/howitworks" 
              className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              to="/agendar-demo"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600">
                Agendar Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}