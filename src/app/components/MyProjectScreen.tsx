import { QuizAnswers } from '../App';
import { useState } from 'react';

interface MyProjectScreenProps {
  userName: string;
  quizAnswers: QuizAnswers;
  onUpdateProgress: (
    area: keyof QuizAnswers,
    data: { completed?: boolean; victoryNote?: string; completedDate?: string }
  ) => void;
  onBackToHome: () => void;
}

export function MyProjectScreen({
  userName,
  quizAnswers,
  onUpdateProgress,
  onBackToHome
}: MyProjectScreenProps) {
  const [expandedArea, setExpandedArea] = useState<keyof QuizAnswers | null>(null);
  const [editingNote, setEditingNote] = useState<keyof QuizAnswers | null>(null);
  const [noteText, setNoteText] = useState('');

  const areas = [
    { key: 'familiar' as keyof QuizAnswers, title: 'Área Familiar', icon: '👨‍👩‍👧‍👦', color: 'from-blue-500 to-indigo-600' },
    { key: 'espiritual' as keyof QuizAnswers, title: 'Área Espiritual', icon: '🙏', color: 'from-purple-500 to-pink-600' },
    { key: 'financeira' as keyof QuizAnswers, title: 'Área Financeira', icon: '💰', color: 'from-green-500 to-emerald-600' },
    { key: 'saude' as keyof QuizAnswers, title: 'Área de Saúde', icon: '❤️', color: 'from-red-500 to-rose-600' },
    { key: 'crescimento' as keyof QuizAnswers, title: 'Área de Crescimento', icon: '🌱', color: 'from-amber-500 to-orange-600' }
  ];

  const completedCount = areas.filter(area => quizAnswers[area.key]?.completed).length;
  const progressPercentage = (completedCount / areas.length) * 100;

  const handleToggleComplete = (area: keyof QuizAnswers) => {
    const isCompleted = !quizAnswers[area]?.completed;
    onUpdateProgress(area, {
      completed: isCompleted,
      completedDate: isCompleted ? new Date().toLocaleDateString('pt-BR') : undefined
    });
  };

  const handleSaveNote = (area: keyof QuizAnswers) => {
    if (noteText.trim()) {
      onUpdateProgress(area, { victoryNote: noteText });
      setNoteText('');
      setEditingNote(null);
    }
  };

  const handleEditNote = (area: keyof QuizAnswers) => {
    setEditingNote(area);
    setNoteText(quizAnswers[area]?.victoryNote || '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 p-6 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBackToHome}
          className="mb-4 p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-lg font-semibold text-gray-700">Voltar</span>
        </button>

        <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">📋</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Meu Projeto de Vida 2026</h1>
              <p className="text-lg text-gray-600">{userName}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-semibold text-gray-700">Progresso Geral</span>
              <span className="text-base font-bold text-indigo-600">{completedCount} de {areas.length} vitórias</span>
            </div>
            <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-500 rounded-full relative"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 italic">
              {completedCount === 0 && "Comece a marcar suas vitórias! 💪"}
              {completedCount > 0 && completedCount < areas.length && "Continue conquistando! Você está no caminho certo! ✨"}
              {completedCount === areas.length && "Parabéns! Todas as vitórias alcançadas! 🎉"}
            </p>
          </div>
        </div>
      </div>

      {/* Challenge List */}
      <div className="space-y-4">
        {areas.map((area) => {
          const answer = quizAnswers[area.key];
          const isExpanded = expandedArea === area.key;
          const isEditing = editingNote === area.key;

          return (
            <div
              key={area.key}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden transition-all"
            >
              {/* Challenge Header */}
              <div
                className="p-5 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedArea(isExpanded ? null : area.key)}
              >
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleComplete(area.key);
                    }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all ${
                      answer?.completed
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    {answer?.completed && (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{area.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
                      {answer?.completed && (
                        <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                          ✓ Vencido
                        </span>
                      )}
                    </div>
                    {answer?.selected && (
                      <p className="text-base text-gray-700 font-medium">"{answer.selected}"</p>
                    )}
                    {answer?.completedDate && (
                      <p className="text-sm text-green-600 mt-2">Conquistado em: {answer.completedDate}</p>
                    )}
                  </div>

                  {/* Expand Icon */}
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="border-t-2 border-gray-200 p-5 bg-gray-50 space-y-4 animate-fade-in">
                  {/* Challenge Details */}
                  {answer?.text && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                      <p className="text-sm font-semibold text-blue-900 mb-1">Minha declaração de vitória:</p>
                      <p className="text-base text-blue-800 italic">"{answer.text}"</p>
                    </div>
                  )}

                  {/* Victory Note Section */}
                  <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-800 flex items-center space-x-2">
                        <span>✨</span>
                        <span>Registro de Vitória</span>
                      </h4>
                      {!isEditing && (
                        <button
                          onClick={() => handleEditNote(area.key)}
                          className="text-indigo-600 font-semibold text-sm hover:text-indigo-700"
                        >
                          {answer?.victoryNote ? 'Editar' : '+ Adicionar'}
                        </button>
                      )}
                    </div>

                    {isEditing ? (
                      <div>
                        <textarea
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          placeholder="Escreva aqui como Deus te ajudou a vencer este desafio..."
                          rows={4}
                          className="w-full text-base px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none resize-none"
                          autoFocus
                        />
                        <div className="flex space-x-2 mt-3">
                          <button
                            onClick={() => handleSaveNote(area.key)}
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all"
                          >
                            Salvar Testemunho
                          </button>
                          <button
                            onClick={() => {
                              setEditingNote(null);
                              setNoteText('');
                            }}
                            className="px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : answer?.victoryNote ? (
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                        <p className="text-base text-green-800 leading-relaxed">{answer.victoryNote}</p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                       Quando você conquistar esta vitória, volte aqui e escreva sua nota de vitória!
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Encouragement Footer */}
      <div className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-6 text-white text-center">
        <p className="text-xl font-bold mb-2">Continue firme na jornada! 💪</p>
        <p className="text-base">
          Cada vitória marcada é um registro do que Deus está fazendo em sua vida.
        </p>
      </div>
    </div>
  );
}
