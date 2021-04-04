
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '..\PHPMailer\PHPMailer\src\Exception.php';
require '..\PHPMailer\PHPMailer\src\PHPMailer.php';
require '..\PHPMailer\PHPMailer\src\SMTP.php';

$nombre=$_POST['nombre'];
$email=$_POST['email'];
$pedido=$_POST['parametros'];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug =  0;//SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'jmmaronas@gmail.com';                     //SMTP username
    $mail->Password   = '***';                               //SMTP password
    $mail->SMTPSecure =  'tsl';
    //PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('jmmaronas@gmail.com', 'Manu');
    $mail->addAddress('jmmaronas@gmail.com', 'Joe User');     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Pedido';
    $mail->Body    =  "'$nombre' \n '$email' \n '$pedido' " ;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
    
?>