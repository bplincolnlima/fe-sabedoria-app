# ✅ CHECKLIST PRÉ-LANÇAMENTO
## Fé & Sabedoria - Verifique TUDO antes de lançar!

---

## 🔥 CHECKLIST TÉCNICO

### 1. BACKEND SUPABASE
- [ ] Credenciais do Supabase estão corretas em `/utils/supabase/info.tsx`
- [ ] Servidor Edge Function está ativo
- [ ] Teste de salvamento de usuário funcionando
- [ ] Teste de salvamento de quiz funcionando
- [ ] Teste de listagem de usuários funcionando
- [ ] Console do Supabase Dashboard acessível

**Como testar:**
```javascript
// Cole no Console (F12):
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/health')
.then(r=>r.json())
.then(d=>console.log('✅ Backend:', d))
.catch(e=>console.error('❌ Backend offline!'));
```

---

### 2. FUNCIONALIDADES DO APP
- [ ] Splash screen aparece (2.5 segundos)
- [ ] Tela de boas-vindas funciona
- [ ] Cadastro salva os dados
- [ ] Quiz de cada área (5) funciona
- [ ] Cartões de recompensa aparecem
- [ ] Tela de resumo mostra todas as áreas
- [ ] "Meu Projeto" permite marcar vitórias
- [ ] Testemunhos carregam corretamente
- [ ] Botão WhatsApp Bispo abre conversa
- [ ] Dízimos e Ofertas mostra PIX corretos

**Dados de teste:**
- Nome: Teste Silva
- WhatsApp: 67999999999
- Email: teste@teste.com

---

### 3. PWA (PROGRESSIVE WEB APP)
- [ ] Arquivo `/public/manifest.json` existe
- [ ] Arquivo `/public/service-worker.js` existe
- [ ] Ícones 192x192 e 512x512 existem (ou placeholders)
- [ ] index.html registra o service worker
- [ ] App está em HTTPS (deploy automático)
- [ ] Botão "INSTALAR APP" aparece na home
- [ ] Tela de instruções de instalação funciona

**Como testar:**
1. Abra o app no celular
2. Clique em "INSTALAR APP NA TELA INICIAL"
3. Veja se as instruções aparecem
4. Tente instalar de verdade

---

### 4. DESIGN E UX
- [ ] Cores preto (#000000) e dourado (#D4AF37) dominantes
- [ ] Tipografia grande e legível
- [ ] Botões grandes e clicáveis (público idoso)
- [ ] Animações suaves (fade-in, shine effect)
- [ ] Responsivo em diferentes tamanhos de tela
- [ ] Sem textos pequenos ou difíceis de ler
- [ ] Ícones e emojis ajudam na compreensão

---

### 5. DADOS E SEGURANÇA
- [ ] Dados pessoais salvam com segurança
- [ ] HTTPS ativo (deploy automático)
- [ ] Não há chaves sensíveis expostas no frontend
- [ ] Service Role Key do Supabase NÃO está no código do app
- [ ] Apenas Anon Key pública está sendo usada

---

## 📱 CHECKLIST DE CONTEÚDO

### 6. INFORMAÇÕES DA IGREJA
- [ ] WhatsApp do Bispo: **67 992055727** ✅
- [ ] PIX CNPJ: **46600319000159** ✅
- [ ] PIX Celular: **67 992055727** ✅
- [ ] Nome da igreja: **Casa da Fé** ✅
- [ ] Logo aparece corretamente

---

### 7. TEXTOS E MENSAGENS
- [ ] Mensagens proféticas estão inspiradoras
- [ ] Versículos bíblicos estão corretos
- [ ] Não há erros de português
- [ ] Tom de voz é acolhedor e motivacional
- [ ] CTA (Call to Action) são claros

---

## 🚀 CHECKLIST DE DEPLOY

### 8. ANTES DO DEPLOY
- [ ] Código está funcionando localmente
- [ ] Não há erros no console do navegador
- [ ] Teste em Chrome, Safari, Firefox
- [ ] Teste em Android E iPhone
- [ ] Build de produção gerado sem erros

**Como gerar build:**
```bash
npm run build
```

---

### 9. DEPLOY NETLIFY/VERCEL
- [ ] Conta criada (Netlify ou Vercel)
- [ ] Projeto enviado com sucesso
- [ ] Build completou sem erros
- [ ] Link do app está ativo
- [ ] HTTPS está funcionando
- [ ] Service Worker está registrado

**Link do app:** _______________________________

---

### 10. PÓS-DEPLOY
- [ ] App abre no navegador do celular
- [ ] App abre no navegador do desktop
- [ ] Cadastro funciona no deploy
- [ ] Dados aparecem no Supabase
- [ ] Botão de instalação funciona
- [ ] WhatsApp do Bispo abre corretamente
- [ ] PIX pode ser copiado

---

## 📣 CHECKLIST DE LANÇAMENTO

### 11. MENSAGEM DE DIVULGAÇÃO
- [ ] Texto preparado (veja GUIA_RAPIDO_LANCAMENTO.md)
- [ ] Link do app inserido na mensagem
- [ ] Imagem/screenshot do app pronta (opcional)
- [ ] Instruções de instalação incluídas
- [ ] CTA claro ("ACESSE AGORA")

---

### 12. CANAIS DE DIVULGAÇÃO
- [ ] Grupos de WhatsApp da igreja
- [ ] Status do WhatsApp
- [ ] Instagram da igreja
- [ ] Instagram pessoal do pastor
- [ ] Facebook da igreja
- [ ] Facebook pessoal
- [ ] Telegram (se tiver)
- [ ] Culto ao vivo (anúncio verbal)

---

### 13. SUPORTE E MONITORAMENTO
- [ ] Supabase Dashboard aberto para monitorar
- [ ] Console do navegador aberto (F12) para ver erros
- [ ] WhatsApp do suporte disponível
- [ ] Alguém disponível para responder dúvidas
- [ ] Documento de FAQ preparado (opcional)

---

## 📊 CHECKLIST DE ACOMPANHAMENTO

### 14. PRIMEIRAS 2 HORAS
- [ ] Monitorar cadastros em tempo real
- [ ] Responder dúvidas nos grupos
- [ ] Verificar se há erros sendo reportados
- [ ] Comemorar primeiros usuários! 🎉

**Meta:** 10 cadastros na primeira hora

---

### 15. PRIMEIRO DIA
- [ ] Exportar dados do Supabase
- [ ] Ver quantos completaram o quiz
- [ ] Identificar áreas mais escolhidas
- [ ] Agradecer nos grupos
- [ ] Pedir feedback

**Meta:** 50 cadastros no primeiro dia

---

### 16. PRIMEIRA SEMANA
- [ ] Criar relatório semanal
- [ ] Identificar melhorias necessárias
- [ ] Coletar testemunhos de impacto
- [ ] Ajustar o que não está funcionando
- [ ] Comemorar vitórias!

**Meta:** 200 cadastros na primeira semana

---

## 🆘 CHECKLIST DE EMERGÊNCIA

### 17. SE ALGO DER ERRADO

**App não abre:**
- [ ] Verificar link do deploy
- [ ] Aguardar 2-3 minutos (propagação DNS)
- [ ] Testar em modo anônimo
- [ ] Ver logs no Netlify/Vercel

**Dados não salvam:**
- [ ] Abrir Console (F12) e ver erros
- [ ] Verificar credenciais do Supabase
- [ ] Testar endpoint `/health` do servidor
- [ ] Ver logs no Supabase Dashboard

**PWA não instala:**
- [ ] Confirmar que está em HTTPS
- [ ] Limpar cache do navegador
- [ ] Tentar em outro dispositivo
- [ ] Ver se manifest.json está acessível

**Muitos erros reportados:**
- [ ] Recolher o link temporariamente
- [ ] Investigar o problema
- [ ] Corrigir e fazer novo deploy
- [ ] Testar exaustivamente
- [ ] Relançar com nova mensagem

---

## 🎯 CHECKLIST FINAL (5 MINUTOS ANTES)

### 18. REVISÃO FINAL
- [ ] App funcionando no celular? ✅
- [ ] Cadastro salvando? ✅
- [ ] Quiz completo funcionando? ✅
- [ ] Supabase recebendo dados? ✅
- [ ] Botões WhatsApp e PIX corretos? ✅
- [ ] Mensagem de lançamento pronta? ✅
- [ ] Dashboard do Supabase aberto? ✅
- [ ] Você está pronto para responder dúvidas? ✅

---

## 🔥 HORA DE LANÇAR!

Se você marcou **TODOS** os itens acima:

✅ **VOCÊ ESTÁ 100% PRONTO!**

**ÚLTIMAS PALAVRAS:**
1. Respire fundo 🫁
2. Confie no trabalho feito 💪
3. Ore pedindo bênção 🙏
4. CLICA NO ENVIAR! 🚀

---

## 📞 CONTATOS DE EMERGÊNCIA

**Supabase Dashboard:**
https://supabase.com/dashboard/project/msedkwjnveqqzjfeghwy

**Documentação:**
- INSTRUCOES_LANCAMENTO.md
- GUIA_RAPIDO_LANCAMENTO.md
- TEST_API.md
- COMO_EXPORTAR_DADOS.md

---

## 🙌 APÓS O LANÇAMENTO

**Respire!** Você fez algo INCRÍVEL! 🎉

Agora é só:
- Monitorar
- Ajustar
- Celebrar
- Crescer

**QUE DEUS ABENÇOE O LANÇAMENTO! 🔥🙏✨**

---

_Última atualização: Dezembro 2024_
_Versão: 1.0_
_Status: PRONTO PARA LANÇAR! 🚀_
