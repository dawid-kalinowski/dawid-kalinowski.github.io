var targetDate1 = new Date("February 17, 2025 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = targetDate1 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown1").innerHTML = "Czas, żeby znaleźć robotę: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown1").innerHTML = "Czas minął!";
    }
}, 1000);

var targetDate2 = new Date("February 16, 2026 00:00:00").getTime();

var y = setInterval(function () {

    var now = new Date().getTime();

    var distance = targetDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown2").innerHTML = "Czas, żeby JJ znalazł robotę: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(y);
        document.getElementById("countdown2").innerHTML = "Czas minął!";
    }
}, 1000);