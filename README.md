Projeto ONG

Projeto desenvolvido como atividade prática acadêmica para criação de uma interface web responsiva para uma organização não governamental (ONG).

Sobre o projeto

O projeto apresenta uma interface para divulgação de projetos sociais e cadastro de voluntários.

Durante o desenvolvimento foram aplicados conceitos de:

HTML5 semântico;
CSS3 e design responsivo;
JavaScript e manipulação do DOM;
Single Page Application (SPA);
validação de formulários;
armazenamento de dados com localStorage;
módulos JavaScript (ES6);
acessibilidade com foco em WCAG 2.1 nível AA;
modo claro e modo escuro;
otimização de imagens;
Git e GitHub;
publicação em ambiente de produção.
Estrutura do projeto
projeto-ong/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   └── images.webp
├── js/
│   ├── app.js
│   ├── form.js
│   ├── router.js
│   ├── storage.js
│   ├── templates.js
│   └── theme.js
└── index.html
Funcionalidades
Navegação

A aplicação utiliza JavaScript para realizar a navegação entre as páginas e renderizar o conteúdo dinamicamente.

Cadastro

O formulário de cadastro possui:

validação dos campos;
mensagens de erro;
indicação visual de campos inválidos;
armazenamento dos dados no navegador.
Armazenamento

Os dados do cadastro são armazenados utilizando localStorage, permitindo que permaneçam disponíveis após atualizar ou reabrir a página no mesmo navegador.

Acessibilidade

Foram aplicadas práticas de acessibilidade, incluindo:

HTML semântico;
navegação por teclado;
link para pular diretamente ao conteúdo principal;
textos alternativos para imagens;
foco visual nos elementos interativos;
mensagens de validação associadas ao formulário;
suporte à redução de movimento.
Responsividade

O layout utiliza CSS Grid e Flexbox, com diferentes pontos de quebra para adaptação a diferentes tamanhos de tela.

Modo escuro

A interface possui alternância entre modo claro e modo escuro, com preferência armazenada no localStorage.

Otimização

A imagem principal foi convertida de JPG para WebP, reduzindo o tamanho do arquivo e contribuindo para um carregamento mais eficiente.

Tecnologias utilizadas
HTML5
CSS3
JavaScript (ES6+)
Git
GitHub
GitHub Pages
Execução local

Para executar o projeto localmente, os arquivos podem ser disponibilizados por um servidor local, como o Apache através do XAMPP.

Após iniciar o servidor, acesse a pasta do projeto pelo navegador.

Publicação

O projeto está publicado utilizando GitHub Pages.

Repositório:

https://github.com/fabio-santos01/projeto-ong

Objetivo acadêmico

O projeto tem como objetivo demonstrar a aplicação prática de conceitos de desenvolvimento web, acessibilidade, responsividade, JavaScript, persistência de dados, controle de versão, otimização e publicação de uma aplicação web.