<?php 
include "../connection.php";
use Firebase\JWT\Key;
use Firebase\JWT\JWT;

try {
    $headers = getallheaders();
    $token = $headers['Authorization'];
    $key = new Key($secret_key,"HS256");
    $payload = JWT::decode($token,$key);

    if(isset($_POST['course_name']) && isset($_POST['user_id']) && isset($_POST['description'])  ){
        if(!empty($_POST['course_name']) && !empty($_POST['user_id']) && !empty($_POST['description']) ){
            if($_POST['course_id'] == 0){
                $insert = $db->modify_query([
                    "query"=>"Insert  into courses_tbl (course_name,user_id,description) values(?,?,?)",
                    "types" => "sss",
                    "params" => [$_POST['course_name'],$_POST['user_id'],$_POST['description']]
                ]);
                if($insert){
                    $response = [
                        "state" => "1",
                        "message" => "Insert Course",
                    ];
                }else{
                    $response = [
                        "state" => "0",
                        "message" => "Not Insert Course",
                    ];
                }
            }else{
                $update = $db->modify_query([
                    "query"=>"update courses_tbl set course_name = ? ,user_id = ?,description = ? where course_id = ?",
                    "types" => "ssss",
                    "params" => [$_POST['course_name'],$_POST['user_id'],$_POST['description'],$_POST['course_id']]
                ]);
                if($update){
                    $response = [
                        "state" => "1",
                        "message" => "Update Course",
                    ];
                }else{
                    $response = [
                        "state" => "0",
                        "message" => "Not update ",
                    ];
                }
            }
            echo json_encode($response)  ;

        }else{
            $response = [
                "state" => "0",
                "message" => "fill all data",
            ];
            echo json_encode($response)  ;
    
        }
        
    }
    
    if(!isset($_POST['course_name']) || !isset($_POST['user_id']) || !isset($_POST['description'])  ){
        http_response_code(401);
        $response = [
            "states" => "0",
            "message" => "You are not authorized to be here",
        ];
        echo  json_encode($response)  ;        
    }
    

    

} catch (\Throwable $th) {

    $response = [
        "state" => "2",
        "message" => "invalid token",
    ];
    echo json_encode($response)  ;
}
