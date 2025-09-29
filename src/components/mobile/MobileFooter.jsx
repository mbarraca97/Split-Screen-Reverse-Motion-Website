import { motion } from 'framer-motion';

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'LinkedIn', url: '#', icon: '💼' }
  ];

  const footerLinks = [
    { label: 'Sobre nós', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Serviços', href: '#services' },
    { label: 'Living Collection', href: '/living-collection' },
    { label: 'Contactos', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links like living-collection
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#413C36] text-white">
      <div className="px-6 py-16">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="font-josefin-sans text-3xl font-normal uppercase text-white leading-tight">
              Causa
            </h1>
            <h2 className="font-josefin-sans text-3xl font-light uppercase text-white leading-tight mt-[-4px]">
              Efeito
            </h2>

            <h1 className="font-josefin-sans text-3xl font-normal uppercase text-white leading-tight mt-[20px]">
              Causa
            </h1>
            <h2 className="font-josefin-sans text-3xl font-light uppercase text-white leading-tight mt-[-4px]">
              Living
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-kinta text-lg text-white/80 mb-8 max-w-xs mx-auto"
          >
            Da sua Causa Nasce o Nosso Design
          </motion.p>

          {/* Footer Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="font-josefin-sans text-sm uppercase text-white/70 hover:text-white transition-colors font-light tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>

      

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-2 mb-8"
          >
            <p className="font-josefin-sans text-sm text-white/70">
              <a href="mailto:hello@causaefeito.pt" className="hover:text-white transition-colors">
              geral@causaefeitodecoracao.pt
              </a>
            </p>
            <p className="font-josefin-sans text-sm text-white/70">
              <a href="tel:+351123456789" className="hover:text-white transition-colors">
              +351  22 339 4650
              </a>
            </p>
            <p className="font-josefin-sans text-sm text-white/70">
            R. de Mouzinho da Silveira 35, 4050-419 Porto
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
            <p className="font-josefin-sans text-xs text-white/50">
              © {currentYear} Causa Efeito. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <button className="font-josefin-sans text-xs text-white/50 hover:text-white/70 transition-colors">
                Política de Privacidade
              </button>
              <button className="font-josefin-sans text-xs text-white/50 hover:text-white/70 transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default MobileFooter;
