import moment from 'moment';
import { FORMATT_DATE, CATEGORY } from '../constant';

/**
 * @function convertDateToFormatt
 * @param Date date
 * @input new Date() => Wed Apr 21 2021 10:44:33 GMT-0300 (hora estándar de Argentina)
 * @return DD/MM/YYYY hh:mm A
 */
export const convertDateToFormatt = date => {
  try {
    var formatted = moment(date).format(FORMATT_DATE.dateHumanHourMinuteAMPM);
    return formatted;
  }catch(e) {
    console.log("Ocurrio un error al convertir la fecha")
  }
}

/**
 * @function filterCategory
 * @param val int
 * @input 1 || 2
 * @return 'Freelance'
 */
export const filterCategory = val => {
  let label = CATEGORY.filter(item => {
    if(parseInt(item.id) === parseInt(val)) {
      return item;
    }
  })[0];

  return label.label;
}

/**
 * @function formatMoney
 * @param amount, decimalCount = 2, decimal = ',', thousands = '.'
 * @input 200 || 20.12 || -600
 * @return 200.00
 */
export const formatMoney = (amount, decimalCount = 2, decimal = ',', thousands = '.') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};

/**
 * @function sumAmmount
 * @param balance
 * @input [{ammount: 200, ....}]
 * @return 1025
 */
export const sumAmmount = (balance) => {
  const total = balance.reduce(
    (r, e) => {
      return parseInt(r) + parseInt(e.ammount)
    },
    0
  );
  return total;
}