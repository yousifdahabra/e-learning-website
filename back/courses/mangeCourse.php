<?php 
include "../connection.php";
use Firebase\JWT\Key;
use Firebase\JWT\JWT;

try {
    $headers = getallheaders();
    $token = $headers['Authorization'];
    $key = new Key($secret_key,"HS256");
    $payload = JWT::decode($token,$key);
    
    $desactive_user = $db->modify_query([
        "query"=>"Insert  into courses_tbl (course_name,user_id,description) values(?,?,?)",
        "types" => "sss",
        "params" => [$_POST['course_name'],$_POST['user_id'],$_POST['description']]
    ]);
    $response = [
        "state" => "1",
        "message" => "Insert Course",
    ];
    echo json_encode($response)  ;

    

} catch (\Throwable $th) {

    $response = [
        "state" => "2",
        "message" => "invalid token",
    ];
    echo json_encode($response)  ;
}
