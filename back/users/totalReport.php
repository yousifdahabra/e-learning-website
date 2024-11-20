<?php 
include "../connection.php";

use Firebase\JWT\Key;
use Firebase\JWT\JWT;
try {
    $headers = getallheaders();
    $token = $headers['Authorization'];
    $key = new Key($secret_key,"HS256");
    $payload = JWT::decode($token,$key);
    if( $payload->role == 'admin'){
        $get_students = $db->select_query([
            "query"=>"Select * from users_tbl where role = 'student' and is_active = 1 ",
            "types" => "",
            "params" => []
        ]);
        $total_students = count($get_students);
        $get_instructors = $db->select_query([
            "query"=>"Select * from users_tbl where role = 'instructor' and is_active = 1  ",
            "types" => "",
            "params" => []
        ]);
        $total_instructors = count($get_instructors);
        $get_courses = $db->select_query([
            "query"=>"Select * from courses_tbl   ",
            "types" => "",
            "params" => []
        ]);
        $total_courses = count($get_courses);

        $response = [
            "states" => "1",
            "messages" => "get accounts",
            "result" => [
                'students'=>$total_students,
                'instructors'=>$total_instructors,
                'courses'=>$total_courses,
            ]
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

