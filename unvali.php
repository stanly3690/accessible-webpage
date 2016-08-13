<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>

<?php

$q = $_GET['q'];

$con = mysql_connect("localhost","root","");
if (!$con) {
  die('Could not connect: ' . mysql_error($con));
}

mysql_select_db("accessibility");
$sql="select C_un from userinfo where C_un = '$q';";
$result = mysql_query($sql);

if($result==$q)
{	
	echo " <p> This Username already exists, Please <a href=#un>Enter another User name </a></p>";
}

mysql_close($con);
?> 

</body>
</html>