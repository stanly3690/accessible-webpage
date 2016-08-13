<?php 
		
			 	$fn = $_POST['fn'];
				$sn = $_POST['sn'];
				$un = $_POST['un'];
				$ad = $_POST['ad'];
				$ccn = $_POST['ccn'];
				$ccdy = $_POST['ccdy'];
				$ccdm = $_POST['ccdm']; 
				$ccd = $ccdm." / ".$ccdy;
				$psw = $_POST['psw'];
				
				
					
			$con = mysqli_connect("localhost","root","");
			if (!$con)
			  {
			  die('Could not connect: ' . mysql_error());
			  }
			  
			@mysqli_select_db($con,"accessibility") or die ("Unable to select database");
				
				$qu = "select * from customerinfo;";
				$rest = mysqli_query($con,$qu);
				
				$id = mysqli_num_rows($rest);
				$id++;	
					
				$insert = "insert into customerinfo values('$id','$fn','$sn','$ad','$ccn','$ccd');";		
				$result = mysqli_query($con,$insert);
				
				
				$query = "insert into userinfo values('$id','$un');";			
				$res = mysqli_query($con,$query);
				
				$quer = "insert into passinfo values('$id','$psw');";			
				$resu = mysqli_query($con,$quer);
				
?> 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title> Registeration</title>
<link href="style.css" rel="stylesheet" type="text/css" media="screen" />
<script type="text/javascript" src="validationform.js"></script>



</head>
<body>
<div id="wrapper">
	<div id="header-wrapper">
		<div id="header">
			<div id="logo">
				<h1><a href="#"> ASSIST-SHOP </a></h1>
				<p>We make you able</p>
			</div>
			<div id="menu">
				<ul>
					<li ><a href="home.html">Homepage</a></li>
					<li><a href="aboutus.html">ABOUT US</a></li>
					<li><a href="product.html">PRODUCTS</a></li>
					<li class="current_page_item"><a href="sign-up.html">SIGN UP</a></li>
					<li><a href="contact-us.html">CONTACT US</a></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- end #header -->
	<div id="page">
		<div id="page-bgtop">
			<div id="page-bgbtm">
				<div id="content">
					<div class="post">
						<h2 class="title"> Registration is completed </h2>
					<p class="meta"></p>
						<div style="clear: both;" id="warning" class="validation">&nbsp;</div>
                        
						<div class="entry">
						  
                        <p> Thank you <?php echo " <font color=\"#1468E8\" face=\"Lucida Grande, Lucida Sans Unicode, Lucida Sans, DejaVu Sans, Verdana, sans-serif\" size=\"+2\" style=\"font-weight:bold\">". $fn. "</font>"; ?> for register in our website </p>
                          
                         
<p class="links"></p>
						</div>
					</div>
					<div class="post">
				    <h2 class="title"></h2>
					  <p class="meta"></p>
						<div style="clear: both;">&nbsp;</div>
						<div class="entry">
							
							<p class="links"></p>
						</div>
					</div>
					<div style="clear: both;">&nbsp;</div>
			  
                  
						
					
					
				</div>
				<!-- end #content -->
				<div id="sidebar">
					<ul>
						<li>
							<h2>Latest News</h2>
							<p>
                            	Todays we can inform you that the newest products are released and now you are able to buy them through our website.
                            </p>
						</li>
						<li>
							<h2>Product Categories</h2>
							<ul>
								<li><a href="#">Head Wands</a></li>
								<li><a href="#">Mouth Stick</a></li>
								<li><a href="#">Track Balls</a></li>
								<li><a href="#">Keyborad and Switches</a></li>
							</ul>
						</li>
						<li>
							<h2>Archives</h2>
							<ul>
								<li><a href="#">Some link here</a></li>
								<li><a href="#">Some link here</a></li>
								<li><a href="#">Some link here</a></li>
								<li><a href="#">Some link here</a></li>
								<li><a href="#">Some link here</a></li>
								<li><a href="#">Some link here</a></li>
							</ul>
						</li>
                        <h2>Search</h2>
                        <li><div id="search">
								<form method="get" action="#">
									<div>
										<input type="text" name="s" id="search-text" value="" />
										<input type="submit" id="search-submit" value="GO" />
									</div>
								</form>
							</div>
							<div style="clear: both;">&nbsp;</div></li>
					</ul>
</div>
				<!-- end #sidebar -->
				<div style="clear: both;">&nbsp;</div>
			</div>
		</div>
	</div>
	<!-- end #page -->
</div>
<div id="footer">
	<p>Copyright (c) 2014 Assistshop.com All rights reserved.
</p>
</div>
<!-- end #footer -->
</body>
</html>
