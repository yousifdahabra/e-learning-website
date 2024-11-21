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
        if(isset($_POST['course_id']) && isset($_POST['student_id'])    && isset($_POST['invite_note']) ){
            if(!empty($_POST['course_id']) && !empty($_POST['student_id'])   && !empty($_POST['invite_note'])  ){
                    $insert = $db->modify_query([
                        "query"=>"Insert  into enroll_course_tbl (course_id,student_id,invite_note) values(?,?,?)",
                        "types" => "sss",
                        "params" => [$_POST['course_id'],$_POST['student_id'],$_POST['invite_note']]
                    ]);
                    if($insert){
                        $response = [
                            "state" => "1",
                            "message" => "Insert invite",

                        ];
                    }else{
                        $response = [
                            "state" => "0",
                            "message" => "Not Insert invite",
                        ];
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
        
        if(!isset($_POST['course_id']) || !isset($_POST['student_id']) || !isset($_POST['invite_note'])  ){
            http_response_code(401);
            $response = [
                "states" => "0",
                "message" => "You are not authorized to be here",
            ];
            echo  json_encode($response)  ;        
        }
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
        "message" => "invalid token",
    ];
    echo json_encode($response)  ;
}
