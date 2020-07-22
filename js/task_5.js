let countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CNINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
    message = CANCELED_BY_USER;
} else {
    country = countryName[0] + countryName.slice(); // Write code in this line
    switch (country) {
        // Write code under this line

    }
}
if () { // Write code in this line
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'