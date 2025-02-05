const users = [
  { name: "Yana", email: "yana@gmail.com", age: 31 },
  { name: "Svitlana", email: "svitlana@gmail.com", age: 54 },
  { name: "Oleksandr", email: "oleksandr@gmail.com", age: 35 }
];

for (const { name, email, age } of users) {
    console.log(`name: ${name}, email: ${email}, age: ${age}`);
}