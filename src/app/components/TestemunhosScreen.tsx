import { useState } from 'react';
import { TestemunhosCarousel } from './TestemunhosCarousel';

interface TestemunhosScreenProps {
  onBackToHome: () => void;
}

export function TestemunhosScreen({ onBackToHome }: TestemunhosScreenProps) {
  return (
    <div className="min-h-screen bg-black p-6 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBackToHome}
          className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 mb-6 transition-colors"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xl font-bold">Voltar</span>
        </button>
        
        <h1 className="text-5xl font-black text-white mb-2 tracking-tight">
          Testemunhos 🙌
        </h1>
        <p className="text-xl text-gray-400 font-medium">Veja como Deus tem transformado vidas</p>
      </div>

      {/* Carrossel de Testemunhos */}
      <TestemunhosCarousel />

      {/* Versículo */}
      <div className="mt-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-gray-800 text-center">
        <p className="text-lg text-gray-300 italic mb-2">
          \"Grandes coisas fez o Senhor por nós, pelas quais estamos alegres.\"
        </p>
        <p className="text-amber-400 font-black">Salmos 126:3</p>
      </div>
    </div>
  );
}