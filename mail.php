<?php 



if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['tel'])&& isset($_POST['message'])){
    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $message = $_POST['message'];
        
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers  .= "From: info@bosakullagard.se\r\n"; 
        
        $recipient = "info@bosakullagard.se";
        $body="";

        $body .= "Från: ".$name. "<br>";
        $body .= "E-mail: ".$email. "<br>";
        $body .= "Telefon: ".$tel. "<br>";
        $body .= "Meddelande: ".$message. "<br>";
        
         $status = mail($recipient, $name, $body, $headers);
        
                
        
                if($status)
                {
                    echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tack för ditt mejl </title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="contact.css">
</head>
<body>
    <div class="container mail-message-container">
        <h1 class="contact-message">Tack för att du har kontaktat oss! Vi återkommer inom kort!</h1>
        <p class="home-link">Gå tillbaka till <a href="index.html">hemsidan</a>.</p>
        
    </div>
</body>
</html>



';
                } 
    }
}

    

    

   

?>