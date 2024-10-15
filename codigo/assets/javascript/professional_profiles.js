const categoriesToProfessions = {
    "Reformas": ["reformas", "marceneiro", "pedreiro", "carpinteiro"],
    "Saude": ["saude", "médico", "enfermeiro", "fisioterapeuta", "nutricionista"],
    "Moda": ["moda", "estilista", "designer de moda", "consultor de moda", "modelo"],
    "Juridica": ["juridica", "advogado", "jurista"],
    "Eventos": ["eventos", "organizador de eventos", "decorador de festas", "decorador"],
    "Aulas": ["aulas", "professor", "tutor", "instrutor"],
    "Profissionais": ["profissionais"]
};

document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const contaDropdown = document.getElementById('navbarAccountDropdown');
    const contaMenu = document.querySelector('.dropdown-menu');
  
    if (usuarioLogado) {
      // Se o usuário estiver logado, mostrar o nome e opções do perfil
      contaDropdown.textContent = usuarioLogado.nome; // Use o nome de usuário
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

function getCategoryFromProfession(profession) {
    for (const [category, professions] of Object.entries(categoriesToProfessions)) {
        if (professions.includes(profession.toLowerCase())) {
            return category;
        }
    }
    return 'noMatch'; 
}

document.addEventListener('DOMContentLoaded', function() {
    loadProfiles(); // Chama inicialmente para carregar os perfis

    // Busca e atribui eventos aos elementos da barra de busca
    const searchButton = document.querySelector('#navbarSearch button');
    const searchInput = document.querySelector('#navbarSearch input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do formulário
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                updateProfessionTitle(searchTerm);
                console.log(searchTerm)
                const category = getCategoryFromProfession(searchTerm);
                loadProfiles(category);
            }
        });
    }

    // Carrega a query de busca da URL e atualiza a interface
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    console.log(searchQuery)

    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
        updateProfessionTitle(searchQuery);
        const category = getCategoryFromProfession(searchQuery);
        console.log(category)
        loadProfiles(category);
    }

    // Atribui eventos aos links de categoria
    document.querySelectorAll('a[data-category]').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.dataset.category;
            updateProfessionTitle(category);
            loadProfiles(category);
        });
    });
});


function updateProfessionTitle(title) {
    const professionTitleElement = document.getElementById('profession-title');
    professionTitleElement.textContent = title || 'Profissional'; 
}

function loadProfiles(category = 'Profissionais') {
    fetch("https://jsonserver.lorranpedrolp6.repl.co/professional_profiles")
        .then(response => response.json())
        .then(profiles => {
            const profilesContainer = document.querySelector('.content');
            profilesContainer.innerHTML = ''; 

            let filteredProfiles = [];
            if (category === 'Profissionais') {
                filteredProfiles = profiles;
            } else if (category === 'noMatch') {
                filteredProfiles = []; 
            } else {
                filteredProfiles = profiles.filter(profile => profile.category === category);
            }

            const profileCountElement = document.getElementById('profile-count');
            profileCountElement.textContent = `${filteredProfiles.length} resultado${filteredProfiles.length !== 1 ? 's' : ''} encontrado${filteredProfiles.length !== 1 ? 's' : ''}`;

            if (filteredProfiles.length > 0) {createProfileBlock
                filteredProfiles.forEach(profile => {
                    const profileBlock = createProfileBlock(profile);
                    profilesContainer.appendChild(profileBlock);
                });
            } else {
                const noProfilesMsg = document.createElement('p');
                noProfilesMsg.textContent = "Ainda não temos profissionais desta categoria";
                noProfilesMsg.className = 'no-profiles-message';
                profilesContainer.appendChild(noProfilesMsg);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar perfis:', error);
        });
}

function createProfileBlock(profile) {
    const profileBlock = document.createElement('div');
    profileBlock.className = 'profile-block';

    profileBlock.addEventListener('click', function() {
        window.location.href = './tela_profissional.html?profissionalId=' + profile.id;});

    const image = document.createElement('img');
    image.src = profile.image;
    image.alt = 'Profile image';
    image.className = 'profile-image';

    const name = document.createElement('h1');
    name.textContent = profile.username;

    const description = document.createElement('p');
    description.textContent = profile.description;

    const rating = document.createElement('div');
    rating.className = 'rating';

    numStars = profile.average_rating.toFixed(1)

    console.log(numStars)

    const fullStars = Math.floor(numStars);
    const halfStar = numStars % 1 >= 0.5 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
        rating.appendChild(createStar('full'));
    }
    
    if (halfStar) {
        rating.appendChild(createStar('half'));
    }
    
    // Calcula o número de estrelas vazias
    console.log(5 - fullStars - halfStar)
    const emptyStars = 5 - fullStars - halfStar;
    
    for (let i = 0; i < emptyStars; i++) {
        rating.appendChild(createStar('empty'));
    }

    profileBlock.appendChild(image);
    profileBlock.appendChild(name);
    profileBlock.appendChild(description);
    profileBlock.appendChild(rating);

    return profileBlock;
}

function createStar(type) {
    const starContainer = document.createElement('div');
    starContainer.innerHTML = type === 'full' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">' +
          '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>' +
          '</svg>'
        : type === 'half' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">' +
          '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>' +
          '</svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: #808080;" class="bi bi-star-fill" viewBox="0 0 16 16">' +
        '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>' +
        '</svg>'

    return starContainer.firstChild; 
}
