function Header({titulo}) {
    const header = document.createElement('header')
    header.innerHTML = `
        <div class="logo">
        <img src="./assets/logo.png" alt="">
        </div>
        <div class="titulo">
        <h1>${titulo}</h1>
        </div>
        <div class="menu">
        <ul><li>Inicio</li></ul>
        <ul><li>Sobre Nosotros</li></ul>
        <ul><li>Contacto</li></ul>
        </div>
    `
    return header
}

export default Header