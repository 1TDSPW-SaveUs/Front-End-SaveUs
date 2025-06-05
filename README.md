# SaveUs

## Descrição do Projeto
A plataforma **SaveUs** é uma iniciativa dedicada a auxiliar em situações de desastre, como enchentes. Nosso principal objetivo é mapear e identificar pessoas em áreas de risco, facilitando o resgate e a coordenação de esforços por parte das autoridades competentes. Unindo tecnologia e solidariedade, buscamos salvar vidas e oferecer informações cruciais em tempo real para prevenção e resposta eficazes.

O SaveUs foi desenvolvido como um projeto acadêmico na FIAP.

## Funcionalidades Principais

* **Painel do Funcionário:** Permite que funcionários da Defesa Civil visualizem áreas de risco no mapa e filtrem pontos de pessoas em grupos de prioridade (baixa, média, alta, máxima).
* **Cadastro de Civil:** Cidadãos podem se cadastrar informando dados pessoais e se pertencem a grupos de risco (PCD, mobilidade reduzida, idosos, crianças), o que ajuda a calcular a prioridade em caso de desastre.
* **Painel do Civil:** Fornece informações e dicas de segurança para diferentes tipos de desastres (enchentes, incêndios, falta de energia, etc.), ajudando na preparação e resposta.
* **Login Seguro:** Acesso restrito para funcionários com um e-mail de domínio `@saveus.com.br`.
* **FAQ (Dúvidas Frequentes):** Uma seção para responder às perguntas mais comuns sobre a plataforma, seu uso e a privacidade dos dados.
* **Página de Contato:** Um formulário para que usuários e interessados possam entrar em contato com a equipe do SaveUs.

## Tecnologias Utilizadas

* **HTML5:** Estrutura das páginas web.
* **CSS3:** Estilização e design responsivo.
* **JavaScript:** Lógica de front-end, validações de formulário, interatividade do mapa (Leaflet) e funcionalidades dinâmicas.
* **Leaflet.js:** Biblioteca JavaScript para mapas interativos, utilizada no painel do funcionário para exibir zonas de risco e pontos de prioridade.

## Como Rodar o Projeto (Localmente)

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/Front-End-SaveUs.git](https://github.com/seu-usuario/Front-End-SaveUs.git)
    ```
2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd Front-End-SaveUs
    ```
3.  **Abra os Arquivos HTML:**
    Você pode abrir o `index.html` diretamente em seu navegador. Para uma experiência de desenvolvimento mais completa, é recomendável usar uma extensão como o `Live Server` para VS Code, que provê um servidor local. O arquivo `.vscode/settings.json` já está configurado para a porta 5501 para o Live Server.

    Para usar o Live Server, instale a extensão no VS Code e, no `index.html`, clique com o botão direito e selecione "Open with Live Server".

## Integrantes da Equipe

Este projeto foi desenvolvido pelos seguintes membros:

* **Gustavo Tavares da Silva**
* **Laura Lopes Cruz**
* **Maicon Douglas da Silva Timoteo**

## Licença

Este projeto é desenvolvido para fins acadêmicos e não possui licença formal para uso comercial ou distribuição.

## Contato

Para mais informações, dúvidas ou sugestões, entre em contato conosco através da [página de contato](assets/contato.html) ou pelo email: contato@saveus.org.