import { QuizAnswers } from '../App';
import { jsPDF } from 'jspdf';

interface SummaryScreenProps {
  userName: string;
  quizAnswers: QuizAnswers;
  onBackToHome: () => void;
}

export function SummaryScreen({ userName, quizAnswers, onBackToHome }: SummaryScreenProps) {
  const areas = [
    { key: 'familiar', title: 'Área Familiar', icon: '👨‍👩‍👧‍👦', color: 'from-blue-500 to-indigo-600' },
    { key: 'espiritual', title: 'Área Espiritual', icon: '🙏', color: 'from-purple-500 to-pink-600' },
    { key: 'financeira', title: 'Área Financeira', icon: '💰', color: 'from-green-500 to-emerald-600' },
    { key: 'saude', title: 'Área de Saúde', icon: '❤️', color: 'from-red-500 to-rose-600' },
    { key: 'crescimento', title: 'Área de Crescimento', icon: '🌱', color: 'from-amber-500 to-orange-600' }
  ];

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      
      // Título
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('Projeto de Vida 2026', 105, 20, { align: 'center' });
      
      // Nome do usuário
      doc.setFontSize(16);
      doc.text(`${userName}`, 105, 35, { align: 'center' });
      
      // Declaração Profética
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Declaracao Profetica', 20, 50);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const textoProfetico = `${userName}, cada desafio que voce declarou sera vencido! Deus viu sua coragem de enfrentar o que precisa ser transformado.`;
      const linhasProfeticas = doc.splitTextToSize(textoProfetico, 170);
      doc.text(linhasProfeticas, 20, 60);
      
      // Lista de Vitórias
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Lista de Vitorias 2026', 20, 85);
      
      let yPosition = 95;
      doc.setFontSize(10);
      
      const areaNames: Record<string, string> = {
        familiar: 'AREA FAMILIAR',
        espiritual: 'AREA ESPIRITUAL',
        financeira: 'AREA FINANCEIRA',
        saude: 'AREA DE SAUDE',
        crescimento: 'AREA DE CRESCIMENTO'
      };
      
      areas.forEach((area) => {
        const answer = quizAnswers[area.key as keyof QuizAnswers];
        
        // Título da área
        doc.setFont('helvetica', 'bold');
        doc.text(areaNames[area.key] || area.title, 20, yPosition);
        yPosition += 7;
        
        // Desafio
        if (answer.selected) {
          doc.setFont('helvetica', 'normal');
          doc.text('Desafio a vencer:', 25, yPosition);
          yPosition += 5;
          const desafioLinhas = doc.splitTextToSize(`"${answer.selected}"`, 160);
          doc.text(desafioLinhas, 25, yPosition);
          yPosition += desafioLinhas.length * 5 + 3;
        }
        
        // Vitória declarada
        if (answer.text) {
          doc.setFont('helvetica', 'italic');
          doc.text('Vitoria declarada:', 25, yPosition);
          yPosition += 5;
          const vitoriaLinhas = doc.splitTextToSize(`"${answer.text}"`, 160);
          doc.text(vitoriaLinhas, 25, yPosition);
          yPosition += vitoriaLinhas.length * 5 + 8;
        }
        
        // Nova página se necessário
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
      });
      
      // Versículo final
      if (yPosition > 230) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      const versiculo = '"Voce nao recebeu espirito de covardia, mas de poder, amor e moderacao."';
      const versiculoLinhas = doc.splitTextToSize(versiculo, 170);
      doc.text(versiculoLinhas, 105, yPosition, { align: 'center' });
      yPosition += versiculoLinhas.length * 5 + 3;
      doc.text('2 Timoteo 1:7 e 1 Joao 4:4', 105, yPosition, { align: 'center' });
      
      // Salvar PDF
      doc.save(`Projeto_de_Vida_2026_${userName}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar o PDF. Por favor, tente novamente.');
    }
  };

  const handleShare = () => {
    // Simulate share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Meu Projeto de Vida 2026',
        text: 'Completei minha jornada profética com Deus! 🙏✨',
      }).catch(() => {
        alert('Compartilhe sua conquista com amigos e família! 🎉');
      });
    } else {
      alert('Compartilhe sua conquista com amigos e família! 🎉');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 animate-fade-in relative overflow-hidden">
      {/* Celebration background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      {/* Floating celebration emojis */}
      <div className="absolute top-5 left-5 text-5xl animate-celebration-float">🎉</div>
      <div className="absolute top-10 right-5 text-4xl animate-celebration-float delay-200">✨</div>
      <div className="absolute bottom-20 left-10 text-5xl animate-celebration-float delay-400">🎆</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-celebration-float delay-600">⭐</div>

      <div className="relative z-10">
        {/* Celebration Header */}
        <div className="text-center mb-8 bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30">
          <div className="flex justify-center space-x-2 mb-4">
            <span className="text-5xl animate-bounce">🎯</span>
            <span className="text-5xl animate-bounce delay-100">💪</span>
            <span className="text-5xl animate-bounce delay-200">🎯</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 animate-scale-in">
            Seus Desafios Declarados!
          </h1>
          <h2 className="text-3xl font-bold text-white/90 mb-3">
            {userName}, você identificou suas batalhas!
          </h2>
          <p className="text-2xl text-white/80 leading-relaxed">
            Estas são suas <span className="font-bold text-yellow-300">Vitórias de 2026</span>
          </p>
        </div>

        {/* Prophetic Completion Message */}
        <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 rounded-3xl p-8 mb-8 shadow-2xl border-4 border-white/50">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">👑</span>
            <h3 className="text-3xl font-bold text-gray-900">Declaração Profética</h3>
          </div>
          <p className="text-2xl text-gray-900 leading-relaxed mb-4 font-medium">
            {userName}, cada desafio que você declarou será vencido! Deus viu sua coragem de enfrentar o que precisa ser transformado.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed italic">
            2026 não é um ano de desejos - é um ano de CONQUISTAS! Cada área que você identificou será transformada. Você não apenas sonhará, você VENCERÁ. Estas batalhas já estão ganhas no espírito. Agora, caminhe em fé e veja cada vitória se manifestar! 🔥
          </p>
        </div>

        {/* Challenges Checklist */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 mb-8 border-2 border-white/50 shadow-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-4xl">📋</span>
            <h3 className="text-2xl font-bold text-gray-800">Lista de Vitórias 2026</h3>
          </div>
          
          <div className="space-y-4">
            {areas.map((area) => {
              const answer = quizAnswers[area.key as keyof QuizAnswers];
              return (
                <div
                  key={area.key}
                  className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-5 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full border-4 border-gray-300 flex items-center justify-center bg-white">
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{area.icon}</span>
                        <h4 className="text-lg font-bold text-gray-800">{area.title}</h4>
                      </div>
                      {answer.selected && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-2 rounded">
                          <p className="text-base font-semibold text-red-900">Desafio a vencer:</p>
                          <p className="text-base text-red-700">"{answer.selected}"</p>
                        </div>
                      )}
                      {answer.text && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                          <p className="text-base font-semibold text-green-900">Vitória declarada:</p>
                          <p className="text-base text-green-700 italic">"{answer.text}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={handleDownloadPDF}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-semibold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            📄 Baixar meu Projeto em PDF
          </button>

          <button
            onClick={onBackToHome}
            className="w-full bg-white/90 backdrop-blur-sm text-gray-700 text-xl font-semibold py-5 px-8 rounded-2xl hover:bg-white transition-all duration-200 border-2 border-white/50"
          >
            Voltar para o Início
          </button>
        </div>

        {/* Final Blessing */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border-2 border-white/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Decreto Final
          </h3>
          <p className="text-xl text-white/90 leading-relaxed mb-4">
            "Você não recebeu espírito de covardia, mas de poder, amor e moderação. Cada desafio será vencido. Cada batalha terá vitória. Cada limitação será quebrada. Porque maior é Aquele que está em você!"
          </p>
          <p className="text-lg text-yellow-300 italic font-semibold">
            Baseado em 2 Timóteo 1:7 e 1 João 4:4
          </p>
          <div className="mt-6">
            <p className="text-3xl text-white font-bold">
              2026: Ano de Vitórias! 💪🔥
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xl text-white/80">
            A Casa da Fé caminha com você em 2026 💜
          </p>
        </div>
      </div>
    </div>
  );
}
