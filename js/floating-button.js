// floating-button.js
document.addEventListener("DOMContentLoaded", function () {
  var floatingButton = document.getElementById("floating-button");
  var messageBox = document.getElementById("message-box");
  var closeMessageBox = document.getElementById("close-message-box");

  floatingButton.addEventListener("click", function () {
    messageBox.style.display = "block";
  });

  closeMessageBox.addEventListener("click", function () {
    messageBox.style.display = "none";
  });
});

const btnSend = document.querySelector("#send-mensager");
const inputModal = document.querySelector('#input-modal');
console.log(inputModal);
const mensagemSucesso = document.querySelector('.mensagem-sucesso');
console.log(mensagemSucesso)

btnSend.addEventListener("click", () => {
    const temValor = inputModal.value != ''
    console.log(temValor);
    
    if(temValor){
    inputModal.style.display = 'none'
    mensagemSucesso.style.display = 'block'



    }else{
        mensagemSucesso.style.display = 'block'
        mensagemSucesso.innerHTML = 'Prencha antes de enviar!'
        mensagemSucesso.style.color = 'red'


    }
    
});

