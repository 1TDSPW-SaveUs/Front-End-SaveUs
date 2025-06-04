document.addEventListener('DOMContentLoaded', () => {
    const duvidas = document.querySelectorAll('.duvida');
    const searchInput = document.getElementById('faq-search');

    duvidas.forEach(item => {
        item.addEventListener('click', () => {
            const resposta = item.querySelector('.resposta-da-duvida');
            const icon = item.querySelector('.toggle-icon');

            duvidas.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.resposta-da-duvida').classList.remove('show');
                    otherItem.querySelector('.toggle-icon').classList.remove('icon-red');
                }
            });

            item.classList.toggle('active');
            if (resposta.classList.contains('show')) {
                resposta.classList.remove('show');
                icon.classList.remove('icon-red');
            } else {
                resposta.classList.add('show');
                icon.classList.add('icon-red');
            }
        });
    });

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            duvidas.forEach(item => {
                const perguntaText = item.querySelector('.pergunta').textContent.toLowerCase();
                const respostaText = item.querySelector('.resposta-da-duvida').textContent.toLowerCase();

                if (perguntaText.includes(searchTerm) || respostaText.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});