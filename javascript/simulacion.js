let currentValue = 0;
const goalValue = 100; 

function addDonation() {
    const donationAmountInput = document.getElementById('donation-amount');
    const donationAmount = parseFloat(donationAmountInput.value);
    const nombreInput = document.getElementById('username');

    if (!isNaN(donationAmount) && donationAmount > 0) {
        currentValue += donationAmount;

        document.querySelector("#current-value").textContent = currentValue;

         donationAmountInput.value = '';
         nombreInput.value = '';
    } else {
        alert("Por favor, ingresa un valor válido para la donación.");
    }
}


 