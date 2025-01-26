function calculatePrice() {
    const pages = parseInt(document.getElementById('pages').value);
    const copies = parseInt(document.getElementById('copies').value);
    const color = document.getElementById('color').value;

    let pricePerPage = 0;
    if (pages <= 10) {
        if (color === 'color') {
            pricePerPage = 10;
        } else {
            pricePerPage = 3;
        }
    } else {
        if (color === 'color') {
            pricePerPage = 7;
        } else {
            pricePerPage = 3;
        }
    }

    const totalPrice = pricePerPage * pages * copies;
    
    document.getElementById('price-estimation').innerHTML = `Estimated Price: ₹${totalPrice}`;
}

function generateQRCode() {
    const estimatedAmount = document.getElementById('price-estimation').textContent;
    if (estimatedAmount === "") {
        alert("Please calculate the price first.");
        return;
    }

    const paymentLink = `https://pay.example.com/${estimatedAmount.split('₹')[1].trim()}`; // Example URL for the payment link

    // Generate the QR code for the payment link
    new QRCode(document.getElementById("qr-code"), {
        text: paymentLink,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
