//codigo fornulario efectos 
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () =>{
    wrapper.classList.add('active');
}
loginLink.onclick = () =>{
    wrapper.classList.remove('active');
}

//codigo registro usuarios

const URL = "http://localhost:3000/users";

const btn = document.querySelector("#btnSU");
const userName = document.querySelector("#Username");
const userEmail = document.querySelector("#useremail");
const userPassword = document.querySelector("#userpassword");

btn.addEventListener('click', async function(event) {
    const userData = {
        username: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    userName.textContent = " ";
    userEmail.textContent = " ";
    userPassword.textContent = " ";
});

// Manejar el formulario de inicio de sesión
const btnLogin = document.querySelector("#btnLI");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");

btnLogin.addEventListener('click', () =>{

    fetch(URL)
    .then(response => response.json())
    function login (u){
        if (u.username === loginUsername.value && u.password === loginPassword.value) {
            console.log('Login successful:', user);
            alert('Login successful!');
        }else {
                        console.log('Login failed');
                        alert('Invalid username or password');
                }
    }

});

//Selectores 
const password = document.querySelector('#passwordLogin');
const user = document.querySelector('#nameLogin');
const btnL = document.querySelector('#btnLI'); //Evento del formulario del login

//EVENTOS
btnL.addEventListener('click', async (event) =>{
    event.preventDefault();
    await login()
})


async function login(){
    const response = await fetch(`${URL}?username=${user.value}`)
    const data =  await response.json()
    if (data.length === 0) {
        alert('USUARIO NO ENCONTRADO');
        return;
    }

    if(data[0].password === password.value){
        localStorage.setItem('users', JSON.stringify(data[0]))
        window.location.href = 'usuario.html'
    } else{
        alert('PASSWORD INVÁLIDO');
        return;
    }


}