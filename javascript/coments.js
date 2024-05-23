//codigo sugerencias

const URL = "http://localhost:3000/coment";

const btnComents = document.querySelector('.coment-suggestions');
const inputSuggestions = document.querySelector(".input-suggestions");

btnComents.addEventListener('click', async function (event) {

    btnComents.addEventListener('click', async function (event) {
        event.preventDefault(); 

        const comentsData = {
            coment: inputSuggestions.value
        };

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comentsData)
        });

        inputSuggestions.value = ''; 
    });
})