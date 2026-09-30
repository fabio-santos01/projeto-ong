const CHAVE_TEMA = 'tema';

function aplicarTema(tema) {
    const modoEscuro = tema === 'escuro';

    document.body.classList.toggle('tema-escuro', modoEscuro);

    const botao = document.querySelector('#theme-toggle');

    if (!botao) return;

    botao.textContent = modoEscuro ? '☀️ Modo claro' : '🌙 Modo escuro';
    botao.setAttribute(
        'aria-label',
        modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'
    );
}

export function inicializarTema() {
    const temaSalvo = localStorage.getItem(CHAVE_TEMA) || 'claro';

    aplicarTema(temaSalvo);

    const botao = document.querySelector('#theme-toggle');

    if (!botao) return;

    botao.addEventListener('click', () => {
        const novoTema = document.body.classList.contains('tema-escuro')
            ? 'claro'
            : 'escuro';

        localStorage.setItem(CHAVE_TEMA, novoTema);
        aplicarTema(novoTema);
    });
}