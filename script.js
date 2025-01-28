function calculateEstimatedCost() {
    const pages = parseInt(document.getElementById('pages').value, 10);
    const color = document.getElementById('color').value;
    const copies = parseInt(document.getElementById('copies').value, 10);
    const side = document.getElementById('side').value;

    let costPerPage = 0;
    const totalPageCount = pages * copies; // Calculate the total number of pages across all copies

    // Determine cost per page based on color and total page count
    if (color === 'black-and-white') {
        costPerPage = totalPageCount < 10 ? 3 : 2.5;
    } else if (color === 'color') {
        costPerPage = totalPageCount < 10 ? 10 : 7;
    }

    // Calculate total cost
    let totalCost = costPerPage * totalPageCount;

    // Adjust for double-sided printing
    if (side === 'double') {
        totalCost *= 2;
    }

    return totalCost;
}

function generateQRCode() {
    // Calculate the estimated cost
    const estimatedAmount = calculateEstimatedCost();

    // Display the estimated cost on the page
    document.getElementById("estimatedAmount").innerText = `Estimated Cost: ₹${estimatedAmount.toFixed(2)}`;

    // Set the image of the UPI QR code
    const qrCodeImage = "upi_srinu.jpg"; // Update with the correct path

    // Clear previous QR code (if any)
    const qrCodeContainer = document.getElementById("qr-code");
    qrCodeContainer.innerHTML = ""; // Clear existing content

    // Create an image element
    const qrCodeImageElement = document.createElement("img");
    qrCodeImageElement.src = qrCodeImage;
    qrCodeImageElement.alt = "UPI QR Code";
    qrCodeImageElement.style.width = "200px"; // Set desired size
    qrCodeImageElement.style.height = "200px";

    // Append the image to the container
    qrCodeContainer.appendChild(qrCodeImageElement);
}
