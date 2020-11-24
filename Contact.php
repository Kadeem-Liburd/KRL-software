<?php 

$name = $_POST['name'];
$vistor_email = $_POST['email'];
$message = $_POST['message'];

$email_from ='K.Liburd1993@gmail.com';

$email_subject = "NEW FORM SUBMISSION";

$email_body = "User name:$name.\n ."
              " User Email: $visitor_email.\n".
              " User Message: $message.\n";



$to= "K.Liburd7@gmail.com";

$headers= "From: $email_from \r\n";

$headers .="Reply-To: $visitor_email \r\n";

mail ($to,$email_subject,$email_body,$headers);

header("LocationL Contact.html"); 

?>
