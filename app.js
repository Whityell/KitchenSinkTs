"use strict";
var userName = 'Whitney';
var numberOfStates = 50;
var sum = 5 + 4;
var display = typeof alert != "undefined" ? alert : console.log;
var sayHello = function () { return display('Hello World!'); };
var checkAge = function (name, age) { return age < 21 ?
    display("Sorry " + name + ", you aren't old enough to view this page!") :
    undefined; };
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var vegetables = ['Carrots', 'Bok Choy', 'Cucumbers', 'Leeks'];
vegetables.forEach(function (vegetable) { return console.log(vegetable); });
var pet = {
    name: "Pepper",
    breed: "YORKIE"
};
var people = [
    { name: 'Whitney', age: 33 },
    { name: 'Stacy', age: 18 },
    { name: 'Britt', age: 19 },
    { name: 'Brandon', age: 18 },
    { name: 'Stella', age: 17 }
];
people.forEach(function (person) { return checkAge(person.name, person.age); });
var getLength = function (text) { return text.length; };
var check = getLength('Hello World!');
console.log(check % 2 == 0 ? 'welcome welcome' : 'go away');
