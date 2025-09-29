import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MobileAbout = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-[#F2EDE7]">
      <div className="px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-josefin-sans uppercase text-4xl md:text-5xl text-[#413C36] mb-4 leading-tight">
            Efeito
          </h2>
          <p className="font-josefin-sans text-sm uppercase text-[#413C36] font-light tracking-wide">
            Based in Porto
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <img 
            src="/sl2.png" 
            alt="Efeito Studio" 
            className="w-64 h-80 object-cover shadow-lg"
          />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="font-kinta text-2xl md:text-3xl text-[#413C36] leading-relaxed max-w-md mx-auto">
            O Efeito é o seu conforto
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed text-center font-light">
            Somos um estúdio de design de interiores baseado no Porto, dedicado a criar espaços que 
            refletem a personalidade e necessidades dos nossos clientes. Cada projeto é uma jornada 
            única onde a sua causa se transforma no nosso design.
          </p>
        </motion.div>

        {/* Stats or Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-2">50+</h3>
            <p className="font-josefin-sans text-sm uppercase text-[#413C36] font-light tracking-wide">
              Projetos
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-2">10+</h3>
            <p className="font-josefin-sans text-sm uppercase text-[#413C36] font-light tracking-wide">
              Anos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAbout;
