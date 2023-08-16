//Email Validation based on clicking the notify me button.

const output = document.getElementById('output');
const submitEmail = document.querySelector('button');


submitEmail.addEventListener("click", function (e) {
    e.preventDefault();


    let userEmail = document.getElementById('emailInput').value;
    let regex = new RegExp(/\S+@\S+\.\S+/);
    let isValid = regex.test(userEmail);


    if (isValid) {
        // return true;
        console.log('true')
    } else {
        output.classList.add("invalidEmailMessage")
        emailInput.classList.add("invalidEmail");
        output.innerHTML = "Please provide a valid email address";

    }
})


// Workings that could be further investigated in the future>>>>>BELOW:
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const notifySubmit = document.querySelector('button');

// const input = document.querySelector('.emailAddress');

// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
// const email = document.detElementById(emailAddress);
// const errorMessage = document.createElement('p');

// notifySubmit.addEventListener('submit', function (e) {
//     e.preventDefault();

//     if (input.value.match(regex)) {
//         return (true);
//     } else {
// errorMessage = "Please provide valid email address";
// input.appendChild(errorMessage);
// errorMessage.classList.add('invalidEmail');
//         alert('invalid email');

//     }

// })


// function validateEmail(email) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
//         return (true);
//     } else {
//         errorMessage = "Please provide valid email address";
//         input.appendChild(errorMessage);
//         errorMessage.classList.add('invalidEmail');
//     }
// }