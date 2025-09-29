import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileHeader from '../components/mobile/MobileHeader';
import MobileHero from '../components/mobile/MobileHero';
import MobileAbout from '../components/mobile/MobileAbout';
import MobileServices from '../components/mobile/MobileServices';
import MobileProjects from '../components/mobile/MobileProjects';
import MobileTeam from '../components/mobile/MobileTeam';
import MobileContact from '../components/mobile/MobileContact';
import MobileFooter from '../components/mobile/MobileFooter';

const MobileHomepage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scroll snapping and enable smooth scroll
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    
    return () => {
      document.body.style.scrollBehavior = '';
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MobileHeader 
        isMenuOpen={isMenuOpen} 
        onToggleMenu={toggleMenu}
        onNavigateToSection={scrollToSection}
      />
      
      <main>
        <MobileHero />
        <MobileAbout />
        <MobileServices />
        <MobileProjects />
        <MobileTeam />
        <MobileContact />
      </main>
      
      <MobileFooter />
    </div>
  );
};

export default MobileHomepage;
