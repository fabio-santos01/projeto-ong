const STORAGE_KEY = 'ong_cadastro';

export function salvarCadastro(dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

export function obterCadastro() {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : null;
}

export function limparCadastro() {
    localStorage.removeItem(STORAGE_KEY);
}
