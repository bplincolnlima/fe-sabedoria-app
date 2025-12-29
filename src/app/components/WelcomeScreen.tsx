interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 animate-fade-in relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-twinkle">✨</div>
      <div className="absolute top-20 right-10 text-3xl animate-twinkle delay-300">⭐</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-twinkle delay-500">💫</div>
      <div className="absolute bottom-32 right-16 text-3xl animate-twinkle delay-700">✨</div>

      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-scale-in">
            <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <span className="text-3xl animate-bounce">🙏</span>
          <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao</h1>
          <span className="text-3xl animate-bounce delay-200">✨</span>
        </div>
        
        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-scale-in">
          Fé & Sabedoria
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-purple-200 mb-6">
          <p className="text-2xl text-gray-700 leading-relaxed mb-4">
            Identifique seus desafios e declare suas vitórias
          </p>
          <div className="flex justify-center space-x-2">
            <span className="text-2xl">💪</span>
            <p className="text-xl text-purple-600 font-semibold">Transforme Fé em Ação</p>
            <span className="text-2xl">🎯</span>
          </div>
        </div>

        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-8 animate-shimmer"></div>

        <p className="text-xl text-gray-600 mb-4">
          Comece sua jornada de
        </p>
        <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Conquistas e Vitórias em 2026
        </p>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-2xl font-semibold py-6 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 relative overflow-hidden z-10"
      >
        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <span>Começar minha Jornada</span>
          <span className="text-3xl">✨</span>
        </span>
      </button>
    </div>
  );
}