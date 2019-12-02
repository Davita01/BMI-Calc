//Requires height and weight to be passed.
function calculateBmi() 
{
	
	//let weight = document.getElementById("weight").value;
	let weight = $('#weight').val();
	//let height = document.getElementById("height").value;
	let height = $('#height').val();
	
	console.log("weight"+weight+"height"+height);
	
	if(weight > 0 && height > 0)
	{	
		let finalBmi = weight/(height/100*height/100)
		//$('#bmi').val(finalBmi);
		let roundedBmi = Math.round(finalBmi * 10) / 10;
		$('#rounded').val(roundedBmi);
		
		switch(true) 
		{
			case (roundedBmi < 18.5):
				$('#feedback').html("<strong>This means:</strong> <em>You are too thin.</em>");
				break;
				
			case (roundedBmi > 25):
				$('#feedback').html("<strong>This means:</strong> <em>You are overweight.</em>");
				break;
				
			default:
				$('#feedback').html("<strong>This means:</strong> <em>You are healthy.</em>");
				break;
		}
		
		
		/*
		
		let finalBmi = weight/(height/100*height/100)
		//$('#bmi').val(finalBmi);
		let rounded = Math.round(finalBmi * 10) / 10;
		$('#rounded').val(rounded);
		
		if(true)
		{
			$('#meaning').val("That you are too thin.");
		}
		if(finalBmi > 18.5 && finalBmi < 25)
		{
			$('#meaning').val("That you are healthy.");
		}
		if(finalBmi > 25)
		{
			$('#meaning').val("That you are overweight.");
		}
		
		*/
		
		
	}
	else
	{
		$('#feedback').html('<strong>This means:</strong> Please fill everything correctly.')
		//alert("Please Fill in everything correctly")
	}
}