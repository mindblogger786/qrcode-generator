const qrText = document.getElementById('qrText');
const qrSize = document.getElementById('size');
const qrBody = document.getElementById('qrBody');
const generateQR = document.getElementById('generateQR');
const downloadQR = document.getElementById('downloadQR');

let size = qrSize.value;


generateQR.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});


qrSize.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});


function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Please enter the text or url to generate your QR Code");
}


function generateQRCode() {
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}


downloadQR.addEventListener('click', () => {
    let img = document.getElementById('qrBody img');

    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadQR.setAttribute("href", imgAttr);
    }
    else {
        downloadQR.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});