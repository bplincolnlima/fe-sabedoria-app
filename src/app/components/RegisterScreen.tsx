import { UserData } from '../App';
import { saveUser } from '../../utils/api';
import { useState } from 'react';

interface RegisterScreenProps {
  userData: UserData;
  onUpdate: (data: UserData) => void;
  onComplete: () => void;
}

export function RegisterScreen({ userData, onUpdate, onComplete }: RegisterScreenProps) {
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.name && userData.whatsapp) {
      setSaving(true);
      try {
        // 🔥 SALVAR USUÁRIO NO SUPABASE
        await saveUser(userData.name, userData.whatsapp, userData.email || '');
        console.log('✅ Usuário cadastrado com sucesso!');
      } catch (error) {
        console.error('❌ Erro ao cadastrar, mas continuando...', error);
      } finally {
        setSaving(false);
        onComplete();
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white p-8 animate-fade-in">
      <div className="mb-8 text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Vamos nos conhecer</h1>
        <p className="text-xl text-gray-600">Preencha seus dados para começar</p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <label className="block text-2xl font-semibold text-gray-700 mb-3">
              Seu Nome
            </label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => onUpdate({ ...userData, name: e.target.value })}
              placeholder="Digite seu nome"
              className="w-full text-2xl px-6 py-5 border-4 border-gray-300 rounded-2xl focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-2xl font-semibold text-gray-700 mb-3">
              WhatsApp
            </label>
            <input
              type="tel"
              value={userData.whatsapp}
              onChange={(e) => onUpdate({ ...userData, whatsapp: e.target.value })}
              placeholder="(00) 00000-0000"
              className="w-full text-2xl px-6 py-5 border-4 border-gray-300 rounded-2xl focus:border-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-2xl font-semibold text-gray-700 mb-3">
              E-mail <span className="text-gray-400 font-normal">(opcional)</span>
            </label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => onUpdate({ ...userData, email: e.target.value })}
              placeholder="seu@email.com"
              className="w-full text-2xl px-6 py-5 border-4 border-gray-300 rounded-2xl focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-semibold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Salvando...' : 'Continuar'}
        </button>
      </form>
    </div>
  );
}
