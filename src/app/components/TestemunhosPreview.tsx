import { useState, useEffect } from 'react';
import testemunho1 from 'figma:asset/33a77bab01a7b94970adf03a3b9dca01cc250db6.png';
import testemunho2 from 'figma:asset/218afb340bb581b24b3fb65d4c0db373069b2280.png';
import testemunho3 from 'figma:asset/3ccaf9fac9717d0c4a7e165b0187ed63bd01a3cd.png';
import testemunho4 from 'figma:asset/94c975ef55ad69621dd9d901aac4ae040d2a1567.png';
import testemunho5 from 'figma:asset/7e628b868be7b17428c655a613c798dd811376c4.png';
import testemunho6 from 'figma:asset/52af6ec2c4e7db9b12ce0011b1e1cf775ea508dc.png';

export function TestemunhosPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testemunhos = [
    { nome: 'Samara', categoria: 'Bênção Financeira', image: testemunho1 },
    { nome: 'Márcia', categoria: 'Milagre Financeiro', image: testemunho2 },
    { nome: 'Juliana', categoria: 'Portas Abertas', image: testemunho3 },
    { nome: 'Elisangela', categoria: 'Vitória', image: testemunho4 },
    { nome: 'Josefa', categoria: 'Cura', image: testemunho5 },
    { nome: 'Débora', categoria: 'Bênção', image: testemunho6 }
  ];

  // Auto-rotate every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testemunhos.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [testemunhos.length]);

  return (
    <div className="flex items-center space-x-3 overflow-hidden">
      {/* Mini preview cards - show 3 at a time */}
      <div className="flex space-x-3">
        {[0, 1, 2].map((offset) => {
          const index = (currentIndex + offset) % testemunhos.length;
          const testemunho = testemunhos[index];
          
          return (
            <div
              key={index}
              className={`transition-all duration-500 ${
                offset === 0 ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
              }`}
            >
              <div className="bg-black border-2 border-gray-800 backdrop-blur-sm rounded-xl p-2 shadow-xl w-24 h-28 flex flex-col items-center justify-center">
                <img
                  src={testemunho.image}
                  alt={testemunho.nome}
                  className="w-full h-20 object-cover rounded-lg mb-1.5"
                />
                <p className="text-xs font-black text-amber-400 truncate w-full text-center">
                  {testemunho.nome}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Counter badge */}
      <div className="bg-amber-400 text-black text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
        +{testemunhos.length}
      </div>
    </div>
  );
}