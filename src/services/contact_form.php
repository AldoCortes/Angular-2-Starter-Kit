<?php
include "auth.php";

$entityBody = json_decode(file_get_contents('php://input'));
$user_name = $entityBody->name;
$user_mail = $entityBody->email;
$message = $entityBody->message;
$ip = $_SERVER['REMOTE_ADDR'];

header('Content-Type: application/json');

if (!empty($user_name) && !empty($message) && !empty($user_mail)) {
  $link = mysqli_connect( $db_host, $db_username, $db_password, $db_name) or die(mysqli_error());

  $user_name = mysqli_real_escape_string($link, $user_name);
  $user_mail = mysqli_real_escape_string($link, $user_mail);
  $message = mysqli_real_escape_string($link, $message);

  $resultado = mysqli_query($link, "SELECT * from contact_requests WHERE correo = '$user_mail'");
  $total = mysqli_num_rows($resultado);
  mysqli_free_result($resultado);
  if($total < 11){
    $sended = 1;
    if($total == 0){
      include 'mailer/mail.service.php';
      $body = "<h3>Nueva solicitud de contacto</h3><p>Nombre: $user_name<br/>Correo: $user_mail<br/>Mensaje: $message</p>";
      $mail->MsgHTML($body);
      if(!$mail->Send()) {
        $sended = 3; // Status success
      } else {
        $sended = 2; // status failed
      }
    }
    if( mysqli_query($link, "INSERT INTO contact_requests(nombre, correo, mensaje, ip, status) VALUES ('$user_name', '$user_mail', '$message','$ip', $sended)") ) {
      echo json_encode(array('operation'=>'success', 'message' => 'Data stored.'));
    } else {
      // echo json_encode(array('operation'=>'error', 'message' => mysqli_error($link))); // Debug data
      echo json_encode(array('operation'=>'error', 'message' => 'ERROR'));
    }
  } else {
    echo json_encode(array('operation'=>'success', 'message' => 'Data already stored.'));
  }

  mysqli_close($link);
} else {
  echo json_encode(array('operation'=>'error', 'message' => 'No valid data.'));
}
