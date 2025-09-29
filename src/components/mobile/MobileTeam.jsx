import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MobileTeam = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'Fundadora & Designer Principal',
      description: 'Com mais de 15 anos de experiência em design de interiores, Ana lidera cada projeto com paixão e dedicação.',
      image: '/footer-efeito.png'
    },
    {
      name: 'João Santos',
      role: 'Arquiteto & Designer',
      description: 'Especialista em soluções espaciais inovadoras, João combina funcionalidade com estetica única.',
      image: '/footer-living.png'
    }
  ];

  return (
    <section id="team" ref={ref} className="py-20 bg-[#F2EDE7]">
      <div className="px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-josefin-sans uppercase text-4xl md:text-5xl text-[#413C36] mb-4 leading-tight">
            Equipa
          </h2>
          <p className="font-josefin-sans text-sm uppercase text-[#413C36] font-light tracking-wide">
            Conheça-nos
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Photo */}
              <div className="w-full md:w-1/2 max-w-sm">
                <div className="relative overflow-hidden shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-2 uppercase">
                  {member.name}
                </h3>
                <p className="font-josefin-sans text-sm uppercase text-[#A69E93] font-light tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm p-8">
            <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-6 uppercase">
              A Nossa Filosofia
            </h3>
            <p className="font-kinta text-xl md:text-2xl text-[#413C36] leading-relaxed max-w-lg mx-auto mb-6">
              "Cada espaço conta uma história. A nossa missão e ajudar a contar a sua."
            </p>
            <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light max-w-md mx-auto">
              Acreditamos que o design de interiores vai alem da estetica. e sobre criar 
              ambientes que promovem bem-estar, funcionalidade e refletem a personalidade 
              única de cada cliente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileTeam;
