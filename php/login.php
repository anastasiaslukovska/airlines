<?php

require "session.php";
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

$email = $_GET['login-email'];
$password = $_GET['login-password'];

$sql = "SELECT * FROM `accounts` WHERE email = '$email'";

$result = $conn->query($sql) or die($conn->error);
$user = $result->fetch_assoc();

if (password_verify($password, $user['password'])) {
    $_SESSION['logged_user'] = $user;
    header('Location: /');
    exit();
} else {
    echo "You wrote wrong email or password!";
}
mysqli_close($conn);
