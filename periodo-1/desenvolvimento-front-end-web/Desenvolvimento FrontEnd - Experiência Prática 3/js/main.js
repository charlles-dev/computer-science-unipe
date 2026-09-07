// Módulo de Roteamento e Templates Dinâmicos com 100% de fidelidade ao projeto da Prática 2
(function() {
  // 1. Template da Página Inicial (index.html da Prática 2)
  function renderHome() {
    return `
      <section class="secao-bloco" id="apresentacao" aria-labelledby="titulo-apresentacao">
        <span class="badge-tag">Institucional &amp; Propósito</span>
        <h1 id="titulo-apresentacao">Transformando Vidas Através do Resgate e Proteção Animal</h1>
        <p class="lead">Atuamos com dedicação, respeito e ética no cuidado de animais em situação de abandono e vulnerabilidade em João Pessoa e região.</p>

        <figure>
          <img src="../assets/img/hero-resgate.svg" alt="Ilustração representando a acolhida de cães e gatos em ambiente seguro pela ONG Esperança Viva" width="900" height="500">
          <figcaption>Espaço de convivência e recuperação dos animais acolhidos no abrigo central.</figcaption>
        </figure>
      </section>

      <section class="secao-bloco" id="contato" aria-labelledby="titulo-contato">
        <span class="badge-tag">Atendimento Direto</span>
        <h2 id="titulo-contato">Fale com a Nossa Coordenação</h2>
        <p>Você pode tirar dúvidas sobre adoção, agendar visitas técnicas ou propor parcerias corporativas através dos nossos canais:</p>

        <address class="bloco-contatos">
          <div class="contato-card">
            <strong>Endereço da Sede</strong>
            <span>Av. Esperança, nº 123 - Bairro Solidariedade<br>João Pessoa - PB, CEP: 58000-000</span>
          </div>

          <div class="contato-card">
            <strong>E-mail Institucional</strong>
            <a href="mailto:contato@esperancaviva.org.br">contato@esperancaviva.org.br</a>
          </div>

          <div class="contato-card">
            <strong>Telefone &amp; WhatsApp</strong>
            <a href="tel:+5583999990000">(83) 99999-0000</a>
          </div>
        </address>
      </section>
    `;
  }

  // 2. Template da Página de Projetos com Iteração Dinâmica de Dados
  const listaProjetos = [
    {
      id: 1,
      titulo: 'Mutirões Solidários de Castração',
      descricao: 'Esterilização cirúrgica ética e aplicação periódica de vacinas polivalentes em comunidades de extrema vulnerabilidade social.',
      imagem: '../assets/img/projeto-castracao.svg',
      alt: 'Ilustração do projeto de castração veterinária e vacinação da ONG'
    },
    {
      id: 2,
      titulo: 'Feiras de Adoção Responsável',
      descricao: 'Eventos presenciais semanais com acompanhamento veterinário e entrevistas de compatibilidade para tutores e pets.',
      imagem: '../assets/img/projeto-adocao.svg',
      alt: 'Ilustração de feira de adoção com símbolo de afeto e famílias acolhedoras'
    }
  ];

  function renderProjetos() {
    // Processamento de dados: mapeamento de objetos para fragmentos HTML
    const cardsHtml = listaProjetos.map(proj => `
      <article class="card-item" data-id="${proj.id}">
        <img src="${proj.imagem}" alt="${proj.alt}" width="600" height="360">
        <div class="card-conteudo">
          <h3>${proj.titulo}</h3>
          <p>${proj.descricao}</p>
        </div>
      </article>
    `).join('');

    return `
      <section class="secao-bloco" id="frentes-atuacao" aria-labelledby="titulo-iniciativas">
        <span class="badge-tag">Impacto Social</span>
        <h1 id="titulo-iniciativas">Projetos Permanentes em Operação</h1>
        <p class="lead">Nossas iniciativas contínuas visam solucionar a raiz do problema do abandono animal com foco em saúde e inclusão comunitária.</p>

        <div class="grid-cards">
          ${cardsHtml}
        </div>
      </section>


      <section class="secao-bloco" id="doacoes" aria-labelledby="titulo-doacoes">
        <span class="badge-tag">Apoie Esta Causa</span>
        <h2 id="titulo-doacoes">Contribuição Financeira e Transparência</h2>
        <p>Todas as nossas operações são custeadas exclusivamente pela sociedade civil. A sua doação financia rações terapêuticas, medicamentos e cirurgias veterinárias de emergência.</p>

        <div class="pix-box">
          <h3>Faça um PIX Solidário Instantâneo</h3>
          <p>Utilize nossa chave oficial CNPJ para transferir qualquer quantia:</p>
          <code>00.000.000/0001-00</code>
          <p><strong>Favorecido:</strong> Associação Beneficente Esperança Viva | Banco do Brasil</p>
        </div>
      </section>
    `;
  }

  // 3. Template da Ficha Completa de Voluntários (cadastro.html da Prática 2)
  function renderCadastro() {
    return `
      <section class="secao-bloco" id="cadastro-voluntario" aria-labelledby="titulo-cadastro">
        <span class="badge-tag">Junte-se a Nós</span>
        <h1 id="titulo-cadastro">Ficha de Inscrição de Novos Voluntários</h1>
        <p class="lead">Doe seu tempo e carinho. Preencha seus dados para participar dos nossos mutirões e ações de acolhimento.</p>

        <form action="/processar-cadastro" method="POST" onsubmit="event.preventDefault(); alert('Inscrição enviada com sucesso!');">
          <!-- Grupo 1: Identificação -->
          <fieldset>
            <legend>1. Dados Pessoais</legend>
            <div class="form-grid">
              <div class="form-grupo campo-full">
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required minlength="3" autocomplete="name" placeholder="Ex: Maria Pereira da Silva">
              </div>

              <div class="form-grupo">
                <label for="nascimento">Data de Nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>
              </div>

              <div class="form-grupo">
                <label for="cpf">CPF (apenas dígitos ou pontuado):</label>
                <input type="text" id="cpf" name="cpf" required inputmode="numeric" placeholder="000.000.000-00" pattern="^\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}$" title="Digite um CPF válido com 11 dígitos, ex: 123.456.789-00 ou apenas números." autocomplete="off">
              </div>
            </div>
          </fieldset>

          <!-- Grupo 2: Contatos -->
          <fieldset>
            <legend>2. Informações de Contato</legend>
            <div class="form-grid">
              <div class="form-grupo">
                <label for="email">E-mail Principal:</label>
                <input type="email" id="email" name="email" required autocomplete="email" placeholder="seuemail@exemplo.com">
              </div>

              <div class="form-grupo">
                <label for="telefone">Telefone / WhatsApp (com DDD):</label>
                <input type="tel" id="telefone" name="telefone" required inputmode="tel" placeholder="(83) 99999-9999" pattern="^\\(?\\d{2}\\)?\\s?(?:9\\d{4}|\\d{4})-?\\d{4}$" title="Informe seu telefone com DDD, ex: (83) 98888-7777 ou 83988887777." autocomplete="tel">
              </div>
            </div>
          </fieldset>

          <!-- Grupo 3: Endereço -->
          <fieldset>
            <legend>3. Endereço Residencial</legend>
            <div class="form-grid">
              <div class="form-grupo">
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" required inputmode="numeric" placeholder="58000-000" maxlength="9" pattern="^\\d{5}-?\\d{3}$" title="Digite um CEP válido com 8 dígitos, ex: 58000-000." autocomplete="postal-code">
              </div>

              <div class="form-grupo campo-full">
                <label for="logradouro">Logradouro / Rua:</label>
                <input type="text" id="logradouro" name="logradouro" required autocomplete="address-line1" placeholder="Ex: Rua das Palmeiras">
              </div>

              <div class="form-grupo">
                <label for="numero">Número:</label>
                <input type="number" id="numero" name="numero" min="1" required placeholder="120">
              </div>

              <div class="form-grupo">
                <label for="estado">Estado (UF):</label>
                <select id="estado" name="estado" required>
                  <option value="" disabled selected>Selecione...</option>
                  <option value="PB">Paraíba (PB)</option>
                  <option value="PE">Pernambuco (PE)</option>
                  <option value="RN">Rio Grande do Norte (RN)</option>
                  <option value="CE">Ceará (CE)</option>
                  <option value="Outro">Outro Estado</option>
                </select>
              </div>
            </div>
          </fieldset>

          <!-- Grupo 4: Declarações -->
          <fieldset>
            <legend>4. Termos e Autorizações</legend>
            <div class="checkbox-grupo">
              <input type="checkbox" id="termos" name="termos" required>
              <label for="termos">Declaro ter lido e concordo com os termos da Lei Geral de Proteção de Dados (LGPD) e diretrizes de voluntariado da ONG.</label>
            </div>
          </fieldset>

          <div class="btn-acoes">
            <button type="submit">Concluir Envio da Inscrição</button>
            <button type="reset">Limpar Dados</button>
          </div>
        </form>
      </section>
    `;
  }

  // Rotas da Aplicação SPA
  const routes = {
    '': renderHome,
    '#home': renderHome,
    '#projetos': renderProjetos,
    '#cadastro': renderCadastro
  };

  function navigate() {
    const root = document.getElementById('app-root');
    if (!root) return;

    const hash = window.location.hash || '#home';
    const renderFn = routes[hash] || renderHome;
    root.innerHTML = renderFn();

    // Atualiza links do menu
    document.querySelectorAll('[data-link]').forEach(link => {
      const linkHash = link.getAttribute('href');
      if (linkHash === hash || (hash === '' && linkHash === '#home')) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('nav-link-ativo');
      } else {
        link.removeAttribute('aria-current');
        link.classList.remove('nav-link-ativo');
      }
    });

    // Restauração de dados persistidos no localStorage (Hydration da view)
    if (hash === '#cadastro') {
      const dadosSalvos = localStorage.getItem('ong_voluntario_ativo');
      if (dadosSalvos) {
        try {
          const voluntario = JSON.parse(dadosSalvos);
          const form = root.querySelector('form');
          if (form) {
            Object.keys(voluntario).forEach(campo => {
              const input = form.querySelector(`[name="${campo}"]`);
              if (input && input.type !== 'checkbox') {
                input.value = voluntario[campo];
              } else if (input && input.type === 'checkbox') {
                input.checked = true;
              }
            });
          }
        } catch (e) {
          console.error('Falha ao restaurar dados do localStorage:', e);
        }
      }
    }

    window.scrollTo(0, 0);
  }

  // ==========================================================================
  // GERENCIAMENTO DE EVENTOS REATIVOS E EVENT DELEGATION
  // ==========================================================================
  function setupEventListeners() {
    // 1. Escuta de ciclo de vida e roteamento SPA
    window.addEventListener('hashchange', navigate);
    document.addEventListener('DOMContentLoaded', navigate);

    const root = document.getElementById('app-root');
    if (!root) return;

    // 2. Event Delegation para SUBMIT em formulários dinâmicos
    root.addEventListener('submit', function(event) {
    // Função auxiliar para exibir/remover erro visual e mensagem injetada no DOM
    function setCampoFeedback(campo, valido, mensagemErro = '') {
      const grupo = campo.closest('.form-grupo') || campo.parentElement;
      let msgElement = grupo.querySelector('.feedback-msg');

      if (!valido) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        campo.style.borderColor = '#dc2626';
        campo.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.15)';

        if (!msgElement) {
          msgElement = document.createElement('small');
          msgElement.className = 'feedback-msg text-danger';
          msgElement.style.color = '#dc2626';
          msgElement.style.fontSize = '0.8rem';
          msgElement.style.marginTop = '0.35rem';
          msgElement.style.display = 'block';
          grupo.appendChild(msgElement);
        }
        msgElement.textContent = mensagemErro;
      } else {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
        campo.style.borderColor = '#10b981';
        campo.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.15)';
        if (msgElement) msgElement.remove();
      }
    }

    // 2. Event Delegation para SUBMIT: Verificação preventiva de consistência
    root.addEventListener('submit', function(event) {
      const form = event.target.closest('form');
      if (!form) return;

      event.preventDefault();

      let formValido = true;

      // Critério 1: Nome com no mínimo 3 caracteres
      const nomeInput = form.querySelector('#nome');
      if (nomeInput) {
        const valido = nomeInput.value.trim().length >= 3;
        setCampoFeedback(nomeInput, valido, 'Informe ao menos nome e sobrenome (mínimo 3 letras).');
        if (!valido) formValido = false;
      }

      // Critério 2: RegEx de E-mail padrão RFC 5322
      const emailInput = form.querySelector('#email');
      if (emailInput) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valido = regexEmail.test(emailInput.value.trim());
        setCampoFeedback(emailInput, valido, 'Digite um endereço de e-mail válido (ex: voluntario@ong.org).');
        if (!valido) formValido = false;
      }

      // Critério 3: RegEx de CPF (000.000.000-00 ou 11 dígitos)
      const cpfInput = form.querySelector('#cpf');
      if (cpfInput) {
        const regexCpf = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        const valido = regexCpf.test(cpfInput.value.trim());
        setCampoFeedback(cpfInput, valido, 'CPF incompleto ou inválido. Formato esperado: 000.000.000-00.');
        if (!valido) formValido = false;
      }

      // Critério 4: RegEx de Telefone com DDD celular (11 dígitos)
      const telInput = form.querySelector('#telefone');
      if (telInput) {
        const regexTel = /^\(?\d{2}\)?\s?(?:9\d{4}|\d{4})-?\d{4}$/;
        const valido = regexTel.test(telInput.value.trim());
        setCampoFeedback(telInput, valido, 'Informe um telefone/WhatsApp válido com DDD.');
        if (!valido) formValido = false;
      }

      // Critério 5: RegEx de CEP brasileiro (8 dígitos)
      const cepInput = form.querySelector('#cep');
      if (cepInput) {
        const regexCep = /^\d{5}-?\d{3}$/;
        const valido = regexCep.test(cepInput.value.trim());
        setCampoFeedback(cepInput, valido, 'CEP deve conter 8 dígitos no formato 00000-000.');
        if (!valido) formValido = false;
      }

      if (!formValido) {
        const primeiroErro = form.querySelector('.is-invalid');
        if (primeiroErro) primeiroErro.focus();
        return;
      }

      // Sucesso na verificação: coleta e persistência no localStorage
      const formData = new FormData(form);
      const voluntario = Object.fromEntries(formData.entries());
      localStorage.setItem('ong_voluntario_ativo', JSON.stringify(voluntario));

      // Feedback acessível e estilizado via SweetAlert2 (com fallback para alert nativo)
      if (typeof Swal !== 'undefined') {
        Swal.fire({
          icon: 'success',
          title: 'Inscrição Confirmada!',
          html: `Muito obrigado, <strong>${voluntario.nome}</strong>! Seus dados foram validados e salvos com sucesso no sistema da <strong>ONG Esperança Viva</strong>.`,
          confirmButtonColor: '#059669',
          confirmButtonText: 'Concluir'
        });
      } else {
        alert(`Inscrição aprovada com sucesso! Bem-vindo(a), ${voluntario.nome}.`);
      }
    });

    // 3. Event Delegation para INPUT: Máscaras e Validação Reativa em tempo real
    root.addEventListener('input', function(event) {
      const target = event.target;

      if (target.id === 'cpf') {
        let v = target.value.replace(/\D/g, '').slice(0, 11);
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        target.value = v;

        const valido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v);
        setCampoFeedback(target, valido, 'Complete os 11 dígitos do CPF.');
      }

      if (target.id === 'telefone') {
        let v = target.value.replace(/\D/g, '').slice(0, 11);
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        target.value = v;

        const valido = /^\(\d{2}\)\s\d{5}-\d{4}$/.test(v);
        setCampoFeedback(target, valido, 'Telefone deve conter DDD e 9 dígitos.');
      }

      if (target.id === 'cep') {
        let v = target.value.replace(/\D/g, '').slice(0, 8);
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        target.value = v;

        const valido = /^\d{5}-\d{3}$/.test(v);
        setCampoFeedback(target, valido, 'CEP deve ter 8 dígitos (00000-000).');
      }

      if (target.id === 'nome') {
        const valido = target.value.trim().length >= 3;
        setCampoFeedback(target, valido, 'Nome muito curto (mínimo 3 caracteres).');
      }

      if (target.id === 'email') {
        const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value.trim());
        setCampoFeedback(target, valido, 'Formato de e-mail inválido.');
      }
    });

    // 4. Event Delegation para CLICK em cards de projetos e ações dinâmicas
    root.addEventListener('click', function(event) {
      const card = event.target.closest('.card-item');
      if (card) {
        card.style.transform = 'translateY(-6px)';
        setTimeout(() => { card.style.transform = ''; }, 200);
      }
    });
  }

  setupEventListeners();
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    navigate();
  }
})();
