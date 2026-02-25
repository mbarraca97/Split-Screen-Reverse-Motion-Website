import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';
import { buildProjectHref, getProjectsForProjectPages } from '../../data/projects';

const MobileProjects = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = getProjectsForProjectPages().map((p) => ({
    id: p.id,
    number: p.number,
    title: p.title,
    subtitle: p.subtitle,
    image: p.mainImage,
    href: buildProjectHref(p.id)
  }));

  const handleProjectClick = (href) => {
    navigate(href);
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#D7D0C6]">
      <div className="px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-josefin-sans uppercase text-4xl md:text-5xl text-[#413C36] mb-4 leading-tight">
            Projetos
          </h2>
          <p className="font-josefin-sans text-sm uppercase text-[#413C36] font-light tracking-wide">
            Os nossos trabalhos
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => handleProjectClick(project.href)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden shadow-lg mb-4">
                <ImageWithFallback
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  fallbackClassName="w-full h-64 bg-[#F2EDE7] flex items-center justify-center"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-josefin-sans text-sm uppercase tracking-wide">
                    Ver Projeto
                  </span>
                </div>

                {/* Project Number */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded">
                  <span className="font-josefin-sans text-[#413C36] text-sm font-normal">
                    {project.number}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="text-center">
                <h3 className="font-josefin-sans text-xl font-normal text-[#413C36] mb-1 uppercase">
                  {project.title}
                </h3>
                <p className="font-josefin-sans text-sm text-[#413C36] font-light uppercase tracking-wide">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => {/* Navigate to all projects page */}}
            className="inline-block border-2 border-[#413C36] text-[#413C36] px-8 py-3 font-josefin-sans text-sm uppercase tracking-wide hover:bg-[#413C36] hover:text-white transition-colors duration-300"
          >
            Ver Todos os Projetos
          </button>
        </motion.div>

        {/* Living Collection CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-white/50 backdrop-blur-sm p-8 text-center"
        >
          <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-4 uppercase">
            Living Collection
          </h3>
          <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light mb-6">
            Descubra a nossa coleção exclusiva de peças cuidadosamente selecionadas.
          </p>
          <button 
            onClick={() => navigate('/living-collection')}
            className="inline-block bg-[#A69E93] text-white px-8 py-3 font-josefin-sans text-sm uppercase tracking-wide hover:bg-[#413C36] transition-colors duration-300"
          >
            Explorar Coleção
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileProjects;
