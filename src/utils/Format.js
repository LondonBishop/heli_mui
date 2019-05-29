import moment from 'moment';
import format from 'accounting-js';

export default class Format {

  static formatDateExtra(date) {
    if (date && typeof date == "string") {
      return moment(date).fromNow();
    } else {
      return "A long time ago..."
    }
  }

  static formatDate(date) {
    if (date && typeof date == "string") {
      return moment(date).format('DD/MM/YYYY');
    } else {
      return null;
    }
  }

  static formatMoneyNoSymbol(number) {
    const params = { symbol: "", precision: 2, thousand: ",", decimal: "." }
    return format.formatMoney(number, params);
  }

  static formatMoneys(moneyInteger) {
    const params = { symbol: "£", precision: 2, thousand: ",", decimal: "." }
    return format.formatMoney(moneyInteger, params);
  }

}