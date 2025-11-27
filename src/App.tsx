import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
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

// Athlete
import AthleteLayout from './pages/AthleteDashboard/AthleteLayout';
import UserDashboard from './pages/AthleteDashboard/UserDashboard';
import WorkOutDashboard from './pages/AthleteDashboard/WorkOutMain/WorkOutDashboard';
import Workout from './pages/AthleteDashboard/WorkOutMain/WorkOut';
import Coaches from './pages/AthleteDashboard/WorkOutMain/Coaches';
import AddCoaches from './pages/AthleteDashboard/AddCoach';
import Chat from './pages/AthleteDashboard/AthleteChats';
import Setting from './pages/AthleteDashboard/Settings/Setting';
import Profile from './pages/AthleteDashboard/Settings/Profile';
// Coaches
import CoachesLayout from './pages/Coaches/CoachesLayout';
import CoachesHome from './pages/Coaches/CoachesHome';
import Atleti from './pages/Coaches/Atleti';
import CoachesChat from './pages/Coaches/CoachesChats';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* Normal Pages (NO SIDEBAR) */}
          <Route path='/' element={<Index />} />
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
          {/* Dashboard Layout (SIDEBAR ENABLED) */}
          <Route element={<AthleteLayout />}>
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/work-out-dashboard' element={<WorkOutDashboard />} />
            <Route
              path='/work-out-dashboard/work-out/:id'
              element={<Workout />}
            />
            <Route path='/work-out/:id/coaches' element={<Coaches />} />
            <Route path='/coaches/add-coach' element={<AddCoaches />} />
            <Route path='/athlete-chat' element={<Chat />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='/settings/profile' element={<Profile />} />
          </Route>
          {/* Dashboard Layout (SIDEBAR ENABLED) */}
          <Route element={<CoachesLayout />}>
            <Route path='/home' element={<CoachesHome />} />
            <Route path='/atleti' element={<Atleti />} />
            <Route path='/coaches-chat' element={<CoachesChat />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
