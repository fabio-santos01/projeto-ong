export function templateInicio() {
    return `
        <section id="inicio">
            <h2>Bem-vindo à Nome da ONG</h2>
            <img src="../imagens/images.webp" alt="Voluntários da Nome da ONG realizando uma ação social com a comunidade">
        </section>
    `;
}

export function templateProjetos() {
    return `
        <section id="projetos">
            <h2>Nossos projetos</h2>
            <p>Insira aqui a descrição da ONG.</p>
            <article>
                <h3>Projeto de apoio comunitário</h3>
                <p>Aqui será inserida a descrição do projeto.</p>
                <h4>Como ajudar</h4>
                <p>Descrição da forma que é possível ajudar no projeto.</p>
            </article>
        </section>
        <section id="doacao">
            <h2>Como fazer uma doação</h2>
            <p>As doações são fundamentais para que nossos projetos possam continuar atendendo a comunidade.</p>
            <article>
                <h3>Doação financeira</h3>
                <p>Descrição dos meios de doação disponíveis e como fazê-la.</p>
                <p>Para obter informações sobre como realizar uma contribuição, entre em contato com nossa equipe.</p>
                <a href="index.html#contato">Entrar em contato</a>
            </article>
        </section>
        <section id="voluntariado">
            <h2>Seja um voluntário</h2>
            <p>O trabalho voluntário é uma forma importante de contribuir diretamente com nossas ações e projetos.</p>
            <article>
                <h3>Cadastre-se como voluntário</h3>
                <p>Se você deseja fazer parte das nossas ações, realize seu cadastro para que possamos conhecer suas informações e áreas de interesse.</p>
                <a href="cadastro.html">Quero ser voluntário</a>
            </article>
        </section>
    `;
}

export function templateCadastro(dados = {}) {
    return `
        <section id="cadastro">
            <h2>Cadastro</h2>
            <p>Preencha o formulário abaixo para realizar seu cadastro na ONG.</p>
            <form id="form-cadastro" action="#" method="post" novalidate>
                <fieldset>
                    <legend>Dados pessoais</legend>
                    <p><label for="nome">Nome completo:</label><br>
                    <input type="text" id="nome" name="nome" required autocomplete="name" value="${dados.nome ?? ''}"></p>
                    <p><label for="email">E-mail:</label><br>
                    <input type="email" id="email" name="email" required autocomplete="email" value="${dados.email ?? ''}"></p>
                    <p><label for="nascimento">Data de nascimento:</label><br>
                    <input type="date" id="nascimento" name="nascimento" required value="${dados.nascimento ?? ''}"></p>
                    <p><label for="cpf">CPF:</label><br>
                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="[0-9]{3}[.][0-9]{3}[.][0-9]{3}-[0-9]{2}" title="Digite o CPF no formato 000.000.000-00" inputmode="numeric" maxlength="14" required autocomplete="off" value="${dados.cpf ?? ''}"></p>
                    <p><label for="telefone">Telefone:</label><br>
                    <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999" pattern="[(][0-9]{2}[)] [0-9]{4,5}-[0-9]{4}" title="Digite o telefone no formato (99) 99999-9999" inputmode="tel" maxlength="15" required autocomplete="tel" value="${dados.telefone ?? ''}"></p>
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>
                    <p><label for="cep">CEP:</label><br>
                    <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="[0-9]{5}-[0-9]{3}" title="Digite o CEP no formato 00000-000" inputmode="numeric" maxlength="9" required autocomplete="postal-code" value="${dados.cep ?? ''}"></p>
                    <p><label for="endereco">Endereço:</label><br>
                    <input type="text" id="endereco" name="endereco" required autocomplete="address-line1" value="${dados.endereco ?? ''}"></p>
                    <p><label for="numero">Número:</label><br>
                    <input type="text" id="numero" name="numero" required value="${dados.numero ?? ''}"></p>
                    <p><label for="complemento">Complemento:</label><br>
                    <input type="text" id="complemento" name="complemento" autocomplete="address-line2" value="${dados.complemento ?? ''}"></p>
                    <p><label for="cidade">Cidade:</label><br>
                    <input type="text" id="cidade" name="cidade" required autocomplete="address-level2" value="${dados.cidade ?? ''}"></p>
                </fieldset>
                <button type="submit">Enviar cadastro</button>
                <button type="reset">Limpar formulário</button>
                <div id="form-feedback" aria-live="polite"></div>
            </form>
        </section>
    `;
}

export function templateErro() {
    return `
        <section class="alert alert--error" role="alert">
            <h2>Página não encontrada</h2>
            <p>A rota solicitada não existe nesta aplicação.</p>
            <a href="index.html">Voltar para o início</a>
        </section>
    `;
}
