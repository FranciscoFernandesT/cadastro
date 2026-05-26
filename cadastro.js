//Variaveis html//

const email = document.getElementById("email");
const user = document.getElementById("user");
const senha = document.getElementById("senha");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");

//regex//

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexUser = /^[a-zA-Z0-9_-]{3,16}$/;
const regexSenha = /^.{6,}$/;
const regexCpf = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
const regexTelefone = /^(?:\(?\d{2}\)?\s?)?(?:9\d{4}-\d{4}|\d{4}-\d{4}|\d{10,11})$/;

//submit//

const forms = document.getElementById('forms');
forms.addEventListener('submit',(e) =>{
    e.preventDefault();
    validarRegEx();
})

//validacao//

function validarRegEx() {
    const inputemail = email.value.trim();
    const inputuser = user.value.trim();
    const inputsenha = senha.value.trim();
    const inputcpf = cpf.value.trim();
    const inputtelefone = telefone.value.trim();

    let valid = 0;

    if (regexEmail.test(inputemail)) {
        email.style.borderColor = "green";
        valid++;
    } else {
        email.style.borderColor = 'red';
    }

    if (regexUser.test(inputuser)) {
        user.style.borderColor = "green";
        valid++;
    } else {
        user.style.borderColor = 'red';
    }

    if (regexSenha.test(inputsenha)) {
        senha.style.borderColor = "green";
        valid++;
    } else {
        senha.style.borderColor = 'red';
    }

    if (regexCpf.test(inputcpf)) {
        cpf.style.borderColor = "green";
        valid++; 
    } else {
        cpf.style.borderColor = 'red';
    }

    if (regexTelefone.test(inputtelefone)) {
        telefone.style.borderColor = "green";
        valid++;
    } else {
        telefone.style.borderColor = 'red';
    }

    if (valid === 5) {
        alert('Cadastro Concluido.');
    } else {
        alert('Dados incorretos.')
    }

}