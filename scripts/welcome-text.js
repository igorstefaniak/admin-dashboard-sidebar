const welcome_text = ["Cześć,", "Witaj ponownie,", "Witaj w Panelu Administracyjnym,"];
const welcome_text_evening = ["Dobry wieczór,", "Dobrej nocy,", "Dobranoc,"];
const welcome_text_morning = ["Dzień dobry,", "Miłego dnia,", "Miłego poranka,"];
let hellotext = document.getElementById('hello-text');
let usertext = document.getElementById('user-text');

const d = new Date();

const user = " Igor";

switch (true) {
    case d.getHours() >= 5 && d.getHours() <= 10:
        var randomNumber = Math.floor(Math.random() * welcome_text_morning.length);
        hellotext.innerHTML = welcome_text_morning[randomNumber];
        usertext.innerHTML = user + " 🌅";
        break;
    case d.getHours() >= 20 && d.getHours() <= 23:
        var randomNumber = Math.floor(Math.random() * welcome_text_evening.length);
        hellotext.innerHTML = welcome_text_evening[randomNumber];
        usertext.innerHTML = user + " 🌙";
        break;
    default:
        var randomNumber = Math.floor(Math.random() * welcome_text.length);
        hellotext.innerHTML = welcome_text[randomNumber];
        usertext.innerHTML = user + " 👋";
        break;
}