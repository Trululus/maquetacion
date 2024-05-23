let currentValue = parseFloat(localStorage.getItem('currentValue')) || 0;
const goalValue = 100; 

document.querySelector("#current-value").textContent = currentValue;

function addDonation() {
    const donationAmountInput = document.getElementById('donation-amount');
    const donationAmount = parseFloat(donationAmountInput.value);
    const nombreInput = document.getElementById('username');

  

    if ( donationAmount > 0) {
        currentValue += donationAmount;

        document.querySelector("#current-value").textContent = currentValue;

        localStorage.setItem('currentValue', currentValue, nombreInput.value);

        donationAmountInput.value = '';
        nombreInput.value = '';
        alert("Donacion exitosa")

    }else {
        alert("Por favor, ingresa un valor válido para la donación.");
    }
}



 