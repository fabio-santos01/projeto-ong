import { obterCadastro, salvarCadastro, limparCadastro } from './storage.js';

const camposObrigatorios = ['nome', 'email', 'nascimento', 'cpf', 'telefone', 'cep', 'endereco', 'numero', 'cidade'];

function mensagemParaCampo(campo) {
    if (!campo.value.trim()) return 'Este campo é obrigatório.';
    if (!campo.checkValidity()) return campo.title || 'Verifique o formato informado.';
    return '';
}

function atualizarFeedback(campo) {
    let mensagem = campo.parentElement.querySelector('.mensagem-erro');
    const texto = mensagemParaCampo(campo);

    if (texto) {
        if (!mensagem) {
            mensagem = document.createElement('small');
            mensagem.className = 'mensagem-erro';
            campo.parentElement.appendChild(mensagem);
        }
        mensagem.textContent = texto;
        campo.setAttribute('aria-invalid', 'true');
    } else {
        mensagem?.remove();
        campo.removeAttribute('aria-invalid');
    }
}

function coletarDados(form) {
    return Object.fromEntries(new FormData(form).entries());
}

export function inicializarFormulario() {
    const form = document.querySelector('#form-cadastro');
    if (!form) return;

    const dadosSalvos = obterCadastro();
    if (dadosSalvos) {
        for (const [nome, valor] of Object.entries(dadosSalvos)) {
            const campo = form.elements.namedItem(nome);
            if (campo) campo.value = valor;
        }
    }

    form.querySelectorAll('input').forEach((campo) => {
        campo.addEventListener('input', () => atualizarFeedback(campo));
        campo.addEventListener('blur', () => atualizarFeedback(campo));
    });

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const campos = camposObrigatorios
            .map((nome) => form.elements.namedItem(nome))
            .filter(Boolean);

        campos.forEach(atualizarFeedback);

        const valido = campos.every((campo) => campo.checkValidity() && campo.value.trim());
        const feedback = form.querySelector('#form-feedback');

        if (!valido) {
            feedback.className = 'alert alert--error';
            feedback.textContent = 'Corrija os campos destacados antes de enviar o cadastro.';
            campos.find((campo) => !campo.checkValidity() || !campo.value.trim())?.focus();
            return;
        }

        const dados = coletarDados(form);
        salvarCadastro(dados);
        feedback.className = 'alert alert--success';
        feedback.textContent = 'Cadastro validado e armazenado neste navegador.';
    });

    form.addEventListener('reset', () => {
        setTimeout(() => {
            form.querySelectorAll('.mensagem-erro').forEach((mensagem) => mensagem.remove());
            form.querySelectorAll('[aria-invalid]').forEach((campo) => campo.removeAttribute('aria-invalid'));
            const feedback = form.querySelector('#form-feedback');
            feedback.className = '';
            feedback.textContent = '';
            limparCadastro();
        }, 0);
    });
}
