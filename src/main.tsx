import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/fonts.css'; // ← add this
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
