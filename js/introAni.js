function navToMenu()
{
	//console.log("trigger");
	$.mobile.navigate("#bmi-calc");
}



//gsap.to(".logo", {duration: 2, y: -300});
gsap.to(".logo", {duration: 2, 
	y: -40, 
	opacity:1, 
	onComplete: navToMenu
	});