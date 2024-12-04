function carregar() {
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('manha');
    setInterval(() => {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    var horaFormatada = hora < 10 ? "0" + hora : hora;
    var minutoFormatado = minuto < 10 ? "0" + minuto : minuto;
    var segundoFormatado = segundo < 10 ? "0" + segundo : segundo;

    msg.innerHTML = `Agora são ${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
   
    if (hora >= 6 && hora < 12) {
        foto.src = "manhã.jpg";
        document.body.style.background = '#91b6ab'
    } else if (hora >= 12 && hora < 18) {
        foto.src = "tarde.jpg";
        document.body.style.background = '#d1a683'
    } else {
        foto.src = "noite.jpg";
        document.body.style.background = '#384569'
    }
}, 1000);
}