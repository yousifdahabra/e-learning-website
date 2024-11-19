<?php
include "../connection.php";

require "../vendor/autoload.php";
$is_active = $_POST['is_active'];
$user_id = $_POST['user_id'];
$is_active = $is_active == 1 ? 0 : 1;
$desactive_user = $db->modify_query([
    "query"=>"Update users_tbl set is_active = ? where user_id = ? ",
    "types" => "ii",
    "params" => [$is_active,$user_id]
]);
