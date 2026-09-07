# Desenvolvimento Front-End - Experiência Prática 3 (UNIPÊ)

Implementação dos fundamentos de arquitetura para Single Page Application (SPA) para a **ONG Esperança Viva**:
- **Separação de Responsabilidades:** Diretórios isolados para `/html`, `/css`, `/js` e `/assets`.
- **Roteamento SPA:** Sistema nativo baseado em hash (`hashchange`) para navegação instantânea.
- **Templates Dinâmicos:** Renderização via Template Literals desacoplando dados de projetos da marcação.
- **Persistência Local:** Armazenamento de dados do voluntário via `localStorage` (`JSON.stringify` / `JSON.parse`).
- **Validação de Consistência:** Regras preventivas de validação no submit e máscaras reativas com RegEx.

## 📂 Estrutura de Arquivos
- `html/index.html`: Application shell com elemento de montagem `#app-root`.
- `css/reset.css` e `css/styles.css`: Estilização e Design System.
- `js/main.js`: Ponto de entrada (entrypoint) e orquestração da SPA.
- `js/modules/`: Roteador, validação e persistência em módulos isolados.
- `js/templates/`: Views dinâmicas (`homeTemplate.js`, `projetosTemplate.js`, `cadastroTemplate.js`).
- `assets/img/`: Imagens e vetores SVG otimizados.
