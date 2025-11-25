import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import NotFound from './pages/NotFound';
import Register from './pages/Register/Register';
import SingIn from './pages/Register/SingIn';
import Otp from './pages/Register/Otp';
import GenderSelection from './pages/Register/GenderSelect';
import DateOfBirth from './pages/Register/HeightAndWeight';
import FitnessGoal from './pages/Register/FitnessGoal';
import Payment1 from './pages/Register/payment/Payment1';
import Payment2 from './pages/Register/payment/Payment2';
import Payment3 from './pages/Register/payment/Payment3';
import Payment4 from './pages/Register/payment/Payment4';
import Academy from './pages/admin/Academy';
import Athletes from './pages/admin/Athletes';
import Trainers from './pages/admin/Trainers';
import Plans from './pages/admin/Plans';
import Settings from './pages/admin/Settings';
// import { Settings } from 'lucide-react';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/athletes" element={<Athletes />} />
          <Route path="/admin/trainers" element={<Trainers />} />
          <Route path="/admin/academy" element={<Academy />} />
          <Route path="/admin/plans" element={<Plans />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path='/register' element={<Register />} />
          <Route path='/singin' element={<SingIn />} />
          <Route path='/otp-verification' element={<Otp />} />
          <Route path='/gender' element={<GenderSelection />} />
          <Route path='/height-weight' element={<DateOfBirth />} />
          <Route path='/fitness-goal' element={<FitnessGoal />} />
          <Route path='/payment1' element={<Payment1 />} />
          <Route path='/payment2' element={<Payment2 />} />
          <Route path='/payment3' element={<Payment3 />} />
          <Route path='/payment4' element={<Payment4 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
