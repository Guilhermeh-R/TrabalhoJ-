document.addEventListener('DOMContentLoaded', function () {
    usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (usuarioLogado) {
    if(!(usuarioLogado.tipo == "profissional")){
        alert(`Voce ja esta logado como ${usuarioLogado.nome}`)
        window.location.href = '../index.html';
    }
}
})

async function fetchAllUsers() {
    const usersResponse = await fetch("https://jsonserver.lorranpedrolp6.repl.co/users");
    const professionalsResponse = await fetch("https://jsonserver.lorranpedrolp6.repl.co/professional_profiles");

    if (!usersResponse.ok || !professionalsResponse.ok) {
        throw new Error('Falha ao buscar usuários');
    }

    const users = await usersResponse.json();
    const professionals = await professionalsResponse.json();

    return [...users, ...professionals]; // Combina os dois arrays
}


const form = document.getElementById('addUserForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newUser = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            cPassword: document.getElementById('confirm-password').value,
            tipo: "comum"
        };

        if (newUser.password !== newUser.cPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        addUser(newUser);
    });
}

async function addUser(newUser) {
    try {

        const allUsers = await fetchAllUsers(); // Busca todos os usuários e profissionais
        const emailExists = allUsers.some(user => user.email === newUser.email); // Verifica se o e-mail já existe

        if (emailExists) {
            alert('Este e-mail já está em uso. Por favor, escolha outro e-mail.');
            return; // Não continuar com o cadastro
        }

        
        const response = await fetch("https://jsonserver.lorranpedrolp6.repl.co/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error('Falha ao criar usuário');
        }

        const data = await response.json();

            console.log('Usuário adicionado:', data);
            alert('Usuário adicionado.');
            setTimeout(() => {
                window.location.href = '../html/login.html';
            }, 4000);

    } catch (error) {
        console.error('Erro ao adicionar usuário', error);
        alert('Erro ao adicionar usuário: ' + error.message);

        console.log('Resposta do servidor:', await response.text());
    }
}