const car1 = {
    brand: "Audi",
    model: "Q7",
    year: 2010
};

const car2 = {
    brand: "Jaguar",
    model: "Type 00",
    owner: "Yana Baranova"
};

const car3 = { ...car1, ...car2 };

console.log(car3);