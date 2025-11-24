import { useNavigate } from 'react-router-dom';
import AdminLogin from '@/components/AdminLogin';

export default function Admin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to dashboard after successful login
    navigate('/admin/dashboard');
  };

  return <AdminLogin onLogin={handleLogin} />;
}
