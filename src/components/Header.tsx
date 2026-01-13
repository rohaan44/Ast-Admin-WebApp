import Logo from '@/assets/Logo.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import AppButton from '@/components/ui/landing_page/app_button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 mt-5'>
      <nav className='container-custom'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <a href='#home' className='flex-shrink-0'>
            <img src={Logo} alt='AST Logo' className='h-10 w-auto' />
          </a>

          {/* Desktop Navigation */}
          <div
            className='hidden lg:flex flex-1 mx-6 h-12 rounded-full items-center justify-around px-6  backdrop-blur-lg'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <NavItem href='#home' label='Casa' />
            <NavItem href='#allenati' label='Le nostre caratteristiche' />
            <NavItem href='#chisiamo' label='Prezzi' />
            <NavItem href='#storia' label='Contattaci' />
            <NavItem href='#contatti' label='Domande frequenti' />
          </div>

          {/* Desktop CTA */}
          <div className='hidden lg:block'>
            <AppButton label='Registrati' onClick={() => {}} />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className='lg:hidden text-white'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile + Tablet Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden py-5 space-y-5 border-t border-white/20 bg-background/80 backdrop-blur-xl mt-2 rounded-xl p-5'>
            <MobileItem
              href='#home'
              label='Casa'
              close={() => setMobileMenuOpen(false)}
            />
            <MobileItem
              href='#allenati'
              label='Le nostre caratteristiche'
              close={() => setMobileMenuOpen(false)}
            />
            <MobileItem
              href='#chisiamo'
              label='Prezzi'
              close={() => setMobileMenuOpen(false)}
            />
            <MobileItem
              href='#storia'
              label='Contattaci'
              close={() => setMobileMenuOpen(false)}
            />
            <MobileItem
              href='#contatti'
              label='Domande frequenti'
              close={() => setMobileMenuOpen(false)}
            />

            <AppButton
              label='Registrati'
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

/* Desktop Nav Item */
const NavItem = ({ href, label }: any) => (
  <a
    href={href}
    className='text-white font-normal hover:font-semibold hover:text-primary transition-all'
  >
    {label}
  </a>
);

/* Mobile/Tablet Nav Item */
const MobileItem = ({ href, label, close }: any) => (
  <a
    href={href}
    onClick={close}
    className='block text-white text-lg font-medium hover:text-primary transition-colors'
  >
    {label}
  </a>
);

export default Header;
