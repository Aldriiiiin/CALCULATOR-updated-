	function back(bura)
				{
					document.getElementById("screen").innerHTML=bura;
				}
				function press(val)
				{
					document.getElementById("screen").innerHTML+=val;
				}
				function equal() 
				{ 
					try 
					{ 
					  back(eval(document.getElementById("screen").innerHTML)) 
					} 
					catch(ans) 
					{
					  back('Error') 
					} 
				}