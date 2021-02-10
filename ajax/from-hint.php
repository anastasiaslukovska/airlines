<?php
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

$sql = "SELECT city_from FROM `flights` WHERE city_from LIKE '$from%'";

$result = $conn->query($sql) or die($conn->error);
$result = $result->fetch_all();
//$row = $result->fetch_assoc();

echo json_encode($result);

mysqli_close($conn);
?>