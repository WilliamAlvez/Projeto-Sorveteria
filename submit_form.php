<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "Requisição POST recebida";
    } else {
        echo "Método de requisição inválido.";
    }
    ?>
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Enviar email ou salvar no banco de dados
        $to = "william.s.alves@outlook.com";  // Seu endereço de email para onde o email será enviado
        $subject = "Nova inscrição na newsletter";
        $message = "Novo email cadastrado: " . $email;
        $headers = "From: noreply@icedream.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Obrigado por se inscrever!";
        } else {
            echo "Houve um problema ao enviar seu email. Por favor, tente novamente.";
        }
    } else {
        echo "E-mail inválido. Por favor, insira um e-mail válido.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>