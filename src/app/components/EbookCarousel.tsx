import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ebookCover1 from 'figma:asset/d4b487ff26ee999f6963cf64a9c86723a1f7b37b.png';
import ebookCover2 from 'figma:asset/7d4f7e0c56037af9bc0e76e1b21f440d0c5e78b8.png';

export function EbookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ebooks = [
    {
      title: 'Restaurando Sua Identidade',
      description: 'Acessando a Sabedoria Milenar',
      image: ebookCover1,
      link: 'https://pay.kiwify.com.br/k7g4gaf',
      available: true
    },
    {
      title: 'Histórias Bíblicas',
      description: 'Fé e Sabedoria',
      image: ebookCover2,
      link: 'https://pay.kiwify.com.br/gRmV8hJ',
      available: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ebooks.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [ebooks.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ebooks.length) % ebooks.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ebooks.length);
  };

  const currentEbook = ebooks[currentIndex];

  const handleEbookClick = () => {
    if (currentEbook?.available && currentEbook?.link) {
      window.open(currentEbook.link, '_blank');
    }
  };

  // Previne erros se o array estiver vazio ou índice inválido
  if (!currentEbook) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-800 hover:border-amber-500/50 transition-all duration-300">
      {/* Carousel Content */}
      <div 
        className="relative overflow-hidden min-h-[320px] cursor-pointer group"
        onClick={handleEbookClick}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={currentEbook.image}
            alt={currentEbook.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">📚</span>
            {currentEbook.available && (
              <div className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-black">
                DISPONÍVEL
              </div>
            )}
          </div>
          
          <h3 className="text-4xl font-black mb-2 tracking-tight text-white leading-tight">{currentEbook.title}</h3>
          <p className="text-xl text-gray-300 mb-4 font-medium">{currentEbook.description}</p>
          
          {currentEbook.available && (
            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black px-6 py-4 rounded-2xl inline-flex items-center space-x-2 group-hover:from-amber-500 group-hover:to-yellow-600 transition-all shadow-xl w-fit">
              <span className="text-lg">ADQUIRIR AGORA</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls - MINIMALISTA */}
      <div className="bg-black border-t border-gray-800 px-6 py-4 flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-amber-500/50 shadow transition-all"
          aria-label="E-book anterior"
        >
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {ebooks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-amber-400 w-8' : 'bg-gray-700 w-2'
              }`}
              aria-label={`Ir para e-book ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-amber-500/50 shadow transition-all"
          aria-label="Próximo e-book"
        >
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}