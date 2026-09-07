// Módulo de Validação e Consistência de Dados
export function validarNome(nome) {
  return nome.trim().length >= 3;
}

export function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validarCpf(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.trim());
}

export function validarTelefone(telefone) {
  return /^\(\d{2}\)\s\d{5}-\d{4}$/.test(telefone.trim());
}

export function validarCep(cep) {
  return /^\d{5}-\d{3}$/.test(cep.trim());
}

export function setCampoFeedback(campo, valido, mensagemErro = '') {
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
