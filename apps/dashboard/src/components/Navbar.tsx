import { Button } from "@krondle/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@krondle/common/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import krondleLogo from "@/assets/krondle-logo.jpeg";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`transition-colors ${
        isActive(to)
          ? "text-primary font-semibold"
          : "text-foreground/80 hover:text-primary"
      }`}
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={krondleLogo} alt="Krondle" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/business-dashboard">Negócio</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
                Gestão <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem asChild>
                  <Link to="/agenda" className="cursor-pointer">
                    Agenda
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="cursor-pointer">
                    Serviços
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/workers" className="cursor-pointer">
                    Trabalhadores
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/clients" className="cursor-pointer">
                    Clientes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/inventory" className="cursor-pointer">
                    Inventário
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/reports">Relatórios</NavLink>
            <NavLink to="/notifications">Notificações</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Entrar
            </Button>
            <Button variant="hero" size="sm">
              Começar Grátis
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/business-dashboard">Negócio</NavLink>
            <NavLink to="/agenda">Agenda</NavLink>
            <NavLink to="/services">Serviços</NavLink>
            <NavLink to="/workers">Trabalhadores</NavLink>
            <NavLink to="/clients">Clientes</NavLink>
            <NavLink to="/inventory">Inventário</NavLink>
            <NavLink to="/reports">Relatórios</NavLink>
            <NavLink to="/notifications">Notificações</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
