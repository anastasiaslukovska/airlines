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

//echo "Connected successfully";

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql_check = "SELECT * FROM `accounts` WHERE EXISTS(SELECT 1 FROM `accounts` WHERE email = '$email')";

if(mysqli_num_rows($conn->query($sql_check)) != 0)
{
    die("Account with such an email already exists");
}

$sql = "INSERT INTO `accounts` (`name`, `surname`, `email`, `password`) VALUES ('$name', '$surname', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
    header('Location: /');
    exit();
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
