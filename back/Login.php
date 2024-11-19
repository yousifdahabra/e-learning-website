<?php

include "connection.php";

require "vendor/autoload.php";
use Firebase\JWT\JWT;


if(isset($_POST['username']) && isset($_POST['password'])){
    if(!empty($_POST['username']) && !empty($_POST['password'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

        $hash = password_hash($password,PASSWORD_DEFAULT);

        $get_user = $db->select_query([
            "query"=>"Select * from users_tbl where username = ?",
            "types" => "s",
            "params" => [$username]
        ]);

        if(count($get_user) == 0){
            $insert_user = $db->modify_query([
                "query"=>"insert into users_tbl(username,password) values(?,?)",
                "types" => "ss",
                "params" => [$username,$hash]
            ]);
    
            $insert_user_id = $db->get_insert_id();
            $get_user = $db->select_query([
                "query"=>"Select * from users_tbl where user_id = ?",
                "types" => "i",
                "params" => [$insert_user_id]
            ]);
            $user= $get_user[0];

            $secret_key = '$2y$10$uxhso0J/ydC/ZBbY6Gb8n.Gbmo13aM3ikcBofCDwxSmqzX6320J/a';
            $payload = $user;
            $token = JWT::encode($payload ,$secret_key,"HS256");

            $response = [
                "states" => "1",
                "messages" => "Account Successfully created",
                "user" => $user,
                "token" => $token,
        ];
    
        }else{

            
            $user= $get_user[0];
            $password_db =  $user['password'];
            if(password_verify($password,$password_db)){
                $secret_key = '$2y$10$uxhso0J/ydC/ZBbY6Gb8n.Gbmo13aM3ikcBofCDwxSmqzX6320J/a';
                $payload = $user;
                $token = JWT::encode($payload ,$secret_key,"HS256");


                $user_id =  $user['user_id'];
    
                $response = [
                    "states" => "1",
                    "messages" => "Login Successfully",
                    "user" => $user,
                    "token" => $token,
                ];
            }else{
                // http_response_code(400);
                $response = [
                    "states" => "0",
                    "messages" => "Login failed: Incorrect password",
                ];
            }
    
        }
        echo  json_encode($response)  ;

        
        
    }
    else{
        // http_response_code(400);
        $response = [
            "states" => "0",
            "message" => "Yous must fill email and password",
        ];
        echo json_encode($response)  ;
        
    }
    
    
}

if(!isset($_POST['username']) || !isset($_POST['password'])){
    http_response_code(401);
    $response = [
        "states" => "0",
        "message" => "You are not authorized to be here",
    ];
    echo  json_encode($response)  ;
}

    
