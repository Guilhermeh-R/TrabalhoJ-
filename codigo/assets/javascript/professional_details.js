document.addEventListener('DOMContentLoaded', function() {addRating
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const contaDropdown = document.getElementById('navbarAccountDropdown');
    const contaMenu = document.querySelector('.dropdown-menu');
  
    if (usuarioLogado) {
      // Se o usuário estiver logado, mostrar o nome e opções do perfil
      contaDropdown.textContent = usuarioLogado.nome; 
      console.log(!usuarioLogado.tipo === "profissional")
      if (!(usuarioLogado.tipo === "profissional")) document.getElementById('user-rating-section').style.display = 'block';
      contaMenu.innerHTML = `
        <li><a class="dropdown-item" href="perfil_usuario.html">Perfil</a></li>
        <li><a class="dropdown-item" href="#" id="logout">Sair</a></li>
      `;
    } else {
      // Se o usuário NÃO estiver logado, mostrar opção para Entrar
      contaDropdown.textContent = 'Conta';
      contaMenu.innerHTML = `
        <li><a class="dropdown-item" href="login.html">Entrar</a></li>
      `;
    }
  
    // Configurar o evento de logout
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.href = 'login.html';
      });
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const profissionalId = urlParams.get('profissionalId');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    console.log(usuarioLogado)
    if(usuarioLogado){    
        const userId = usuarioLogado.userId
        document.querySelectorAll('.rating-star').forEach((star, index) => {
            star.addEventListener('click', () => {
                addRating(profissionalId, index+1, userId);
                updateRatingStars(star, index);
            });
    });
}

if (profissionalId) {
    fetchProfileDetails(profissionalId);
} else {
    console.error('ID do profissional não fornecido.');
}

});

function hasUserAlreadyRated(profissionalId, userId) {
    let ratings = JSON.parse(localStorage.getItem('userRatings')) || {};
    return ratings[userId] && ratings[userId].includes(profissionalId);
}

function addRating(profissionalId, rating, userId) {
    if (hasUserAlreadyRated(profissionalId, userId)) {
        alert("Você já avaliou este profissional.");
        return;
    }

    // Busca o profissional para atualizar a avaliação
    fetch(`https://3bfb3ad7-0170-4418-ad34-e53bb6a70217-00-3f27a4fkj7pru.riker.replit.dev/professional_profiles/${profissionalId}`)
    .then(response => response.json())
    .then(profissional => {
        // Atualiza a contagem de avaliações
        console.log(profissional)
        const updatedRatings = profissional.ratings;
        console.log(profissional)
        console.log(updatedRatings)
        updatedRatings[rating + '_stars']++;
        profissional.client_count++
        console.log(updatedRatings)
        // Recalcula a média de avaliações
        console.log(profissional)
        const totalRatings = updatedRatings['5_stars'] * 5 + updatedRatings['4_stars'] * 4 + updatedRatings['3_stars'] * 3 + updatedRatings['2_stars'] * 2 + updatedRatings['1_stars'] * 1;
        console.log(totalRatings)
        const numberOfRatings = updatedRatings['5_stars'] + updatedRatings['4_stars'] + updatedRatings['3_stars'] + updatedRatings['2_stars'] + updatedRatings['1_stars'];
        console.log(numberOfRatings)
        profissional.average_rating = totalRatings / numberOfRatings;
        profissional.total_ratings = numberOfRatings;
        console.log(profissional)

        // Atualiza o profissional no servidor
        return fetch(`https://3bfb3ad7-0170-4418-ad34-e53bb6a70217-00-3f27a4fkj7pru.riker.replit.dev/${profissionalId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profissional)
        });
    })
    .then(response => response.json())
    .then(data => {
        alert("Avaliação adicionada com sucesso.");
        saveUserRating(profissionalId, userId);

        document.getElementById('rating').innerHTML = formatRating(data.average_rating);
        document.getElementById('client-count').textContent = data.client_count + " clientes atendidos";
    })
    .catch(error => console.error('Erro ao enviar avaliação:', error));
}

function saveUserRating(profissionalId, userId) {
    let ratings = JSON.parse(localStorage.getItem('userRatings')) || {};
    if (!ratings[userId]) {
        ratings[userId] = [];
    }
    ratings[userId].push(profissionalId);
    localStorage.setItem('userRatings', JSON.stringify(ratings));
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('#navbarSearch .btn');
    const searchInput = document.querySelector('#navbarSearch .form-control');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do formulário
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                window.location.href = `./busca_profissionais.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
});

function fetchProfileDetails(profissionalId) {
    fetch(`https://3bfb3ad7-0170-4418-ad34-e53bb6a70217-00-3f27a4fkj7pru.riker.replit.dev/${profissionalId}`)
        .then(response => response.json())
        .then(professional => {
            loadProfileDetails(professional);
            getmap(professional);
        })
        .catch(error => {
            console.error('Erro ao buscar detalhes do profissional:', error);
        });
}

function loadProfileDetails(professional) {
    // Atualizações básicas
    document.getElementById('main-profile-img').src = professional.main_image
    document.getElementById('professional-name').textContent = professional.username;
    document.getElementById('profile-img').src = professional.image;
    document.getElementById('professional-description').textContent = professional.description;
    document.getElementById('rating').innerHTML = formatRating(professional.average_rating);

    // Atualizações adicionais conforme o segundo HTML original
    document.getElementById('visit-info').textContent = professional.mesage;
    document.getElementById('schedule-info').textContent = professional.mesage2;
    document.getElementById('client-count').textContent = professional.client_count + " clientes atendidos";

    // Container para os selos
    const selosContainer = document.getElementById('selos-container');
    selosContainer.innerHTML = '';  // Limpar os selos existentes
    
    // Verifica se o profissional é um parceiro e adiciona o selo correspondente
    console.log(professional.is_partner)
    if (professional.is_partner) {
        
        const partnerBadge = `
        <div class="selos">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
        </svg>
        <p class="parceiro-selo"> Serviço garantido</p>
    </div>
    <div class="selos">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
        </svg>
        <p class="parceiro-selo"> Parceiro TrabalhoJá</p>
    </div>
        `;
        selosContainer.innerHTML += partnerBadge;
    }

    const contactButton = document.getElementById('contact-btn');
    console.log(contactButton, professional.phone)
    if (contactButton && professional.phone) {
        contactButton.href = `https://api.whatsapp.com/send/?phone=${professional.phoneNumber}&text&type=phone_number&app_absent=0`;
    }
}

function updateRatingStars(selectedStar, index) {
    let stars = selectedStar.parentElement.querySelectorAll('.rating-star');
    stars.forEach((star, i) => {
        if(i <= index) {
            star.classList.add('bi-star-fill');
            star.classList.remove('bi-star');
        } else {
            star.classList.add('bi-star');
            star.classList.remove('bi-star-fill');
        }
    });
}

function formatRating(rating) {
    numStars = rating.toFixed(1)

    const fullStars = Math.floor(numStars);
    const halfStar = numStars % 1 >= 0.5 ? 1 : 0;

    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += createStar('full');
    }
    
    if (halfStar) {
        starsHtml += createStar('half')
    }
    
    // Calcula o número de estrelas vazias
    console.log(5 - fullStars - halfStar)
    const emptyStars = 5 - fullStars - halfStar;
    
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += createStar('empty')
    }

    return starsHtml;
}

function createStar(type) {
    return type === 'full' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">' +
          '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>' +
          '</svg>'
        : type === 'half' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">' +
          '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>' +
          '</svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #ffffff;" class="bi bi-star-fill" viewBox="0 0 16 16">' +
        '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>' +
        '</svg>';
}
mapboxgl.accessToken = 'pk.eyJ1IjoidWQ0djFkIiwiYSI6ImNscGtkbTQ1cjA4cmIya29wMTJtZnp3eHcifQ.dtqRYnKk_Yf8R2eCQY4inA';
function getmap(professional) {
    const enderecoDesejado = professional.adress;
    const accessToken = "pk.eyJ1IjoidWQ0djFkIiwiYSI6ImNscGtkbTQ1cjA4cmIya29wMTJtZnp3eHcifQ.dtqRYnKk_Yf8R2eCQY4inA";
  
    // Construa a URL da API de Geocodificação
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(enderecoDesejado)}.json?access_token=${accessToken}`;
  
    // Faça uma requisição HTTP
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Verifique se a resposta contém resultados
        if (data.features.length > 0) {
          // Extraia as coordenadas (latitude e longitude)
          const coordenadas = data.features[0].geometry.coordinates;
          console.log("Coordenadas:", coordenadas);
          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: coordenadas,
            zoom: 16
          });
          new mapboxgl.Marker().setLngLat(coordenadas).addTo(map);
        } else {
          console.error("Nenhum resultado encontrado para o endereço fornecido.");
          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-43.9452, -19.9226],
            zoom: 11
          });
        }
      })
      .catch(error => console.error("Erro na requisição:", error));


    return map;
  }
