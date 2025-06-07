document.addEventListener('DOMContentLoaded', () => {
    const duvidas = document.querySelectorAll('.duvida');
    const searchInput = document.getElementById('faq-search');
    
    // Adiciona um evento de clique para cada 'duvida' (pergunta)
    duvidas.forEach(item => {
        item.addEventListener('click', () => {
            const resposta = item.querySelector('.resposta-da-duvida');
            const icon = item.querySelector('.toggle-icon');

            // Fecha outras respostas abertas para manter apenas uma visível por vez (efeito acordeão)
            duvidas.forEach(otherItem => {
                // Se o item clicado for diferente do item atual e o item atual estiver ativo...
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.resposta-da-duvida').classList.remove('show');
                    otherItem.querySelector('.toggle-icon').classList.remove('icon-red');
                }
            });

            // Alterna a classe 'active' no item clicado para controlar a visibilidade
            item.classList.toggle('active');
            // Verifica se a resposta já está visível
            if (resposta.classList.contains('show')) {
                // Se estiver visível, esconde e remove a cor do ícone
                resposta.classList.remove('show');
                icon.classList.remove('icon-red');
            } else {
                // Se não estiver visível, mostra e adiciona a cor ao ícone
                resposta.classList.add('show');
                icon.classList.add('icon-red');
            }
        });
    });

    // Adiciona um evento para o campo de busca, se ele existir
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            duvidas.forEach(item => {
                const perguntaText = item.querySelector('.pergunta').textContent.toLowerCase();
                const respostaText = item.querySelector('.resposta-da-duvida').textContent.toLowerCase(); // Busca também no texto da resposta

                if (perguntaText.includes(searchTerm) || respostaText.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});