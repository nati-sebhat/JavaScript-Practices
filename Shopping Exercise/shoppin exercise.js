let region = "East";
let subtotal = 150;
let discount = 0;


if (region === "East") {
    discount = 15;
    console.log("Eligible for regional discount!");
}


let tax = subtotal * 0.08;
let finalTotal = (subtotal + tax) - discount;

console.log("Final Amount: $" + finalTotal);