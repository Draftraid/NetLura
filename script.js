// Script para alternar entre modo escuro e claro
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        toggleButton.textContent = currentTheme === 'light-mode' ? '☀️' : '🌙';
    }

    // Adiciona evento de clique ao botão
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('light-mode') ? 'light-mode' : '';
        localStorage.setItem('theme', theme);
        toggleButton.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    });

    // Adiciona evento de clique aos perfis para armazenar o perfil ativo
    const profileLinks = document.querySelectorAll('.profile a');
    profileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const figure = e.currentTarget.querySelector('figure');
            const name = figure.querySelector('figcaption').textContent;
            const imgSrc = figure.querySelector('img').src;
            localStorage.setItem('perfilAtivoNome', name);
            localStorage.setItem('perfilAtivoImagem', imgSrc);
        });
    });
});