const czasDo = new Date("2024-03-29T12:18:00");

function aktualizujOdliczanie() {
    const teraz = new Date();
    const roznica = teraz - czasDo;

    const dni = Math.floor(roznica / (1000 * 60 * 60 * 24));
    const godziny = Math.floor((roznica % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuty = Math.floor((roznica % (1000 * 60 * 60)) / (1000 * 60));
    const sekundy = Math.floor((roznica % (1000 * 60)) / 1000);

    document.getElementById("dni").textContent = dni.toString().padStart(2, "0");
    document.getElementById("godziny").textContent = godziny.toString().padStart(2, "0");
    document.getElementById("minuty").textContent = minuty.toString().padStart(2, "0");
    document.getElementById("sekundy").textContent = sekundy.toString().padStart(2, "0");
}

const odliczanieInterwal = setInterval(aktualizujOdliczanie, 1000);

aktualizujOdliczanie();
