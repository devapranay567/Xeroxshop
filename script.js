function calculateEstimatedCost() {
    const pages = document.getElementById('pages').value;
    const color = document.getElementById('color').value;
    const copies = document.getElementById('copies').value;
    const side = document.getElementById('side').value;

    let costPerPage = 0;

    if (color === 'black-and-white') {
        if (pages <= 10) {
            costPerPage = 3;
        } else {
            costPerPage = 2;
        }
    } else if (color === 'color') {
        if (pages <= 10) {
            costPerPage = 10;
        } else {
            costPerPage = 7;
        }
    }

    let totalCost = costPerPage * pages * copies;

    if (side === 'double') {
        totalCost *= 2; // Double sided increases the cost
    }

    return totalCost;
}

function generateQRCode() {
    // Calculate the estimated cost
    const estimatedAmount = calculateEstimatedCost();

    // Display the estimated cost on the page
    document.getElementById("estimatedAmount").innerText = estimatedAmount;

    // Set the image of the UPI QR code
    const qrCodeImage = "C:\Users\devap\Downloads\1737098142490.jpg";  // Replace with your QR code image filename

    // Clear previous QR code (if any)
    const qrCodeContainer = document.getElementById("qr-code");
    qrCodeContainer.innerHTML = "";  // Clear existing content

    // Create an image element
    const qrCodeImageElement = document.createElement("img");
    qrCodeImageElement.src = qrCodeImage;
    qrCodeImageElement.alt = "UPI QR Code";

    // Append the image to the container
    qrCodeContainer.appendChild(qrCodeImageElement);
}
