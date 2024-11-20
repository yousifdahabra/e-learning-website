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
        if(isset($_POST['username']) && isset($_POST['password']) ){
            if(!empty($_POST['username']) && !empty($_POST['password']) ){
                if($_POST['user_id'] == 0){
                    $hash = password_hash($_POST['password'],PASSWORD_DEFAULT);

                    $insert = $db->modify_query([
                        "query"=>"Insert  into users_tbl (username,password,role) values(?,?,?)",
                        "types" => "sss",
                        "params" => [$_POST['username'],$hash,"instructor"]
                    ]);
                    if($insert){
                        $response = [
                            "state" => "1",
                            "message" => "Insert User",

                        ];
                    }else{
                        $response = [
                            "state" => "0",
                            "message" => "Not Insert User",
                        ];
                    }
                }else{
                    $hash = password_hash($_POST['password'],PASSWORD_DEFAULT);

                    $update = $db->modify_query([
                        "query"=>"update users_tbl set username = ? ,password = ?  where user_id = ?",
                        "types" => "sss",
                        "params" => [$_POST['username'],$hash,$_POST['user_id']]
                    ]);
                    if($update){
                        $response = [
                            "state" => "1",
                            "message" => "Update User",
                        ];
                    }else{
                        $response = [
                            "state" => "0",
                            "message" => "Not update User",
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
        
        if(!isset($_POST['username']) || !isset($_POST['password'])   ){
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
            "message" => "You are Not authrize to insert or update users",
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
