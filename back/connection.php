<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');
//http_response_code(404);

$host = "localhost";
$username = "root";
$password = "";
$database = "learning_db";
$conection = new mysqli($host,$username,$password,$database);
if(!$conection)
    die("Error conection to the database ");

