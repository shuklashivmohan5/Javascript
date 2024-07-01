// Get the number of units from the user
let units = prompt("Enter the number of electricity units: ") ;

// Initialize the total bill
let totalBill = 0.0;

// Calculate the bill
if (units <= 50) {
  totalBill = units * 0.50;
} else if (units <= 150) {
  totalBill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 250) {
  totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
  totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

// Add a 20% surcharge to the bill
totalBill *= 1.20;

// Print the total bill
alert("The total electricity bill is: Rs. " + totalBill.toFixed(2));