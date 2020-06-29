<?php
include './DB/db.php';
/*
allow accss control for front-end application
if we want to specifie the server domain we replace * with (http://localhost:3000)*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type", "application/json");
/* get $con from global (from DB/db.php) */
global $con;
/*check if the connexion works */
if($con->connect_error) 
		die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());

$data=json_decode(file_get_contents("php://input"));
/*get all contacts from database*/
$res=mysqli_query($con, "select FirstName, LastName, PhoneNumber, Gender from users");
$array=array();
while ($row = mysqli_fetch_assoc($res)){
$array[]=$row;
}
/*send response to front-end*/
echo json_encode($array);
/*close connexion*/
mysqli_close($con);





?>