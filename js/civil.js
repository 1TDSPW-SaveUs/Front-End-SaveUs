document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o painel principal da página civil.
    const painelCivil = document.querySelector('.hero-painel-civil');
    // Garante que o script só execute se o painel existir na página.
    if (painelCivil) {
        const botoesDesastre = document.querySelectorAll('.btn-desastre');
        const tituloDesastreEl = document.getElementById('titulo-desastre');
        const descricaoDesastreEl = document.getElementById('descricao-desastre');

        // Objeto contendo as informações detalhadas para cada tipo de desastre.
        const infosDesastres = {
            enchentes: { // Chave corresponde ao 'data-tipo' do botão
                titulo: "Enchentes e Inundações",
                descricao: `
                    <p><strong>Antes:</strong></p>
                    <ul>
                        <li>Verifique se sua casa está em área de risco. Elabore um plano de evacuação.</li>
                        <li>Tenha um kit de emergência com água, alimentos não perecíveis, lanterna, rádio a pilhas, kit de primeiros socorros e medicamentos essenciais.</li>
                        <li>Mantenha documentos importantes em local seguro e à prova d'água.</li>
                    </ul>
                    <p><strong>Durante:</strong></p>
                    <ul>
                        <li>Evite contato com águas de enchente, pois podem estar contaminadas.</li>
                        <li>Desligue a energia elétrica, o gás e a água, se possível e seguro.</li>
                        <li>Procure abrigo em locais elevados e seguros. Não atravesse áreas alagadas a pé ou de carro.</li>
                        <li>Acompanhe os alertas das autoridades.</li>
                    </ul>
                    <p><strong>Depois:</strong></p>
                    <ul>
                        <li>Aguarde a liberação das autoridades para retornar para casa.</li>
                        <li>Verifique a estrutura da casa antes de entrar. Cuidado com animais peçonhentos.</li>
                        <li>Limpe e desinfete tudo que teve contato com a água da enchente.</li>
                    </ul>`
            },
            incendios: {
                titulo: "Incêndios Florestais e Urbanos",
                descricao: `
                    <p><strong>Prevenção:</strong></p>
                    <ul>
                        <li>Não jogue bitucas de cigarro em matas ou terrenos baldios.</li>
                        <li>Evite fazer fogueiras perto de vegetação, especialmente em períodos de seca.</li>
                        <li>Mantenha instalações elétricas em bom estado. Não sobrecarregue tomadas.</li>
                    </ul>
                    <p><strong>Durante (Incêndio Próximo):</strong></p>
                    <ul>
                        <li>Mantenha a calma e saia do local imediatamente, seguindo rotas de fuga.</li>
                        <li>Não use elevadores. Use as escadas.</li>
                        <li>Se houver fumaça, proteja o nariz e a boca com um pano úmido e rasteje para sair, pois o ar perto do chão é mais limpo.</li>
                        <li>Ligue para os bombeiros (193).</li>
                    </ul>
                    <p><strong>Se suas roupas pegarem fogo:</strong> Pare, Deite e Role.</p>`
            },
            'falta-energia': {
                titulo: "Falta de Energia Elétrica",
                descricao: `
                    <ul>
                        <li>Tenha lanternas e pilhas reservas. Evite usar velas devido ao risco de incêndio.</li>
                        <li>Mantenha a geladeira e o freezer fechados para conservar os alimentos.</li>
                        <li>Desligue aparelhos eletrônicos da tomada para evitar danos quando a energia voltar.</li>
                        <li>Se usar gerador, mantenha-o em local ventilado e longe de janelas.</li>
                        <li>Informe a companhia elétrica sobre a falta de energia.</li>
                    </ul>`
            },
            'ondas-calor': {
                titulo: "Ondas de Calor",
                descricao: `
                    <ul>
                        <li>Beba bastante água, mesmo sem sentir sede. Evite bebidas açucaradas ou alcoólicas.</li>
                        <li>Procure lugares frescos e com sombra. Se possível, use ar condicionado.</li>
                        <li>Use roupas leves, soltas e de cores claras. Use chapéu e protetor solar ao sair.</li>
                        <li>Evite atividades físicas intensas nos horários mais quentes do dia.</li>
                        <li>Fique atento a sinais de insolação ou desidratação (tontura, fraqueza, pele seca e quente).</li>
                    </ul>`
            },
            'frio-intenso': {
                titulo: "Frio Intenso e Geadas",
                descricao: `
                    <ul>
                        <li>Use várias camadas de roupas quentes. Proteja cabeça, mãos e pés.</li>
                        <li>Mantenha a casa aquecida, mas com ventilação para evitar intoxicação por monóxido de carbono se usar aquecedores a gás ou lareiras.</li>
                        <li>Beba líquidos quentes.</li>
                        <li>Proteja plantas e animais do frio.</li>
                        <li>Cuidado com o gelo nas ruas e calçadas para evitar quedas.</li>
                    </ul>`
            },
            'ventos-fortes': {
                titulo: "Ventos Fortes e Tempestades",
                descricao: `
                    <ul>
                        <li>Procure abrigo em locais seguros, longe de janelas, árvores e postes.</li>
                        <li>Feche bem portas e janelas.</li>
                        <li>Retire ou prenda objetos que possam ser arremessados pelo vento (vasos, enfeites de jardim).</li>
                        <li>Evite áreas abertas, como praias ou campos de futebol.</li>
                        <li>Se estiver dirigindo, pare em local seguro e aguarde a tempestade passar.</li>
                    </ul>`
            },
            deslizamentos: {
                titulo: "Deslizamentos de Terra",
                descricao: `
                    <p><strong>Sinais de Alerta:</strong></p>
                    <ul>
                        <li>Trincas no chão ou nas paredes das casas.</li>
                        <li>Muros ou árvores inclinados, postes ou cercas abauladas.</li>
                        <li>Surgimento de minas d'água ou água mais barrenta que o normal.</li>
                        <li>Estalos ou sons incomuns vindos do terreno.</li>
                    </ul>
                    <p><strong>O que fazer:</strong></p>
                    <ul>
                        <li>Ao perceber qualquer sinal de alerta, saia imediatamente do local e avise a Defesa Civil (199) e os Bombeiros (193).</li>
                        <li>Tenha um plano de fuga e um ponto de encontro seguro com sua família.</li>
                        <li>Não construa em áreas de risco.</li>
                    </ul>`
            }
            // Adicione mais tipos de desastres e suas informações aqui
        };

        // Adiciona um evento de clique para cada botão de tipo de desastre.
        botoesDesastre.forEach(botao => {
            botao.addEventListener('click', () => {
                // Primeiro, remove a classe 'ativo' de todos os botões para destacar apenas o clicado.
                botoesDesastre.forEach(b => b.classList.remove('ativo'));
                // Adiciona a classe 'ativo' ao botão que foi clicado.
                botao.classList.add('ativo');

                // Obtém o tipo de desastre a partir do atributo 'data-tipo' do botão.
                const tipoDesastre = botao.dataset.tipo;
                // Busca as informações correspondentes no objeto 'infosDesastres'.
                const info = infosDesastres[tipoDesastre];
                if (info) {
                    tituloDesastreEl.textContent = info.titulo;
                    descricaoDesastreEl.innerHTML = info.descricao; // Usar innerHTML para renderizar as tags HTML
                } else {
                    tituloDesastreEl.textContent = "Informação não encontrada";
                    descricaoDesastreEl.innerHTML = "<p>Desculpe, não encontramos informações para este tipo de alerta.</p>";
                }
            });
        });
    }
});