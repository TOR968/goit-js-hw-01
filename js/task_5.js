const countryName = 'Китdada';

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
    // Write code under this line
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
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  // Write code in this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
