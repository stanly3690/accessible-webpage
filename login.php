<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title> Log-In </title>

<link href="style.css" rel="stylesheet" type="text/css" media="screen" />



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
					<li><a href="sign-up.html">SIGN UP</a></li>
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
						
					<p class="meta"></p>
						
						<div class="entry">
                        <div class="login">
                        <h3> Thank you for your shopping </h3>
						  <?php 
		
			 	$un = $_POST['un'];
				$psw = $_POST['psw'];
				
				$con = mysqli_connect("localhost","root","");
			if (!$con)
			  {
			  die('Could not connect: ' . mysql_error());
			  }
			  
			@mysqli_select_db($con,"accessibility") or die ("Unable to select database");
				
				$qu = "select C_id from userinfo where C_un='$un';";
				$rest = mysqli_query($con,$qu);
				$c= mysqli_free_result($rest);
				
				$que = "select C_fn from customerinfo where C_id='$c';";
				$restu = mysqli_query($con,$que);
				$d= mysqli_free_result($restu);
				
			
			echo " <br> Dear  ".$d;	
			echo " <br> Your Shopping has been done successfully ";
				
				
				?>
                   </div>       
                          

						</div>
					</div>
                    
					<div class="post">
				    
					  
						
						<div class="entry">
							
							
						</div>
					</div>
                    
					
			  
                  
						
					
					
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
