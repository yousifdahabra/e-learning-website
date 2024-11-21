<?php 
include "../connection.php";

use Firebase\JWT\Key;
use Firebase\JWT\JWT;
try {
    $headers = getallheaders();
    $token = $headers['Authorization'];
    $key = new Key($secret_key,"HS256");
    $payload = JWT::decode($token,$key);
    if( $payload->role == 'instructor'){
        $get_user = $db->select_query([
            "query"=>"Select * from users_tbl where role = 'student' ",
            "types" => "",
            "params" => []
        ]);
        $response = [
            "states" => "1",
            "messages" => "get accounts",
            "result" => $get_user
        ];
        echo  json_encode($response)  ;
    }else{
        $response = [
            "state" => "2",
            "message" => "You are Not authrize to display users",
        ];
        echo json_encode($response)  ;

    }

} catch (\Throwable $th) {

    $response = [
        "state" => "2",
        "message" => "invalid token",
    ];
    echo json_encode($response)  ;
}


