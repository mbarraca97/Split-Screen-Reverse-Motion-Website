import { useState } from 'react';
import LeftNavbar from '../components/LeftNavbar';
import RightNavbar from '../components/RightNavbar';
import FullPageMenu from '../components/FullPageMenu';
import ProductFooter from '../components/ProductFooter';

const LivingCollection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);

  // Product data - using the collection images
  const products = [
    {
      id: 1,
      name: 'Mesa de Centro Moderna',
      reference: 'LC001',
      description: 'Peça central elegante com design contemporâneo, perfeita para espaços modernos.',
      image: '/collection/118decacb6ffe5d21f1c734a8e162be57046640c.png'
    },
    {
      id: 2,
      name: 'Cadeira Ergonómica',
      reference: 'LC002',
      description: 'Conforto e estilo unidos numa cadeira de design inovador e funcional.',
      image: '/collection/2bb3522505a99644d0cacb75c0537b254d0ab96d.png'
    },
    {
      id: 3,
      name: 'Luminária Suspensa',
      reference: 'LC003',
      description: 'Iluminação ambiente sofisticada que transforma qualquer espaço.',
      image: '/collection/32306a12f9bb56a6bb9160079475f34a2070f46c.png'
    },
    {
      id: 4,
      name: 'Sofá Modular',
      reference: 'LC004',
      description: 'Versatilidade e conforto adaptáveis a diferentes configurações de sala.',
      image: '/collection/44f6520e85b7c9423698ff2af57fd65c5aef58b4.png'
    },
    {
      id: 5,
      name: 'Estante Minimalista',
      reference: 'LC005',
      description: 'Arrumação inteligente com linhas limpas e design atemporal.',
      image: '/collection/59c8d0b05cd6b9fe92e7e95c5b71cf0c27a94655.png'
    },
    {
      id: 6,
      name: 'Mesa de Jantar',
      reference: 'LC006',
      description: 'Peça central para momentos especiais, combinando função e elegância.',
      image: '/collection/791f25840274af9fad2fb0742c1ac07423e9dab9.png'
    },
    {
      id: 7,
      name: 'Sofá Modular',
      reference: 'LC004',
      description: 'Versatilidade e conforto adaptáveis a diferentes configurações de sala.',
      image: '/collection/44f6520e85b7c9423698ff2af57fd65c5aef58b4.png'
    },

  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleProductClick = (index) => {
    setSelectedProduct(index);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2EDE7' }}>
      {/* Navigation bars */}
      <div className="flex w-full">
        <div className="w-1/2">
          <LeftNavbar text="Causa" lightText="Living" bgColor="#F2EDE7" />
        </div>
        <div className="w-1/2">
          <RightNavbar bgColor="#F2EDE7" onMenuClick={handleMenuToggle} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex px-5 py-16 items-start overflow-hidden">
        {/* Left side - Title */}
        <div className="w-[200px] flex-shrink-0">
          <h1 className="font-kinta text-[40px] leading-tight" style={{ color: '#413C36' }}>
            LIVING COLLECTION 25
          </h1>
        </div>

        {/* Right side - Product Gallery */}
        <div className="flex-1 ml-16">
          <div className="flex gap-6 items-end overflow-x-auto pb-6 mb-4" style={{ scrollbarWidth: 'thin' }}>
            {products.map((product, index) => (
              <div key={product.id} className="relative flex-shrink-0">
                {/* Product Image */}
                <div
                  className={`bg-cover bg-center bg-no-repeat cursor-pointer transition-all duration-300 ${
                    selectedProduct === index
                      ? 'w-[480px] h-[580px] z-10 relative'
                      : 'w-[100px] h-[130px]'
                  }`}
                  style={{
                    backgroundImage: `url("${product.image}")`
                  }}
                  onClick={() => handleProductClick(index)}
                />

                {/* Product details for selected item */}
                {selectedProduct === index && (
                  <>
                    {/* Product description - top right */}
                    <div className="absolute top-0 right-[-250px] w-[200px]">
                      <div className="font-josefin-sans text-[14px] leading-relaxed" style={{ color: '#413C36' }}>
                        {product.description}
                      </div>
                    </div>

                    {/* Product info below image */}
                    <div className="absolute top-[590px] left-0 w-[480px]">
                      <div className="flex justify-between items-center mt-4">
                        {/* Product name - left */}
                        <div className="text-left">
                          <div className="font-josefin-sans text-[18px] font-bold" style={{ color: '#413C36' }}>
                            {product.name}
                          </div>
                        </div>
                        
                        {/* Reference - right */}
                        <div className="text-right">
                          <div className="font-josefin-sans text-[16px]" style={{ color: '#413C36' }}>
                            {product.reference}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="flex justify-center px-5 py-16">
        <div className="w-[500px] text-center">
          <h2 className="font-kinta text-[58px] leading-tight" style={{ color: '#413C36' }}>
            Inspired by Porto, Designed for the World.
          </h2>
        </div>
      </div>
      <div className="mx-5 h-px bg-black"></div>

      {/* Product Footer */}
      <ProductFooter bgColor="#F2EDE7" />

      {/* Full Page Menu */}
      <FullPageMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </div>
  );
};

export default LivingCollection;
