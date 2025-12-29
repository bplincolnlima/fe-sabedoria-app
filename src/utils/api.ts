import { projectId, publicAnonKey } from '../../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-2abe71c1`;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${publicAnonKey}`
};

// 🔥 SALVAR USUÁRIO
export async function saveUser(name: string, whatsapp: string, email: string) {
  try {
    const response = await fetch(`${API_BASE}/save-user`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, whatsapp, email })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    console.log('✅ Usuário salvo no Supabase:', data);
    return data;
  } catch (error) {
    console.error('❌ Erro ao salvar usuário:', error);
    throw error;
  }
}

// 🔥 SALVAR QUIZ
export async function saveQuiz(whatsapp: string, quizAnswers: any) {
  try {
    const response = await fetch(`${API_BASE}/save-quiz`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ whatsapp, quizAnswers })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    console.log('✅ Quiz salvo no Supabase');
    return data;
  } catch (error) {
    console.error('❌ Erro ao salvar quiz:', error);
    throw error;
  }
}

// 🔥 SALVAR VITÓRIA
export async function saveVictory(whatsapp: string, area: string, victoryNote?: string) {
  try {
    const response = await fetch(`${API_BASE}/save-victory`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ whatsapp, area, victoryNote })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    console.log('✅ Vitória salva no Supabase');
    return data;
  } catch (error) {
    console.error('❌ Erro ao salvar vitória:', error);
    throw error;
  }
}
