document.addEventListener('DOMContentLoaded', function() {
    usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    urlApi = usuarioLogado.tipo === "profissional"
                 ? "https://jsonserver.lorranpedrolp6.repl.co/professional_profiles/"
                 : "https://jsonserver.lorranpedrolp6.repl.co/users/";

    if (!usuarioLogado) {
        window.location.href = 'login.html';
    } else {
        carregarPerfil(usuarioLogado.userId);
    }

    document.getElementById('excluirPerfil').addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir sua conta? Esta ação é irreversível.')) {
            excluirPerfil();
        }
    });
    document.getElementById('sairConta').addEventListener('click', function() {
        if (confirm('Tem certeza que deseja sair da sua conta?')) {
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'login.html';
        }
    });
});

async function carregarPerfil(userId) {
    try {
        const response = await fetch(urlApi + userId);
        const usuario = await response.json();
        document.getElementById('current-editing-user-id').value = userId;
        document.getElementById('nomeUsuario').value = usuario.username;
        document.getElementById('emailUsuario').value = usuario.email;
        document.getElementById('tipoUsuario').value = usuario.tipo;

        if (usuarioLogado && usuarioLogado.tipo === 'admin') {
            document.getElementById('admin-user-list').style.display = 'block';
            document.getElementById('admin-pro-user-list').style.display = 'block';
            fetchUsers(); // Carrega a lista de usuários
            fetchProUsers()
        }

        if (usuarioLogado.tipo === "profissional") {
            mostrarImagensProfissional(true, usuario.image, usuario.main_image);
            mostrarCamposProfissional(true);
            document.getElementById('image').value, 
            document.getElementById('mainImage').value;
            document.getElementById('category').value = usuario.category;
            document.getElementById('document').value = usuario.document;
            document.getElementById('address').value = usuario.adress;
            document.getElementById('phone').value = usuario.phone;
            document.getElementById('image').value = usuario.image;
            document.getElementById('mainImage').value = usuario.main_image;
            document.getElementById('description').value = usuario.description;
            document.getElementById('message').value = usuario.mesage;
            document.getElementById('message2').value = usuario.mesage2;
            document.getElementById('rating').value = usuario.average_rating.toFixed(2);
            document.getElementById('clientCount').value = usuario.client_count;
            document.getElementById('isPartner').value = usuario.is_partner ? "true" : "false";
        }
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
    }
}

function mostrarImagensProfissional(mostrar, imgSrc, mainImgSrc) {
    const divImagens = document.getElementById('imagensProfissional');
    const imagemProfissional = document.getElementById('imagemProfissional');
    const imagemPrincipalProfissional = document.getElementById('imagemPrincipalProfissional');

    if (mostrar) {
        imagemProfissional.src = imgSrc;
        imagemPrincipalProfissional.src = mainImgSrc;
        divImagens.style.display = 'block';
    } else {
        divImagens.style.display = 'none';
    }
}

function mostrarCamposProfissional(mostrar) {
    const camposProfissional = document.getElementById('camposProfissional');
    camposProfissional.style.display = mostrar ? 'block' : 'none';
}

function toggleModoEdicao(editar) {
    const inputs = document.querySelectorAll('#perfilForm input, #perfilForm textarea, #perfilForm select');
    inputs.forEach(input => {
        // Campos que devem permanecer bloqueados para usuários não-administradores
        const camposNaoEditaveis = ['document', 'tipoUsuario', 'clientCount', 'isPartner', 'rating'];

        if (usuarioLogado.tipo === "admin") {
            // Se o usuário logado é um administrador, todos os campos são editáveis
            input.readOnly = false;
            if(input.tagName === 'SELECT') {
                input.disabled = false;
            }
        } else {
            // Para outros usuários, alguns campos são bloqueados
            input.readOnly = camposNaoEditaveis.includes(input.id) || !editar;
            if(input.tagName === 'SELECT') {
                input.disabled = camposNaoEditaveis.includes(input.id) || !editar;
            }
        }
    });
}

function fetchUsers() {
    fetch(urlApi)
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('userList');
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = user.username; // Supondo que cada usuário tem um 'username'
                userItem.classList.add('user-item');
                userItem.onclick = () => loadUserProfile(user.id); // Carregar perfil ao clicar
                userList.appendChild(userItem);
            });
        });
}

function fetchProUsers() {
    fetch("https://jsonserver.lorranpedrolp6.repl.co/professional_profiles/")
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('proUserList');
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = user.username; // Supondo que cada usuário tem um 'username'
                userItem.classList.add('user-item');
                userItem.onclick = () => loadUserProfile(user.id, "profissional"); // Carregar perfil ao clicar
                userList.appendChild(userItem);
            });
        });
}

async function loadUserProfile(userId, tipo = null) {
    try {
        document.getElementById('admin-user-list').style.display = 'none';
        document.getElementById('admin-pro-user-list').style.display = 'none';
        if(tipo == "profissional"){
            response = await fetch("https://jsonserver.lorranpedrolp6.repl.co/professional_profiles/" + userId);
            document.getElementById('current-editing-user-type').value = tipo;            
        }else{
            response = await fetch(urlApi + userId);
        }
        document.getElementById('current-editing-user-id').value = userId;
        const usuario = await response.json();
        console.log(usuario)
        document.getElementById('nomeUsuario').value = usuario.username;
        document.getElementById('emailUsuario').value = usuario.email;
        document.getElementById('tipoUsuario').value = usuario.tipo;

        if (usuario.tipo === "profissional" || tipo == "profissional") {
            mostrarImagensProfissional(true, usuario.image, usuario.main_image);
            mostrarCamposProfissional(true);
            document.getElementById('image').value, 
            document.getElementById('mainImage').value;
            document.getElementById('category').value = usuario.category;
            document.getElementById('document').value = usuario.document;
            document.getElementById('address').value = usuario.adress;
            document.getElementById('phone').value = usuario.phone;
            document.getElementById('image').value = usuario.image;
            document.getElementById('mainImage').value = usuario.main_image;
            document.getElementById('description').value = usuario.description;
            document.getElementById('message').value = usuario.mesage;
            document.getElementById('message2').value = usuario.mesage2;
            document.getElementById('rating').value = usuario.average_rating.toFixed(2);
            console.log(usuario.client_count)
            document.getElementById('clientCount').value = usuario.client_count;
            document.getElementById('isPartner').value = usuario.is_partner ? "true" : "false";
        }
    } catch (error) {
        console.error('Erro ao carregar perfil:', error);
    }
}



async function salvarPerfil(userId) {
    const userType = document.getElementById('current-editing-user-type').value;
    console.log(userType)
    const urlApi = userType === "profissional" || usuarioLogado.tipo === "profissional"
                ? "https://jsonserver.lorranpedrolp6.repl.co/professional_profiles/"
                : "https://jsonserver.lorranpedrolp6.repl.co/users/";

    const res = await fetch(urlApi + userId);
    const usuarioExistente = await res.json();    
    
    const usuarioAtualizado = {
        ...usuarioExistente,
        username: document.getElementById('nomeUsuario').value,
        email: document.getElementById('emailUsuario').value,
    };

    if (usuarioLogado.tipo === "profissional" || userType === "profissional") {
        usuarioAtualizado.category = document.getElementById('category').value;
        usuarioAtualizado.document = document.getElementById('document').value;
        usuarioAtualizado.adress = document.getElementById('address').value;
        usuarioAtualizado.phone = document.getElementById('phone').value;
        usuarioAtualizado.description = document.getElementById('description').value;
        usuarioAtualizado.image = document.getElementById('image').value;
        usuarioAtualizado.main_image = document.getElementById('mainImage').value;
        usuarioAtualizado.mesage = document.getElementById('message').value;
        usuarioAtualizado.mesage2 = document.getElementById('message2').value;
        const isPartnerValue = document.getElementById('isPartner').value;     

        // Campos não editáveis, mas que devem ser mantidos
        usuarioAtualizado.average_rating = parseFloat(document.getElementById('rating').value);
        usuarioAtualizado.client_count = parseInt(document.getElementById('clientCount').value);
        usuarioAtualizado.is_partner = isPartnerValue === "true";
    }

    try {
        const response = await fetch(urlApi + userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioAtualizado)
        });

        if (response.ok) {
            alert('Perfil atualizado com sucesso!');
            //window.location.href = 'perfil_usuario.html';
            carregarPerfil(usuarioLogado.userId);
        } else {
            alert('Erro ao atualizar o perfil. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao salvar o perfil:', error);
    }
}

const botaoEditar = document.getElementById('editarPerfil');
botaoEditar.addEventListener('click', function() {
    const userIdEmEdicao = document.getElementById('current-editing-user-id').value;
    const modoEdicao = !document.getElementById('nomeUsuario').readOnly;

    if (modoEdicao) {
        salvarPerfil(userIdEmEdicao);
        botaoEditar.textContent = 'Editar';
        toggleModoEdicao(false);
    } else {
        botaoEditar.textContent = 'Salvar';
        toggleModoEdicao(true);
    }
});

async function excluirPerfil() {
    try {
        const userId = document.getElementById('current-editing-user-id').value;
        const response = await fetch(urlApi + userId, { method: 'DELETE' });
        if (response.ok) {
            alert('Conta excluída com sucesso.');
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'login.html';
        } else {
            alert('Não foi possível excluir a conta. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao excluir conta:', error);
    }
}
