<?php 
include "../connection.php";

require "../vendor/autoload.php";
use Firebase\JWT\JWT;

$get_courses = $db->select_query([
    "query"=>"Select * from courses_tbl   ",
    "types" => "",
    "params" => []
]);
$response = [
    "states" => "1",
    "messages" => "get courses ",
    "result" => $get_courses
];
echo  json_encode($response)  ;

