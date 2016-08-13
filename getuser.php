<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>

<?php
$q = $_GET['q'];
$p = $_GET['p'];

$con = mysqli_connect("localhost","root","");
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"accessibility") or die ("Unable to select database");
$sql="SELECT * FROM userinfo WHERE C_un = '".$q."'";
$result = mysqli_query($con,$sql);

$msql="SELECT * FROM passinfo WHERE C_pass = '".$p."'";
$mresult = mysqli_query($con,$msql);

$id = mysqli_num_rows($result);
$mid = mysqli_num_rows($mresult);

if ($id == 0)
{
	echo " This Username is not exist, Please Enter correct User name ";
	
}

if ($mid == 0){
		echo " <br> This Password is not matched, Please Enter correct Password ";
		
		}
		
		
mysqli_close($con);

?>

</body>
</html>