<?php
if(isset($_POST['contact_submit'])){

    // Empfänger-E-Mail-Adresse
    $to = "markungphim@gmail.com";

    // Absender-E-Mail-Adresse
    $from = $_POST['email'];

    // Name des Absenders
    $name = $_POST['name'];

    // Betreff der E-Mail
    $subject = "Nachricht von $name durch das Kontaktformular";

    // Nachrichtentext
    $message = "Name: $name<br/>";
    $message .= "Email: $from<br/>";
    $message .= "Nachricht:<br/>".nl2br($_POST['message']);

    // E-Mail-Header
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=utf-8\n";

    // SMTP-Einstellungen
    $smtp_host = 'smtp.gmail.com'; // SMTP-Host deines E-Mail-Providers
    $smtp_user = ''; // Deine E-Mail-Adresse
    $smtp_pass = ''; // Dein E-Mail-Passwort
    $smtp_port = 587; // SMTP-Port

    // E-Mail-Versand mit SMTP
    $transport = (new Swift_SmtpTransport($smtp_host, $smtp_port))
      ->setUsername($smtp_user)
      ->setPassword($smtp_pass);

    $mailer = new Swift_Mailer($transport);
    $message = (new Swift_Message($subject))
      ->setFrom([$from => $name])
      ->setTo([$to])
      ->setBody($message, 'text/html');

    if($mailer->send($message)){
        echo "Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.";
    }
    else{
        echo "Ein Fehler ist aufgetreten. Bitte versuche es später erneut.";
    }
}
?>
