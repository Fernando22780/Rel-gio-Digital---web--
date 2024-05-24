function mostrarHora() {
    let dia = new Date();
    let hora = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();
    let diaSemana = dia.toLocaleDateString('pt-BR', { weekday: 'long' });
    let diaMes = dia.getDate();
    let mes = dia.toLocaleDateString('pt-BR', { month: 'long' });
    let ano = dia.getFullYear();

    hora = addZero(hora);
    minutos = addZero(minutos);
    segundos = addZero(segundos);

    let formatoHora = hora >= 12 ? "PM" : "AM";
    hora = hora % 24 || 12; 
    formatoHora = formatoHora;

    let horaFormatada = `${hora}:${minutos}:${segundos} ${formatoHora}`;
    let dataFormatada = `${diaSemana}, ${diaMes} de ${mes} de ${ano}`;

    document.getElementById('clock').innerHTML = `${horaFormatada}<br>${dataFormatada}`;
}

function addZero(time) {
    return time < 10 ? "0" + time : time;
}

mostrarHora();
setInterval(mostrarHora, 1000);
