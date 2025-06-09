
// Função para obter a localização do usuário:
function obterLocalizacao() {
    if (navigator.geolocation) {
        // Se a API de Geolocalização estiver disponível:
        navigator.geolocation.getCurrentPosition(mostrarPosicao, mostrarErro);
    } else {
        // Se o navegador não suportar a API de geolocalização:
        document.getElementById("localizacao").innerHTML = "GeoLocation não é suportado neste navegador.";
    }
}

// Função para exibir a localização:
function mostrarPosicao(posicao) {
    var latitude = posicao.coords.latitude;
    var longitude = posicao.coords.longitude;
    document.getElementById("localizacao").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

// Função para exibir erro se não for possível obter a localização:
function mostrarErro(erro) {
    switch (erro.code) {
        case erro.PERMISSION_DENIED:
            document.getElementById("localizacao").innerHTML = "O usuário não permitiu a geolocalização.";
            break;
        case erro.POSITION_UNAVAILABLE:
            document.getElementById("localizacao").innerHTML = "Informações de localização não disponíveis.";
            break;
        case erro.TIMEOUT:
            document.getElementById("localizacao").innerHTML = "O tempo para obter a localização expirou.";
            break;
        default:
            document.getElementById("localizacao").innerHTML = "Erro desconhecido.";
            break;
    }
}