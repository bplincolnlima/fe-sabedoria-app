# 📊 COMO EXPORTAR DADOS DOS USUÁRIOS

## 🎯 3 Maneiras de Acessar os Dados

---

## 1️⃣ SUPABASE DASHBOARD (Mais Fácil)

### Acessar:
1. Entre em: https://supabase.com/dashboard
2. Faça login com sua conta
3. Selecione o projeto: **msedkwjnveqqzjfeghwy**
4. No menu lateral, clique em **"Table Editor"**
5. Selecione a tabela: `kv_store_2abe71c1`

### Ver os Dados:
- **Todos os dados** aparecem em formato de tabela
- Cada linha é um registro
- Você verá 3 colunas:
  - `key` = identificador (user_67999, quiz_67999, etc)
  - `value` = os dados em JSON
  - `created_at` = data/hora de criação

### Filtrar por Tipo:
- Digite na busca: `user_` para ver só usuários
- Digite: `quiz_` para ver respostas
- Digite: `victory_` para vitórias
- Digite: `testimony_` para testemunhos

### Exportar para Excel:
1. No canto superior direito, clique nos **3 pontinhos (⋯)**
2. Selecione **"Download as CSV"**
3. Abra o CSV no Excel
4. Pronto! Você tem todos os dados em planilha

---

## 2️⃣ VIA API (Programático)

### Listar Todos os Usuários:

**Endpoint:**
```
GET https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users
```

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis
```

**Resposta:**
```json
{
  "users": [
    {
      "name": "João Silva",
      "whatsapp": "67999999999",
      "email": "joao@email.com",
      "createdAt": "2026-01-15T10:30:00Z"
    },
    {
      "name": "Maria Santos",
      "whatsapp": "67988888888",
      "email": "maria@email.com",
      "createdAt": "2026-01-15T11:00:00Z"
    }
  ],
  "count": 2
}
```

### Usar no JavaScript:

```javascript
// Pegar todos os usuários
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'
  }
})
.then(response => response.json())
.then(data => {
  console.log(`Total de usuários: ${data.count}`);
  console.table(data.users); // Mostra tabela bonitinha no console
  
  // Salvar em arquivo JSON
  const blob = new Blob([JSON.stringify(data.users, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'usuarios_fe_sabedoria.json';
  a.click();
});
```

### Listar Testemunhos:

```javascript
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-testimonies', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'
  }
})
.then(r => r.json())
.then(d => console.log('Testemunhos:', d.testimonies));
```

---

## 3️⃣ GOOGLE SHEETS (Automático)

### Criar planilha que atualiza sozinha:

1. **Abra Google Sheets**
2. **Crie nova planilha**
3. **Vá em: Extensões → Apps Script**
4. **Cole este código:**

```javascript
function importarUsuarios() {
  const url = 'https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis';
  
  const options = {
    'method': 'get',
    'headers': {
      'Authorization': 'Bearer ' + token
    }
  };
  
  const response = UrlFetchApp.fetch(url, options);
  const data = JSON.parse(response.getContentText());
  const users = data.users;
  
  // Pegar planilha ativa
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Limpar dados antigos (exceto cabeçalho)
  if (sheet.getLastRow() > 1) {
    sheet.deleteRows(2, sheet.getLastRow() - 1);
  }
  
  // Adicionar cabeçalhos
  sheet.getRange(1, 1, 1, 4).setValues([['Nome', 'WhatsApp', 'Email', 'Data Cadastro']]);
  
  // Adicionar usuários
  const rows = users.map(user => [
    user.name,
    user.whatsapp,
    user.email,
    user.createdAt
  ]);
  
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, 4).setValues(rows);
  }
  
  // Formatar
  sheet.autoResizeColumns(1, 4);
}
```

5. **Salve o script** (nome: ImportarUsuarios)
6. **Execute:** Clique em ▶️ (Run)
7. **Autorize** quando pedir permissões
8. **PRONTO!** Planilha preenchida automaticamente!

### Atualizar automaticamente a cada hora:

1. No Apps Script, clique em **⏰ (Triggers)**
2. Clique em **"+ Add Trigger"**
3. Configure:
   - Function: `importarUsuarios`
   - Event source: `Time-driven`
   - Type: `Hour timer`
   - Hour interval: `Every hour`
4. **Salve**
5. Agora sua planilha atualiza sozinha a cada hora! 🔥

---

## 📊 TIPOS DE DADOS SALVOS

### 1. Usuários (`user_*`)
```json
{
  "name": "João Silva",
  "whatsapp": "67999999999",
  "email": "joao@email.com",
  "createdAt": "2026-01-15T10:30:00Z"
}
```

### 2. Respostas do Quiz (`quiz_*`)
```json
{
  "whatsapp": "67999999999",
  "quizAnswers": {
    "familiar": {
      "selected": "Conflitos não resolvidos",
      "text": "Minha observação..."
    },
    "espiritual": { ... },
    "financeira": { ... },
    "saude": { ... },
    "crescimento": { ... }
  },
  "updatedAt": "2026-01-15T10:35:00Z"
}
```

### 3. Vitórias (`victory_*`)
```json
{
  "whatsapp": "67999999999",
  "area": "familiar",
  "victoryNote": "Reconciliei com meu irmão!",
  "completedAt": "2026-03-20T14:00:00Z"
}
```

### 4. Testemunhos (`testimony_*`)
```json
{
  "name": "Maria Santos",
  "testimony": "Deus curou minha família em 2026!",
  "createdAt": "2026-12-15T18:00:00Z"
}
```

---

## 📈 ANÁLISES QUE VOCÊ PODE FAZER

### Com os dados exportados, você pode:

✅ **Quantos usuários cadastraram por dia/semana/mês**
✅ **Quais áreas têm mais desafios identificados**
✅ **Taxa de conclusão do quiz**
✅ **Quantas vitórias foram marcadas**
✅ **Testemunhos mais impactantes**
✅ **Horários de maior acesso**
✅ **Região (pelos DDD dos WhatsApp)**

### Criar gráficos no Excel:
1. Exporte os dados (método 1)
2. Crie tabelas dinâmicas
3. Gere gráficos de barras, pizza, etc.
4. Use para relatórios e pregações!

---

## 🔒 SEGURANÇA

**⚠️ IMPORTANTE:**
- Dados pessoais (WhatsApp, email) são sensíveis
- **NÃO compartilhe** publicamente
- Use apenas para fins internos da igreja
- Siga a **LGPD** (Lei Geral de Proteção de Dados)
- Não envie para terceiros sem consentimento

---

## 💡 DICAS PRO

### 1. Backup Diário:
- Configure o script do Google Sheets para rodar todo dia
- Você terá backup automático dos dados

### 2. Dashboards:
- Use Google Data Studio: https://datastudio.google.com
- Conecte com o Google Sheets
- Crie dashboards lindos e automáticos

### 3. Relatórios Semanais:
- Todo domingo, exporte os dados
- Veja quantas pessoas novas
- Identifique tendências

### 4. Filtros Úteis no Excel:
```
=COUNTIF(B:B, "*67*")  → Contar por DDD
=COUNTIF(A:A, "*Silva*")  → Contar por sobrenome
=SORT(A:D, 4, FALSE)  → Ordenar por data
```

---

## 🎯 QUICK WINS

### Ver total de usuários AGORA:
1. Abra Console do navegador (F12)
2. Cole:
```javascript
fetch('https://fsvafpykhreepcfqzeor.supabase.co/functions/v1/make-server-2abe71c1/list-users', {
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmFmcHlraHJlZXBjZnF6ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI1MzIsImV4cCI6MjA4MjU2ODUzMn0.9kvaboLOkUP4vwauzsnHf8eo3E3uNDQ3QLJRomslUis'}
})
.then(r=>r.json())
.then(d=>alert('🔥 TOTAL: '+d.count+' usuários!'));
```

---

## 🚀 PRÓXIMO NÍVEL

Depois de dominar isso, você pode:

1. **Criar API personalizada** para relatórios
2. **Integrar com WhatsApp Business API** (mensagens automáticas)
3. **Enviar emails de acompanhamento**
4. **Criar sistema de pontos/gamificação**
5. **Notificações push personalizadas**

---

**AGORA VOCÊ TEM CONTROLE TOTAL DOS DADOS! 📊🔥**

Qualquer dúvida, consulte:
- `INSTRUCOES_LANCAMENTO.md`
- `TEST_API.md`
- `GUIA_RAPIDO_LANCAMENTO.md`

**BOA ANÁLISE! 📈💪**
