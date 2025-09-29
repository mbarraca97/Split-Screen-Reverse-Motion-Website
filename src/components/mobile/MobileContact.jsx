import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const MobileContact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@causaefeito.pt',
      link: 'mailto:hello@causaefeito.pt'
    },
    {
      label: 'Telefone',
      value: '+351 123 456 789',
      link: 'tel:+351123456789'
    },
    {
      label: 'Morada',
      value: 'Rua do Design, 123\n4000-000 Porto',
      link: null
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-[#A69E93]">
      <div className="px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-josefin-sans uppercase text-4xl md:text-5xl text-white mb-4 leading-tight">
            Contactos
          </h2>
          <p className="font-josefin-sans text-sm uppercase text-white/80 font-light tracking-wide">
            Vamos conversar
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <h3 className="font-josefin-sans text-sm uppercase text-white/80 font-light tracking-wide mb-2">
                {info.label}
              </h3>
              {info.link ? (
                <a 
                  href={info.link}
                  className="font-josefin-sans text-lg text-white hover:text-white/80 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="font-josefin-sans text-lg text-white whitespace-pre-line">
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm p-8"
        >
          <h3 className="font-josefin-sans text-xl uppercase text-white mb-6 text-center font-light tracking-wide">
            Envie-nos uma mensagem
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nome *"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 font-josefin-sans"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 font-josefin-sans"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Telefone"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 font-josefin-sans"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mensagem *"
                required
                rows="5"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none font-josefin-sans"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-white text-[#A69E93] py-3 px-6 font-josefin-sans text-sm uppercase tracking-wide hover:bg-white/90 transition-colors duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-kinta text-xl md:text-2xl text-white leading-relaxed max-w-md mx-auto">
            "Da sua Causa Nasce o Nosso Design"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileContact;
