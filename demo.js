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