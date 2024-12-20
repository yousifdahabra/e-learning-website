<?php
include "../connection.php";

try {

    if (isset($_POST['is_active']) && isset($_POST['user_id'])) {
        if (!empty($_POST['user_id'])) {
            $is_active = $_POST['is_active'];
            $user_id = $_POST['user_id'];
            $is_active = $is_active == 1 ? 0 : 1;
            $desactive_user = $db->modify_query([
                "query" => "Update users_tbl set is_active = ? where user_id = ? ",
                "types" => "ii",
                "params" => [$is_active, $user_id]
            ]);
            $response = [
                "states" => "1",
                "message" => "Update User",
            ];
            echo json_encode($response);
        } else {
            $response = [
                "states" => "0",
                "message" => "Missing is_active or user_id",
            ];
            echo json_encode($response);
        }
    }
} catch (\Throwable $th) {

    echo json_encode($th);
}
