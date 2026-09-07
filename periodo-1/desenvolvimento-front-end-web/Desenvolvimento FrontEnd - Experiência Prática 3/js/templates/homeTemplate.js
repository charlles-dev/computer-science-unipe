// Template dinâmico para a Home institucional
export function renderHome() {
  return `
    <section class="secao-bloco" id="apresentacao">
      <span class="badge-tag">Institucional &amp; Propósito</span>
      <h1>Transformando Vidas Através do Resgate e Proteção Animal</h1>
      <p class="lead">Atuamos com dedicação, respeito e ética no cuidado de animais em situação de abandono e vulnerabilidade em João Pessoa e região.</p>
      <figure>
        <img src="../assets/img/hero-resgate.svg" alt="Ilustração do acolhimento na ONG Esperança Viva" width="900" height="500">
        <figcaption>Espaço de acolhimento e recuperação dos animais no abrigo central.</figcaption>
      </figure>
    </section>
  `;
}
