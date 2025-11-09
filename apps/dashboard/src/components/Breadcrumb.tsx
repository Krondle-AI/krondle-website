import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    "business-dashboard": "Dashboard de Negócio",
    "agenda": "Agenda",
    "services": "Serviços",
    "workers": "Trabalhadores",
    "clients": "Clientes",
    "inventory": "Inventário",
    "reports": "Relatórios",
    "notifications": "Notificações",
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 animate-fade-in">
      <Link 
        to="/" 
        className="hover:text-primary transition-colors flex items-center gap-1"
      >
        <Home className="w-4 h-4" />
        Início
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label = breadcrumbNameMap[value] || value;

        return (
          <div key={to} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="font-medium text-foreground">{label}</span>
            ) : (
              <Link to={to} className="hover:text-primary transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
