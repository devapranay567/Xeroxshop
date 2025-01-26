// Get the elements from the page
const colorSelect = document.getElementById("color");
const sidesSelect = document.getElementById("sides");
const copiesInput = document.getElementById("copies");
const costDisplay = document.getElementById("cost");

// Prices (example)
const colorPrice = 5;  // per copy
const bwPrice = 2;     // per copy
const oneSidedPrice = 1;  // per copy
const twoSidedPrice = 1.5; // per copy

// Function to calculate the cost
function calculateCost() {
    let colorCost = colorSelect.value === "color" ? colorPrice : bwPrice;
    let sidesCost = sidesSelect.value === "one" ? oneSidedPrice : twoSidedPrice;
    let copies = copiesInput.value;

    // Calculate the total cost
    let totalCost = colorCost * sidesCost * copies;
    costDisplay.textContent = totalCost.toFixed(2);
}

// Event listeners to recalculate cost whenever options change
colorSelect.addEventListener("change", calculateCost);
sidesSelect.addEventListener("change", calculateCost);
copiesInput.addEventListener("input", calculateCost);

// Initial cost calculation
calculateCost();
