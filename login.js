

function Logar(){
    const email = document.querySelector(".email1").value;
    const senha = document.querySelector(".senha1").value;


    if(email == "del@gmail" && senha == "del1234"){
        console.log("sucesso ao entrar");
        alert("você conseguiu acessar a conta!")
        location.href = "conta.html";
    }else{
        console.log('falha ao entrar na aplicação!');
        alert("falha ao entrar na aplicação, por favor tente novamente ou volte mais tarde.")
    }
}