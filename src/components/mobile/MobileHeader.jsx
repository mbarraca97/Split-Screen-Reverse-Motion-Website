import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileHeader = ({ isMenuOpen, onToggleMenu, onNavigateToSection }) => {
  const [language, setLanguage] = useState('PT');

  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre nós' },
    { id: 'services', label: 'Serviços' },
    { id: 'projects', label: 'Projetos' },
    { id: 'team', label: 'Equipa' },
    { id: 'contact', label: 'Contactos' }
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'PT' ? 'EN' : 'PT');
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="font-josefin-sans text-xl font-normal uppercase text-[#413C36] leading-none">
              Causa
            </h1>
            <h2 className="font-josefin-sans text-xl font-light uppercase text-[#413C36] leading-none mt-[-2px]">
              Efeito
            </h2>
          </div>

          {/* Menu Button */}
          <button
            onClick={onToggleMenu}
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.div
              className={`w-6 h-0.5 bg-[#413C36] transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <motion.div
              className={`w-6 h-0.5 bg-[#413C36] transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <motion.div
              className={`w-6 h-0.5 bg-[#413C36] transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#A69E93]"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col justify-center items-center h-full px-8">
              {/* Logo in Menu */}
              <div className="mb-12">
                <h1 className="font-josefin-sans text-4xl font-normal uppercase text-white text-center leading-tight">
                  Causa
                </h1>
                <h2 className="font-josefin-sans text-4xl font-light uppercase text-white text-center leading-tight mt-[-8px]">
                  Efeito
                </h2>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col items-center space-y-6 mb-12">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavigateToSection(item.id)}
                    className="font-josefin-sans text-lg font-light uppercase text-white hover:text-white/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="font-josefin-sans text-sm text-white/80 hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className={language === 'PT' ? 'opacity-100' : 'opacity-50'}>PT</span>
                <span className="mx-2">|</span>
                <span className={language === 'EN' ? 'opacity-100' : 'opacity-50'}>EN</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
