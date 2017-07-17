//alert("hello");
console.log("hello");
var x = 2;
console.log(x);
x = "Dharshini";
console.log(x);
x = false;
console.log(x);

function calculateSalesTax(price) {
    var taxRate = (7.5 / 100);
    return price * taxRate;
}



var taxRate = calculateSalesTax(100);

var taxRate2 = calculateSalesTax(150);

console.log(taxRate2);

console.log(taxRate);


{
    var myHouse = new Object();
    myHouse.make = 'Providence';
    myHouse.place = 'Morrisville';
    myHouse.year = 2008;
}

console.log(myHouse.make)


function convertDollarsToRupees(dollars) {
    var rateOfChange = 64.45;
    var v1 = dollars * rateOfChange;
    return v1.toFixed(2);
}

var endPrice = convertDollarsToRupees(98.99)
console.log(endPrice)

var endPrice2 = convertDollarsToRupees(.02)
console.log(endPrice2)

function getFullName(FN, LN) {
    return FN + " " + LN
}

var fullname1 = getFullName("John", "Doe");

console.log(fullname1)

function calculateBMI(weight, height) {
    var answer = (weight / (height * height)) * 703;
    return answer.toFixed(1)
}

var BMI = calculateBMI("175", "68");

console.log("BMI " + BMI);

function convertCelsiusToFahrenheit(celsius) {
var fahrenheit = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + fahrenheit + '°F');
}

var fahrenheit = convertCelsiusToFahrenheit(32)
