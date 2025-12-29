export function SplashScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white animate-fade-in relative overflow-hidden">
      {/* Animated sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="text-center px-8 relative z-10">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 animate-scale-in shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-4xl animate-celebration-float">✨</span>
        </div>
        <h1 className="text-5xl font-bold mb-3 tracking-wide">Fé & Sabedoria</h1>
        <p className="text-xl text-white/90">Sua jornada profética de transformação</p>
        <div className="mt-6">
          <span className="text-2xl">🙏</span>
        </div>
      </div>
      <div className="absolute bottom-12">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-150"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
}