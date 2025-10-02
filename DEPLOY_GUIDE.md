# 🚀 Deploy Guide - Netlify

## 📋 Pré-requisitos
- Conta no GitHub
- Conta na Netlify
- Projeto limpo e otimizado

## 🔧 Passos para Deploy

### 1. **Preparar Git Repository**
```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "feat: website azul empréstimo - versão final otimizada"

# Conectar com repositório remoto (criar no GitHub primeiro)
git remote add origin https://github.com/SEU-USUARIO/azul-emprestimo-site.git

# Enviar para GitHub
git push -u origin main
```

### 2. **Deploy na Netlify**

#### Opção A: Deploy via GitHub
1. Acesse [netlify.com](https://netlify.com)
2. Login com GitHub
3. "New site from Git" 
4. Escolher GitHub
5. Selecionar repositório `azul-emprestimo-site`
6. Configurações:
   - **Build command**: (deixar vazio)
   - **Publish directory**: (deixar vazio ou colocar `./`)
7. Click "Deploy site"

#### Opção B: Deploy Manual
1. Comprimir pasta do projeto em ZIP
2. Arrastar ZIP para [netlify.com/drop](https://netlify.com/drop)
3. Site será deployado automaticamente

### 3. **Configurações Importantes**

#### **Custom Domain (Opcional)**
- Site settings > Domain management
- Add custom domain: `seudominio.com.br`
- Configurar DNS conforme instruções

#### **HTTPS (Automático)**
- Netlify ativa HTTPS automaticamente
- Certificado SSL gratuito via Let's Encrypt

#### **Redirects & Headers**
Criar arquivo `_redirects` na raiz (se necessário):
```
/*    /index.html   200
```

### 4. **Variáveis de Ambiente**
- Site settings > Build & deploy > Environment variables
- Adicionar variáveis se necessário

### 5. **Performance**
- ✅ Todas as imagens otimizadas
- ✅ CSS/JS minificado em produção
- ✅ Assets comprimidos
- ✅ CDN global (automático na Netlify)

## 📊 Checklist Final
- [ ] Site funcionando localmente
- [ ] Todas as imagens carregando
- [ ] Formulários funcionando
- [ ] Links WhatsApp ativos
- [ ] Google Sheets integrado
- [ ] Responsivo em todos dispositivos
- [ ] Performance otimizada

## 🔗 URLs Importantes
- **Google Apps Script**: https://script.google.com/macros/s/AKfycbx...
- **Google Sheets**: https://docs.google.com/spreadsheets/d/1hooOhureD8...
- **WhatsApp**: https://wa.me/5527996098641

## ⚡ Deploy Rápido
```bash
# Clone, commit e push
git add . && git commit -m "deploy: ready for production" && git push
```

**URL do site ficará**: `https://SEU-SITE-NAME.netlify.app`