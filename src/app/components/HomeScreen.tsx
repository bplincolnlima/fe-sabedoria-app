import { useState } from 'react';
import { Screen } from '../App';
import { DizimosCard } from './DizimosCard';
import { InstallInstructions } from './InstallInstructions';
import { Download } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  userName: string;
  projectCompleted: boolean;
}

export function HomeScreen({ onNavigate, userName, projectCompleted }: HomeScreenProps) {
  const [showInstallInstructions, setShowInstallInstructions] = useState(false);
  const cards = [
    // 1️⃣ HERO CARD - Projeto de Vida 2026 (quando NÃO completou)
    {
      id: 'quiz-familiar' as Screen,
      title: 'Projeto de Vida 2026',
      description: 'Identifique Desafios • Declare Vitórias',
      icon: '🎯',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      bgDark: 'from-gray-900 via-black to-gray-900',
      enabled: true,
      hero: !projectCompleted
    },
    // 2️⃣ Meu Projeto (tracking - quando completou)
    {
      id: 'my-project' as Screen,
      title: 'Meu Projeto de Vida 2026',
      description: 'Acompanhe suas vitórias',
      icon: '📊',
      gradient: 'from-yellow-600 via-amber-500 to-yellow-600',
      bgDark: 'from-gray-900 via-black to-gray-900',
      enabled: projectCompleted,
      tracking: true,
      hero: projectCompleted
    },
    // 3️⃣ Falar com Bispo - PRETO COM ACENTO DOURADO
    {
      id: 'whatsapp' as Screen,
      title: 'Falar com Bispo',
      description: 'WhatsApp direto',
      icon: '💬',
      gradient: 'from-yellow-700 to-amber-700',
      bgDark: 'from-gray-900 to-gray-800',
      enabled: true
    }
  ];

  const handleCardClick = (cardId: Screen) => {
    if (cardId === 'whatsapp') {
      window.open('https://wa.me/5567992055727', '_blank');
      return;
    }
    onNavigate(cardId);
  };

  return (
    <>
      {showInstallInstructions && (
        <InstallInstructions onClose={() => setShowInstallInstructions(false)} />
      )}
      
      <div className="min-h-screen bg-black p-6 animate-fade-in">
        {/* Botão de Instalação - Fixo no topo */}
        <button
          onClick={() => setShowInstallInstructions(true)}
          className="w-full mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition-transform"
        >
          <Download className="w-6 h-6" />
          <span className="text-lg">INSTALAR APP NA TELA INICIAL</span>
        </button>

        {/* Header Minimalista */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-white mb-2 tracking-tight">
            {userName.split(' ')[0]} 👋
          </h1>
          <p className="text-xl text-gray-500 font-medium">Escolha sua próxima ação</p>
        </div>

      <div className="space-y-6">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => card.enabled && handleCardClick(card.id)}
            disabled={!card.enabled}
            className={`w-full rounded-3xl transform transition-all duration-300 relative overflow-hidden group ${
              card.enabled ? 'hover:scale-[1.02] cursor-pointer active:scale-[0.98]' : 'opacity-40 cursor-not-allowed'
            } ${
              card.hero 
                ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-12 shadow-2xl shadow-amber-500/50' 
                : 'bg-gradient-to-br from-gray-900 to-black p-8 border-2 border-gray-800 hover:border-amber-500/50 shadow-xl'
            }`}
          >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Hero sparkles */}
            {card.hero && (
              <>
                <div className="absolute top-6 right-6 text-4xl animate-twinkle">✨</div>
                <div className="absolute bottom-6 left-6 text-4xl animate-twinkle delay-300">⭐</div>
              </>
            )}

            {/* Tracking badge - MINIMALISTA */}
            {card.tracking && (
              <div className="absolute top-6 right-6 bg-amber-400 text-black text-sm font-black px-4 py-2 rounded-full shadow-lg">
                ATIVO
              </div>
            )}
            
            <div className={`flex flex-col relative z-10 ${card.hero ? 'text-black' : 'text-white'}`}>
              {/* HERO LAYOUT - Dominante */}
              {card.hero ? (
                <div className="text-center">
                  <div className="text-7xl mb-6">{card.icon}</div>
                  <h2 className="text-5xl font-black mb-4 tracking-tight leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-2xl font-bold opacity-90 mb-6">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center space-x-3 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">💪</span>
                    <span className="text-lg font-bold">COMECE AGORA</span>
                  </div>
                </div>
              ) : (
                /* CARDS NORMAIS - Minimalistas */
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{card.icon}</div>
                      <div className="text-left">
                        <h2 className="text-3xl font-black mb-1 text-white">
                          {card.title}
                        </h2>
                        <p className="text-lg text-gray-400 font-medium">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    {card.enabled && (
                      <svg className="w-10 h-10 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </>
              )}
            </div>
          </button>
        ))}

        {/* Dízimos e Ofertas Card */}
        <DizimosCard />
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-amber-400 italic">
          "A sabedoria é mais valiosa que o ouro"
        </p>
        <p className="text-gray-500 mt-2">Provérbios 16:16</p>
      </div>
    </div>
    </>
  );
}
