document.addEventListener('DOMContentLoaded', () => {

   //Rolagem suave
    const backToTopLink = document.querySelector('a[href="#topo"]');
    if (backToTopLink) {
      backToTopLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }

    // Inicializa o mapa no Jardim Paulista
    const mapa = L.map("mapa").setView([-23.561414, -46.655881], 15);

    // Camada do mapa (tile)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; OpenStreetMap & Carto',
        subdomains: "abcd",
        maxZoom: 19,
    }).addTo(mapa);


    // ====== ZONA DE RISCO (exemplo fictício no Jardim Paulista) ======
   const zonaDeRisco = L.polygon([
        [-23.5625, -46.6675], // lado esquerdo superior (próx. Rebouças)
        [-23.5605, -46.6575], // canto superior direito
        [-23.5635, -46.6500], // canto direito inferior
        [-23.5685, -46.6550], // base inferior
        [-23.5670, -46.6650], // canto esquerdo inferior
    ], {
        color: "#dc3545",
        fillColor: "#dc3545",
        fillOpacity: 0.4,
    }).addTo(mapa).bindPopup("Zona de Risco: Jardim Paulista");

    // ====== PONTOS DE PESSOAS EM GRUPO DE RISCO ======
    const pontos = [
      {
        nome: "Maria (Idosa)",
        prioridade: "alta",
        coords: [-23.5621, -46.6565],
      },
      {
        nome: "João (PCD + Idoso)",
        prioridade: "maxima",
        coords: [-23.5629, -46.6601],
      },
      {
        nome: "Carlos (Baixa Mobilidade)",
        prioridade: "media",
        coords: [-23.5635, -46.6550],
      },
      {
        nome: "Ana (Criança)",
        prioridade: "baixa",
        coords: [-23.5658, -46.6580],
      },
      {
        nome: "Lucas (PCD)",
        prioridade: "media",
        coords: [-23.5640, -46.6560],
      },
    ];

    // ====== CORES POR PRIORIDADE ======
    const coresPrioridade = {
      baixa: "#28a745",
      media: "#ffc107",
      alta: "#fd7e14",
      maxima: "#dc3545",
    };

    // Array para armazenar os marcadores
    let marcadores = [];

    // Função para adicionar todos os marcadores no mapa
    function carregarPontos() {
      pontos.forEach((ponto) => {
        const cor = coresPrioridade[ponto.prioridade];
        const marcador = L.circleMarker(ponto.coords, {
          radius: 10,
          fillColor: cor,
          color: cor,
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        })
          .addTo(mapa)
          .bindPopup(`<strong>${ponto.nome}</strong><br>Prioridade: ${ponto.prioridade.toUpperCase()}`);

        marcador.prioridade = ponto.prioridade;
        marcadores.push(marcador);
      });
    }

    // Chamada inicial
    carregarPontos();

    // Função para filtrar os pontos com base na prioridade
    window.filtrarPontos = function(nivel) { // Tornando a função global para ser acessível pelos botões HTML
      marcadores.forEach((marcador) => {
        if (nivel === "todas" || marcador.prioridade === nivel) {
          marcador.addTo(mapa);
        } else {
          mapa.removeLayer(marcador);
        }
      });
    }
});