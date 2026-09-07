// Template dinâmico para Inscrição de Voluntários
export function renderCadastro() {
  return `
    <section class="secao-bloco">
      <span class="badge-tag badge-success">Junte-se a Nós</span>
      <h1>Ficha de Inscrição de Novos Voluntários</h1>
      <p class="lead">Doe seu tempo e carinho. Participe dos nossos mutirões e ações de acolhimento.</p>
      <form class="form-spa">
        <fieldset>
          <legend>Identificação Rápida</legend>
          <div class="form-grid">
            <div class="form-grupo campo-full">
              <label for="nome">Nome Completo:</label>
              <input type="text" id="nome" required placeholder="Digite seu nome completo">
            </div>
            <div class="form-grupo">
              <label for="email">E-mail Principal:</label>
              <input type="email" id="email" required placeholder="seuemail@exemplo.com">
            </div>
            <div class="form-grupo">
              <label for="telefone">WhatsApp:</label>
              <input type="tel" id="telefone" required placeholder="(83) 99999-9999">
            </div>
          </div>
        </fieldset>
        <div class="btn-acoes">
          <button type="submit">Enviar Cadastro</button>
        </div>
      </form>
    </section>
  `;
}
