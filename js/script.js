// Dados das galerias — DO ANTIGO (completo!)
const galleryData = {
  galaxias: {
    title: "GALÁXIAS",
    images: [
      { src: "assets/img_g1f1_v2.png", caption: "VIA LÁCTEA, CONCEPÇÃO ARTÍSTICA DA GALÁXIA EM QUE ESTAMOS. ELA TEM FORMATO ESPIRAL COM DOIS BRAÇOS PRINCIPAIS E OUTROS BRAÇOS MENORES.", credit: "NASA/JPL-Caltech" },
      { src: "assets/img_g1f2_v2.png", caption: "A GALÁXIA DE ANDRÔMEDA É A MAIS MASSIVA DO GRUPO DE GALÁXIAS QUE INCLUI A VIA LÁCTEA. EM ESPIRAL, ESTÁ A 2,5 MILHÕES DE ANOS-LUZ DA TERRA.", credit: "NASA/JPL/California Institute of Technology" },
      { src: "assets/img_g1f3_v2.png", caption: "GALÁXIA DO SOMBREIRO, TAMBÉM POSSUI FORMA ESPIRAL E ESTÁ A 30 MILHÕES DE ANOS-LUZ DE DISTÂNCIA DA TERRA.", credit: "NASA, ESA, CSA, STScI / Flickr" },
      { src: "assets/img_g1f4_v2.png", caption: "A NGC 2865 É UMA GALÁXIA ELÍPTICA LOCALIZADA A 100 MILHÕES DE ANOS-LUZ DE DISTÂNCIA DA TERRA.", credit: "ESA/Hubble & NASA" },
      { src: "assets/img_g1f5_v2.png", caption: "A GALÁXIA ANÃ NGC 1705 É PEQUENA E DE FORMATO IRREGULAR.", credit: "ESA/Hubble & NASA, R. Chandar" },
      { src: "assets/img_g1f6_v2.png", caption: "DUAS GALÁXIAS SE ENCONTRAM: IC 2163, A MENOR, E A GALÁXIA MAIOR, NGC 2207. ESSA IMAGEM FOI GERADA COM DADOS DO TELESCÓPIO ESPACIAL JAMES WEBB E DO TELESCÓPIO ESPACIAL HUBBLE.", credit: "NASA, ESA, CSA, STScI / Flickr" }
    ]
  },
  estrelas: {
    title: "ESTRELAS",
    images: [
      { src: "assets/img_g2f1_v2.png", caption: "O SOL É A ESTRELA CENTRAL DO SISTEMA SOLAR. ESTA IMAGEM MOSTRA A LUZ BRILHANTE DE UMA ERUPÇÃO SOLAR.", credit: "NASA/Goddard/SDO" },
      { src: "assets/img_g2f2_v2.png", caption: "A IMAGEM MOSTRA UMA FUTURA ESTRELA: UMA PROTOESTRELA. COM APENAS CERCA DE 100 MIL ANOS, ESTE JOVEM OBJETO ESTÁ EM MEIO A UMA NUVEM DE GÁS E POEIRA EM FORMA DE AMPULHETA.", credit: "NASA, ESA, CSA, STScI / Flickr" },
      { src: "assets/img_g2f3_v2.png", caption: "PRÓXIMA CENTAURI É A ESTRELA MAIS PRÓXIMA DO SOL, A POUCO MAIS DE 4 ANOS-LUZ DE DISTÂNCIA. É UMA ANÃ VERMELHA E ESTÁ NA CONSTELAÇÃO DO CENTAURO, QUE É VISÍVEL NO CÉU DO HEMISFÉRIO SUL TERRESTRE.", credit: "ESA/Hubble & NASA" },
      { src: "assets/img_g2f4_v2.png", caption: "CASSIOPEIA A É UM EXEMPLO DE ESTRELA QUE MORREU EM UMA EXPLOSÃO DE SUPERNOVA. ELA ESTÁ LOCALIZADA A 10 MIL ANOS-LUZ DE DISTÂNCIA, NA CONSTELAÇÃO DE CASSIOPEIA.", credit: "Raio -X: NASA/CXC/SAO; Infravermelho: NASA/ESA/CSA/STScI/D. Milisavljevic (Purdue Univ.), I. De Looze (UGent), T. Temim (Princeton Univ.); Processamento de Imagem: NASA/CXC/SAO/J. Major, J. Schmidt and K. Arcand" },
      { src: "assets/img_g2f5_v2.png", caption: "OUTRO FIM POSSÍVEL PARA UMA ESTRELA É SE TORNAR UM BURACO NEGRO. TEMOS UMA ILUSTRAÇÃO DE UM BURACO NEGRO SUPERMASSIVO COM REDEMOINHOS CÔNICOS E PÁLIDOS.", credit: "NASA/Aurore Simonnet (Sonoma State University)" }
    ]
  },
  sistemas: {
    title: "SISTEMAS PLANETÁRIOS",
    images: [
      { src: "assets/img_g3f1_v2.png", caption: "NESTA ILUSTRAÇÃO, OS PLANETAS SÃO RETRATADOS MUITO MAIS PRÓXIMOS DO QUE REALMENTE ESTÃO.", credit: "NASA/JPL" },
      { src: "assets/img_g3f2_v2.png", caption: "CONCEITO ARTÍSTICO DO SISTEMA KEPLER-90. UM SISTEMA COM UMA ESTRELA SEMELHANTE AO SOL, CHAMADA DE KEPLER-90, E COM OITO PLANETAS EM SUA ÓRBITA. ESTÁ A CERCA DE 2.500 ANOS-LUZ.", credit: "NASA/Ames Research Center/Wendy Stenzel " }
    ]
  },
  planetas: {
    title: "PLANETAS",
    images: [
      { src: "assets/img_g4f1_v2.png", caption: "IMAGEM DA TERRA, TERCEIRO PLANETA EM DISTÂNCIA DO SOL, TIRADA PELO SATÉLITE GOES-8 (GEOSTATIONARY OPERATIONAL ENVIRONMENTAL SATELLITE - 8).", credit: "GOES-8 / NASA" },
      { src: "assets/img_g4f2_v2.png", caption: "IMAGEM DE MERCÚRIO, O PLANETA MAIS PRÓXIMO DO SOL, CAPTURADA PELA SONDA ESPACIAL MESSENGER DA NASA.", credit: "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington" },
      { src: "assets/img_g4f3_v2.png", caption: "IMAGEM DE VÊNUS, CAPTURADA PELA SONDA ESPACIAL MARINER 10. MAS, AO CONTRÁRIO DE SUA APARÊNCIA SERENA, VÊNUS É TOMADO POR CALOR INTENSO, PRESSÃO ATMOSFÉRICA AVASSALADORA E NUVENS DE ÁCIDO CORROSIVO.", credit: "NASA/JPL-Caltech" },
      { src: "assets/img_g4f4_v2.png", caption: "NOSSO VIZINHO MARTE, EM IMAGEM CAPTURADA PELO TELESCÓPIO ESPACIAL HUBBLE.", credit: "NASA / The Hubble Heritage Team (STScI/AURA) / J. Bell (Cornell U.), P. James (U. Toledo), M. Wolff (SSI), A. Lubenow (STScI), J. Neubert (MIT/Cornell)" },
      { src: "assets/img_g4f5_v2.png", caption: "JÚPITER, O MAIOR PLANETA DO SISTEMA SOLAR. IMAGEM CAPTADA PELO TELESCÓPIO ESPACIAL JAMES WEBB.", credit: "NASA, ESA, CSA, STScI, R. Hueso (University of the Basque Country), I. de Pater (University of California, Berkeley), T. Fouchet (Observatory of Paris), L. Fletcher (University of Leicester), M. Wong (University of California, Berkeley), J. DePasquale (STScI)" },
      { src: "assets/img_g4f6_v2.png", caption: "SATURNO E SEUS ANÉIS, COM IMAGENS CAPTURADAS PELO TELESCÓPIO ESPACIAL JAMES WEBB.", credit: "NASA, ESA, CSA, STScI, Matt Tiscareno (SETI Institute), Matt Hedman (University of Idaho), Maryame El Moutamid (Cornell University), Mark Showalter (SETI Institute), Leigh Fletcher (University of Leicester), Heidi Hammel (AURA). Processamento de Imagem: J. DePasquale (STScI) / Flickr" },
      { src: "assets/img_g4f7_v2.png", caption: "URANO É FRIO E VENTOSO. O GIGANTE GELADO É CERCADO POR 13 ANÉIS E 28 PEQUENAS LUAS. IMAGEM CAPTURADA PELO TELESCÓPIO ESPACIAL JAMES WEBB.", credit: "NASA, ESA, CSA, STScI / Processamento de imagem: Joseph DePasquale (STSci)" },
      { src: "assets/img_g4f8_v2.png", caption: "O PLANETA NETUNO ESTÁ 30 VEZES MAIS DISTANTE DO SOL DO QUE A TERRA. IMAGEM CAPTURADA PELO TELESCÓPIO ESPACIAL JAMES WEBB.", credit: "NASA, ESA, CSA, STScI / Flickr" },
      { src: "assets/img_g4f9_v2.png", caption: "PLUTÃO JÁ FOI CONSIDERADO O NONO PLANETA DE NOSSO SISTEMA E EM 2006 FOI RECLASSIFICADO COMO UM PLANETA-ANÃO, APÓS DESCOBRIREM OUTROS PLANETAS NA MESMA REGIÃO.", credit: "NASA/JHUAPL/SwRI" },
      { src: "assets/img_g4f10_v2.png", caption: "CERES É O ÚNICO PLANETA-ANÃO QUE ESTÁ NO SISTEMA SOLAR INTERNO. ELE FICA LOCALIZADO NO CINTURÃO DE ASTEROIDES ENTRE MARTE E JÚPITER.", credit: "NASA/JPL-Caltech/UCLA/MPS/DLR/IDA" },
      { src: "assets/img_g4f11_v2v.png", caption: "O EXOPLANETA GJ 504B TEM CERCA DE QUATRO VEZES A MASSA DE JÚPITER, SUA ESTRELA É PARECIDA COM O SOL E ESTÁ A 57 ANOS-LUZ DE DISTÂNCIA DA TERRA.", credit: "NASA/Goddard/S. Wiessinger" },
      { src: "assets/img_g4f12_v2.png", caption: "O EXOPLANETA SUPER-TERRA 55 CANCRI E, REPRESENTADO COM SUA ESTRELA NESTA CONCEPÇÃO ARTÍSTICA, PROVAVELMENTE TEM UMA ATMOSFERA MAIS ESPESSA QUE A DA TERRA, DE ACORDO COM UM ESTUDO DE 2017.", credit: "NASA/JPL-Caltech" }
    ]
  },
  satelites: {
    title: "SATÉLITES NATURAIS",
    images: [
      { src: "assets/img_g5f1_v2.png", caption: "A LUA É O ÚNICO SATÉLITE NATURAL DA TERRA E EXERCE INFLUÊNCIA SOBRE O NOSSO PLANETA, COMO A REGULAÇÃO DAS MARÉS.", credit: "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington" },
      { src: "assets/img_g5f2_v2.png", caption: "FOBOS É A MAIOR DAS DUAS LUAS DE MARTE. ELA ORBITA O PLANETA VERMELHO TRÊS VEZES POR DIA.", credit: "NASA/JPL-Caltech/University of Arizona" },
      { src: "assets/img_g5f3_v2.png", caption: "EUROPA É A QUARTA MAIOR DAS 95 LUAS DE JÚPITER. E É CONSIDERADA UM DOS LUGARES MAIS PROMISSORES DO NOSSO SISTEMA SOLAR PARA ENCONTRAR AMBIENTES ADEQUADOS PARA FORMAS DE VIDA FORA DA TERRA.", credit: "Dados da imagem: NASA/JPL-Caltech/SwRI/MSSS Processamento de imagem: Kevin M. Gill CC BY 3.0" },
      { src: "assets/img_g5f4_v2.png", caption: "ENCÉLADO É UMA DAS LUAS DE SATURNO E A SUPERFÍCIE MAIS BRANCA E REFLEXIVA DO SISTEMA SOLAR. COMO REFLETE MUITA LUZ SOLAR, A TEMPERATURA DA SUPERFÍCIE É EXTREMAMENTE FRIA, CERCA DE -201 GRAUS CELSIUS.", credit: "NASA/JPL/Space Science Institute" },
      { src: "assets/img_g5f5_v2.png", caption: "ARIEL É UMA DAS MAIORES LUAS DE URANO, ACREDITA-SE QUE É FORMADA POR GELO DE ÁGUA, SILICATO E DIÓXIDO DE CARBONO.", credit: "NASA/JPL" },
      { src: "assets/img_g5f6_v2.png", caption: "TRITÃO É A MAIOR DAS 13 LUAS DE NETUNO. É INCOMUM PORQUE É A ÚNICA GRANDE LUA DO NOSSO SISTEMA SOLAR QUE ORBITA NA DIREÇÃO OPOSTA À ROTAÇÃO DO SEU PLANETA.", credit: "NASA/JPL" }
    ]
  },
  corpos: {
    title: "OUTROS CORPOS CELESTES",
    images: [
      { src: "assets/img_g6f1_v2.png", caption: "IMAGEM DO COMETA ISON PASSANDO PELA CONSTELAÇÃO DE VIRGEM. NO MOMENTO DESTA IMAGEM, O COMETA ISON ESTAVA A 156 MILHÕES DE QUILÔMETROS DA TERRA.", credit: "NASA Goddard" },
      { src: "assets/img_g6f2_v2.png", caption: "IMAGEM DO COMETA SIDING SPRING PASSANDO PRÓXIMO AO PLANETA MARTE, EM IMAGEM CAPTURADA PELO TELESCÓPIO ESPACIAL HUBBLE.", credit: "NASA, ESA, PSI, JHU/APL, STScI/AURA" },
      { src: "assets/img_g6f3_v2.png", caption: "IMAGEM DE VESTA, UM ASTEROIDE GIGANTE DE NOSSO SISTEMA. ÀS VEZES CHAMADOS DE PLANETAS MENORES, OS ASTEROIDES SÃO REMANESCENTES ROCHOSOS E SEM AR DA FORMAÇÃO INICIAL DO SISTEMA SOLAR.", credit: "NASA/JPL-Caltech/UCLA/MPS/DLR/IDA" }
    ]
  },
  exploracao: {
    title: "OBSERVAÇÃO E EXPLORAÇÃO",
    images: [
      { src: "assets/img_g7f1_v2.png", caption: "EM 2019, A SONDA CHINESA CHANG'E 4 FOI A PRIMEIRA SONDA A POUSAR NO LADO OCULTO DA LUA.", credit: "CSNA/Siyu Zhang/Kevin M. Gill" },
      { src: "assets/img_g7f2_v2.png", caption: "O TELESCÓPIO ESPACIAL HUBBLE, EM ÓRBITA AO REDOR DA TERRA DESDE 1990, MUDOU A COMPREENSÃO DA HUMANIDADE SOBRE O UNIVERSO. TRAZENDO INFORMAÇÕES DESDE A COMPOSIÇÃO ATMOSFÉRICA DE PLANETAS À DESCOBERTA DA ENERGIA ESCURA.", credit: "NASA/JPL" },
      { src: "assets/img_g7f3_v2.png", caption: "TESTES DA VOYAGER, NO ANO DE 1976. OS PRINCIPAIS OBJETIVOS DA MISSÃO VOYAGER SÃO CARACTERIZAR O AMBIENTE EXTERNO DO SISTEMA SOLAR E ESTUDAR O ESPAÇO INTERESTELAR.", credit: "NASA/JPL-Caltech" },
      { src: "assets/img_g7f4_v2.png", caption: "O ROVER PERSEVERANCE DA NASA ESTÁ EM MARTE E BUSCA SINAIS DE VIDA ANTIGA E COLETA AMOSTRAS DE ROCHAS PARA POSSÍVEL RETORNO À TERRA.", credit: "NASA/JPL-Caltech/MSSS" },
      { src: "assets/img_g7f5_v2.png", caption: "NA IMAGEM, A SONDA ESPACIAL OSIRIS-REX ESTÁ SENDO IÇADA PARA TESTES AMBIENTAIS. A OSIRIS-REX É A PRIMEIRA MISSÃO DOS ESTADOS UNIDOS A COLETAR UMA AMOSTRA DE UM ASTEROIDE.", credit: "Marina Behabetz / NASA" },
      { src: "assets/img_g7f6_v2.png", caption: "O TELESCÓPIO ESPACIAL JAMES WEBB ESTUDA TODAS AS FASES DA HISTÓRIA DO NOSSO UNIVERSO E FOI LANÇADO EM 2021. SUA ÓRBITA É AO REDOR DO SOL.", credit: "NASA Goddard" }
    ]
  }
};

let currentTheme = null;
let currentIndex = 0;

// Função para pré-carregar imagens adjacentes
function preloadAdjacentImages(theme, index) {
  if (!galleryData[theme]) return;
  const images = galleryData[theme].images;
  if (images.length <= 1) return;
  const next = index + 1;
  const prev = index - 1;
  if (next < images.length) new Image().src = images[next].src;
  if (prev >= 0) new Image().src = images[prev].src;
}

// Atualizar galeria
function updateGallery() {
  if (!currentTheme) return;
  
  const themeData = galleryData[currentTheme];
  const item = themeData.images[currentIndex];
  
  // Atualiza elementos
  document.getElementById('main-image').src = item.src;
  document.getElementById('main-image').alt = item.caption.split('.')[0] || themeData.title;
  document.getElementById('gallery-title').textContent = themeData.title;
  
  const captionText = item.caption + (item.credit ? '<br><small>Fonte: ' + item.credit + '</small>' : '');
  document.querySelector('.card-description').innerHTML = captionText;
  document.querySelector('.vertical-label').textContent = item.credit || '';

  // Controle de setas
  const leftArrow = document.querySelector('.nav-arrow.left');
  const rightArrow = document.querySelector('.nav-arrow.right');

  if (themeData.images.length <= 1) {
    leftArrow.classList.add('hide');
    rightArrow.classList.add('hide');
  } else {
    leftArrow.classList.toggle('hide', currentIndex === 0);
    rightArrow.classList.toggle('hide', currentIndex === themeData.images.length - 1);
  }

  // Pré-carregar próximas
  preloadAdjacentImages(currentTheme, currentIndex);
}

// Navegação SEM LOOP
function goToPrev() {
  if (!currentTheme) return;
  const themeData = galleryData[currentTheme];
  if (themeData.images.length <= 1) return;
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function goToNext() {
  if (!currentTheme) return;
  const themeData = galleryData[currentTheme];
  if (themeData.images.length <= 1) return;
  if (currentIndex < themeData.images.length - 1) {
    currentIndex++;
    updateGallery();
  }
}

// Eventos
document.querySelectorAll('.open-gallery').forEach(card => {
  card.addEventListener('click', () => {
    const tema = card.dataset.tema;
    if (!galleryData[tema]) return;
    currentTheme = tema;
    currentIndex = 0;
    updateGallery();
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
  });
});

document.querySelector('.nav-arrow.left').addEventListener('click', goToPrev);
document.querySelector('.nav-arrow.right').addEventListener('click', goToNext);

// Teclado
document.addEventListener('keydown', (e) => {
  const galleryModal = document.getElementById('galleryModal');
  if (!galleryModal.classList.contains('show')) return;

  if (e.key === 'ArrowLeft') {
    goToPrev();
  } else if (e.key === 'ArrowRight') {
    goToNext();
  } else if (e.key === 'Escape') {
    bootstrap.Modal.getInstance(galleryModal)?.hide();
    bootstrap.Modal.getInstance(document.getElementById('menuModal'))?.hide();
  }
});