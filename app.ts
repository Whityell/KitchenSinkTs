const userName = 'Whitney';
const numberOfStates = 50;
const sum = 5 + 4;
const display = typeof alert != "undefined" ? alert : console.log;
const sayHello = () => display('Hello World!');
const checkAge = (name: string, age: number) => age < 21 ?
    display("Sorry " + name + ", you aren't old enough to view this page!") :
    undefined;
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
const vegetables = ['Carrots', 'Bok Choy', 'Cucumbers', 'Leeks'];
vegetables.forEach(vegetable => console.log(vegetable));
const pet = {
    name: "Rosie",
    breed: "yorkie"
};
const people = [
    { name: 'Whitney', age: 33 },
    { name: 'Stacy', age: 18 },
    { name: 'Britt', age: 19 },
    { name: 'Brandon', age: 18 },
    { name: 'Stella', age: 17 }
];
people.forEach(person => checkAge(person.name, person.age));
const getLength = (text: string) => text.length;
const check = getLength('Hello World!');
console.log(check % 2 == 0 ? 'Welcome Welcome' : 'bye bye');