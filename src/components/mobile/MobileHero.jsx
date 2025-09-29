import { motion } from 'framer-motion';

const MobileHero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/sl1.png)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-josefin-sans uppercase text-6xl md:text-7xl text-white mb-4 leading-tight">
            Causa
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="font-josefin-sans text-lg text-white font-light uppercase tracking-wide">
            Interior Design Studio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="font-kinta text-2xl md:text-3xl text-white leading-relaxed max-w-sm mx-auto">
            Da sua Causa Nasce o Nosso Design
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center text-white/80">
          <div className="animate-bounce mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-josefin-sans text-xs uppercase tracking-wider">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default MobileHero;
