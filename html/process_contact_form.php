<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sergy346926@gmail.com"; // Remplacez par votre adresse e-mail
    $from = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $headers = "From: $from";

    if (mail($to, $subject, $message, $headers)) {
        echo "<p>Votre message a été envoyé avec succès. Nous vous contacterons bientôt.</p>";
    } else {
        echo "<p>Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.</p>";
    }
}
?>
