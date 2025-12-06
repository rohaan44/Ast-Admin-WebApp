import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import NotFound from './pages/NotFound';
import Register from './pages/Register/Register';
import SingIn from './pages/Register/SingIn';
import Otp from './pages/Register/Otp';
import GenderSelection from './pages/Register/GenderSelect';
import DateOfBirth from './pages/Register/DateOfBirth';
import FitnessGoal from './pages/Register/FitnessGoal';
import Payment1 from './pages/Register/payment/Payment1';
import Payment2 from './pages/Register/payment/Payment2';
import Payment3 from './pages/Register/payment/Payment3';
import Payment4 from './pages/Register/payment/Payment4';
import LicenseRenewal from './pages/Register/payment/LicenseRenewal';
import Academy from './pages/admin/Academy';
import Athletes from './pages/admin/Athletes';
import Trainers from './pages/admin/Trainers';
import Plans from './pages/admin/Plans';
import Settings from './pages/admin/Settings';
// import { Settings } from 'lucide-react';

// Athlete
import AthleteLayout from './pages/AthleteDashboard/AthleteLayout';
import UserDashboard from './pages/AthleteDashboard/UserDashboard';
import WorkOutDashboard from './pages/AthleteDashboard/WorkOutMain/WorkOutDashboard';
import Workout from './pages/AthleteDashboard/WorkOutMain/WorkOut';
import Coaches from './pages/AthleteDashboard/WorkOutMain/Coaches';
import AddCoaches from './pages/AthleteDashboard/AddCoach';
import AthletaCheckIn from './pages/AthleteDashboard/CheckIn/AthletaCheckIn';
import CheckIn1 from './pages/AthleteDashboard/CheckIn/CheckIn1';
import CheckIn2 from './pages/AthleteDashboard/CheckIn/CheckIn2';
import CheckIn3 from './pages/AthleteDashboard/CheckIn/CheckIn3';
import CheckIn4 from './pages/AthleteDashboard/CheckIn/CheckIn4';
import Chat from './pages/AthleteDashboard/AthleteChats';
import AthleteSetting from './pages/AthleteDashboard/Settings/settings_athlete';
import AthleteProfile from './pages/AthleteDashboard/Settings/Profile';
import AthleteProfile1 from './pages/AthleteDashboard/Settings/Profile1';
import AthleteProfile2 from './pages/AthleteDashboard/Settings/Profile2';
import AthleteProfile3 from './pages/AthleteDashboard/Settings/Profile3';
// Coaches
import CoachesLayout from './pages/CoachesDashboard/CoachesLayout';
import CoachesHome from './pages/CoachesDashboard/CoachesHome';
import Atleti from './pages/CoachesDashboard/Atleti';
import CheckIn from './pages/CoachesDashboard/CheckIn/CheckIn';
import CoachesChat from './pages/CoachesDashboard/CoachesChats';
import CoachesPlans from './pages/CoachesDashboard/CoachesPlans';
import HeightWeightSelection from './pages/Register/HeightAndWeight';
import CoachesSetting from './pages/CoachesDashboard/Settings/settings_coaches';
import CoachesProfile from './pages/CoachesDashboard/Settings/Profile';
import CoachesProfile1 from './pages/CoachesDashboard/Settings/Profile1';
import CoachesProfile2 from './pages/CoachesDashboard/Settings/Profile2';
import CoachesProfile3 from './pages/CoachesDashboard/Settings/Profile3';
import CoachesProfile4 from './pages/CoachesDashboard/Settings/Profile4';
import CoachesProfile5 from './pages/CoachesDashboard/Settings/Profile5';
import CoachesProfile6 from './pages/CoachesDashboard/Settings/Profile6';
import TutorDashboard from './pages/tutor/dashboard';
import Corsi from './pages/tutor/courses/courses';
import Presentations from './pages/tutor/presentations/presentations';
import CertificationPage from './pages/tutor/certification/certification';
import SettingsTutor from './pages/tutor/settings/settings_tutor';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/athletes' element={<Athletes />} />
          <Route path='/admin/trainers' element={<Trainers />} />
          <Route path='/admin/academy' element={<Academy />} />
          <Route path='/admin/plans' element={<Plans />} />
          <Route path='/admin/settings' element={<Settings />} />
          <Route path='/register' element={<Register />} />
          <Route path='/singin' element={<SingIn />} />
          <Route path='/otp-verification' element={<Otp />} />
          <Route path='/gender' element={<GenderSelection />} />
          <Route path='/date-of-birth' element={<DateOfBirth />} />
          <Route path='/height-weight' element={<HeightWeightSelection />} />
          <Route path='/fitness-goal' element={<FitnessGoal />} />
          <Route path='/payment1' element={<Payment1 />} />
          <Route path='/payment2' element={<Payment2 />} />
          <Route path='/payment3' element={<Payment3 />} />
          <Route path='/payment4' element={<Payment4 />} />
          <Route path='/license-renewal' element={<LicenseRenewal />} />
          {/* Dashboard Layout (SIDEBAR ENABLED) */}
          <Route element={<AthleteLayout />}>
            <Route path='/athleta-user-dashboard' element={<UserDashboard />} />
            <Route
              path='/athleta-work-out-dashboard'
              element={<WorkOutDashboard />}
            />
            <Route
              path='/athleta-work-out-dashboard/work-out/:id'
              element={<Workout />}
            />
            <Route path='/athleta-work-out/:id/coaches' element={<Coaches />} />
            <Route path='/athleta/coaches/add-coach' element={<AddCoaches />} />
            <Route path='/athleta-checkin' element={<AthletaCheckIn />} />
            <Route path='/athleta-checkin-1' element={<CheckIn1 />} />
            <Route path='/athleta-checkin-2' element={<CheckIn2 />} />
            <Route path='/athleta-checkin-3' element={<CheckIn3 />} />
            <Route path='/athleta-checkin-4' element={<CheckIn4 />} />
            <Route path='/athlete-chat' element={<Chat />} />
            <Route path='/athleta/settings' element={<AthleteSetting />} />
            <Route
              path='/athleta/settings/profile'
              element={<AthleteProfile />}
            />
            <Route
              path='/athleta/settings/profile-1'
              element={<AthleteProfile1 />}
            />
            <Route
              path='/athleta/settings/profile-2'
              element={<AthleteProfile2 />}
            />
            <Route
              path='/athleta/settings/profile-3'
              element={<AthleteProfile3 />}
            />
          </Route>

          <Route element={<CoachesLayout />}>
            <Route path='/coaches-user-dashboard' element={<CoachesHome />} />
            <Route path='/coaches-atleti' element={<Atleti />} />
            <Route path='/coaches-checkin' element={<CheckIn />} />
            <Route path='/coaches-plans' element={<CoachesPlans />} />
            <Route path='/coaches-chat' element={<CoachesChat />} />
            <Route path='/coaches/settings' element={<CoachesSetting />} />
            <Route
              path='/coaches/settings/profile'
              element={<CoachesProfile />}
            />
            <Route
              path='/coaches/settings/profile-1'
              element={<CoachesProfile1 />}
            />
            <Route
              path='/coaches/settings/profile-2'
              element={<CoachesProfile2 />}
            />
            <Route
              path='/coaches/settings/profile-3'
              element={<CoachesProfile3 />}
            />
            <Route
              path='/coaches/settings/profile-4'
              element={<CoachesProfile4 />}
            />
            <Route
              path='/coaches/settings/profile-5'
              element={<CoachesProfile5 />}
            />
            <Route
              path='/coaches/settings/profile-6'
              element={<CoachesProfile6 />}
            />
          </Route>
          <Route path='/tutor/Dashbaord' element={<TutorDashboard />} />
          <Route path='/tutor/courses' element={<Corsi />} />
          <Route path='/tutor/presentations' element={<Presentations />} />
        <Route path='/tutor/certification' element={<CertificationPage />} />
        <Route path='/tutor/settings' element={< SettingsTutor/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
