import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import MobileHeader from '../components/mobile/MobileHeader';
import MobileFooter from '../components/mobile/MobileFooter';
import ImageWithFallback from '../components/mobile/ImageWithFallback';
import useScrollToTop from '../hooks/useScrollToTop';

const MobileLivingCollection = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [collectionRef, collectionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Scroll to top on mount
  useScrollToTop();

  // Enable smooth scroll
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    
    return () => {
      document.body.style.scrollBehavior = '';
    };
  }, []);

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

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'furniture', label: 'Mobiliário' },
    { id: 'lighting', label: 'Iluminação' },
    { id: 'textiles', label: 'Têxteis' }
  ];

  const collectionItems = [
    {
      id: 1,
      title: 'Mesa de Centro Moderna',
      description: 'Peça central elegante com design contemporâneo, perfeita para espaços modernos.',
      category: 'furniture',
      price: '€2,500',
      reference: 'LC001',
      dimensions: '120 x 60 x 45 cm',
      material: 'Carvalho e Mármore',
      image: '/collection/118decacb6ffe5d21f1c734a8e162be57046640c.png'
    },
    {
      id: 2,
      title: 'Cadeira Ergonómica',
      description: 'Conforto e estilo unidos numa cadeira de design inovador e funcional.',
      category: 'furniture',
      price: '€450',
      reference: 'LC002',
      dimensions: '50 x 55 x 85 cm',
      material: 'Tecido e Metal',
      image: '/collection/2bb3522505a99644d0cacb75c0537b254d0ab96d.png'
    },
    {
      id: 3,
      title: 'Luminária Suspensa',
      description: 'Iluminação ambiente sofisticada que transforma qualquer espaço.',
      category: 'lighting',
      price: '€800',
      reference: 'LC003',
      dimensions: 'Ø 40 x 30 cm',
      material: 'Latão e Vidro',
      image: '/collection/32306a12f9bb56a6bb9160079475f34a2070f46c.png'
    },
    {
      id: 4,
      title: 'Sofá Modular',
      description: 'Versatilidade e conforto adaptáveis a diferentes configurações de sala.',
      category: 'furniture',
      price: '€3,200',
      reference: 'LC004',
      dimensions: '240 x 90 x 75 cm',
      material: 'Tecido Premium',
      image: '/collection/44f6520e85b7c9423698ff2af57fd65c5aef58b4.png'
    },
    {
      id: 5,
      title: 'Estante Minimalista',
      description: 'Arrumação inteligente com linhas limpas e design atemporal.',
      category: 'furniture',
      price: '€1,200',
      reference: 'LC005',
      dimensions: '180 x 40 x 200 cm',
      material: 'Carvalho Maciço',
      image: '/collection/59c8d0b05cd6b9fe92e7e95c5b71cf0c27a94655.png'
    },
    {
      id: 6,
      title: 'Mesa de Jantar',
      description: 'Peça central para momentos especiais, combinando função e elegância.',
      category: 'furniture',
      price: '€2,800',
      reference: 'LC006',
      dimensions: '200 x 100 x 75 cm',
      material: 'Nogueira e Metal',
      image: '/collection/791f25840274af9fad2fb0742c1ac07423e9dab9.png'
    },
    {
      id: 7,
      title: 'Candeeiro de Mesa',
      description: 'Iluminação focal elegante para ambientes íntimos.',
      category: 'lighting',
      price: '€280',
      reference: 'LC007',
      dimensions: 'Ø 25 x 45 cm',
      material: 'Cerâmica e Linho',
      image: '/collection/f0bf420c55565c254bdf33f976438b1cb6c3e5b7.png'
    },
    {
      id: 8,
      title: 'Tapete Artesanal',
      description: 'Peça única tecida à mão com padrões contemporâneos.',
      category: 'textiles',
      price: '€650',
      reference: 'LC008',
      dimensions: '200 x 300 cm',
      material: 'Lã Natural',
      image: '/collection/f2ff00004ecd435487f0c050105316b5f86b1567.png'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? collectionItems 
    : collectionItems.filter(item => item.category === selectedCategory);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
        <section ref={heroRef} className="pt-20 pb-16 bg-[#F2EDE7]">
          <div className="px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-josefin-sans uppercase text-4xl md:text-5xl text-[#413C36] mb-4 leading-tight">
                Living
              </h1>
              <h2 className="font-josefin-sans uppercase text-4xl md:text-5xl text-[#413C36] mb-6 font-light leading-tight">
                Collection
              </h2>
              <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light max-w-md mx-auto">
                Uma coleção exclusiva de peças cuidadosamente selecionadas para 
                transformar a sua casa num verdadeiro lar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white sticky top-20 z-30 border-b border-gray-100">
          <div className="px-6">
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 font-josefin-sans text-sm uppercase tracking-wide transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#A69E93] text-white'
                      : 'bg-gray-100 text-[#413C36] hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Grid */}
        <section ref={collectionRef} className="py-16 bg-white">
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={collectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openProductModal(item)}
                >
                  {/* Item Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                    <ImageWithFallback
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      fallbackClassName="w-full h-64 bg-[#F2EDE7] flex items-center justify-center rounded-lg"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-josefin-sans text-sm uppercase tracking-wide">
                        Ver Detalhes
                      </span>
                    </div>

                    {/* Reference Tag */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                      <span className="font-josefin-sans text-[#413C36] text-xs font-normal">
                        {item.reference}
                      </span>
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="text-center">
                    <h3 className="font-josefin-sans text-lg font-normal text-[#413C36] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-josefin-sans text-sm text-[#A69E93] font-light mb-2 uppercase tracking-wide">
                      {item.material}
                    </p>
                    <p className="font-josefin-sans text-xl text-[#413C36] font-light">
                      {item.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No items message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="font-josefin-sans text-lg text-[#413C36] font-light">
                  Nenhum item encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-[#A69E93]">
          <div className="px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-josefin-sans text-2xl font-normal text-white mb-4 uppercase">
                Interessado numa peça?
              </h3>
              <p className="font-josefin-sans text-base text-white/90 leading-relaxed font-light mb-8 max-w-md mx-auto">
                Entre em contacto connosco para mais informações sobre 
                disponibilidade, preços e encomendas personalizadas.
              </p>
              <button 
                onClick={() => navigate('/#contact')}
                className="inline-block bg-white text-[#A69E93] px-8 py-3 font-josefin-sans text-sm uppercase tracking-wide hover:bg-white/90 transition-colors duration-300"
              >
                Contactar
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <MobileFooter />

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg max-w-md mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="relative">
              <ImageWithFallback
                src={selectedProduct.image} 
                alt={selectedProduct.title}
                className="w-full h-64 object-cover rounded-t-lg"
                fallbackClassName="w-full h-64 bg-[#F2EDE7] flex items-center justify-center rounded-t-lg"
              />
              <button
                onClick={closeProductModal}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-[#413C36] hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded">
                <span className="font-josefin-sans text-[#413C36] text-sm font-normal">
                  {selectedProduct.reference}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="font-josefin-sans text-2xl font-normal text-[#413C36] mb-2">
                {selectedProduct.title}
              </h3>
              
              <p className="font-josefin-sans text-lg text-[#A69E93] font-light mb-4">
                {selectedProduct.price}
              </p>

              <p className="font-josefin-sans text-base text-[#413C36] leading-relaxed font-light mb-6">
                {selectedProduct.description}
              </p>

              {/* Product Details */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="font-josefin-sans text-sm uppercase text-[#A69E93] font-light tracking-wide mb-1">
                      Material
                    </h4>
                    <p className="font-josefin-sans text-base text-[#413C36]">
                      {selectedProduct.material}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-josefin-sans text-sm uppercase text-[#A69E93] font-light tracking-wide mb-1">
                      Dimensões
                    </h4>
                    <p className="font-josefin-sans text-base text-[#413C36]">
                      {selectedProduct.dimensions}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {
                    closeProductModal();
                    navigate('/#contact');
                  }}
                  className="w-full bg-[#A69E93] text-white py-3 px-6 font-josefin-sans text-sm uppercase tracking-wide hover:bg-[#413C36] transition-colors duration-300"
                >
                  Solicitar Informações
                </button>
                
                <button 
                  onClick={closeProductModal}
                  className="w-full border border-[#A69E93] text-[#A69E93] py-3 px-6 font-josefin-sans text-sm uppercase tracking-wide hover:bg-[#A69E93] hover:text-white transition-colors duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MobileLivingCollection;
