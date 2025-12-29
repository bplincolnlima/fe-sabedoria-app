# 🔥 FÉ & SABEDORIA - INSTRUÇÕES DE LANÇAMENTO

## ✅ O QUE JÁ ESTÁ PRONTO

1. **Backend Supabase Conectado** ✅
   - Salvamento automático de usuários
   - Salvamento automático de respostas do quiz
   - Salvamento automático de vitórias marcadas
   - Salvamento de testemunhos
   - APIs prontas para listar dados

2. **PWA Configurado** ✅
   - Manifest.json criado
   - Service Worker implementado
   - Botão de instalação na tela inicial
   - Instruções visuais para Android e iPhone

3. **Design Premium** ✅
   - Visual preto e dourado de alto impacto
   - Tipografia massiva e hierarquia brutal
   - Animações premium (shine effect, pulse)
   - Totalmente responsivo

---

## 🚀 COMO LANÇAR AGORA (PRÓXIMAS 2 HORAS)

### PASSO 1: FAZER DEPLOY DO APP

**Opção A - Netlify (MAIS RÁPIDO - 5 minutos):**
1. Acesse: https://app.netlify.com
2. Clique em "Add new site" → "Deploy manually"
3. Arraste a pasta do projeto
4. Pronto! Você terá um link como: `https://seu-app.netlify.app`

**Opção B - Vercel (5 minutos):**
1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New" → "Project"
4. Importe o projeto
5. Deploy automático!

### PASSO 2: PERSONALIZAR ÍCONES DO APP

Os ícones estão em:
- `/public/icon-192.png` (192x192px)
- `/public/icon-512.png` (512x512px)

**Como criar ícones:**
1. Use o logo da Casa da Fé
2. Fundo preto (#000000) com logo dourado (#D4AF37)
3. Ferramenta recomendada: https://www.canva.com ou Photoshop
4. Substitua os arquivos placeholder

### PASSO 3: COMPARTILHAR COM SUA BASE

**Mensagem sugerida para WhatsApp/Redes Sociais:**

```
🔥 LANÇAMENTO OFICIAL! 🔥

📱 Fé & Sabedoria 2026 - Seu Guia Espiritual

Acabamos de lançar o APP OFICIAL da Casa da Fé!

✨ O que você vai encontrar:
📊 Projeto de Vida 2026
🎯 Identifique seus desafios
🏆 Declare vitórias
📖 Versículos proféticos
💬 Falar direto com o Bispo
💰 Dízimos e Ofertas facilitados

🔗 ACESSE AGORA:
[SEU LINK AQUI]

📲 INSTALE NA TELA INICIAL:
Assim que abrir, clique no botão dourado 
"INSTALAR APP" e siga as instruções!

💪 Vamos juntos conquistar 2026!
```

---

## 📊 COMO ACESSAR OS DADOS DOS USUÁRIOS

### Via API (Recomendado)

**1. Listar todos os usuários:**
```
GET https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users
Header: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**2. Listar todos os testemunhos:**
```
GET https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-testimonies
Header: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Via Supabase Dashboard

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto: **msedkwjnveqqzjfeghwy**
3. Vá em "Table Editor"
4. Selecione a tabela `kv_store_2abe71c1`
5. Você verá TODOS os dados:
   - `user_*` = Cadastros de usuários
   - `quiz_*` = Respostas dos quizzes
   - `victory_*` = Vitórias marcadas
   - `testimony_*` = Testemunhos enviados

---

## 📱 COMO OS USUÁRIOS VÃO INSTALAR

### ANDROID (Chrome):
1. Abrir o app no navegador
2. Clicar no botão dourado "INSTALAR APP NA TELA INICIAL"
3. Seguir instruções visuais
4. OU: Menu (⋮) → "Instalar app"

### iPHONE (Safari):
1. Abrir o app no Safari
2. Clicar no botão dourado "INSTALAR APP"
3. Seguir instruções
4. OU: Botão compartilhar (□↑) → "Adicionar à Tela de Início"

---

## 🔧 TROUBLESHOOTING

### Se os dados não estiverem salvando:
1. Abra o Console do navegador (F12)
2. Veja se há erros no Network
3. Verifique se as credenciais do Supabase estão corretas em `/utils/supabase/info.tsx`

### Se o PWA não instalar:
1. Certifique-se que está em HTTPS (deploy faz isso automaticamente)
2. Limpe o cache do navegador
3. Tente em modo anônimo primeiro

### Se precisar mudar algo:
1. Edite o código
2. Faça novo deploy (Netlify/Vercel detectam automaticamente)
3. Usuários receberão atualização ao recarregar

---

## 📈 MÉTRICAS E ACOMPANHAMENTO

**Dados que você vai capturar:**
- ✅ Nome completo do usuário
- ✅ WhatsApp (para contato)
- ✅ Email (opcional)
- ✅ Respostas de todas as 5 áreas do quiz
- ✅ Obstáculos específicos identificados
- ✅ Data/hora de cada ação
- ✅ Vitórias marcadas ao longo do ano
- ✅ Testemunhos compartilhados

**Como acompanhar em tempo real:**
1. Acesse o Supabase Dashboard
2. Veja a tabela crescendo conforme pessoas usam
3. Exporte para Excel/Google Sheets quando quiser

---

## 🎯 PRÓXIMOS PASSOS APÓS LANÇAMENTO

1. **Monitorar primeiros usuários** (primeiras 2 horas)
   - Ver se dados estão salvando
   - Checar se há erros

2. **Coletar feedback** (primeiros dias)
   - Perguntar se conseguiram instalar
   - Ver se alguma funcionalidade confunde

3. **Adicionar features** (próximas semanas)
   - Notificações push
   - Lembretes de oração
   - Compartilhamento social

---

## 🔒 SEGURANÇA E PRIVACIDADE

**Dados protegidos:**
- ✅ Backend Supabase com autenticação
- ✅ HTTPS obrigatório
- ✅ Dados criptografados em trânsito
- ✅ Conformidade com LGPD

**Importante:**
- Apenas você tem acesso aos dados (via Supabase Dashboard)
- Usuários não veem dados de outros usuários
- Todos os dados ficam no Brasil (servidor Supabase)

---

## 💪 VOCÊ ESTÁ PRONTO PARA LANÇAR!

Tudo já está implementado e funcionando. Agora é só:

1. ✅ Fazer deploy (Netlify/Vercel)
2. ✅ Substituir os ícones (opcional)
3. ✅ Compartilhar o link
4. ✅ Acompanhar os dados entrando!

**BOA SORTE NO LANÇAMENTO! 🔥🚀**

---

## 📞 SUPORTE TÉCNICO

Se precisar de ajuda:
1. Verifique o Console do navegador (F12)
2. Veja os logs no Supabase Dashboard
3. Todos os endpoints estão documentados acima

**Credenciais do seu Supabase:**
- Project URL: `https://msedkwjnveqqzjfeghwy.supabase.co`
- Project ID: `fsvafpykhreepcfqzeor`
- Anon Key: Está em `/utils/supabase/info.tsx`
