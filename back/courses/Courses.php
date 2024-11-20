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
    $get_courses = $db->select_query([
        "query"=>"Select * from courses_tbl c
                  left join users_tbl s on c.user_id = s.user_id ",
        "types" => "",
        "params" => []
    ]);
    $response = [
        "states" => "1",
        "messages" => "get courses ",
        "result" => $get_courses
    ];
    echo  json_encode($response)  ;
}else if($payload->role == "instructor"){
    $get_courses = $db->select_query([
        "query"=>"Select * from courses_tbl c
                  left join users_tbl s on c.user_id = s.user_id where c.user_id= ?  ",
        "types" => "i",
        "params" => [$payload->user_id]
    ]);
    $response = [
        "states" => "1",
        "messages" => "get courses ",
        "result" => $get_courses
    ];
    echo  json_encode($response)  ;
}
} catch (\Throwable $th) {

    $response = [
        "state" => "2",
        "message" => "invalid token - ".$th,
    ];
    echo json_encode($response)  ;
}
