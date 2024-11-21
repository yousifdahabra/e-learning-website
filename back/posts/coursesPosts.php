<?php 
include "../connection.php";
use Firebase\JWT\Key;
use Firebase\JWT\JWT;
try {

$headers = getallheaders();
$token = $headers['Authorization'];
$key = new Key($secret_key,"HS256");
$payload = JWT::decode($token,$key);
  if($payload->role == "instructor"){
    $get_courses = $db->select_query([
        "query"=>"Select cm.* , c.course_name from courses_material_tbl cm  
                  left join courses_tbl c on c.course_id = cm.course_id where  cm.course_id = ? ",
        "types" => "i",
        "params" => [$_POST['course_id']]
    ]);
    $response = [
        "states" => "1",
        "messages" => "get posts courses ",
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
