<?php
$user_name = $_POST['user'];
$mail = $_POST['email'];
$message = $_POST['message'];
$ip = $_SERVER['REMOTE_ADDR'];

header('Content-Type: application/json');

if (!empty($user_name) && !empty($message) && !empty($mail)) {
  $db_host = 'localhost';
  $db_username = 'ragoomx_dba';
  $db_password = 'R4g00_MX@847876466-ECB';
  $db_name = 'ragoomx_homepage';

  $link = mysqli_connect( $db_host, $db_username, $db_password, $db_name) or die(mysqli_error());

  $user_name = mysqli_real_escape_string($link, $user_name);
  $mail = mysqli_real_escape_string($link, $mail);
  $message = mysqli_real_escape_string($link, $message);

  if(mysqli_query($link, "INSERT INTO contact_requests(nombre, correo, mensaje, ip) VALUES ('$user_name', '$mail', '$message','$ip');") ) {
    echo json_encode(array('operation'=>'success', 'message' => 'Data stored.'));
  } else {
    // echo json_encode(array('operation'=>'error', 'message' => mysqli_error($link))); // Debug data
    echo json_encode(array('operation'=>'error', 'message' => 'ERROR')); // Debug data
  }
  mysqli_close($link);
} else {
  echo json_encode(array('operation'=>'error', 'message' => 'No valid data.'));
}
