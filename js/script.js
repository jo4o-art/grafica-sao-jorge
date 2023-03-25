function clikmenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
        itens.style.background = 'none'
    } else {
        itens.style.display = 'block'
        itens.style.background = '#00000085'
    }
}

function tamanho() {
    if (innerWidth >= 768) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
        itens.style.background = 'none'
    }
}