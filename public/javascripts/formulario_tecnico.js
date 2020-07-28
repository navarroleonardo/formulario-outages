const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkName() === 'success' && checkEmail() === 'success') {
        form.submit();
    }
})

nome.addEventListener('keyup', checkName);

email.addEventListener('keyup', checkEmail);

function checkName() {
    const nomeValue = nome.value.trim();

    if (nomeValue === '') {
        setErrorFor(nome, 'O nome não pode ser vazio');
    } else if (nomeValue.split(' ').length <= 1) {
        setErrorFor(nome, 'Insira o seu nome completo');
    } else if (hasSpecialCharacters(nomeValue)) {
        setErrorFor(nome, 'Apenas letras são válidas');
    } else {
        setSuccessFor(nome);
        return 'success';
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    
    if (emailValue === '') {
        setErrorFor(email, 'O e-mail não pode ser vazio');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'O e-mail é inválido')
    } else {
        setSuccessFor(email);
        return 'success';
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText = message;
    
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function hasSpecialCharacters(nome) {
     return !/[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(nome);
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
}