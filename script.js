function calculateEstimatedCost() {
    const pages = parseInt(document.getElementById('pages').value, 10);
    const color = document.getElementById('color').value;
    const copies = parseInt(document.getElementById('copies').value, 10);
    const side = document.getElementById('side').value;

    let costPerPage = 0;
    const totalPageCount = pages + copies;

    // Determine cost per page based on color and total page count
    if (color === 'black-and-white') {
        if (totalPageCount <= 10) {
            costPerPage = 3;
        } else {
            costPerPage = 2;
        }
    } else if (color === 'color') {
        if (totalPageCount <= 10) {
            costPerPage = 10;
        } else {
            costPerPage = 7;
        }
    }

    // Calculate total cost
    let totalCost = costPerPage * pages * copies;

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
    document.getElementById("estimatedAmount").innerText = `Estimated Cost: ₹${estimatedAmount}`;

    // Set the image of the UPI QR code
    const qrCodeImage = "upi srinu.jpg"; // Replace with your QR code image path

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
