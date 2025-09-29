import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MobileServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      title: 'Design de Interiores',
      description: 'Criamos espaços únicos que refletem a sua personalidade e estilo de vida.',
      image: '/sl3.png'
    },
    {
      title: 'Consultoria',
      description: 'Oferecemos orientação especializada para todas as fases do seu projeto.',
      image: '/sl4.png'
    },
    {
      title: 'Decoração',
      description: 'Selecionamos cuidadosamente cada elemento decorativo para harmonizar o espaço.',
      image: '/sl5.png'
    },
    {
      title: 'Living Collection',
      description: 'Uma coleção exclusiva de peças cuidadosamente selecionadas para o seu lar.',
      image: '/footer-living.png'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-josefin-sans uppercase text-4xl md:text-5xl text-[#413C36] mb-4 leading-tight">
            Serviços
          </h2>
          <p className="font-josefin-sans text-sm uppercase text-[#413C36] font-light tracking-wide">
            O que fazemos
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-[#A69E93] text-white px-8 py-3 font-josefin-sans text-sm uppercase tracking-wide hover:bg-[#413C36] transition-colors duration-300"
          >
            Fale Connosco
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileServices;
