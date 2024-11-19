<?php 
include "../connection.php";

require "../vendor/autoload.php";
use Firebase\JWT\JWT;

$get_user = $db->select_query([
    "query"=>"Select * from users_tbl ",
    "types" => "",
    "params" => []
]);
$response = [
    "states" => "1",
    "messages" => "get accounts",
    "result" => $get_user
];
echo  json_encode($response)  ;

