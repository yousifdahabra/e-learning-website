<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
require "./vendor/autoload.php";
use Firebase\JWT\JWT;

class Database {
    private $connection;
    private static $instance;

    private function __construct() {
        $host = "localhost";
        $username = "root";
        $password = "";
        $database = "learning_db";

        $this->connection = new mysqli($host, $username, $password, $database);

        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }
    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new Database();
        }
        return self::$instance;
    }
    public function getConnection() {
        return $this->connection;
    }
    //$query, $params = [], $types = ""
    public function select_query($options) {
        $statement = $this->connection->prepare($options['query']);

        if ($statement === false) {
            die("Prepare failed: " . $this->connection->error);
        }

        
        if (isset($options['params']) && isset($options['types']) ) {
            if (!empty($options['params']) && !empty($options['params']) )
                $statement->bind_param($options['types'], ...$options['params']);
        }

        $statement->execute();
        $result = $statement->get_result();

        if ($result === false) {
            die("Execute failed: " . $statement->error);
        }

        $data = $result->fetch_all(MYSQLI_ASSOC);
        $statement->close();

        return $data;
    }

    public function modify_query($options) {
        $statement = $this->connection->prepare($options['query']);

        if ($statement === false) {
            die("Prepare failed: " . $this->connection->error);
        }

        if (!empty($options['params'])) {
            $statement->bind_param($options['types'], ...$options['params']);
        }

        $statement->execute();

        if ($statement->error) {
            die("Execute failed: " . $statement->error);
        }

        $affectedRows = $statement->affected_rows;
        $statement->close();

        return $affectedRows;
    }
    public function get_insert_id() {
        return $this->connection->insert_id;
    }

}

$db = Database::getInstance();
