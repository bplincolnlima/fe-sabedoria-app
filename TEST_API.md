# 🧪 TESTAR APIS DO SUPABASE

## 🔥 Como testar se está salvando os dados

### 1. VIA CONSOLE DO NAVEGADOR (Mais fácil)

Abra o app no navegador, pressione **F12** e cole no Console:

```javascript
// TESTE 1: Salvar um usuário de teste
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/save-user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'
  },
  body: JSON.stringify({
    name: 'João Silva',
    whatsapp: '67999999999',
    email: 'joao@teste.com'
  })
})
.then(r => r.json())
.then(d => console.log('✅ RESULTADO:', d))
.catch(e => console.error('❌ ERRO:', e));
```

```javascript
// TESTE 2: Listar todos os usuários
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'
  }
})
.then(r => r.json())
.then(d => console.log('✅ USUÁRIOS:', d))
.catch(e => console.error('❌ ERRO:', e));
```

### 2. VIA POSTMAN/INSOMNIA

**Endpoint:** POST `https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/save-user`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis
```

**Body:**
```json
{
  "name": "Maria Santos",
  "whatsapp": "67988888888",
  "email": "maria@teste.com"
}
```

### 3. VIA CURL (Terminal/CMD)

```bash
curl -X POST https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/save-user \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis" \
  -d '{"name":"Pedro Costa","whatsapp":"67977777777","email":"pedro@teste.com"}'
```

---

## 🔍 VERIFICAR SE OS DADOS ESTÃO NO BANCO

### Opção 1: Via Dashboard Supabase
1. Acesse: https://supabase.com/dashboard/project/msedkwjnveqqzjfeghwy
2. Clique em "Table Editor" (menu lateral)
3. Selecione a tabela: `kv_store_2abe71c1`
4. Veja todos os dados salvos!

### Opção 2: Via API
```javascript
// Listar usuários
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'
  }
})
.then(r => r.json())
.then(d => console.log('📊 Total de usuários:', d.count, '\n', d.users));
```

---

## 📋 TODAS AS ROTAS DISPONÍVEIS

### 1. Salvar Usuário
- **Método:** POST
- **Rota:** `/make-server-2abe71c1/save-user`
- **Body:**
  ```json
  {
    "name": "Nome Completo",
    "whatsapp": "67999999999",
    "email": "email@exemplo.com"
  }
  ```

### 2. Salvar Quiz
- **Método:** POST
- **Rota:** `/make-server-2abe71c1/save-quiz`
- **Body:**
  ```json
  {
    "whatsapp": "67999999999",
    "quizAnswers": {
      "familiar": { "selected": "Conflitos não resolvidos", "text": "..." },
      "espiritual": { "selected": "...", "text": "..." },
      ...
    }
  }
  ```

### 3. Salvar Vitória
- **Método:** POST
- **Rota:** `/make-server-2abe71c1/save-victory`
- **Body:**
  ```json
  {
    "whatsapp": "67999999999",
    "area": "familiar",
    "victoryNote": "Reconciliei com meu irmão!"
  }
  ```

### 4. Salvar Testemunho
- **Método:** POST
- **Rota:** `/make-server-2abe71c1/save-testimony`
- **Body:**
  ```json
  {
    "name": "Maria Silva",
    "testimony": "Deus curou minha família!"
  }
  ```

### 5. Listar Usuários (ADMIN)
- **Método:** GET
- **Rota:** `/make-server-2abe71c1/list-users`
- **Retorna:** Array com todos os usuários

### 6. Listar Testemunhos
- **Método:** GET
- **Rota:** `/make-server-2abe71c1/list-testimonies`
- **Retorna:** Array com todos os testemunhos (mais recentes primeiro)

---

## ✅ CHECKLIST DE VALIDAÇÃO

Antes de lançar, teste:

- [ ] Cadastrar um usuário no app
- [ ] Verificar se apareceu no Supabase Dashboard
- [ ] Completar o quiz de uma área
- [ ] Marcar uma vitória
- [ ] Enviar um testemunho
- [ ] Listar usuários via API
- [ ] Instalar o PWA no celular

---

## 🚨 SE DER ERRO

### Erro: "Failed to fetch" ou "Network error"
- Verifique se o servidor Supabase está ativo
- Confirme que está usando HTTPS (deploy automático)
- Veja se a chave de API está correta

### Erro: "Unauthorized" ou 401
- A chave `Authorization` está errada
- Use exatamente a chave que está em `/utils/supabase/info.tsx`

### Erro: "Missing required fields"
- Confira se o body da requisição tem todos os campos obrigatórios
- Veja o console do navegador para ver qual campo está faltando

### Dados não aparecem no Dashboard
- Aguarde alguns segundos e recarregue
- Veja a aba "Table Editor" → `kv_store_2abe71c1`
- Filtre por prefixo: `user_`, `quiz_`, `victory_`, `testimony_`

---

## 🎯 RESULTADO ESPERADO

Quando tudo estiver funcionando:

1. Usuário abre o app
2. Preenche cadastro → **SALVA NO SUPABASE** ✅
3. Responde quiz → **SALVA NO SUPABASE** ✅
4. Marca vitória → **SALVA NO SUPABASE** ✅
5. Envia testemunho → **SALVA NO SUPABASE** ✅

Você consegue ver TUDO no Dashboard ou via API! 🔥

**TESTE AGORA E BOA SORTE! 🚀**
