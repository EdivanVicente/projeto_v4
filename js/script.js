// Dados das galerias (substitua com seus dados reais do PDF)
const galleries = {
  galaxias: [
    { 
      img: 'assets/img_g1f1_v2.png', 
      caption: 'VIA LÁCTEA, CONCEPÇÃO ARTÍSTICA DA GALÁXIA EM QUE ESTAMOS. ELA TEM FORMATO ESPIRAL COM DOIS BRAÇOS PRINCIPAIS E OUTROS BRAÇOS MENORES.', 
      label: 'NASA', 
      title: 'GALÁXIAS' 
    }, 
    { 
      img: 'assets/img_galaxia_2.png', 
      caption: 'A GALÁXIA DE ANDRÔMEDA É A MAIS MASSIVA DO GRUPO DE GALÁXIAS QUE INCLUI A VIA LÁCTEA. EM ESPIRAL, ESTÁ A 2,5 MILHÕES DE ANOS-LUZ DA TERRA.', 
      label: 'NOAO/AURA/NSF', 
      title: 'GALÁXIAS' 
    }
    // Adicione as demais imagens conforme necessário
  ],
  estrelas: [
    { 
      img: 'assets/img_estrela_1.png', 
      caption: 'Sol — nossa estrela', 
      label: 'NASA/SDO', 
      title: 'ESTRELAS' 
    }
  ],
  sistemas: [
    { 
      img: 'assets/img_sistema_1.png', 
      caption: 'Sistema Solar', 
      label: 'NASA/JPL', 
      title: 'SISTEMAS PLANETÁRIOS' 
    }
  ],
  planetas: [
    { 
      img: 'assets/img_planeta_1.png', 
      caption: 'Terra', 
      label: 'NASA', 
      title: 'PLANETAS' 
    }
  ],
  satelites: [
    { 
      img: 'assets/img_satelite_1.png', 
      caption: 'Lua', 
      label: 'NASA', 
      title: 'SATÉLITES NATURAIS' 
    }
  ],
  corpos: [
    { 
      img: 'assets/img_corpo_1.png', 
      caption: 'Cometa Halley', 
      label: 'ESA', 
      title: 'OUTROS CORPOS CELESTES' 
    }
  ],
  exploracao: [
    { 
      img: 'assets/img_exploracao_1.png', 
      caption: 'Telescópio Hubble', 
      label: 'NASA/ESA', 
      title: 'OBSERVAÇÃO E EXPLORAÇÃO' 
    }
  ]
};

let currentGallery = [];
let currentIndex = 0;

// Abrir galeria
document.querySelectorAll('.open-gallery').forEach(card => {
  card.addEventListener('click', () => {
    const tema = card.dataset.tema;
    currentGallery = galleries[tema] || [];
    if (currentGallery.length === 0) return;

    currentIndex = 0;
    updateGallery();
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
  });
});

// Atualizar galeria com os novos seletores
function updateGallery() {
  const item = currentGallery[currentIndex];
  
  // Atualiza a imagem
  document.getElementById('main-image').src = item.img;
  
  // Atualiza o título da categoria (NOVO SELETOR)
  document.querySelector('.card-title').textContent = item.title || ''; 

  // Atualiza a descrição (NOVO SELETOR)
  // Formata: "Legenda <br><small>Fonte: NASA</small>"
  const captionText = item.caption + (item.label ? '<br><small>Fonte: ' + item.label + '</small>' : ''); 
  document.querySelector('.card-description').innerHTML = captionText; 

  // Atualiza o rótulo vertical
  document.querySelector('.vertical-label').textContent = item.label || '';
}

// Navegação com os novos seletores
document.querySelector('.nav-arrow.left').addEventListener('click', () => {
  if (currentGallery.length <= 1) return;
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  updateGallery();
});

document.querySelector('.nav-arrow.right').addEventListener('click', () => {
  if (currentGallery.length <= 1) return;
  currentIndex = (currentIndex + 1) % currentGallery.length;
  updateGallery();
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const galleryModal = bootstrap.Modal.getInstance(document.getElementById('galleryModal'));
    const menuModal = bootstrap.Modal.getInstance(document.getElementById('menuModal'));
    if (galleryModal) galleryModal.hide();
    if (menuModal) menuModal.hide();
  }
});