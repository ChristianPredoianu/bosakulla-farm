<?php
// Get data from form 
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email= $_POST['email'];
    $tel= $_POST['tel'];
    $message= $_POST['message'];

    $subject = "This is the subject line";

    $mailTo='christianpredoianu@yahoo.com'
    $headers ="From: ".$email;
    $txt= "Du har ett nytt email  ".$email".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location:https://gmail.com");
}
?>