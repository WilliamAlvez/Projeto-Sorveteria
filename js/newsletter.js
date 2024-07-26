// Adiciona um listener para o envio do formulário
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    
    // Obtém o valor do campo de e-mail
    var email = document.getElementById("email").value;

    // Valida o e-mail
    if (validateEmail(email)) {
        // Cria uma nova requisição XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_form.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        // Define a função de callback para quando a requisição mudar de estado
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Atualiza a mensagem na página com a resposta do servidor
                document.getElementById("newsletterMessage").innerText = xhr.responseText;
            }
        };
        
        // Envia a requisição com o e-mail codificado
        xhr.open("POST", "submit_form.php", true);
    } else {
        // Atualiza a mensagem na página se o e-mail for inválido
        document.getElementById("newsletterMessage").innerText = "E-mail inválido. Por favor, insira um e-mail válido.";
    }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
