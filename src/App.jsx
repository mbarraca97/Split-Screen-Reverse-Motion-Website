import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import MobileHomepage from './pages/MobileHomepage';
import ProjectTemplate from './components/ProjectTemplate';
import MobileProjectTemplate from './components/mobile/MobileProjectTemplate';
import LivingCollection from './pages/LivingCollection';
import MobileLivingCollection from './pages/MobileLivingCollection';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isMobile ? <MobileHomepage /> : <Homepage />} />
        <Route path="/projects/:projectId" element={isMobile ? <MobileProjectTemplate /> : <ProjectTemplate />} />
        <Route path="/living-collection" element={isMobile ? <MobileLivingCollection /> : <LivingCollection />} />
      </Routes>
    </Router>
  );
}

export default App
