import { X } from 'lucide-react';

interface InstallInstructionsProps {
  onClose: () => void;
}

export function InstallInstructions({ onClose }: InstallInstructionsProps) {
  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto animate-fade-in">
      <div className="min-h-screen p-6 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-[#D4AF37]">
            📱 Como Instalar
          </h1>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8">
          {/* Android Chrome */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#D4AF37]/30 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-4">
              📱 ANDROID (Chrome)
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-black text-xl">
                  1
                </div>
                <div>
                  <p className="text-xl text-white font-semibold mb-2">
                    Abra o menu do navegador
                  </p>
                  <p className="text-lg text-white/70">
                    Toque nos <span className="text-[#D4AF37] font-bold">três pontinhos (⋮)</span> no canto superior direito
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-black text-xl">
                  2
                </div>
                <div>
                  <p className="text-xl text-white font-semibold mb-2">
                    Adicionar à tela inicial
                  </p>
                  <p className="text-lg text-white/70">
                    Selecione <span className="text-[#D4AF37] font-bold">"Instalar app"</span> ou <span className="text-[#D4AF37] font-bold">"Adicionar à tela inicial"</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-black text-xl">
                  3
                </div>
                <div>
                  <p className="text-xl text-white font-semibold mb-2">
                    Confirme a instalação
                  </p>
                  <p className="text-lg text-white/70">
                    Toque em <span className="text-[#D4AF37] font-bold">"Instalar"</span> ou <span className="text-[#D4AF37] font-bold">"Adicionar"</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-2xl">
                  ✓
                </div>
                <div>
                  <p className="text-xl text-green-400 font-bold mb-2">
                    Pronto! 🎉
                  </p>
                  <p className="text-lg text-white/70">
                    O app aparecerá na sua tela inicial como qualquer outro aplicativo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* iPhone Safari */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#D4AF37]/30 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-4">
              🍎 iPHONE (Safari)
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-black text-xl">
                  1
                </div>
                <div>
                  <p className="text-xl text-white font-semibold mb-2">
                    Abra o menu de compartilhar
                  </p>
                  <p className="text-lg text-white/70">
                    Toque no <span className="text-[#D4AF37] font-bold">ícone de compartilhar (□↑)</span> na parte inferior
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-black text-xl">
                  2
                </div>
                <div>
                  <p className="text-xl text-white font-semibold mb-2">
                    Adicionar à Tela de Início
                  </p>
                  <p className="text-lg text-white/70">
                    Role para baixo e toque em <span className="text-[#D4AF37] font-bold">"Adicionar à Tela de Início"</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-black text-black text-xl">
                  3
                </div>
                <div>
                  <p className="text-xl text-white font-semibold mb-2">
                    Confirme
                  </p>
                  <p className="text-lg text-white/70">
                    Toque em <span className="text-[#D4AF37] font-bold">"Adicionar"</span> no canto superior direito
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-2xl">
                  ✓
                </div>
                <div>
                  <p className="text-xl text-green-400 font-bold mb-2">
                    Pronto! 🎉
                  </p>
                  <p className="text-lg text-white/70">
                    O app aparecerá na sua tela inicial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border-2 border-[#D4AF37] rounded-3xl p-6">
            <h2 className="text-2xl font-black text-[#D4AF37] mb-4">
              ✨ VANTAGENS DO APP INSTALADO
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <p className="text-lg text-white">
                  <span className="font-bold">Acesso mais rápido</span> - Abra direto da tela inicial
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📴</span>
                <p className="text-lg text-white">
                  <span className="font-bold">Funciona offline</span> - Use mesmo sem internet
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔔</span>
                <p className="text-lg text-white">
                  <span className="font-bold">Notificações</span> - Receba lembretes espirituais
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <p className="text-lg text-white">
                  <span className="font-bold">Experiência nativa</span> - Parece um app de verdade
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="fixed bottom-6 left-6 right-6 h-20 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] text-black text-2xl font-black rounded-2xl shadow-2xl shadow-[#D4AF37]/50 hover:scale-105 transition-transform"
        >
          ENTENDI! VAMOS LÁ 🔥
        </button>
      </div>
    </div>
  );
}
