document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    const botaoPresenca = document.getElementById('confirmar-presenca');

    if (botaoPresenca) {

        if (localStorage.getItem('presencaConfirmada') === 'sim') {
            botaoPresenca.innerHTML = 'Presença Confirmada ✔';
            botaoPresenca.style.pointerEvents = 'none';
        }

        botaoPresenca.addEventListener('click', function (event) {
            event.preventDefault();

            localStorage.setItem('presencaConfirmada', 'sim');

            botaoPresenca.innerHTML = 'Presença Confirmada ✔';
            botaoPresenca.style.pointerEvents = 'none';

            alert('Presença confirmada com sucesso! 🎉');
        });
    }

    const dataDoEvento = new Date("Nov 29, 2026 20:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(function () {

        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const diaEmMS = 1000 * 60 * 60 * 24;
        const horaEmMS = 1000 * 60 * 60;
        const minutoEmMS = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000);

        const contador = document.getElementById('contador');

        if (contador) {
            contador.innerHTML =
                `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
        }

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            if (contador) contador.innerHTML = 'Evento expirado';
        }
    }, 1000);
});