function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){

        img.setAttribute('src', './assets/avatar-light.png')

    } else{
        img.setAttribute('src', './assets/Avatar.png' )
    }
}

// Ajusta a imagem ao carregar a página conforme o modo atual
window.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        img.setAttribute('src', './assets/Avatar.png');
    }
});