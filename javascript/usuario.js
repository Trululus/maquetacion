
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('users'));

    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Actualizamos el nombre del usuario
    const nombreUsuarioElement = document.querySelector('.nombre');
    nombreUsuarioElement.textContent = user.username;

    // Actualizamos la cantidad donada
    const cantidadDonadaElement = document.querySelector('.cantidad_donada button');
    cantidadDonadaElement.textContent = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(user.amountDonated || 0);
});




