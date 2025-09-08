// Conditional Statements
let age = 20;
document.getElementById("ageCheck").textContent =
    age >= 18 ? "You are an adult." : "You are a minor.";

// Functions
function calculateRectangleArea(width, height) {
    return width * height;
}
document.getElementById("rectangleArea").textContent =
    "Rectangle Area (5x10): " + calculateRectangleArea(5, 10);

function greet(name) {
    return "Hello, " + name + "!";
}
document.getElementById("greeting").textContent = greet("Tilent");

// Loops
let forOutput = "";
for (let i = 1; i <= 5; i++) {
    forOutput += i + " ";
}
document.getElementById("forLoop").textContent = forOutput;

let whileOutput = "";
let i = 5;
while (i > 0) {
    whileOutput += i + " ";
    i--;
}
document.getElementById("whileLoop").textContent = whileOutput;

// DOM Manipulation
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("textChange").textContent =
        "The text has been changed!";
});

document.getElementById("toggleColorBtn").addEventListener("click", () => {
    let colorText = document.getElementById("colorText");
    colorText.style.color = colorText.style.color === "red" ? "black" : "red";
});

// Dynamic Content
document.getElementById("addItemBtn").addEventListener("click", () => {
    let newItemText = document.getElementById("newItem").value;
    if (newItemText.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = newItemText;
        document.getElementById("itemList").appendChild(li);
        document.getElementById("newItem").value = "";
    }
});
