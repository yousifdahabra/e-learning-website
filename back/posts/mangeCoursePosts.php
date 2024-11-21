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
        if(isset($_POST['material_title']) && isset($_POST['material_type']) && isset($_POST['material_content']) && isset($_POST['course_id'])  ){
            if(!empty($_POST['material_title']) && !empty($_POST['material_type']) && !empty($_POST['material_content']) && !empty($_POST['course_id'])  ){
                if($_POST['material_id'] == 0){
                    $insert = $db->modify_query([
                        "query"=>"Insert  into courses_material_tbl (material_title,material_type,material_content,course_id) values(?,?,?,?)",
                        "types" => "ssss",
                        "params" => [$_POST['material_title'],$_POST['material_type'],$_POST['material_content'],$_POST['course_id']]
                    ]);
                    if($insert){
                        $response = [
                            "state" => "1",
                            "message" => "Insert Posrs",

                        ];
                    }else{
                        $response = [
                            "state" => "0",
                            "message" => "Not Insert Posrs",
                        ];
                    }
                }else{
                    $update = $db->modify_query([
                        "query"=>"update courses_material_tbl set material_title = ? ,material_type = ?,material_content = ?,course_id = ? where material_id  = ?",
                        "types" => "sssss",
                        "params" => [$_POST['material_title'],$_POST['material_type'],$_POST['material_content'],$_POST['course_id'],$_POST['material_id']]
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
        
        if(!isset($_POST['material_title']) || !isset($_POST['material_type']) || !isset($_POST['material_content'])  ){
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
        "payload" => $payload->role,
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
