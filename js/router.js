import { templateInicio, templateProjetos, templateCadastro, templateErro } from './templates.js';
import { inicializarFormulario } from './form.js';

const rotas = {
    'index.html': 'inicio',
    'projetos.html': 'projetos',
    'cadastro.html': 'cadastro'
};

function nomeDoArquivo(pathname) {
    return pathname.split('/').pop() || 'index.html';
}

function rotaAtual() {
    return rotas[nomeDoArquivo(window.location.pathname)] || 'erro';
}

function renderizar(rota) {
    const main = document.querySelector('main');
    if (!main) return;

    if (rota === 'inicio') main.innerHTML = templateInicio();
    else if (rota === 'projetos') main.innerHTML = templateProjetos();
    else if (rota === 'cadastro') main.innerHTML = templateCadastro();
    else main.innerHTML = templateErro();

    if (rota === 'cadastro') inicializarFormulario();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function navegar(url, registrar = true) {
    const destino = new URL(url, window.location.href);
    const rota = rotas[nomeDoArquivo(destino.pathname)] || 'erro';

    if (registrar) window.history.pushState({ rota }, '', destino.href);
    renderizar(rota);
    if (destino.hash) {
        const alvo = document.querySelector(destino.hash);
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
    }
}

export function inicializarRoteador() {
    document.addEventListener('click', (evento) => {
        const link = evento.target.closest('a');
        if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
        if (link.origin !== window.location.origin) return;

        const destino = new URL(link.href, window.location.href);
        if (!Object.prototype.hasOwnProperty.call(rotas, nomeDoArquivo(destino.pathname))) return;

        evento.preventDefault();
        navegar(destino.href);
    });

    window.addEventListener('popstate', () => renderizar(rotaAtual()));
    renderizar(rotaAtual());
}
