// apps/marketing/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import { LandingPage } from "./pages/LandingPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import FAQPage from "./pages/FAQPage";
import CulturePage from "./pages/CulturePage";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/chat/ChatWidget";
import { ChatUIHandle } from "./components/chat/ChatUI";

function App() {
  const chatRef = useRef<ChatUIHandle>(null);

  // Função para abrir o chat
  const openChat = () => {
    chatRef.current?.open();
  };

  // Custom event listener - permite abrir chat de qualquer componente
  useEffect(() => {
    const handleOpenChat = () => {
      openChat();
    };
    
    window.addEventListener('openChat', handleOpenChat);
    
    return () => {
      window.removeEventListener('openChat', handleOpenChat);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header openChat={openChat} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/como-funciona" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* ChatWidget sempre presente - floating no canto inferior direito */}
        <ChatWidget ref={chatRef} mode="prototype" />
      </div>
    </BrowserRouter>
  );
}

export default App;