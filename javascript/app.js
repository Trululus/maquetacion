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
    // .then(users (u) => {
    //     if (u.username === loginUsername.value && u.password === loginPassword.value) {
    //         console.log('Login successful:', user);
    //         alert('Login successful!');
    //     } else {
    //             console.log('Login failed');
    //             alert('Invalid username or password');
    //     }
    // })

});