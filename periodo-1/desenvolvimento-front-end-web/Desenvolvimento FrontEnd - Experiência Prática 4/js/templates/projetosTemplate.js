// Template dinâmico para Projetos e Ações
export function renderProjetos() {
  return `
    <section class="secao-bloco">
      <span class="badge-tag badge-info">Nossas Ações</span>
      <h1>Projetos Ativos e Resgates</h1>
      <p class="lead">Conheça as frentes de trabalho mantidas com o apoio de doadores e voluntários.</p>
      <div class="grid-cards">
        <article class="card-item">
          <img src="../assets/img/projeto-resgate.svg" alt="Resgate de Animais">
          <div class="card-conteudo">
            <h3>Resgate Emergencial</h3>
            <p>Atendimento a animais vítimas de maus-tratos e atropelamentos com socorro veterinário imediato.</p>
          </div>
        </article>
        <article class="card-item">
          <img src="../assets/img/projeto-adocao.svg" alt="Feira de Adoção">
          <div class="card-conteudo">
            <h3>Adoção Responsável</h3>
            <p>Conectamos animais castrados e vacinados a famílias preparadas para o acolhimento permanente.</p>
          </div>
        </article>
      </div>
    </section>
  `;
}
