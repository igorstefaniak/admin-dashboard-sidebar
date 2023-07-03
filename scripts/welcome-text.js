/* 
const personnel_list = {
    01.02.2023 : {
        rank : "Właściciel",
        phone : "213769420",
        skype : "mydełkofa",
        email : "gmail.pl",
        discord : "mi",
        youtube : "asqw"
    },
    "Notch" : {
      rank : "Administrator",

    },
};
 */
/* 

var welcome_text_main = []

const d = new Date();

var currentDay = d.getDate();
var currentMonth = d.getMonth() + 1;

if (currentMonth == 12 && (currentDay >= 1 && currentDay <= 26)) {
    welcome_text_main.push("Wesołych Świąt", "Radosnych Świąt Bożego Narodzenia")
}

if (currentMonth == 12 && (currentDay >= 28 && currentDay <= 31)) {
    welcome_text_main.push("Szczęśliwego Nowego Roku")
}

switch (true) {
    case d.getHours() >= 5 && d.getHours() <= 10:
        welcome_text_main.push("Dzień dobry", "Miłego dnia", "Miłego poranka")
        break;
    case d.getHours() >= 19 && d.getHours() <= 23:
        welcome_text_main.push("Dobry wieczór", "Dobrej nocy", "Dobranoc")
        break;
    default:
        welcome_text_main.push("Cześć", "Witaj ponownie", "Witaj")
        break;
} */

/* const welcome_text = ["Cześć,", "Witaj ponownie,", "Witaj w Panelu Administracyjnym,"];
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
} */