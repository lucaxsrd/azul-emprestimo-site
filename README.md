# 🏢 Azul Empréstimos Aracruz - Website Oficial

> **Soluções Financeiras Inteligentes em Aracruz/ES**

Um website moderno e responsivo para a **Azul Empréstimos**, especializada em crédito consignado, empréstimos FGTS, cartões de crédito, consórcios e outras soluções financeiras em Aracruz, Espírito Santo.

[![Status](https://img.shields.io/badge/Status-Ativo-green)](https://azulemprestimo.com.br)
[![Versão](https://img.shields.io/badge/Versão-2.0-blue)](https://github.com/azul-emprestimos/website)
[![Licença](https://img.shields.io/badge/Licença-MIT-yellow)](LICENSE)

## 🌟 Características Principais

- **✨ Design Moderno**: Interface limpa com paleta azul, preto e branco
- **📱 Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **🚀 Performance Otimizada**: Carregamento rápido e experiência fluida
- **📊 Integração Completa**: Google Sheets + Apps Script para captura de leads
- **💬 WhatsApp Integrado**: Mensagens personalizadas por serviço
- **📧 Notificações Automáticas**: E-mails instantâneos para cada lead
- **♿ Acessibilidade**: Conformidade com padrões WCAG
- **🔍 SEO Otimizado**: Estruturado para máxima visibilidade

## 🏗️ Estrutura do Projeto

```
azulemprestimosite/
├── 📄 index.html                    # Página principal (modular)
├── 📄 siteazul.html                 # Versão original (backup)
├── 📄 style-clean.css               # CSS original (backup)
├── 📄 README.md                     # Este arquivo
├── 📁 assets/                       # Recursos estáticos
│   ├── 📁 css/                      # Estilos organizados
│   │   ├── base.css                 # Reset, tipografia, variáveis
│   │   ├── components.css           # Botões, cards, formulários
│   │   ├── sections.css             # Hero, serviços, rodapé
│   │   └── responsive.css           # Media queries e responsividade
│   ├── 📁 js/                       # JavaScript modular
│   │   ├── components.js            # Navegação, carrossel, modais
│   │   ├── forms.js                 # Formulários e validação
│   │   ├── whatsapp.js              # Integração WhatsApp
│   │   ├── main.js                  # Inicialização e utilitários
│   │   └── media-manager.js         # Gerenciamento de imagens
│   └── 📁 images/                   # Todas as imagens
│       ├── LOGO AZUL EMPRESTIMO 2.png
│       ├── CAPA SEM FRANQUIAS 2.png
│       └── ...
├── 📁 components/                   # Componentes HTML
│   ├── header.html                  # Navegação
│   ├── hero.html                    # Seção principal
│   ├── services.html                # Serviços
│   └── ...
└── 📁 scripts/                      # Scripts do servidor
    └── apps-script-ultra-simples.js # Google Apps Script
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com Flexbox/Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia (Inter)

### Backend & Integrações
- **Google Apps Script**: Processamento de formulários
- **Google Sheets API**: Armazenamento de dados
- **MailApp (Gmail)**: Notificações por e-mail
- **WhatsApp Business API**: Mensagens diretas

### Ferramentas de Desenvolvimento
- **Modular Architecture**: Código organizado e reutilizável
- **Responsive Design**: Mobile-first approach
- **SEO Structure**: Meta tags e dados estruturados
- **Performance Optimization**: Carregamento otimizado

## 📋 Funcionalidades Detalhadas

### 🎯 Captura de Leads
- **Formulário Principal**: Hero section com validação em tempo real
- **Validação Robusta**: E-mail, telefone e campos obrigatórios
- **Envio Seguro**: HTTPS com tratamento de erros
- **Confirmação Visual**: Notificações de sucesso/erro

### 💬 Sistema WhatsApp
- **Mensagens Personalizadas**: Diferentes templates por serviço
- **Botão Flutuante**: Sempre visível durante navegação
- **Integração com Formulários**: Dados do lead inclusos na mensagem
- **Rastreamento**: Analytics de cliques

### 📊 Painel Administrativo (Google Sheets)
```
https://docs.google.com/spreadsheets/d/1hooOhureD8QGUDhpSkd00FiVJSVKbo7PfP5mAC8Y_hc/edit
```
- **Dados em Tempo Real**: Leads salvos instantaneamente
- **Organização Automática**: Colunas estruturadas
- **Notificações E-mail**: Alertas para cada novo lead
- **Exportação Fácil**: CSV, Excel, PDF

### 🎨 Design System
```css
:root {
    --primary-color: #1a237e;      /* Azul principal */
    --primary-light: #303f9f;      /* Azul claro */
    --primary-dark: #0d47a1;       /* Azul escuro */
    --secondary-color: #000000;     /* Preto */
    --bg-color: #ffffff;           /* Branco */
    --text-color: #212121;         /* Texto principal */
    --text-light: #666;            /* Texto secundário */
}
```

## 🚀 Como Usar

### 📥 Instalação
```bash
# Clone o repositório
git clone https://github.com/azul-emprestimos/website.git

# Entre na pasta do projeto
cd azulemprestimosite

# Abra o index.html em um servidor local
# Recomendado: Live Server (VS Code) ou Python HTTP Server
```

### 🔧 Configuração

#### 1. Google Apps Script
```javascript
// URL atual do Apps Script
https://script.google.com/macros/s/AKfycbx-98ihuO-yAd1V0RkjDwloqZzhmV4kb9uqkixj1EWOVYMVH8EEekRt8Mp-b4fnMyQK/exec

// Para reconfigurar:
1. Acesse Google Apps Script
2. Cole o código de scripts/apps-script-ultra-simples.js
3. Configure as permissões
4. Atualize a URL em assets/js/forms.js
```

#### 2. WhatsApp
```javascript
// Configuração atual
WHATSAPP_CONFIG = {
    number: '5527996098641',
    baseUrl: 'https://wa.me/'
}

// Para alterar:
// Edite assets/js/whatsapp.js
```

#### 3. Google Sheets
```
ID da Planilha: 1hooOhureD8QGUDhpSkd00FiVJSVKbo7PfP5mAC8Y_hc
```

### 📝 Personalização

#### Alterar Cores
```css
/* Em assets/css/base.css */
:root {
    --primary-color: #sua-cor-aqui;
    --secondary-color: #sua-cor-aqui;
}
```

#### Adicionar Serviços
```html
<!-- Em components/services.html -->
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-seu-icone"></i>
    </div>
    <h3>Seu Serviço</h3>
    <p>Descrição do serviço...</p>
</div>
```

#### Mensagens WhatsApp
```javascript
// Em assets/js/whatsapp.js
WHATSAPP_MESSAGES = {
    'novo_servico': 'Sua mensagem personalizada aqui'
}
```

## 📈 Monitoramento e Analytics

### 🎯 Google Analytics
```javascript
// Configurar em assets/js/main.js
gtag('config', 'SEU-GA-ID');
```

### 📊 Eventos Rastreados
- ✅ Submissões de formulário (sucesso/erro)
- 📱 Cliques no WhatsApp
- 📄 Visualizações de página
- 🖱️ Interações com componentes

## 🔧 Manutenção

### ⚡ Performance
- **Otimização de Imagens**: Use formatos WebP quando possível
- **Minificação**: Comprimir CSS/JS para produção
- **Cache**: Configurar headers de cache no servidor
- **CDN**: Considerar CloudFlare ou similar

### 🔒 Segurança
- **HTTPS**: Sempre usar certificado SSL
- **Validação**: Backend sempre validar dados
- **Sanitização**: Limpar inputs do usuário
- **Rate Limiting**: Prevenir spam de formulários

### 📱 Responsividade
```css
/* Breakpoints utilizados */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Mobile pequeno */ }
```

## 📞 Suporte e Contato

### 🏢 Azul Empréstimos
- **📍 Endereço**: Aracruz, Espírito Santo
- **📱 WhatsApp**: (27) 99609-8641
- **📧 E-mail**: contato@azulemprestimo.com.br
- **🌐 Website**: https://azulemprestimo.com.br

### 📱 Redes Sociais
- **📘 Facebook**: https://www.facebook.com/profile.php?id=61575925683121
- **📸 Instagram**: https://www.instagram.com/azul.emprestimo_aracruz/

### 🛠️ Suporte Técnico
- **Issues**: Abra uma issue no GitHub
- **E-mail**: dev@azulemprestimo.com.br
- **Documentação**: Consulte este README

## 🔄 Changelog

### v2.0 (Atual) - Reestruturação Completa
- ✅ **Arquitetura Modular**: HTML, CSS e JS organizados
- ✅ **Componentes Separados**: Reutilização e manutenibilidade
- ✅ **Performance Otimizada**: Carregamento mais rápido
- ✅ **Código Limpo**: Estrutura profissional
- ✅ **Documentação Completa**: README detalhado

### v1.0 (Anterior) - Versão Monolítica
- ✅ **Funcionalidade Completa**: Formulários e integrações
- ✅ **Design Responsivo**: Compatibilidade mobile
- ✅ **WhatsApp Integrado**: Mensagens personalizadas
- ✅ **Google Sheets**: Captura de leads funcionando

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**🚀 Desenvolvido com ❤️ para Azul Empréstimos Aracruz**

[Website](https://azulemprestimo.com.br) • [WhatsApp](https://wa.me/5527996098641) • [Instagram](https://instagram.com/azul.emprestimo_aracruz)

</div>

## 🎨 Design e Paleta de Cores

O site utiliza uma paleta moderna com:
- **Azul Escuro Principal**: `#1a237e` 
- **Azul Secundário**: `#303f9f`
- **Preto**: `#000000` e `#212121`
- **Branco Puro**: `#ffffff`
- **Cinzas**: Para textos secundários e backgrounds

## 📱 Funcionalidades Implementadas

### ✅ Estrutura Completa
- **Navegação Responsiva**: Menu hamburguer para mobile
- **Hero Section**: Seção principal com call-to-action
- **Serviços**: Grid responsivo com cards interativos
- **Portfólio**: Showcase de casos de sucesso
- **Ajuda**: FAQ expansível + cards de suporte
- **Contato**: Formulário completo com validação
- **Redes Sociais**: Links editáveis dinamicamente
- **Footer**: Informações organizadas

### ✅ Modal de Propagandas
- Modal responsivo para visualização de ofertas
- Conteúdo editável em tempo real
- Animações suaves de abertura/fechamento
- Sistema de badges para promoções especiais

### ✅ Sistema de Contato (Preparado para n8n)
```javascript
// Exemplo de integração com n8n
fetch('https://your-n8n-webhook-url.com/webhook/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
```

### ✅ Recursos Avançados
- **Animações**: Scroll animations com Intersection Observer
- **Validação**: Formulários com validação em tempo real
- **Notificações**: Sistema de toast notifications
- **Loading States**: Estados de carregamento nos botões
- **Smooth Scrolling**: Navegação suave entre seções

## 🔧 Como Editar Informações

### Redes Sociais (Editável via JavaScript)
```javascript
// Para atualizar links das redes sociais:
updateSocialLink('facebook', 'https://novo-link-facebook.com');
updateSocialLink('instagram', 'https://novo-link-instagram.com');
updateSocialLink('whatsapp', 'https://wa.me/novo-numero');
updateSocialLink('linkedin', 'https://novo-link-linkedin.com');
```

### Propagandas (Editável via Modal)
As propagandas no modal podem ser atualizadas editando o conteúdo em `#adsContent` ou implementando um sistema de CMS.

### Contatos e Informações
Edite diretamente no HTML as seguintes seções:
- Telefones e WhatsApp
- E-mails de contato  
- Endereço físico
- Horários de funcionamento

## 🌐 Integração com n8n

### Webhook de Contato
1. Configure um webhook no n8n
2. Substitua a URL no JavaScript:
```javascript
const webhookUrl = 'https://your-n8n-instance.com/webhook/contact';
```

### Estrutura dos Dados Enviados
```json
{
    "name": "Nome do Cliente",
    "phone": "Telefone",
    "email": "E-mail", 
    "service": "Serviço de Interesse",
    "amount": "Valor Desejado",
    "message": "Mensagem Adicional",
    "consent": true,
    "timestamp": "2025-10-01T10:30:00Z"
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: até 767px
- **Mobile Small**: até 480px

## 🚀 Otimizações Implementadas

### Performance
- Fontes web otimizadas (Inter via Google Fonts)
- CSS com variáveis para fácil manutenção
- Lazy loading para animações
- Compressão de imagens SVG inline

### SEO
- Estrutura HTML semântica
- Meta tags configuradas
- Títulos hierárquicos corretos
- Alt texts para ícones importantes

### UX/UI
- Micro-interações em botões e cards
- Estados de hover consistentes
- Feedback visual em formulários
- Animações suaves e não invasivas

## 🔄 Atualizações Futuras Sugeridas

1. **CMS Integration**: Conectar com Strapi ou similar para gerenciar conteúdo
2. **Analytics**: Implementar Google Analytics 4
3. **Chat Online**: Integrar chat em tempo real
4. **Blog**: Seção de artigos sobre educação financeira
5. **Calculadoras**: Simuladores de empréstimo interativos

## 📞 Suporte Técnico

Para atualizações ou modificações no site, as áreas principais são:
- `siteazul.html`: Estrutura e conteúdo
- `style.css`: Estilos e design
- JavaScript interno: Funcionalidades interativas

### Contatos Técnicos para Edição
- Telefones: Procure por `(27) 99999-9999` no HTML
- E-mails: Procure por `contato@azulemprestimoaracruz.com.br`
- Redes sociais: Use as funções JavaScript `updateSocialLink()`

---

## 🔧 Melhorias Implementadas na Versão 2.0

### 📁 Reorganização Completa do Código
- ✅ **Modularização**: Código de 927 linhas separado em estrutura modular
- ✅ **CSS Organizado**: 4 arquivos especializados (base, components, sections, responsive)
- ✅ **JavaScript Modular**: 4 módulos funcionais (components, forms, whatsapp, main)
- ✅ **Estrutura Profissional**: Organização de pastas escalável

### 🛡️ Sistema de Debugging e Segurança
- ✅ **Logs Detalhados**: Sistema completo de logs no console
- ✅ **Verificações de Segurança**: Validação de elementos DOM em todas as funções
- ✅ **Tratamento de Erros**: Captura e tratamento robusto de erros JavaScript
- ✅ **Validação Aprimorada**: Formulários com validação robusta e feedback
- ✅ **Fallbacks Inteligentes**: Inicialização alternativa quando componentes falham

### ⚡ Performance e Manutenibilidade
- ✅ **Carregamento Otimizado**: Ordem correta de carregamento de scripts
- ✅ **Código Documentado**: Comentários detalhados e estrutura clara
- ✅ **Estrutura Escalável**: Fácil adição de novos componentes
- ✅ **Debugging Avançado**: Sistema de logs para facilitar manutenção

### 🔍 Sistema de Monitoramento
- ✅ **Console Logs**: Logs coloridos para diferentes tipos de eventos
- ✅ **Error Tracking**: Captura automática de erros globais
- ✅ **Validation Logs**: Feedback detalhado da validação de formulários
- ✅ **Initialization Status**: Status de inicialização de cada módulo

### 🏗️ Arquitetura Modular Implementada

**Antes (siteazul.html):**
- 927 linhas monolíticas em um único arquivo
- CSS e JS misturados com HTML
- Difícil manutenção e debugging

**Depois (estrutura modular):**
```
assets/
├── css/
│   ├── base.css        # Variáveis, reset, tipografia
│   ├── components.css  # Botões, cards, formulários
│   ├── sections.css    # Hero, serviços, footer
│   └── responsive.css  # Media queries
├── js/
│   ├── components.js   # Navegação, carousel, modais
│   ├── forms.js       # Formulários e validação
│   ├── whatsapp.js    # Integração WhatsApp
│   └── main.js        # Inicialização principal
└── images/            # Imagens organizadas
```

### 📊 Status Final
- 🟢 **Código**: 100% modularizado e organizado
- 🟢 **Debugging**: Sistema completo implementado
- 🟢 **Validação**: Robusta em todos os formulários
- 🟢 **Performance**: Carregamento otimizado
- 🟢 **Manutenção**: Estrutura fácil de manter
- 🟢 **Escalabilidade**: Pronto para crescer

**Resultado**: De um arquivo monolítico de 927 linhas para uma arquitetura profissional, modular, com debugging avançado e fácil manutenção! 🚀