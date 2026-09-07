// Módulo de Gerenciamento do Web Storage
const STORAGE_KEY = 'ong_voluntario_ativo';

export function salvarVoluntario(dados) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    return true;
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
    return false;
  }
}

export function obterVoluntarioSalvo() {
  try {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : null;
  } catch (error) {
    console.error('Erro ao ler do localStorage:', error);
    return null;
  }
}
