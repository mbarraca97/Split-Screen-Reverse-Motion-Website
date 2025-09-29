import { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackClassName = 'bg-[#F2EDE7] flex items-center justify-center',
  fallbackContent = null,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className={`${fallbackClassName} ${className}`} {...props}>
        {fallbackContent || (
          <div className="text-center p-4">
            <div className="text-[#413C36] mb-2">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto">
                <rect width="48" height="48" rx="4" fill="#F2EDE7" stroke="#A69E93" strokeWidth="1"/>
                <path d="M16 32L24 24L32 32" stroke="#413C36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="20" r="2" fill="#413C36"/>
              </svg>
            </div>
            <p className="text-xs text-[#A69E93] font-josefin-sans">
              Imagem não disponível
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`${fallbackClassName} ${className}`} {...props}>
          <div className="text-center p-4">
            <div className="animate-pulse">
              <div className="bg-[#A69E93] h-4 w-16 mx-auto rounded mb-2"></div>
              <div className="bg-[#A69E93] h-3 w-12 mx-auto rounded"></div>
            </div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </>
  );
};

export default ImageWithFallback;
