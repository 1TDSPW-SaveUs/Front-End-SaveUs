document.addEventListener('DOMContentLoaded', () => {

   // Seleciona o link "Voltar ao Topo" para adicionar a funcionalidade de rolagem suave
    const backToTopLink = document.querySelector('a[href="#topo"]');
    if (backToTopLink) { // Verifica se o link existe antes de adicionar o evento
      backToTopLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }

    // Inicializa o mapa Leaflet, centralizando-o em uma localização específica (Jardim Paulista) e definindo o nível de zoom.
    const mapa = L.map("mapa").setView([-23.561414, -46.655881], 15);

    // Adiciona a camada de "tiles" (azulejos) do mapa, que são as imagens que compõem o mapa visual.
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; OpenStreetMap & Carto',
        subdomains: "abcd",
        maxZoom: 19,
    }).addTo(mapa);


    // Define uma área poligonal no mapa para representar uma zona de risco.
   const zonaDeRisco = L.polygon([
        [-23.5625, -46.6675], 
        [-23.5605, -46.6575], 
        [-23.5635, -46.6500], 
        [-23.5685, -46.6550], 
        [-23.5670, -46.6650], 
    ], {
        color: "#dc3545",
        fillColor: "#dc3545",
        fillOpacity: 0.4,
    }).addTo(mapa).bindPopup("Zona de Risco: Jardim Paulista");

    // Array de objetos, cada um representando uma pessoa em grupo de risco com nome, prioridade e coordenadas.
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

    // Mapeamento de níveis de prioridade para cores específicas, para visualização no mapa.
    const coresPrioridade = {
      baixa: "#28a745",
      media: "#ffc107",
      alta: "#fd7e14",
      maxima: "#dc3545",
    };

    // Array para guardar as referências dos marcadores criados no mapa.
    let marcadores = [];

    // Função responsável por criar e adicionar os marcadores de cada ponto de risco no mapa.
    function carregarPontos() {
      pontos.forEach((ponto) => {
        // Define a cor do marcador com base na prioridade do ponto.
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

        // Adiciona a propriedade 'prioridade' diretamente ao objeto marcador para facilitar a filtragem.
        marcador.prioridade = ponto.prioridade;
        marcadores.push(marcador);
      });
    }

    // Carrega os pontos no mapa assim que o script é executado.
    carregarPontos();

    // Função para filtrar os marcadores exibidos no mapa com base no nível de prioridade selecionado.
    // Tornada global para ser acessível pelos botões no HTML.
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