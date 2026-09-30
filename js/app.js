import { inicializarRoteador } from './router.js';
import { inicializarTema } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    inicializarRoteador();
});