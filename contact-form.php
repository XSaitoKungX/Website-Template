<?php
if (isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "markungphim@gmail.com";
    $email_subject = "Neue Formularübermittlungen";

    function problem($error)
    {
        echo "Es tut mir sehr leid, aber in dem von dir übermittelten Formular wurden Fehler gefunden. ";
        echo "Diese Fehler werden unten angezeigt.<br><br>";
        echo $error . "<br><br>";
        echo "Bitte gehe zurück und behebe die Fehler.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])
    ) {
        problem('Es tut mir leid, aber es scheint ein Problem mit dem von dir übermittelten Formular zu geben.');
    }

    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'Die eingegebene E-Mail-Adresse scheint nicht gültig zu sein.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'Der eingegebene Name scheint nicht gültig zu sein.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Der eingegebene Name scheint nicht gültig zu sein.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Formulardetails unten.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    Danke, dass du mich kontaktiert hast. Ich werde mich in Kürze mit dir in Verbindung setzen.

<?php
}
?>