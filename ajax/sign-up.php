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

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql_check = "SELECT EXISTS(SELECT email FROM `accounts` WHERE email = '$email')";

if($conn->query($sql_check))
{
    die("Account with such an email already exists");
}

$sql = "INSERT INTO `accounts` (`name`, `surname`, `email`, `password`) VALUES ('$name', '$surname', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>