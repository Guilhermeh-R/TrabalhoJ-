document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado && usuarioLogado.tipo === "profissional") {
        alert(`Você já está logado como profissional ${usuarioLogado.nome}`);
        window.location.href = '../index.html';
        return;
    }

    const form = document.getElementById('addUserForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            checkEmailExists(email).then(emailExists => {
                if (emailExists) {
                    alert('Este e-mail já está em uso. Por favor, escolha outro e-mail.');
                } else {
                    registerProfessional();
                }
            }).catch(error => {
                console.error('Erro ao verificar o e-mail:', error);
                alert('Erro ao verificar o e-mail. Por favor, tente novamente.');
            });
        });
    }
});

function registerProfessional() {
    var formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        category: document.getElementById('category').value,
        document: document.getElementById('document').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        description: document.getElementById('description').value,
        image: document.getElementById('image').value,
        main_image: document.getElementById('main_image').value,
        mesage: document.getElementById('message').value,
        mesage2: document.getElementById('message2').value,
        ratings: {"5_stars": 0, "4_stars": 0, "3_stars": 0, "2_stars": 0, "1_stars": 0},
        total_ratings: 0,
        average_rating: 0,
        tipo: "profissional",
        client_count: 0,
        is_partner: false
    };

    fetch('https://jsonserver.lorranpedrolp6.repl.co/professional_profiles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = './busca_profissionais.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

async function checkEmailExists(email) {
    const usersResponse = await fetch('https://jsonserver.lorranpedrolp6.repl.co/users');
    const professionalsResponse = await fetch('https://jsonserver.lorranpedrolp6.repl.co/professional_profiles');

    if (!usersResponse.ok || !professionalsResponse.ok) {
        throw new Error('Falha ao buscar usuários');
    }

    const users = await usersResponse.json();
    const professionals = await professionalsResponse.json();
    const allEmails = [...users, ...professionals].map(user => user.email);

    return allEmails.includes(email);
}
