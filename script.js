function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora estamos em torno das ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        window.document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'; // Suponhamos que essa imagem é para a tarde
        window.document.body.style.background = '#b9846f';
    } else {
        img.src = 'noite.jpg'; // Suponhamos que essa imagem é para a noite
        window.document.body.style.background = '#515154';
    }
}




