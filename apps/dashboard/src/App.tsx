import { Toaster } from "@krondle/common/components/ui/toaster";
import { Toaster as Sonner } from "@krondle/common/components/ui/sonner";
import { TooltipProvider } from "@krondle/common/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import BusinessDashboard from "./pages/BusinessDashboard";
import AgendaCalendar from "./pages/AgendaCalendar";
import ServicesManagement from "./pages/ServicesManagement";
import WorkersManagement from "./pages/WorkersManagement";
import ClientsManagement from "./pages/ClientsManagement";
import InventoryManagement from "./pages/InventoryManagement";
import AdvancedReports from "./pages/AdvancedReports";
import NotificationsCenter from "./pages/NotificationsCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/business-dashboard" element={<BusinessDashboard />} />
            <Route path="/agenda" element={<AgendaCalendar />} />
            <Route path="/services" element={<ServicesManagement />} />
            <Route path="/workers" element={<WorkersManagement />} />
            <Route path="/clients" element={<ClientsManagement />} />
            <Route path="/inventory" element={<InventoryManagement />} />
            <Route path="/reports" element={<AdvancedReports />} />
            <Route path="/notifications" element={<NotificationsCenter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
