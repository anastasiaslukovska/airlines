<?php
$servername = "localhost";
$database = "users";
$username = "mysql";
$password = "mysql";
$table_name = 'accounts';
// Устанавливаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";

$email = $_GET['email'];
$password = $_GET['password'];

$sql = "SELECT email, password FROM `accounts` WHERE email = '$email'";

$result = $conn->query($sql) or die($conn->error);
$row = $result->fetch_assoc();

if ($row['password'] == $password) {
    echo "Successfully logged in";
} else {
    echo "You wrote wrong email or password!";
}
mysqli_close($conn);
?>