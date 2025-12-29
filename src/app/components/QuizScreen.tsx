import { useState } from 'react';

interface QuizScreenProps {
  area: string;
  title: string;
  question: string;
  subtitle?: string;
  options: string[];
  currentAnswer: { selected?: string; text?: string };
  onUpdate: (data: { selected?: string; text?: string }) => void;
  onNext: () => void;
  onBack: () => void;
  progress: number;
}

export function QuizScreen({
  title,
  question,
  subtitle,
  options,
  currentAnswer,
  onUpdate,
  onNext,
  onBack,
  progress
}: QuizScreenProps) {
  const [selectedOption, setSelectedOption] = useState(currentAnswer.selected || '');
  const [freeText, setFreeText] = useState(currentAnswer.text || '');

  const handleNext = () => {
    onUpdate({ selected: selectedOption, text: freeText });
    onNext();
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 flex flex-col animate-fade-in">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-4 relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-500 rounded-r-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
            >
              <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg">
              <span className="text-xl font-bold">{progress}%</span>
              <span className="text-lg">✨</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              {title}
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed font-semibold">{question}</p>
            {subtitle && (
              <p className="text-lg text-gray-600 mt-3 italic">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 bg-amber-50 rounded-xl px-4 py-3 border border-amber-200">
            <span>💪</span>
            <p className="italic font-medium">Identifique o desafio que você vai vencer em 2026</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-6">
          {options.map((option, index) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left text-xl px-6 py-6 rounded-2xl border-4 transition-all duration-200 relative overflow-hidden ${
                selectedOption === option
                  ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-900 font-semibold shadow-xl scale-105'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {selectedOption === option && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 animate-pulse-gentle"></div>
              )}
              <div className="flex items-center justify-between relative z-10">
                <span>{option}</span>
                {selectedOption === option && (
                  <div className="flex items-center space-x-2">
                    <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">✨</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Free Text Field */}
        <div className="mb-8">
          <label className="block text-xl font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <span>🎯</span>
            <span>Descreva seu desafio como uma vitória futura:</span>
          </label>
          <p className="text-base text-gray-600 mb-3 italic">
            Exemplo: "Em 2026, vou superar a distância da minha família e criar momentos de união"
          </p>
          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder="Em 2026, vou superar..."
            rows={4}
            className="w-full text-xl px-6 py-5 border-4 border-gray-300 rounded-2xl focus:border-indigo-500 focus:outline-none resize-none bg-white shadow-md"
          />
        </div>

        {/* Next Button */}
        <div className="mt-auto">
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full text-2xl font-semibold py-6 px-8 rounded-2xl shadow-xl transition-all duration-200 relative overflow-hidden ${
              selectedOption
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedOption && (
              <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
            )}
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Continuar</span>
              <span>✨</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}