document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const contaDropdown = document.getElementById('navbarAccountDropdown');
    const botaoSejaProfissional = document.getElementById('navbarSejaProfissional');
    const contaMenu = document.querySelector('.dropdown-menu');
  
    if (usuarioLogado) {
      // Se o usuário estiver logado, mostrar o nome e opções do perfil
      if(usuarioLogado.tipo == "profissional") botaoSejaProfissional.style.display = 'none'
      contaDropdown.textContent = usuarioLogado.nome; // Use o nome de usuário
      contaMenu.innerHTML = `
        <li><a class="dropdown-item" href="html/perfil_usuario.html">Perfil</a></li>
        <li><a class="dropdown-item" href="html/login.html" id="logout">Sair</a></li>
      `;
    } else {
      // Se o usuário NÃO estiver logado, mostrar opção para Entrar
      contaDropdown.textContent = 'Conta';
      contaMenu.innerHTML = `
        <li><a class="dropdown-item" href="html/login.html">Entrar</a></li>
      `;
    }
  
    // Configurar o evento de logout
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '/html/login.html';
      });
    }
  });


document.querySelector('#botaomain').addEventListener('click', function() {
    try {
        const searchTerm = document.querySelector('#maininput').value.trim();

        window.location.href = `./html/busca_profissionais.html?search=${encodeURIComponent(searchTerm)}`;
    } catch (error) {
        console.log(error)
    }

});


document.querySelectorAll('a[data-category]').forEach(function(link) {
    link.addEventListener('click', function(event) {
    try{
        let category = this.dataset.category
      
        const url = `./html/busca_profissionais.html?search=${encodeURIComponent(category)}`;
        window.location.href = url;
    }
        catch(err){
            console.log(err)
        }
       });
});