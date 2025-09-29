import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import FullPageMenu from './FullPageMenu';
import ProductFooter from './ProductFooter';

const ProjectTemplate = ({ project }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Default project data for demo
  const defaultProject = {
    id: 1,
    title: 'Villa Marina',
    mainImage: '/project1-1.png',
    labels: {
      left: { title: 'Location', value: 'Porto' },
      right: [
        { title: 'Type', value: 'Apartamento' },
        { title: 'Category', value: 'Residencial' },
        { title: 'Year', value: '2024' },
        { title: 'Area', value: '150m²' }
      ]
    },
    description: {
      title: 'Projeto Vivenda C E25',
      text: 'Uma abordagem contemporânea à arquitetura residencial, combinando funcionalidade e estetica moderna. Este projeto exemplifica a nossa filosofia de design centrada na qualidade de vida e sustentabilidade ambiental.'
    },
    gallery: ['/project1-1.png', '/project1-2.png', '/project1-3.png'],
    details: {
      label: 'Detalhes Tecnicos',
      text: 'Construção com materiais de alta qualidade, sistema de climatização eficiente, iluminação LED integrada e acabamentos premium em toda a residência.'
    }
  };

  const currentProject = project || defaultProject;

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % currentProject.gallery.length
    );
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2EDE7' }}>
      {/* Navigation bars */}
      <div className="flex w-full">
        <div className="w-1/2">
          <LeftNavbar text="Causa" lightText="Efeito" bgColor="#F2EDE7" />
        </div>
        <div className="w-1/2">
          <RightNavbar bgColor="#F2EDE7" onMenuClick={handleMenuToggle} />
        </div>
      </div>

      {/* Main image with padding */}
      <div className="px-5">
        <div 
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ 
            height: '500px',
            backgroundImage: `url(${currentProject.mainImage})`
          }}
        />
      </div>

      {/* Labels row */}
      <div className="px-5 pt-16 pb-16 flex justify-between items-start">
        {/* Left aligned label */}
        <div className="text-left">
          <div style={{ color: '#A69E93', fontSize: '14px' }} className="font-josefin-sans uppercase">
            {currentProject.labels.left.title}
          </div>
          <div style={{ color: '#413C36', fontSize: '14px' }} className="font-josefin-sans uppercase">
            {currentProject.labels.left.value}
          </div>
        </div>

        {/* Right aligned labels */}
        <div className="flex gap-8">
          {currentProject.labels.right.map((label, index) => (
            <div key={index} className="text-right">
              <div style={{ color: '#A69E93', fontSize: '14px' }} className="font-josefin-sans uppercase">
                {label.title}
              </div>
              <div style={{ color: '#413C36', fontSize: '14px' }} className="font-josefin-sans uppercase">
                {label.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title and text section */}
      <div className="px-5 mt-12 flex justify-start items-start gap-12 w-[1000px] ">
        <div className="font-kinta font-bold text-[58px] flex-shrink-0 w-[500px]" style={{ color: '#413C36' }}>
          {currentProject.description.title}
        </div>
        <div className="flex-1 font-josefin-sans text-base leading-relaxed text-justify w-[100px]" style={{ color: '#413C36' }}>
          {currentProject.description.text}
        </div>
      </div>

        {/* Black dividing line */}
        <div className="mx-5 h-px bg-black mt-12"></div>

      {/* Image slider */}
      <div className="flex justify-center mt-8">
        <div 
          className="bg-cover bg-center bg-no-repeat cursor-pointer"
          style={{ 
            height: '400px', 
            width: '650px',
            backgroundImage: `url(${currentProject.gallery[currentImageIndex]})`
          }}
          onClick={handleImageClick}
        />
      </div>

      {/* Black dividing line */}
      <div className="mx-5 h-px bg-black mt-8"></div>

      {/* Details section */}
      <div className="px-5 mt-16 pb-[200px]">
        <div className="font-josefin-sans font-bold text-sm mb-4 text-[16px] uppercase" style={{ color: '#413C36' }}>
          {currentProject.details.label}
        </div>
        <div className="font-josefin-sans text-sm leading-relaxed text-[32px] w-[800px] leading-tight" style={{ color: '#413C36' }}>
          {currentProject.details.text}
        </div>
      </div>

 

      {/* Bottom section */}
      <div className="px-5 flex w-full mb-16">
        {/* Left section - 50% width */}
        <div className="w-1/2 pr-8">
          {/* Text */}
          <div className="font-josefin-sans text-[16px] w-[500px] mb-8" style={{ color: '#413C36' }}>
            Este projeto representa uma evolução natural dos nossos princípios de design, integrando perfeitamente a funcionalidade contemporânea com a estetica atemporal. Cada elemento foi cuidadosamente considerado para criar um ambiente harmonioso.
          </div>
          
          {/* Two pairs of title/label stacked vertically */}
          <div className="space-y-6">
            {/* First pair */}
            <div>
              <div className="font-josefin-sans text-[18px] uppercase font-bold mb-2" style={{ color: '#413C36' }}>
                CLIENTE
              </div>
              <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
                Família Silva
              </div>
            </div>
            
            {/* Second pair */}
            <div>
              <div className="font-josefin-sans text-[18px] uppercase font-bold mb-2" style={{ color: '#413C36' }}>
                ARQUITETO
              </div>
              <div className="font-josefin-sans text-[18px]" style={{ color: '#413C36' }}>
                João Santos
              </div>
            </div>
          </div>
        </div>
        
        {/* Right section - 50% width */}
        <div className="w-1/2 flex gap-4">
          {/* First photo */}
          <div 
            className="bg-cover bg-center bg-no-repeat"
            style={{ 
              width: '300px',
              height: '400px',
              backgroundImage: `url(/project1-2.png)`
            }}
          />
          
          {/* Second photo */}
          <div 
            className="bg-cover bg-center bg-no-repeat"
            style={{ 
              width: '300px',
              height: '400px',
              backgroundImage: `url(/project1-3.png)`
            }}
          />
        </div>
      </div>

           {/* Newsletter section */}
           <div>
         {/* Top line */}
         <div className="mx-5 h-px bg-black"></div>
        
        <div className="px-5 py-16 flex w-full">
          {/* Left section - Title */}
          <div className="w-1/2">
            <h2 className="font-kinta text-[40px] text-left" style={{ color: '#413C36' }}>
              Mantenha-se informado
            </h2>
          </div>
          
          {/* Right section - Newsletter form */}
          <div className="w-1/2 flex items-center justify-end">
            <div className="flex flex-col space-y-6 mr-8">
              {/* Nome field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nome"
                  className="bg-transparent border-0 border-b border-black pb-2 text-[16px] font-josefin-sans focus:outline-none focus:border-black w-[250px]"
                  style={{ color: '#413C36' }}
                />
              </div>
              
              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-0 border-b border-black pb-2 text-[16px] font-josefin-sans focus:outline-none focus:border-black w-[250px]"
                  style={{ color: '#413C36' }}
                />
              </div>
            </div>
            
             {/* Enviar button */}
             <div className="flex items-center">
               <span className="font-josefin-sans text-[16px] mr-4" style={{ color: '#413C36' }}>
                 Enviar
               </span>
               <button 
                 className="flex items-center justify-center w-12 h-12 rounded-full hover:opacity-90 transition-opacity"
                 style={{ backgroundColor: '#413C36' }}
               >
                 <svg 
                   className="w-5 h-5" 
                   fill="none" 
                   stroke="white" 
                   viewBox="0 0 24 24"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
               </button>
             </div>
          </div>
        </div>
        
         {/* Bottom line */}
         <div className="mx-5 h-px bg-black"></div>
       </div>

      {/* Product Footer */}
      <ProductFooter bgColor="#F2EDE7" />

      {/* Full Page Menu */}
      <FullPageMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </div>
  );
};

export default ProjectTemplate;
