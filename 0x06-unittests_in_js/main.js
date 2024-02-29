const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils')

console.log(sendPaymentRequestToApi(2, 3.6));
console.log(Utils.calculateNumber('SUM', 2, 3.6));