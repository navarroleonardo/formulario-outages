const form = document.querySelector("form");
const tecnicoId = document.getElementById("tecnico_id");
const numeroTicket = document.getElementById("numero_ticket");
const previsao = document.getElementById("previsao");
const contato = document.getElementById("contato");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (checkId() === 'success' && 
        checkNumeroTicket() === 'success' &&
        checkPrevisao() === 'success' &&
        checkContato() === 'success') {
            
            let tecnico = await fetch(`http://localhost:3000/tecnicos/${tecnicoId.value}`);
            tecnico = await tecnico.json()
            
            if (!tecnico) {
                setErrorFor(tecnicoId, 'O identificador não foi cadastrado');
                return;
            }
            
            let alteracao = await fetch(`http://localhost:3000/alteracoes/${numeroTicket.value}`);
            alteracao = await alteracao.json();
            
            if (alteracao.status === 'Aguardando') {
                setErrorFor(numeroTicket, 'Este ticket já está na fila, aguarde', 'control');
                return;
            } else if (alteracao.status === 'Alterado') {
                setErrorFor(numeroTicket, 'Este ticket já foi alterado', 'control');
                return;
            }
            
            form.submit();

    }
})

tecnicoId.addEventListener('keyup', checkId);
numeroTicket.addEventListener('keyup', checkNumeroTicket);
previsao.addEventListener('change', checkPrevisao);
contato.addEventListener('keyup', checkContato);


function checkId() {
    const tecnicoIdValue = tecnicoId.value.trim();

    if (tecnicoIdValue === '') {
        setErrorFor(tecnicoId, 'O ID não pode ser vazio');
    } else if (!isNumber(tecnicoIdValue)) {
        setErrorFor(tecnicoId, 'O ID contém apenas números');
    } else if (charactersQuantity(tecnicoIdValue, 3, 1)) {
        setErrorFor(tecnicoId, 'O ID contém de 1 a 3 dígitos');
    } else {
        setSuccessFor(tecnicoId);
        return 'success';
    }
}

function checkNumeroTicket() {
    const numeroTicketValue = numeroTicket.value.trim();

    if (numeroTicketValue === '') {
        setErrorFor(numeroTicket, 'O número não pode ser vazio')
    } else if (!isNumber(numeroTicketValue)) {
        setErrorFor(numeroTicket, 'Deve conter apenas números');
    } else if (charactersQuantity(numeroTicketValue, 8)) {
        setErrorFor(numeroTicket, 'O número contém 8 dígitos');
    } else {
        setSuccessFor(numeroTicket);
        return 'success';
    }
}

function checkPrevisao() {
    const previsaoValue = previsao.value.trim();
    
    if (!isFuture(previsaoValue)) {
        setErrorFor(previsao, 'A data de previsão deve ser futura');
    } else {
        setSuccessFor(previsao);
        return 'success';
    }
}

function checkContato() {
    const contatoValue = contato.value.trim();
    
    if (contatoValue === '') {
        setErrorFor(contato, 'Os dados não podem estar vazios');
    } else {
        setSuccessFor(contato);
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

function isNumber(number) {
    return /^[0-9]+$/.test(number);
}

function charactersQuantity(number, max, min) {
    let regex;
    min ? regex = new RegExp(`^\\d{${min},${max}}$`) : regex = new RegExp(`^\\d{${max}}$`);
    return !regex.test(number);
}

function isFuture(date) {
    return new Date(date) > new Date;
}