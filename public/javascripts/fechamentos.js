const form = document.querySelector("form");
const tecnicoId = document.getElementById("tecnico_id");
const numeroTicket = document.getElementById("numero_ticket");
const solucaoId = document.getElementById("solucao_id");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (checkId() === 'success' && 
        checkNumeroTicket() === 'success' &&
        checkSolucaoId() === 'success') {
            
            let tecnico = await fetch(`http://localhost:3000/tecnicos/${tecnicoId.value}`);
            tecnico = await tecnico.json()
            
            if (!tecnico) {
                setErrorFor(tecnicoId, 'O identificador não foi cadastrado', 'control')
                return;
            }
            
            let fechamentos = await fetch(`http://localhost:3000/fechamentos/${numeroTicket.value}`);
            fechamentos = await fechamentos.json();
            
            for (let fechamento of fechamentos) {
                if (fechamento.status === 'Aguardando') {
                    setErrorFor(numeroTicket, 'Este ticket já está na fila, aguarde', 'control');
                    return;
                } else if (fechamento.status === 'Validado') {
                    setErrorFor(numeroTicket, 'Este ticket já foi cadastrado e validado', 'control');
                    return;
                }
            }
            
            form.submit();

    }
});

tecnicoId.addEventListener('keyup', checkId);
numeroTicket.addEventListener('keyup', checkNumeroTicket);
solucaoId.addEventListener('change', checkSolucaoId);

function checkId() {
    const tecnicoIdValue = tecnicoId.value.trim();

    if (tecnicoIdValue === '') {
        setErrorFor(tecnicoId, 'O ID não pode ser vazio', 'control');
    } else if (!isNumber(tecnicoIdValue)) {
        setErrorFor(tecnicoId, 'O ID contém apenas números', 'control');
    } else if (charactersQuantity(tecnicoIdValue, 3, 1)) {
        setErrorFor(tecnicoId, 'O ID contém de 1 a 3 dígitos', 'control');
    } else {
        setSuccessFor(tecnicoId, 'control');
        return 'success';
    }
}

function checkNumeroTicket() {
    const numeroTicketValue = numeroTicket.value.trim();

    if (numeroTicketValue === '') {
        setErrorFor(numeroTicket, 'O número não pode ser vazio', 'control')
    } else if (!isNumber(numeroTicketValue)) {
        setErrorFor(numeroTicket, 'Deve conter apenas números', 'control');
    } else if (charactersQuantity(numeroTicketValue, 8)) {
        setErrorFor(numeroTicket, 'O número contém 8 dígitos', 'control');
    } else {
        setSuccessFor(numeroTicket, 'control');
        return 'success';
    }
}

function checkSolucaoId() {
    const solucaoIdValue = solucaoId.value;
    
    if (solucaoIdValue == '0') {
        setErrorFor(solucaoId, 'Solução inválida', 'select');
    } else {
        setSuccessFor(solucaoId, 'select');
        return 'success';
    }
}

function setErrorFor(input, message, type) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText = message;
    
    formControl.className = `form-${type} error`;
}

function setSuccessFor(input, type) {
    const formControl = input.parentElement;
    formControl.className = `form-${type} success`;
}

function isNumber(number) {
    return /^[0-9]+$/.test(number);
}

function charactersQuantity(number, max, min) {
    let regex;
    min ? regex = new RegExp(`^\\d{${min},${max}}$`) : regex = new RegExp(`^\\d{${max}}$`);
    return !regex.test(number);
}