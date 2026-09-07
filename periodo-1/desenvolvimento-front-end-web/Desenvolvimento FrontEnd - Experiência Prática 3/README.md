# Plataforma Digital - ONG Esperança Viva (SPA)

Aplicação web desenvolvida no modelo **Single Page Application (SPA)** para a **ONG Esperança Viva**, voltada ao resgate, tratamento e adoção responsável de animais em vulnerabilidade social em João Pessoa - PB.

---

## 🚀 Tecnologias Utilizadas
- **HTML5 Semântico:** Estrutura W3C, acessibilidade WCAG 2.1 (AA) e tags ARIA (`aria-live`, `aria-current`).
- **CSS3 Avançado:** Design System nativo (`:root`), Grid de 12 colunas, Flexbox, componentes de feedback e 5 breakpoints responsivos.
- **JavaScript Moderno (ES6+):** Roteamento em hash (`hashchange`), Template Literals, manipulação atômica do DOM, Delegação de Eventos e ES Modules.
- **Web Storage API:** Persistência de sessão local via `localStorage` com serialização JSON.
- **SweetAlert2 (v11):** Biblioteca externa acoplada via CDN para modais de feedback visual acessível.

---

## 📂 Arquitetura de Diretórios
```text
/Desenvolvimento FrontEnd - Experiência Prática 3
├── /html
│   └── index.html               # Application shell e ponto de montagem (#app-root)
├── /css
│   ├── reset.css                # Normalização de estilos
│   └── styles.css               # Design System, variáveis e layout
├── /js
│   ├── main.js                  # Ponto de entrada (entrypoint) e orquestrador
│   ├── /modules
│   │   ├── router.js            # Roteador cliente SPA
│   │   ├── validation.js        # Regras de consistência e RegEx
│   │   └── storage.js           # Abstração de localStorage
│   └── /templates
│       ├── homeTemplate.js      # View institucional
│       ├── projetosTemplate.js  # View iterativa de projetos
│       └── cadastroTemplate.js  # View do formulário de voluntariado
└── /assets
    └── /img                     # Vetores SVG e identidades gráficas
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Navegador moderno com suporte a ES6 (Google Chrome, Mozilla Firefox, Edge ou Safari).
- Git instalado (opcional, para clonagem).
- Extensão *Live Server* (VS Code) ou utilitário HTTP simples como `npx serve` ou Python HTTP server (recomendado para testes com ES Modules).

### Passo a Passo
1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/charlles-dev/computer-science-unipe.git
   cd computer-science-unipe/periodo-1/desenvolvimento-front-end-web/"Desenvolvimento FrontEnd - Experiência Prática 3"
   ```
2. **Executar a Aplicação:**
   - **Opção A (Servidor Local - Recomendado):**
     Inicie um servidor na pasta raiz do projeto:
     ```bash
     npx serve .
     # ou no Python:
     python -m http.server 8000
     ```
     Acesse `http://localhost:8000/html/index.html` no navegador.
   - **Opção B (Abertura Direta):**
     Dê um duplo clique no arquivo `html/index.html` para executar diretamente via `file:///`.

---

## 🌿 Práticas de Versionamento e Fluxo Git
- **GitFlow:** Ramificações segregadas em `main` (produção estável), `develop` (desenvolvimento contínuo), `feature/*` (novas funcionalidades) e `hotfix/*` (correções críticas).
- **Conventional Commits:** Histórico padronizado utilizando prefixos semânticos (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).
- **Versionamento Semântico (SemVer):** Versionamento das entregas em tags no formato `vMAJOR.MINOR.PATCH` (`v1.0.0`, `v2.0.0`, `v3.0.0`, `v3.1.0`).
- **Governança no GitHub:** Acompanhamento de metas via *Milestones*, detalhamento de tarefas em *Issues* e integração de código por *Pull Requests (PRs)* com checklist de testes.
