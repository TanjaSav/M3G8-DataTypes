"use strict";
var _a;
// Create a container for output
const container = document.createElement("div");
container.id = "contact-container";
document.body.appendChild(container);
// Helper function to append text to container
function appendMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    container.appendChild(p);
}
let contactList = [
    {
        name: "Alice Johnson",
        age: 28,
        email: "alice@example.com",
        isBobSmith: false,
    },
    {
        name: "Bob Smith",
        age: 35,
        email: "bob@example.com",
        isBobSmith: true,
    },
    {
        name: "Charlie Rose",
        age: 42,
        email: "charlie@example.com",
        isBobSmith: false,
    },
];
// Output one of the items
appendMessage(`First contact: ${contactList[0].name}, Age: ${contactList[0].age}, email: ${contactList[0].email}, isBobSmith: ${contactList[0].isBobSmith}`);
// Output the number of items (contacts) in the array (using the length property)
appendMessage(`Total number of contacts: ${contactList.length}`);
// Create a new contact object
let newContact = {
    name: "Diana Prince",
    age: 30,
    email: "diana@example.com",
    isBobSmith: false,
};
// Add the new contact to the array
contactList.push(newContact);
// Output new contact object
appendMessage(`New contact: ${newContact.name}, Age: ${newContact.age}, Email: ${newContact.email}, isBobSmith: ${newContact.isBobSmith}`);
// Add a new property to the object
newContact.city = "London";
// Output new contact object with new property
appendMessage(`New contact with new property: ${newContact.name}, Age: ${newContact.age}, Email: ${newContact.email}, isBobSmith: ${newContact.isBobSmith}, City: ${newContact.city}`);
// Display the name and age of the first contact
// Remove a property from the object
delete newContact.email;
// Output the updated new contact without the email property
appendMessage(`New contact with deleted property: ${newContact.name}, Age: ${newContact.age}, Email: ${(_a = newContact.email) !== null && _a !== void 0 ? _a : "deleted"}, isBobSmith: ${newContact.isBobSmith}, City: ${newContact.city}`);
// Output the sum of the ages of the first two contacts
let sum = contactList[0].age + contactList[1].age;
appendMessage(`Sum of ages of first two contacts: ${sum}`);
// Display current date and time
appendMessage(`Current Date & Time: ${new Date().toLocaleString()}`);
// Get a random index from 0 to array length - 1
const randomIndex = Math.floor(Math.random() * contactList.length);
// Extract a random contact
const randomContact = contactList[randomIndex];
// Display the name
appendMessage(`Random name using the Math.random() method: ${randomContact.name}`);
