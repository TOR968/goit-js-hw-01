let countryName = null;

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
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code in this line
  switch (country) {
    case CNINA:
      price = 100;
      break;

    case AUSTRALIA:
      price = 170;
      break;

    case INDIA:
      price = 80;
      break;

    case JAMAICA:
      price = 120;
      break;

    default:
      console.log(NO_DELIVERY);
  }
}
if (countryName === CNINA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (countryName === AUSTRALIA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (countryName === INDIA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (countryName === JAMAICA) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
