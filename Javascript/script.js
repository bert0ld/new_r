
for(var i=10;i<21;i++)
{
	console.log(i);
}
console.log("================");
var sum = 0; //task 1
for(var i=10;i<21;i++) 
{
	console.log(i*i);
	sum+=i;
}
console.log("================");
console.log('The sum is',sum);



	function buttonClick()
	{
		document.getElementById('prime').innerHTML = " ";
		var x1 = parseInt(document.getElementById('x1').value);
		var x2 = parseInt(document.getElementById('x2').value);
		if(x1>x2) alert("x1 меньше x2!")
		if(Number.isNaN(x1) || Number.isNaN(x2))
		{
			alert("Все поля должны быть заполнены числами!");
		}
		else
		{
			var form = document.forms[0];
			var choice = form.elements.answer;
			if (choice.value==1) 
			{
				var sum = 0;
				var a=x1, b=x2;
				for(;a<=b;a++)
					sum = sum + a;
				document.getElementById('result').innerHTML = "Результат суммирования = " + sum;
				//document.getElementById('result').innerHTML = x1 + " + " + x2 + " = " + (x1 + x2);
			}
			
			else 
			{
				var mult = 1;
				var a=x1, b=x2;
				for(;a<=b;a++)
					mult = mult * a;
				document.getElementById('result').innerHTML = "Результат умножения = " + mult;
			}
		}

	//================================================================================================
			if (x1==1) 
			{
				document.getElementById('prime').append("1 ");
				x1++;
			}

		prime:
		for (var i = x1; i <= x2; i++) 
			{
				for (var j = x1; j < i; j++)
			       	if (i % j == 0) continue prime;
			    document.getElementById('prime').append(i + " ");
			}
	}

