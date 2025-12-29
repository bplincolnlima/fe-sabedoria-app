import { useEffect, useState } from 'react';

interface RewardCardProps {
  area: string;
  title: string;
  selectedOption: string;
  bibleVerse: string;
  bibleReference: string;
  propheticMessage: string;
  onContinue: () => void;
  color: string;
  icon: string;
}

export function RewardCard({
  title,
  selectedOption,
  bibleVerse,
  bibleReference,
  propheticMessage,
  onContinue,
  color,
  icon
}: RewardCardProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background stars/sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Celebration fireworks effect */}
      <div className="absolute top-10 left-10 text-6xl animate-celebration-float">✨</div>
      <div className="absolute top-20 right-10 text-5xl animate-celebration-float delay-300">🎆</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-celebration-float delay-500">⭐</div>
      <div className="absolute bottom-10 right-20 text-6xl animate-celebration-float delay-700">✨</div>

      <div className={`w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative z-10 transform transition-all duration-700 ${
        showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Icon and celebration */}
        <div className="text-center mb-6">
          <div className={`inline-block bg-gradient-to-br ${color} p-6 rounded-full mb-4 animate-scale-in shadow-lg`}>
            <span className="text-5xl">{icon}</span>
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <span className="text-3xl animate-bounce">🎉</span>
            <span className="text-3xl animate-bounce delay-100">✨</span>
            <span className="text-3xl animate-bounce delay-200">🎉</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Você será vitorioso!</h2>
          <p className="text-xl text-gray-600">{title}</p>
        </div>

        {/* Continue button - MOVED TO TOP */}
        <button
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-semibold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse-gentle mb-6"
        >
          Continuar a Jornada ✨
        </button>

        {/* Your choice */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 mb-5 border-2 border-red-200">
          <p className="text-lg font-semibold text-red-900 mb-2 flex items-center space-x-2">
            <span>🎯</span>
            <span>Desafio identificado:</span>
          </p>
          <p className="text-xl text-red-700 font-medium">"{selectedOption}"</p>
        </div>

        {/* Bible verse - REDUCED SIZE */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 mb-5 border-2 border-amber-200 relative overflow-hidden">
          <div className="absolute top-1 left-1 text-4xl text-amber-200 opacity-30">"</div>
          <div className="relative z-10">
            <p className="text-lg text-gray-800 leading-relaxed mb-3 italic font-medium">
              {bibleVerse}
            </p>
            <p className="text-base text-amber-700 font-semibold text-right">
              {bibleReference}
            </p>
          </div>
        </div>

        {/* Prophetic message */}
        <div className={`bg-gradient-to-br ${color} rounded-2xl p-6`}>
          <div className="flex items-start space-x-3 mb-3">
            <span className="text-3xl">👑</span>
            <h3 className="text-xl font-bold text-white">Palavra Profética de Vitória</h3>
          </div>
          <p className="text-lg text-white leading-relaxed">
            {propheticMessage}
          </p>
        </div>
      </div>
    </div>
  );
}