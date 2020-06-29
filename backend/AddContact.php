<?php
include './DB/db.php';
/*
allow accss control for front-end application
if we want to specifie the server domain, we juste replace * with (http://localhost:3000)*/
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type", "application/json");
/* get $con from global (from DB/db.php) */
global $con;
/*check if the connexion works */
if($con->connect_error) 
		die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
/*get data from front-end*/
$data=json_decode(file_get_contents("php://input"));
$result=array();
if(!is_null($data->FirstName) && !is_null($data->LastName) && !is_null($data->PhoneNumber) && !is_null($data->Gender)) /*check if the fields are not empty*/
{
		$sql1=mysqli_query($con, "select PhoneNumber from users where PhoneNumber='".$data->PhoneNumber."'");

		if(mysqli_num_rows($sql1)>0)
		{
			$result=['response'=>-1];//if the phone number exists in database, so return -1
		}
		else{
			$sql2="insert into users (FirstName, LastName, PhoneNumber,Gender) values
			('$data->FirstName','$data->LastName','$data->PhoneNumber','$data->Gender')";


			if (mysqli_query($con,$sql2))
			{
				$result=['response'=>1];//if the contact is added to database, so return 1
			}
			else
			{
				$result=['response'=>0];//if there is a problem in the insert, so return 0
			}
		}
}
else
{
	$result=['response'=>0];//if one or all fields are empty, so return 0
}
echo json_encode($result);//send response to frent-end

mysqli_close($con);





?>