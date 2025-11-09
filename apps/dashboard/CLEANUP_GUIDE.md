# 🧹 GUIA COMPLETO - REMOVER LOVABLE DO PROJETO KRONDLE

## ✅ MODIFICAÇÕES REALIZADAS

### 📝 Arquivos Alterados:

1. **README.md** - Substituído completamente
   - ❌ Removido: Todo conteúdo sobre Lovable
   - ✅ Adicionado: README profissional do Krondle com:
     - Descrição do projeto
     - Tecnologias utilizadas
     - Instruções de instalação
     - Estrutura do projeto
     - Informações da equipa

2. **package.json** - Modificado
   - ❌ Removido: `"lovable-tagger": "^1.1.11"` das devDependencies
   - ✅ Alterado: Nome de `"vite_react_shadcn_ts"` para `"krondle"`
   - ✅ Alterado: Versão de `"0.0.0"` para `"1.0.0"`
   - ✅ Adicionado: Descrição e autor do projeto

3. **index.html** - Modificado
   - ❌ Removido: Links de imagens do Lovable
   - ❌ Removido: Twitter @lovable_dev
   - ❌ Corrigido: "Grupo 17" → "Grupo 4 IGE ISCTE"
   - ✅ Adicionado: Links locais para imagens OG

4. **vite.config.ts** - Modificado
   - ❌ Removido: `import { componentTagger } from "lovable-tagger"`
   - ❌ Removido: Plugin `componentTagger()` da configuração
   - ✅ Simplificado: Configuração do Vite

5. **.env.example** - Criado
   - ✅ Template para variáveis de ambiente
   - ✅ Comentários explicativos

---

## 🚀 PRÓXIMOS PASSOS (FAZER MANUALMENTE)

### **1. Reinstalar Dependências (OBRIGATÓRIO)**

```bash
# Entre na pasta do projeto
cd smart-date-buddy-main

# Remova node_modules e package-lock.json antigos
rm -rf node_modules package-lock.json

# Reinstale as dependências (sem lovable-tagger)
npm install

# Teste se está tudo ok
npm run dev
```

**O que isso faz?**
- Remove o `lovable-tagger` completamente
- Atualiza o `package-lock.json`
- Garante que não há dependências desnecessárias

---

### **2. Criar Imagem Open Graph (OPCIONAL)**

O `index.html` agora referencia `/krondle-og-image.png`. Vocês podem:

**Opção A - Criar imagem:**
```bash
# Coloque uma imagem 1200x630px em:
public/krondle-og-image.png
```

**Opção B - Usar logo existente temporariamente:**
```bash
# Copie o logo atual
cp src/assets/krondle-logo.jpeg public/krondle-og-image.png
```

**Opção C - Remover (se não precisarem agora):**
Editar `index.html` e comentar as linhas 13 e 17:
```html
<!-- <meta property="og:image" content="/krondle-og-image.png" /> -->
<!-- <meta name="twitter:image" content="/krondle-og-image.png" /> -->
```

---

### **3. Atualizar README (OPCIONAL)**

Edite `README.md` e adicione:

**Linha 118 - Email do grupo:**
```markdown
- Email: seuemail@example.com
```

**Linha 119 - Link do repositório:**
```markdown
- Repositório: https://github.com/seu-usuario/krondle
```

---

### **4. Configurar Git (SE AINDA NÃO FIZERAM)**

```bash
# Inicialize o repositório (se ainda não tiver)
git init

# Adicione todos os arquivos
git add .

# Primeiro commit limpo
git commit -m "feat: remove Lovable dependencies and rebrand as Krondle

- Replace README.md with professional project documentation
- Remove lovable-tagger from dependencies
- Update project name and version in package.json
- Clean index.html meta tags
- Simplify vite.config.ts
- Add .env.example template"

# Configure o remote (substitua com SEU repositório)
git remote add origin https://github.com/seu-usuario/krondle.git

# Push para o GitHub
git push -u origin main
```

---

### **5. Verificar se Tudo Funciona**

```bash
# Teste o desenvolvimento
npm run dev

# Deve abrir em http://localhost:8080
# Navegue pelas páginas para garantir que tudo funciona
```

**Checklist de verificação:**
- [ ] Servidor inicia sem erros
- [ ] Landing page carrega
- [ ] Dashboard carrega
- [ ] Calendário funciona
- [ ] Tema dark/light funciona
- [ ] Não há erros no console do browser

---

## 📊 COMPARAÇÃO ANTES/DEPOIS

### package.json
```diff
- "name": "vite_react_shadcn_ts",
- "version": "0.0.0",
+ "name": "krondle",
+ "version": "1.0.0",
+ "description": "Plataforma de agendamento automático via WhatsApp, Instagram e Email",
+ "author": "Grupo 4 - IGE ISCTE",

  "devDependencies": {
    ...
-   "lovable-tagger": "^1.1.11",
    ...
  }
```

### vite.config.ts
```diff
- import { componentTagger } from "lovable-tagger";

- export default defineConfig(({ mode }) => ({
-   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
+ export default defineConfig({
+   plugins: [react()],
```

---

## ❓ TROUBLESHOOTING

### Erro: "Cannot find module 'lovable-tagger'"

**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: Port 8080 já está em uso

**Solução:**
```bash
# Opção 1: Matar processo na porta 8080
lsof -ti:8080 | xargs kill -9

# Opção 2: Mudar porta no vite.config.ts
# Trocar "port: 8080" por "port: 3000"
```

### Página em branco após mudanças

**Solução:**
```bash
# Limpar cache do Vite
rm -rf .vite
npm run dev
```

---

## 📁 ESTRUTURA FINAL

```
krondle/
├── .env.example          ← NOVO
├── README.md             ← MODIFICADO
├── package.json          ← MODIFICADO
├── index.html            ← MODIFICADO
├── vite.config.ts        ← MODIFICADO
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
└── public/
    └── krondle-og-image.png  ← CRIAR (opcional)
```

---

## ✅ CHECKLIST FINAL

Antes de continuar para os Sprints:

- [ ] Executei `rm -rf node_modules package-lock.json`
- [ ] Executei `npm install`
- [ ] Executei `npm run dev` e funcionou
- [ ] Verifiquei que não há erros no console
- [ ] Li o novo README.md
- [ ] (Opcional) Criei a imagem OG
- [ ] (Opcional) Atualizei email e repo no README
- [ ] (Opcional) Fiz commit no Git

---

## 🎯 PRÓXIMO PASSO

Depois de concluir tudo acima, estamos prontos para:

**🚀 COMEÇAR OS SPRINTS DE DESENVOLVIMENTO!**

Avise quando estiver tudo limpo e funcionando para começarmos:
1. Sistema de Autenticação
2. Layout com Sidebar
3. Responsividade Mobile
4. ... (resto do roadmap)

---

**Qualquer dúvida, basta perguntar!** 🙌
