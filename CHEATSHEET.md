# 📝 CHEAT SHEET - FÉ & SABEDORIA

## Referência Rápida - Copie e Cole

---

## 🌐 URLS IMPORTANTES

**Supabase Dashboard:**
```
https://supabase.com/dashboard/project/msedkwjnveqqzjfeghwy
```

**Netlify Deploy:**
```
https://app.netlify.com/drop
```

**Vercel Deploy:**
```
https://vercel.com/new
```

---

## 🔑 CREDENCIAIS

**Project URL:**
```
https://msedkwjnveqqzjfeghwy.supabase.co
```

**Project ID:**
```
fsvafpykhreepcfqzeor
```

**Anon Key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis
```

---

## 📞 DADOS DA IGREJA

**WhatsApp Bispo:**
```
67992055727
```

**Link WhatsApp:**
```
https://wa.me/5567992055727
```

**PIX CNPJ:**
```
46600319000159
```

**PIX Celular:**
```
67992055727
```

---

## 🧪 TESTAR API (Console do Navegador)

### Testar se backend está online:
```javascript
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/health')
.then(r=>r.json())
.then(d=>console.log('✅ Backend:', d));
```

### Listar todos os usuários:
```javascript
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users', {
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'}
})
.then(r=>r.json())
.then(d=>console.log('📊 Total:', d.count, d.users));
```

### Salvar usuário de teste:
```javascript
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/save-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'
  },
  body: JSON.stringify({
    name: 'Teste Silva',
    whatsapp: '67999999999',
    email: 'teste@teste.com'
  })
})
.then(r=>r.json())
.then(d=>console.log('✅ Salvo:', d));
```

### Listar testemunhos:
```javascript
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-testimonies', {
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'}
})
.then(r=>r.json())
.then(d=>console.log('💬 Testemunhos:', d.testimonies));
```

---

## 📱 MENSAGEM DE LANÇAMENTO (Copiar e Colar)

```
🔥🔥🔥 LANÇAMENTO OFICIAL! 🔥🔥🔥

📱 FÉ & SABEDORIA 2026
Seu Guia Espiritual para Conquistar Vitórias!

O APP OFICIAL da Casa da Fé está no AR! 🙏✨

✅ Projeto de Vida 2026
✅ Identifique seus desafios
✅ Declare vitórias profetizadas
✅ Versículos personalizados
✅ Falar com o Bispo Lincoln
✅ Dízimos e Ofertas

🔗 ACESSE AGORA:
[SEU LINK AQUI]

📲 COMO INSTALAR:
1. Abra o link
2. Clique no botão dourado "INSTALAR APP"
3. Siga as instruções
4. Pronto! App na tela inicial! 🔥

Vamos juntos conquistar 2026! 💪🙌
Deus é fiel! 🙏✨

#FéESabedoria #CasaDaFé #ProjetoDeVida2026
```

---

## 🎨 CORES DO DESIGN

```css
/* Preto */
#000000

/* Dourado metálico */
#D4AF37

/* Dourado claro */
#F4D03F

/* Cinza escuro */
#1a1a1a

/* Cinza médio */
#808080
```

---

## 🗂️ ESTRUTURA DE DADOS

### Prefixos no KV Store:

```
user_67999999999     → Dados do usuário
quiz_67999999999     → Respostas do quiz
victory_67999999999  → Vitórias marcadas
testimony_1234567890 → Testemunhos
```

---

## 🔗 ENDPOINTS DA API

**Base URL:**
```
https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1
```

**Rotas:**
```
GET  /health              → Verificar se está online
POST /save-user           → Salvar cadastro
POST /save-quiz           → Salvar respostas
POST /save-victory        → Salvar vitória
POST /save-testimony      → Salvar testemunho
GET  /list-users          → Listar usuários
GET  /list-testimonies    → Listar testemunhos
```

---

## 📋 COMANDOS NPM

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Build para produção
npm run build
```

---

## 🎯 ATALHOS DO NAVEGADOR

```
F12              → Abrir Console
Ctrl+Shift+I     → Abrir DevTools
Ctrl+Shift+C     → Inspecionar elemento
Ctrl+R           → Recarregar página
Ctrl+Shift+R     → Recarregar (limpar cache)
```

---

## 📊 FILTROS NO SUPABASE

No Table Editor, use filtros:

```
key starts with "user_"      → Ver usuários
key starts with "quiz_"      → Ver respostas
key starts with "victory_"   → Ver vitórias
key starts with "testimony_" → Ver testemunhos
```

---

## 🔧 TROUBLESHOOTING RÁPIDO

**App não abre:**
```
1. Aguardar 2-3 minutos
2. Limpar cache (Ctrl+Shift+R)
3. Modo anônimo
4. Outro navegador
```

**Dados não salvam:**
```
1. F12 → Console → Ver erros
2. Testar /health endpoint
3. Verificar credenciais
4. Ver logs Supabase
```

**PWA não instala:**
```
1. Confirmar HTTPS
2. Chrome (Android) ou Safari (iOS)
3. Limpar cache
4. Recarregar página
```

---

## 📱 TESTAR NO CELULAR

### Android:
```
1. Abrir no Chrome
2. Menu (⋮) → Instalar app
```

### iPhone:
```
1. Abrir no Safari
2. Compartilhar (□↑) → Adicionar à Tela de Início
```

---

## 🎯 METAS DE LANÇAMENTO

```
Primeiras 2 horas:  10 cadastros
Primeiro dia:       50 cadastros
Primeira semana:   200 cadastros
Primeiro mês:     1000 cadastros
```

---

## 📈 MÉTRICAS IMPORTANTES

```
✅ Total de cadastros
✅ Taxa de conclusão do quiz (5 áreas)
✅ Vitórias marcadas
✅ Testemunhos compartilhados
✅ Cliques no WhatsApp
✅ Visualizações do PIX
✅ Instalações do PWA
```

---

## 🔐 SEGURANÇA

**✅ PODE compartilhar:**
- Link do app
- Project URL
- Anon Key

**❌ NÃO compartilhe:**
- Service Role Key
- Senhas do Supabase
- Dados pessoais dos usuários

---

## 📞 LINKS DE SUPORTE

```
Netlify Status:  https://www.netlifystatus.com
Vercel Status:   https://www.vercel-status.com
Supabase Status: https://status.supabase.com
```

---

## ⚡ COMANDOS ÚTEIS

### Limpar cache do navegador:
```
Chrome:  Ctrl+Shift+Delete
Safari:  Cmd+Option+E
Firefox: Ctrl+Shift+Delete
```

### Modo Desenvolvedor no celular:
```
Android: Sobre > Build number (7x)
iOS:     Ajustes > Safari > Avançado > Web Inspector
```

---

## 🎉 PÓS-LANÇAMENTO

**Primeiras 2 horas:**
```
- Monitorar Supabase Dashboard
- Responder dúvidas
- Comemorar cadastros
```

**Primeiro dia:**
```
- Exportar dados
- Ver estatísticas
- Coletar feedback
```

**Primeira semana:**
```
- Criar relatório
- Identificar melhorias
- Ajustar se necessário
```

---

## 📚 DOCUMENTAÇÃO

```
README.md                    → Visão geral
GUIA_RAPIDO_LANCAMENTO.md   → Lançar em 15 min
CHECKLIST_PRE_LANCAMENTO.md → Verificar tudo
TEST_API.md                  → Testar APIs
COMO_EXPORTAR_DADOS.md      → Exportar dados
INSTRUCOES_LANCAMENTO.md    → Guia completo
```

---

## 🚀 QUICK START

```bash
1. Deploy no Netlify
2. Copiar link
3. Testar no celular
4. Compartilhar nos grupos
5. Monitorar Supabase
6. PROFIT! 🔥
```

---

_Esta é sua cola! Salve, imprima, tenha sempre à mão!_ 📌
