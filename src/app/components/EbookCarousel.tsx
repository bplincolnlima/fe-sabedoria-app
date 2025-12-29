import { useState, useEffect } from 'react';

interface Ebook {
  title: string;
  description: string;
  image: string;
  link: string;
  available: boolean;
}

export function EbookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ebooks = [
    {
      title: 'Restaurando Sua Identidade',
      description: 'Acessando a Sabedoria Milenar',
      image: 'https://images.unsplash.com/photo-1679891983964-c7544b221dcf?w=800&h=600&fit=crop',
      link: 'https://pay.kiwify.com.br/k7g4gaf',
      available: true
    },
    {
      title: 'Histórias Bíblicas',
      description: 'Fé e Sabedoria',
      image: 'https://images.unsplash.com/photo-1609656036445-e3f158ca97d5?w=800&h=600&fit=crop',
      link: 'https://pay.kiwify.com.br/gRmV8hJ',
      available: true
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ebooks.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [ebooks.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? ebooks.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ebooks.length);
  };

  const handleComprar = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border-2 border-gray-800 shadow-2xl overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black border-2 border-gray-800 hover:border-amber-500/50 text-amber-400 rounded-full p-3 shadow-xl transition-all hover:scale-110"
          aria-label="Anterior"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black border-2 border-gray-800 hover:border-amber-500/50 text-amber-400 rounded-full p-3 shadow-xl transition-all hover:scale-110"
          aria-label="Próximo"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* E-book Content */}
        <div className="px-12">
          {/* Capa do E-book */}
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl z-10" />
            <img
              src={ebooks[currentIndex].image}
              alt={ebooks[currentIndex].title}
              className="w-full h-80 object-cover rounded-2xl shadow-2xl transition-transform group-hover:scale-[1.02]"
            />
            
            {/* Badge Premium */}
            <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-black flex items-center space-x-2 shadow-xl">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>PREMIUM</span>
            </div>

            {/* Info do E-book sobreposta */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <p className="text-3xl font-black mb-2 drop-shadow-lg">{ebooks[currentIndex].title}</p>
              <p className="text-lg font-bold text-amber-300 drop-shadow-lg">{ebooks[currentIndex].description}</p>
            </div>
          </div>

          {/* Botão Comprar */}
          <button
            onClick={() => handleComprar(ebooks[currentIndex].link)}
            className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-5 rounded-2xl shadow-xl hover:from-amber-500 hover:to-yellow-600 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-2xl font-black">COMPRAR AGORA</span>
            </div>
          </button>

          {/* Counter */}
          <div className="text-center text-gray-500 text-sm font-bold mt-4">
            {currentIndex + 1} de {ebooks.length}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {ebooks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-500' 
                  : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Ver e-book ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
