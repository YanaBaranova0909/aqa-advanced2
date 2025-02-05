const person = {
    firstName: "Yana",
    lastName: "Baranova",
    age: 31
};

person.email = "yana@gmail.com";

delete person.age;

console.log(person);
