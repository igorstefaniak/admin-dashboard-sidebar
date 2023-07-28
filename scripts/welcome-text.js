/* const holidays = [
    {
        name: "Nowy Rok",
        date: "01-01",
        greetings: ["Szczęśliwego Nowego Roku"]
    },
    {
        name: "Wielkanoc",
        date: calculateEasterDate(),
        greetings: ["Wesołego Alleluja", "Radosnych Świąt Wielkanocy"]
    },
    {
        name: "Święto Pracy",
        date: "05-01",
    },
    {
        name: "Święto Flagi",
        date: "05-01"
    },
    {
        name: "Święto Konstytucji 3 Maja",
        date: "05-03"
    },
    {
        name: "Boże Ciało",
        date: calculateEasterDate(60)
    },
    {
        name: "Święto Niepodległości",
        date: "11-11"
    },
    {
        name: "Boże Narodzenie",
        date: "12-25"
    }
];

// Funkcja pomocnicza do obliczenia daty Wielkanocy
function calculateEasterDate(offset = 0) {
    const currentYear = new Date().getFullYear();
    const a = currentYear % 19;
    const b = Math.floor(currentYear / 100);
    const c = currentYear % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    const easterDate = new Date(currentYear, month - 1, day);
    easterDate.setDate(easterDate.getDate() + offset);
    return easterDate.toLocaleDateString("pl-PL", { month: "2-digit", day: "2-digit" });
}

// Sprawdzenie, czy jakieś święto wypada dzisiaj
const today = new Date();
const todayFormatted = today.toLocaleDateString("pl-PL", { month: "2-digit", day: "2-digit" });

const isHolidayToday = holidays.some(holiday => holiday.date === todayFormatted);

console.log(holidays);
console.log("Czy jest jakieś święto dzisiaj? " + isHolidayToday); */
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