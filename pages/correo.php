
<?php
    //if(isset($_POST['enviar'])){//si el botón con el name enviar es pulsado
      //  if(!empty($_POST['nombre'])&& !empty($_POST['email']) /*&&!empty($_POST['consulta'])*/){
        //si no están vacios los inputs name, email y msg 
        //guardo el contenido de cada campo en variables
            $nombre=$_POST['nombre'];
            $email=$_POST['email'];
            //$asunto="Pedido Confirmado";//puedo poner un input asunto o crearlo yo directamente  
            //$msg="Nombre: ".$nombre."\n".$_POST['consulta'];
            //$header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email
            //$header.="Reply-To: noreply@example.com"."\r\n";//Le mando un no responder o noreply
            //$header.="X-Mailer: PHP/".phpversion();
            //$tuCasilla="jmmaronas@gmail.com";
            //$pedido=$_POST["data"];
                        
            require '../PHPMailerAutoload.php';
            //Crea una instancia de PHPMailer
            $mail = new PHPMailer;
            //Usar SMTP
            $mail->isSMTP();
            //Habilitar el SMTP debugging
            // 0 = off (para uso en produccion)
            // 1 = mensajes del cliente
            // 2 = mensajes del cliente y servidor
            $mail->SMTPDebug = 2;

            //Puerto SMTP puede ser 25, 465 or 587
            $mail->Port = 25;
            //Usar Autenticacion
            $mail->SMTPAuth = true;
            //Usuario para la autenticacion
            $mail->Username = "jmmaronas@gmail.com";
            //Password para la autenticacion
            $mail->Password = "";
            //Quien Envia
            $mail->setFrom($email, $nombre);

            $mail->addReplyTo('replyto@example.com', 'First Last');
            //A quien se va a enviar
            $mail->addAddress('jmmaronas@gmail.com', 'John Doe');
            //Asunto
            $mail->Subject = 'Pedido';
            //Cuerpo del mensaje
            $mail->Body = $pedido;
            //Agregar Adjunto
            $mail->addAttachment('images/phpmailer_mini.png');
            //Enviar el mensaje revisando errores
            if (!$mail->send()) {
                echo "Mailer Error: " . $mail->ErrorInfo;
            }
            else {
                echo "Mensaje enviado";
            }
?>