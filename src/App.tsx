import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import ActiveProtection from "./pages/ActiveProtection";
import PayoutNotification from "./pages/PayoutNotification";
import PlanSelection from "./pages/PlanSelection";
import WeeklyUpdate from "./pages/WeeklyUpdate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = () => {
  const location = useLocation();
  const isOnboarding = location.pathname === "/";

  if (isOnboarding) {
    return (
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b border-border px-4 bg-card/50 backdrop-blur-sm sticky top-0 z-30">
            <SidebarTrigger className="mr-3" />
            <span className="text-sm font-medium text-muted-foreground">
              {location.pathname === "/dashboard" && "Dashboard"}
              {location.pathname === "/protection" && "Active Protection"}
              {location.pathname === "/plans" && "Plan Selection"}
              {location.pathname === "/payout" && "Payouts"}
              {location.pathname === "/updates" && "Weekly Updates"}
            </span>
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/protection" element={<ActiveProtection />} />
              <Route path="/payout" element={<PayoutNotification />} />
              <Route path="/plans" element={<PlanSelection />} />
              <Route path="/updates" element={<WeeklyUpdate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
