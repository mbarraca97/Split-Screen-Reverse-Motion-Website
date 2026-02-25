import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import ImageWithFallback from './ImageWithFallback';
import useScrollToTop from '../../hooks/useScrollToTop';
import { getProjectPageById, getRelatedProjects } from '../../data/projects';

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

  // Scroll to top on mount and when projectId changes
  useScrollToTop([projectId]);

  // Enable smooth scroll
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    
    return () => {
      document.body.style.scrollBehavior = '';
    };
  }, []);

  const project = getProjectPageById(projectId);
  const FEATURED_GALLERY_LIMIT = 8;
  const featuredGallery = project.gallery.slice(0, FEATURED_GALLERY_LIMIT);
  const extraGallery = project.gallery.slice(FEATURED_GALLERY_LIMIT);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [projectId]);

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
      (prevIndex + 1) % featuredGallery.length
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
                {project.details?.label || 'Detalhes técnicos'}
              </h3>
              <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light">
                {project.details?.text || ''}
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
                src={featuredGallery[currentImageIndex]} 
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
              {featuredGallery.map((_, index) => (
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
                {currentImageIndex + 1} / {featuredGallery.length}
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

        {/* Extra Gallery (remaining photos) */}
        {extraGallery.length > 0 && (
          <section className="py-16 bg-[#F2EDE7]">
            <div className="px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h3 className="font-josefin-sans text-xl uppercase text-[#413C36] mb-2 font-normal tracking-wide">
                  Mais fotografias
                </h3>
                <p className="font-josefin-sans text-sm text-[#413C36] font-light">
                  Galeria adicional
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {extraGallery.map((src, index) => (
                  <motion.div
                    key={`${src}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.05 }}
                    viewport={{ once: true }}
                    className="overflow-hidden shadow-md"
                  >
                    <ImageWithFallback
                      src={src}
                      alt={`${project.title} extra ${index + 1}`}
                      className="w-full h-40 object-cover"
                      fallbackClassName="w-full h-40 bg-white flex items-center justify-center"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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
              {getRelatedProjects(projectId, 2).map((relatedProject, index) => (
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
