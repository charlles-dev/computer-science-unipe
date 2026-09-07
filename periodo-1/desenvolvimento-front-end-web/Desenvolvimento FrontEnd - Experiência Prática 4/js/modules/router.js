// Módulo de Roteamento SPA baseado em Hash
import { renderHome } from '../templates/homeTemplate.js';
import { renderProjetos } from '../templates/projetosTemplate.js';
import { renderCadastro } from '../templates/cadastroTemplate.js';

const routes = {
  '': renderHome,
  '#home': renderHome,
  '#projetos': renderProjetos,
  '#cadastro': renderCadastro
};

export function initRouter(rootElement) {
  function navigate() {
    const hash = window.location.hash || '#home';
    const renderFn = routes[hash] || renderHome;
    
    // Injeção dinâmica do template no DOM
    rootElement.innerHTML = renderFn();

    // Atualiza links ativos na navegação
    document.querySelectorAll('[data-link]').forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', navigate);
  navigate(); // Carga inicial
}
