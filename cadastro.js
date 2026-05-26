const email = document.getElementById("email");
const user = document.getElementById("user");
const senha = document.getElementById("senha");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");

const inputemail = email.value.trim();
const inputuser = user.value.trim();
const inputsenha= senha.value.trim();
const inputuser = user.value.trim()
const inputuser = user.value.trim()






const forms = document.getElementById('forms');
forms.addEventListener('submit',(e) =>{
    e.preventDefault();
    validarsenha(verificarErro());
})



function validarsenha() {

    console.log(inputuser)
    
    if (inputsenha == senhapadrao && inputuser == userpadrao) {
        senha.style.borderColor = 'green'
        user.style.borderColor = 'green'
        alert("Certoporra")
    } else {
        senha.style.borderColor = 'red'
        user.style.borderColor = 'red'
        alert("Erroporra")
    }


    function verificarErro() {
        if (inputsenha == senhapadrao && inputuser == userpadrao) {
            senha.style.borderColor = 'green'
            user.style.borderColor = 'green'
        } else {
            senha.style.border = 'red'
            user.style.borderColor = 'red'
        }
    }
}