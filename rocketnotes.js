var timer = null; 
var countdownNumber = 10

var changeState = function (state) {
	// java script how to change body class google no space after +
	document.body.className = 'body-state' +state;
	// keeps the time from going past 0, spell corrrectly
	clearInterval(timer);
	// when it is aborted it goback to 10
	countdownNumber = 10;
	// get the html to work with the javascript, moved this up hear .... COPY and paste leave it where it was
	document.getElementById('countdown').innerHTML = countdownNumber;
	

	if (state == 2) {
		timer = setInterval(function   () {
			// go to your console and see if your code will work, do not make things plural !!!
			// move the count down number to before the document. so it doesnt stick to much on 10
			countdownNumber = countdownNumber -1;
			// to add in words 
			if (countdownNumber > 4 && countdownNumber <=7) {
				//be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}

			if (countdownNumber < 1 && countdownNumber <=4) {
				//cant wait
				document.getElementById('cantwait').className = 'cantwait show';
			} else {
				document.getElementById('cantwait').className = 'cantwait';
			}
				

			if (countdownNumber <= 0) {

				changeState(3);
			};
			// pass a whole function every... 1 second (half second)
		}, 500);
		
	} else if (state == 3) {
			// like a fucntion but sets a time out so it doesnt run over and over again
			var sucess = setTimeout(function  () {
					// taking a rondom number multiply it by ten to give it a whole number then round to make it only a whole number
					var randomNumber = Math.round (Math.random()*10);
					// the string is just a number but the words are a variable and they will plug the numbers in ???? 
					// shows you the random number in your online viewer					
					console.log('randomNumber:', randomNumber)
					// sucess
					if (randomNumber > 5) {
						// do something
						changeState(4);

					} else {
						changeState(5) 
						// oh no!!!
						// do something else
					}
			// there needs to be a comma here
			} 2000);
	};
}
// how to redirect to new site, html in html file
// setTimeout(function () {
// 	location.href = 'new site';
// }, 2000);

