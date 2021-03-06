<?php

require "session.php";
$servername = "localhost";
$database = "tickets";
$username = "mysql";
$password = "mysql";

// Устанавливаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//echo "Connected successfully";

$from = $_GET['from'];
$to = $_GET['to'];
$date = $_GET['date'];

$sql = "SELECT * FROM `flights` WHERE city_from = '$from' AND city_to = '$to' AND departure_date = '$date'";

$result = $conn->query($sql) or die($conn->error);
$result = $result->fetch_all();
//$row = $result->fetch_assoc();

echo json_encode($result);

mysqli_close($conn);
