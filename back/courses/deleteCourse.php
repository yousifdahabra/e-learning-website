<?php
include "../connection.php";

require "../vendor/autoload.php";

if(isset($_POST['course_id'])){
    if( !empty($_POST['course_id'])){
        $course_id = $_POST['course_id'];
        $desactive_user = $db->modify_query([
            "query"=>"Delete From courses_tbl where course_id = ? ",
            "types" => "i",
            "params" => [$course_id]
        ]);
        $response = [
            "states" => "1",
            "message" => "Delete course",
        ];
        echo json_encode($response)  ;

    }else{
        $response = [
            "states" => "0",
            "message" => "Missing course_id",
        ];
        echo json_encode($response)  ;

    }    
}

if(!isset($_POST['course_id'])  ){
    http_response_code(401);
    $response = [
        "states" => "0",
        "message" => "You are not authorized to be here",
    ];
    echo  json_encode($response)  ;
}

