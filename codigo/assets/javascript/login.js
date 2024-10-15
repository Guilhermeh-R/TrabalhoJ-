document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Buscar logins nos dois JSONs
            const usersFromFirstSource = await fetchUsers("https://jsonserver.lorranpedrolp6.repl.co/users"); // URL do JSON original
            const usersFromSecondSource = await fetchUsers("https://jsonserver.lorranpedrolp6.repl.co/professional_profiles"); // Novo JSON que você forneceu
            const allUsers = [...usersFromFirstSource, ...usersFromSecondSource];
            const user = allUsers.find(user => user.email === email && user.password === password);

            if (user) {
                /*
                alert("Login bem-sucedido");
                */
                console.log('Login bem-sucedido:', user);

                // Salvar as informações de login do usuário no localStorage
                localStorage.setItem('usuarioLogado', JSON.stringify({ nome: user.username, email: user.email, tipo: user.tipo, userId: user.id }));
                
                window.location.href = '../index.html'; // Redirecionar para a página inicial após o login
            } else {
                alert("Login ou senha incorretos");
                /*
                var msg = document.getElementById("retornologin");
                msg.style.display = "";
                */
            }
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            alert("Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.");
        }
    });
});

async function fetchUsers(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Falha ao buscar usuários de ${url}`);
    }
    return response.json();
}
