import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from '@/pages/Index';
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from '@/pages/admin/Dashboard';
import Athletes from '@/pages/admin/Athletes';
import Trainers from '@/pages/admin/Trainers';
import Academy from '@/pages/admin/Academy';
import Plans from '@/pages/admin/Plans';
import Settings from '@/pages/admin/Settings';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/athletes" element={<Athletes />} />
          <Route path="/admin/trainers" element={<Trainers />} />
          <Route path="/admin/academy" element={<Academy />} />
          <Route path="/admin/plans" element={<Plans />} />
          <Route path="/admin/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
