<?php

include "connection.php";

if(isset($_POST['username']) && isset($_POST['password'])){
    if(!empty($_POST['username']) && !empty($_POST['password'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
    
        // $hash = password_hash($password,PASSWORD_DEFAULT);
        $response = [
            "username" => $username,
            "password" => $password,
        ];
        echo  json_encode($response)  ;
        $check_user_query = select_query([
            "query"=>"Select * from users_tbl where username = ?",
            "param" => "s",
            "data" => [$username]
        ]);
    
        // if($check_user->num_rows == 0){
        //     $inser_user = $conection->prepare("insert into users_tbl(username,password) values(?,?) ");
        //     $inser_user->bind_param("ss",$username,$hash);
        //     $inser_user->execute();
    
        //     $_SESSION['login_id'] = $inser_user->insert_id;
        //     $response = [
        //         "states" => "1",
        //         "messages" => "Account Successfully created",
        //     ];
    
        // }else{
        //     $user= $check_user->fetch_assoc();
        //     $password_db =  $user['password'];
        //     if(password_verify($password,$password_db)){
        //         $user_id =  $user['user_id'];
        //         $_SESSION['login_id'] = $user_id;
    
        //         $response = [
        //             "states" => "1",
        //             "messages" => "Login Successfully",
    
        //         ];
        //     }else{
        //         $response = [
        //             "states" => "0",
        //             "messages" => "Login failed: Incorrect password",
        //         ];
        //     }
    
        // }
        // echo  json_encode($response)  ;
    
        
    }
    else{
        // http_response_code(404);
        $response = [
            "states" => "0",
            "message" => "Yous must fill email and password",
        ];
        echo  json_encode($response)  ;
        
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

    
