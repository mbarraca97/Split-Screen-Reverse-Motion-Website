import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import ImageWithFallback from './ImageWithFallback';

const MobileProjectTemplate = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [galleryRef, galleryInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [detailsRef, detailsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Enable smooth scroll
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    
    return () => {
      document.body.style.scrollBehavior = '';
    };
  }, []);

  // Project data based on projectId
  const getProjectData = (id) => {
    const projects = {
      'villa-marina': {
        id: 1,
        title: 'Villa Marina',
        subtitle: 'Residential Design',
        location: 'Porto',
        type: 'Apartamento',
        category: 'Residencial',
        year: '2024',
        area: '150m²',
        client: 'Família Silva',
        architect: 'João Santos',
        mainImage: '/project1-1.png',
        gallery: ['/project1-1.png', '/project1-2.png', '/project1-3.png'],
        description: {
          title: 'Projeto Villa Marina',
          text: 'Uma abordagem contemporânea à arquitetura residencial, combinando funcionalidade e estética moderna. Este projeto exemplifica a nossa filosofia de design centrada na qualidade de vida e sustentabilidade ambiental.'
        },
        details: 'Construção com materiais de alta qualidade, sistema de climatização eficiente, iluminação LED integrada e acabamentos premium em toda a residência.',
        fullDescription: 'Este projeto representa uma evolução natural dos nossos princípios de design, integrando perfeitamente a funcionalidade contemporânea com a estética atemporal. Cada elemento foi cuidadosamente considerado para criar um ambiente harmonioso que reflete o estilo de vida dos proprietários.'
      },
      'urban-loft': {
        id: 2,
        title: 'Urban Loft',
        subtitle: 'Contemporary Living',
        location: 'Lisboa',
        type: 'Loft',
        category: 'Residencial',
        year: '2024',
        area: '120m²',
        client: 'João & Maria',
        architect: 'Ana Silva',
        mainImage: '/project2-1.png',
        gallery: ['/project2-1.png', '/project2-2.png', '/project2-3.png'],
        description: {
          title: 'Urban Loft Project',
          text: 'Um espaço urbano transformado num lar moderno e funcional, onde cada metro quadrado foi optimizado para criar uma experiência de vida única no coração da cidade.'
        },
        details: 'Design open-space com zonas bem definidas, materiais industriais refinados, sistemas de armazenamento inteligentes e iluminação ambiente personalizada.',
        fullDescription: 'A transformação deste loft urbano demonstra como é possível criar um ambiente acolhedor e sofisticado num espaço industrial. A nossa abordagem focou-se na maximização da funcionalidade sem comprometer o conforto.'
      },
      'classic-apartment': {
        id: 3,
        title: 'Classic Apartment',
        subtitle: 'Timeless Elegance',
        location: 'Porto',
        type: 'Apartamento',
        category: 'Residencial',
        year: '2023',
        area: '180m²',
        client: 'Família Costa',
        architect: 'João Santos',
        mainImage: '/project3-1.png',
        gallery: ['/project3-1.png'],
        description: {
          title: 'Classic Apartment',
          text: 'Uma reinterpretação elegante do design clássico, combinando elementos tradicionais com toques contemporâneos para criar um ambiente atemporal e sofisticado.'
        },
        details: 'Restauro cuidadoso de elementos originais, mobiliário sob medida, tecidos nobres e iluminação cuidadosamente planeada para realçar a arquitetura existente.',
        fullDescription: 'Este projeto celebra a beleza da arquitetura clássica enquanto introduz elementos modernos que melhoram a funcionalidade e o conforto do espaço.'
      },
      'modern-office': {
        id: 4,
        title: 'Modern Office',
        subtitle: 'Corporate Design',
        location: 'Porto',
        type: 'Escritório',
        category: 'Comercial',
        year: '2024',
        area: '200m²',
        client: 'Tech Solutions Ltd.',
        architect: 'Ana Silva',
        mainImage: '/project4-1.png',
        gallery: ['/project4-1.png', '/project4-2.png'],
        description: {
          title: 'Modern Office Space',
          text: 'Um ambiente de trabalho moderno que promove a criatividade e produtividade, integrando espaços colaborativos com áreas de concentração individual.'
        },
        details: 'Mobiliário ergonómico, sistemas de iluminação inteligente, zonas de reunião flexíveis e tecnologia integrada para um ambiente de trabalho do futuro.',
        fullDescription: 'Este projeto demonstra como criar um ambiente de trabalho que inspira e motiva, combinando funcionalidade com design contemporâneo para maximizar o bem-estar dos colaboradores.'
      },
      'luxury-villa': {
        id: 5,
        title: 'Luxury Villa',
        subtitle: 'Premium Design',
        location: 'Cascais',
        type: 'Moradia',
        category: 'Residencial',
        year: '2023',
        area: '400m²',
        client: 'Família Premium',
        architect: 'João Santos',
        mainImage: '/project5-1.png',
        gallery: ['/project5-1.png', '/project5-2.png'],
        description: {
          title: 'Luxury Villa Design',
          text: 'Uma moradia de luxo que combina elegância clássica com conforto moderno, criando um refúgio sofisticado junto ao mar.'
        },
        details: 'Materiais premium, acabamentos de luxo, sistemas domóticos integrados e design paisagístico harmonioso com vista para o oceano.',
        fullDescription: 'Esta villa representa o ápice do design residencial, onde cada detalhe foi cuidadosamente considerado para criar uma experiência de vida incomparável.'
      },
      'contemporary-space': {
        id: 6,
        title: 'Contemporary Space',
        subtitle: 'Modern Living',
        location: 'Aveiro',
        type: 'Apartamento',
        category: 'Residencial',
        year: '2024',
        area: '90m²',
        client: 'Casal Jovem',
        architect: 'Ana Silva',
        mainImage: '/project5-2.png',
        gallery: ['/project5-2.png'],
        description: {
          title: 'Contemporary Living Space',
          text: 'Um espaço contemporâneo que maximiza a luz natural e cria uma sensação de amplitude, perfeito para um estilo de vida moderno.'
        },
        details: 'Design minimalista, paleta de cores neutras, soluções de armazenamento inteligentes e integração perfeita entre interior e exterior.',
        fullDescription: 'Este projeto mostra como criar um ambiente moderno e funcional mesmo em espaços compactos, priorizando a qualidade de vida e o bem-estar.'
      }
    };

    return projects[id] || projects['villa-marina'];
  };

  const project = getProjectData(projectId);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      navigate('/');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.gallery.length
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formData);
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MobileHeader 
        isMenuOpen={isMenuOpen} 
        onToggleMenu={toggleMenu}
        onNavigateToSection={scrollToSection}
      />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-20 pb-8 bg-[#F2EDE7]">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="font-josefin-sans uppercase text-3xl md:text-4xl text-[#413C36] mb-2 leading-tight">
                {project.title}
              </h1>
              <p className="font-josefin-sans text-sm uppercase text-[#A69E93] font-light tracking-wide">
                {project.subtitle}
              </p>
            </motion.div>

            {/* Main Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <ImageWithFallback
                src={project.mainImage} 
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover shadow-lg"
                fallbackClassName="w-full h-64 md:h-80 bg-[#F2EDE7] flex items-center justify-center shadow-lg"
              />
            </motion.div>

            {/* Project Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
            >
              <div>
                <p className="font-josefin-sans text-xs uppercase text-[#A69E93] font-light tracking-wide mb-1">
                  Localização
                </p>
                <p className="font-josefin-sans text-sm text-[#413C36]">
                  {project.location}
                </p>
              </div>
              <div>
                <p className="font-josefin-sans text-xs uppercase text-[#A69E93] font-light tracking-wide mb-1">
                  Tipo
                </p>
                <p className="font-josefin-sans text-sm text-[#413C36]">
                  {project.type}
                </p>
              </div>
              <div>
                <p className="font-josefin-sans text-xs uppercase text-[#A69E93] font-light tracking-wide mb-1">
                  Ano
                </p>
                <p className="font-josefin-sans text-sm text-[#413C36]">
                  {project.year}
                </p>
              </div>
              <div>
                <p className="font-josefin-sans text-xs uppercase text-[#A69E93] font-light tracking-wide mb-1">
                  Área
                </p>
                <p className="font-josefin-sans text-sm text-[#413C36]">
                  {project.area}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-16 bg-white">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-kinta text-2xl md:text-3xl text-[#413C36] mb-6 leading-tight">
                {project.description.title}
              </h2>
              <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light">
                {project.description.text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-josefin-sans text-lg uppercase text-[#413C36] mb-4 font-normal tracking-wide">
                Detalhes Técnicos
              </h3>
              <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light">
                {project.details}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Gallery */}
        <section ref={galleryRef} className="py-16 bg-[#F2EDE7]">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h3 className="font-josefin-sans text-xl uppercase text-[#413C36] mb-4 font-normal tracking-wide">
                Galeria
              </h3>
              <p className="font-josefin-sans text-sm text-[#413C36] font-light">
                Toque na imagem para navegar
              </p>
            </motion.div>

            {/* Main Gallery Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <ImageWithFallback
                src={project.gallery[currentImageIndex]} 
                alt={`${project.title} ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-80 object-cover shadow-lg cursor-pointer"
                fallbackClassName="w-full h-64 md:h-80 bg-[#F2EDE7] flex items-center justify-center shadow-lg cursor-pointer"
                onClick={handleImageClick}
              />
            </motion.div>

            {/* Gallery Thumbnails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-2 mb-4"
            >
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3  transition-colors duration-200 ${
                    currentImageIndex === index ? 'bg-[#413C36]' : 'bg-[#A69E93]'
                  }`}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="font-josefin-sans text-sm text-[#413C36] font-light">
                {currentImageIndex + 1} / {project.gallery.length}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section ref={detailsRef} className="py-16 bg-white">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light mb-8">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Client & Architect Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h4 className="font-josefin-sans text-lg uppercase text-[#413C36] mb-2 font-normal tracking-wide">
                  Cliente
                </h4>
                <p className="font-josefin-sans text-base text-[#413C36]">
                  {project.client}
                </p>
              </div>
              <div>
                <h4 className="font-josefin-sans text-lg uppercase text-[#413C36] mb-2 font-normal tracking-wide">
                  Arquiteto
                </h4>
                <p className="font-josefin-sans text-base text-[#413C36]">
                  {project.architect}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#A69E93]">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="font-kinta text-2xl md:text-3xl text-white mb-4 leading-tight">
                Mantenha-se informado
              </h3>
              <p className="font-josefin-sans text-base text-white/90 leading-relaxed font-light">
                Receba as nossas últimas novidades e projetos
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleFormSubmit}
              className="space-y-6 max-w-md mx-auto"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nome"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/50 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white font-josefin-sans"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/50 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white font-josefin-sans"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-[#A69E93] py-3 px-6 font-josefin-sans text-sm uppercase tracking-wide hover:bg-white/90 transition-colors duration-300"
              >
                Enviar
              </button>
            </motion.form>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-[#F2EDE7]">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="font-josefin-sans text-xl uppercase text-[#413C36] mb-4 font-normal tracking-wide">
                Outros Projetos
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Urban Loft', image: '/project2-1.png', href: '/projects/urban-loft' },
                { title: 'Classic Apartment', image: '/project3-1.png', href: '/projects/classic-apartment' },
                { title: 'Modern Office', image: '/project4-1.png', href: '/projects/modern-office' },
                { title: 'Luxury Villa', image: '/project5-1.png', href: '/projects/luxury-villa' },
                { title: 'Contemporary Space', image: '/project5-2.png', href: '/projects/contemporary-space' }
              ].filter(p => p.href !== `/projects/${projectId}`).slice(0, 2).map((relatedProject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="cursor-pointer group"
                  onClick={() => navigate(relatedProject.href)}
                >
                  <div className="relative overflow-hidden shadow-lg mb-4">
                    <ImageWithFallback
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      fallbackClassName="w-full h-48 bg-[#F2EDE7] flex items-center justify-center"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-josefin-sans text-sm uppercase tracking-wide">
                        Ver Projeto
                      </span>
                    </div>
                  </div>
                  <h4 className="font-josefin-sans text-lg font-normal text-[#413C36] text-center uppercase">
                    {relatedProject.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button 
                onClick={() => navigate('/#projects')}
                className="inline-block border-2 border-[#413C36] text-[#413C36] px-8 py-3 font-josefin-sans text-sm uppercase tracking-wide hover:bg-[#413C36] hover:text-white transition-colors duration-300"
              >
                Ver Todos os Projetos
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <MobileFooter />
    </div>
  );
};

export default MobileProjectTemplate;
