// JavaScript Document

function validateForm()
				{
				
				var psw = document.getElementById('psw').value
				var pswc = document.getElementById('pswc').value
				var a = document.getElementById('fn').value
				var b = document.getElementById('sn').value
				var c = document.getElementById('un').value
				var d = document.getElementById('ad').value
				var e = document.getElementById('ccn').value
				var el = document.getElementById('ccn').length
				var f = document.getElementById('ccdm').value
				var g = document.getElementById('ccdy').value
				var i=1;
				
			//first name
				if(a==null || a=="")
				{
					var w = document.getElementById('warning');
					w.innerHTML = " <p> "+ i + "." +" Please "+ "<a href=#fn>" + " Enter Your First name "+ "</a>" + "</p>";
					i++; 
				
					if(b==null || b=="")
						{
						var w = document.getElementById('warning');
							w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#sn>" + " Enter Your Sure name "+ "</a>" +"</p>";
							i++;
							}
				
					if(c==null || c=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Your User name "+"</a>" +"</p>";
								i++;
								} 
								
								if(d==null || d=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Your Address "+"</a>" +"</p>";
								i++;
								}
								
								if(e==null || e=="" || el!=16)
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter a Valid Credit Card Number "+"</a>" +"</p>";
								i++;
								}
								
								if(f==null || f=="" || f=="Select Month")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Month of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
								if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
				
					if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" + "</p>";
									
								}
							
						return false;
				}
				
			// sure name 
				if(b==null || b=="")
						{
						var w = document.getElementById('warning');
							w.innerHTML = " <p> "+ i + "." +" Please "+ "<a href=#sn>" + " Enter Your Sure name "+ "</a>" +"</p>";
							i++;
							
						if(c==null || c=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." +" Please "+ "<a href=#un>" + " Enter Your User name "+ "</a>" +"</p>";
								i++;
								}
								
								if(d==null || d=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Your Address "+"</a>" +"</p>";
								i++;
								}
								
								if(e==null || e=="" || el!=16 )
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter a valid Credit Card Number "+"</a>" +"</p>";
								i++;
								}
								
								if(f==null || f=="" || f=="Select Month")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Month of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
								if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}

				
					if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." +" Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" +"</p>";
									
								}
										return false;
				}
				
				//username
				if(c==null || c=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML = " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Your User name "+ "</a>" +"</p>";
								i++;
								
								if(d==null || d=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Your Address "+"</a>" +"</p>";
								i++;
								}
								
								if(e==null || e=="" || el!=16 )
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter a valid Credit Card Number "+"</a>" +"</p>";
								i++;
								}
								
								if(f==null || f=="" || f=="Select Month")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Month of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
								if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
							if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" +"</p>";
									
								}
										return false;
				}
				
				//address
				if(d==null || d=="")
							{
							var w = document.getElementById('warning');
								w.innerHTML = " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Your Address "+"</a>" +"</p>";
								i++;
								if(e==null || e=="" || el!=16 )
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter a valid Credit Card Number "+"</a>" +"</p>";
								i++;
								}
								
								if(f==null || f=="" || f=="Select Month")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Month of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
								if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
							if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" +"</p>";
									
								}
										return false;
				}
				
				//credit card number
				
				if(e==null || e=="" || el!=16 )
							{
							var w = document.getElementById('warning');
								w.innerHTML = " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter a valid Credit Card Number "+"</a>" +"</p>";
								i++;
								
								if(f==null || f=="" || f=="Select Month")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Month of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
								if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
							if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" +"</p>";
								return false;	
								}
										
				}
				
				//credit card date expiration month
				
				if(f==null || f=="" || f=="Select Month")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Month of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								}
								
							if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" +"</p>";
									
								}
										return false;
				}
				
				//credit card date expiration year
				
				if(g==null || g=="" || g=="Select Year")
							{
							var w = document.getElementById('warning');
								w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#un>" + " Enter Year of Credit Card Date Expiration "+"</a>" +"</p>";
								i++;
								
								if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML += " <p> "+ i + "." + " Please "+ "<a href=#psw>" + " Enter Correct Password "+ "</a>" +"</p>";
									
								}
										return false;
				}
				
				//password
				
				
				if(psw != pswc || psw==null || psw=="" || pswc==null || pswc=="")
								{
								var w = document.getElementById('warning');
									w.innerHTML = " <p> "+ i + "." +" Please "+ "<a href=#psw>" + " Enter Correct Password "+"</a>" +"</p>";
									return false;
									
								}
				
	}
	
	
	 function validate(key)
		{
			//getting key code of pressed key
			var keycode = (key.which) ? key.which : key.keyCode;
			var phn = document.getElementById('txtPhn');
			//comparing pressed keycodes
			if (!(keycode==8 || keycode==46 || keycode==9)&&(keycode < 48 || keycode > 57))
				{
					return false;
				}
			else
				{
					return true;
				}


		}
		

