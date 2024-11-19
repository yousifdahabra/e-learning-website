<?php 
include "../connection.php";

$data = json_decode(file_get_contents('php://input',true));
$headers = getallheaders();
$token = $headers['Authorization'];
$response = [
    "states" => "1",
    "message" => "Delete course",
    "data" => $data,
    "POST" => $_POST,
    "headers" => $headers,
    "token" => $token,
];
echo json_encode($response)  ;

