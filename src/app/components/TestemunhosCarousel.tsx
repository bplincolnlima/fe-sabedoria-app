import { useState, useEffect } from 'react';
import testemunho1 from 'figma:asset/33a77bab01a7b94970adf03a3b9dca01cc250db6.png';
import testemunho2 from 'figma:asset/218afb340bb581b24b3fb65d4c0db373069b2280.png';
import testemunho3 from 'figma:asset/3ccaf9fac9717d0c4a7e165b0187ed63bd01a3cd.png';
import testemunho4 from 'figma:asset/94c975ef55ad69621dd9d901aac4ae040d2a1567.png';
import testemunho5 from 'figma:asset/7e628b868be7b17428c655a613c798dd811376c4.png';
import testemunho6 from 'figma:asset/52af6ec2c4e7db9b12ce0011b1e1cf775ea508dc.png';

interface Testemunho {
  nome: string;
  categoria: string;
  image: string;
  alt: string;
}

export function TestemunhosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testemunhos: Testemunho[] = [
    {
      nome: 'Samara',
      categoria: 'Bênção Financeira',
      image: testemunho1,
      alt: 'Testemunho de Samara - Conseguiu trocar o carro'
    },
    {
      nome: 'Márcia',
      categoria: 'Milagre Financeiro',
      image: testemunho2,
      alt: 'Testemunho de Márcia - Recebeu 2 bênçãos do banco'
    },
    {
      nome: 'Juliana Dias',
      categoria: 'Portas Abertas',
      image: testemunho3,
      alt: 'Testemunho de Juliana Dias - Filha conseguiu emprego e libertação do Kevin'
    },
    {
      nome: 'Elisangela',
      categoria: 'Vitória Conquistada',
      image: testemunho4,
      alt: 'Testemunho de Elisangela - Passou no exame de direção e Deus honrou nas campanhas'
    },
    {
      nome: 'Josefa',
      categoria: 'Cura Milagrosa',
      image: testemunho5,
      alt: 'Testemunho de Josefa - Curada de dores e operação milagrosa'
    },
    {
      nome: 'Débora',
      categoria: 'Bênção Recebida',
      image: testemunho6,
      alt: 'Testemunho de Débora - Recebeu carro, benção chegou'
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testemunhos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testemunhos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testemunhos.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testemunhos.length);
  };

  const handleEnviarTestemunho = () => {
    const mensagem = `Olá Bispo Lincoln! 🙏\n\nGostaria de compartilhar meu testemunho com você!\n\nQue Deus continue abençoando o ministério!`;
    const mensagemEncoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5567992055727?text=${mensagemEncoded}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border-2 border-gray-800 shadow-2xl">
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

        {/* Testemunho Content */}
        <div className="px-12">
          {/* Imagem REAL do Print WhatsApp */}
          <div className="bg-black border-2 border-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-6">
            <img
              src={testemunhos[currentIndex].image}
              alt={testemunhos[currentIndex].alt}
              className="w-full h-auto object-contain max-h-[600px]"
            />
          </div>

          {/* Info Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
                {testemunhos[currentIndex].nome.charAt(0)}
              </div>
              <div>
                <p className="font-black text-white text-xl">{testemunhos[currentIndex].nome}</p>
                <p className="text-sm text-gray-400 font-medium">{testemunhos[currentIndex].categoria}</p>
              </div>
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-black flex items-center space-x-2 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center text-gray-500 text-sm font-bold">
            {currentIndex + 1} de {testemunhos.length}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testemunhos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-500' 
                  : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Ver testemunho ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Botão Enviar Testemunho */}
      <button
        onClick={handleEnviarTestemunho}
        className="w-full mt-8 bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-6 rounded-3xl shadow-2xl hover:from-amber-500 hover:to-yellow-600 transform hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        <div className="flex items-center justify-center space-x-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
          <div className="text-left">
            <p className="text-2xl font-black">Enviar Meu Testemunho</p>
            <p className="text-lg font-bold opacity-90">Compartilhe sua vitória</p>
          </div>
        </div>
      </button>
    </div>
  );
}