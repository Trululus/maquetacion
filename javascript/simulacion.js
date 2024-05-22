let currentValue = 0;
const goalValue = 100; // Meta monetaria

function addMoney() {
    // Simulamos agregar una cantidad aleatoria de dinero
    const addedValue = Math.floor(Math.random() * 20) + 1;
    currentValue += addedValue;
    
    // Actualizamos el contenido del elemento en el DOM
    document.querySelector("#current-value").textContent = currentValue;
    
}



 