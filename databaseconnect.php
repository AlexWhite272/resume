<?php
/*$servername = "f0553694.xsph.ru";
$database = "f0553694_applications";
$username = "f0553694_AlexWhite";
$password = "VmmlZ2g8";
// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);*/
if (isset($_POST['name']) && isset($_POST['text'])){
    // Переменные с формы
    $name = $_POST['name'];
    $email = $_POST['email']
    $text = $_POST['text'];
    
    // Параметры для подключения
    $db_host = "f0553694.xsph.ru"; 
    $db_user = "f0553694_AlexWhite"; // Логин БД
    $db_password = "VmmlZ2g8"; // Пароль БД
    $db_base = 'f0553694_applications'; // Имя БД
    $db_table = "people"; // Имя Таблицы БД
    
    try {
        // Подключение к базе данных
        $db = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
        // Устанавливаем корректную кодировку
        $db->exec("set names utf8");
        // Собираем данные для запроса
        $data = array( 'name' => $name, 'text' => $text, 'email' => $email); 
        // Подготавливаем SQL-запрос
        $query = $db->prepare("INSERT INTO $db_table (name, text, email) values (:name, :text, :email)");
        // Выполняем запрос с данными
        $query->execute($data);
        // Запишим в переменую, что запрос отрабтал
        $result = true;
    } catch (PDOException $e) {
        // Если есть ошибка соединения или выполнения запроса, выводим её
        print "Ошибка!: " . $e->getMessage() . "<br/>";
    }
    
    if ($result) {
    	echo "Успех. Информация занесена в базу данных";
    }
}
?>

