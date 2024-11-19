<?php 
include "../connection.php";
use Firebase\JWT\Key;
use Firebase\JWT\JWT;
try {

$headers = getallheaders();
$token = $headers['Authorization'];
$key = new Key($secret_key,"HS256");
$payload = JWT::decode($token,$key);
if($payload->role == "admin"){
    $get_instructors = $db->select_query([
        "query"=>"Select * from users_tbl where role=''instructor' ",
        "types" => "",
        "params" => []
    ]);
    $response = [
        "states" => "1",
        "messages" => "get instructors ",
        "result" => $get_instructors
    ];
    echo  json_encode($response)  ;
}else{
    $response = [
        "state" => "2",
        "message" => "You are Not authrize to insert or update course",
    ];
    echo json_encode($response)  ;

}
} catch (\Throwable $th) {

    $response = [
        "state" => "2",
        "message" => "invalid token - ".$th,
    ];
    echo json_encode($response)  ;
}
