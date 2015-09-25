
	var ans = 
	[
	{"q":"songs/Mitwa.mp3","a":"Mitwa"}, 
	{"q":"songs/Sawan Aaya Hai.mp3","a":"Sawan Aaya Hai"},
	{"q":"songs/Tu Meri.mp3","a":"Tu Meri"},
	{"q":"songs/Tujh Mein Rab Dikhta Hai.mp3","a":"Tujh Mein Rab Dikhta Hai"},
	{"q":"songs/Tum Hi Ho.mp3","a":"Tum Hi Ho"},
	{"q":"songs/Haule Haule.mp3","a":"Haule Haule"},
	{"q":"songs/Jeena Jeena.mp3","a":"Jeena Jeena"},
	{"q":"songs/Kabhi Alvida Naa Kehna.mp3","a":"Kabhi Alvida Naa Kehna"},
	{"q":"songs/Kabhi Khushi Kabhie Gham.mp3","a":"Kabhi Khushie Kabhi Gham"},
	{"q":"songs/Kal Ho Naa Ho.mp3","a":"Kal Ho Naa Ho"},
	{"q":"songs/Kashmir Main Tu Kanyakumari.mp3","a":"Kashmir Main Tu Kanyakumari"},
	{"q":"songs/Kuch Kuch Hota Hai.mp3","a":"Kuch Kuch Hota Hai"},
	{"q":"songs/Main Agar Kahoon.mp3","a":"Main Agar Kahoon"},
	{"q":"songs/Main Hoon Na.mp3","a":"Main Hoon Na"},
	{"q":"songs/Mast Magan.mp3","a":"Mast Magan"},
	{"q":"songs/Mere Khwabon Mein Jo Aaye.mp3","a":"Mere Khwabon Mein Jo Aaye"},
	{"q":"songs/Maa.mp3","a":"Maa"},
	
	];
	var count = 0;
	var time = 180; //word in seconds
	var start = false;
	var over = false;
	var currentAudio = 2;
	var audie1;
	var audie2;
	// var audio = new Audio(ans[0]["q"]);

	// shuffle();
		function getReady()
		{
		audie1 = document.getElementById("myAudio1");
		if(start == false)
		{
			audie1.src = ans[0]["q"];
		}
		audie2 = document.getElementById("myAudio2");
		}
	

		function begin()
		{
			if(start == false)
			{
				// shuffle();
				setInterval(function () {countDown()}, 1000);
				start = true;
				changeSong();
			}
		}
		function shuffle()
		{	
			for(x = 0; x<42;x++)
			{
				var x1 = Math.floor(Math.random()*20);
				var x2 = Math.floor(Math.random()*20);
				swap(x1, x2)
			}

		}
		function swap(x1, x2)
		{
			var temp = ans[x1];
			ans[x1] = ans[x2];
			ans[x2] = temp;
		}
		function reset()
		{
			location.reload();
		}
		function gameOver()
		{
			if(over == false)
			{
				if(ans.length == 0)
				{
					var sec = 60- time%60;
					var min = 3-Math.floor(time/60);
					if (sec < 10)
					{
						var display = min.toString() + ":0" + sec.toString();	
					}
					else{
						var display = min.toString() + ":" + sec.toString();
					}
					$("#message").text("Congratulations! You took " + display + " seconds");
					$("#message").show();
					over = true;
				}
				if(time == 0)
				{
					$("#message").text("Sorry! Times up. You can still keep playing though!");
					$("#message").show();
					over = true;
				}
			}
		}
	    //Validation using Spacebar	
		$("#input").on("keyup", function(event)
			{
				var text = $("#input").val();
				text = text.toLowerCase();
				if(isInArray(text, ans))
				{
					display(ans);
					count = count+1;
					ans.splice(0, 1);
					var id = "#" + (ans.indexOf(text)+1).toString();
					$(id).show();
					$("#input").val(''); 
					gameOver();
					console.log(ans);
					changeSong();
				}
			});

		function isInArray(value, array) {
			return array[0]["a"].toLowerCase() == value;
		}

		function changeSong()
		{
			// audio = new Audio(ans[0]["q"]);

			// audio.src = ans[0]["q"];
			// audio.play();

			// var audie1 = document.getElementById("myAudio1");
			// audie1.src = ans[0]["q"];
			// audie1.play();

			if(currentAudio == 2)
			{
				console.log("case 1");
				audie2.pause();
				audie1.play();
				currentAudio = 1;
				if(ans.length > 1)
				{
					audie2.src = ans[1]["q"];
					audie2.load();
				}
			}
			else
			{
				console.log("case 2");
				audie1.pause();
				audie2.play();
				currentAudio = 2;
				if(ans.length > 1)
					{
						audie1.src = ans[1]["q"];
						audie1.load();
					}
			}
		}
		function skip()
		{
			if(start == true)
			{
					var first = ans.splice(0, 1);
					ans.push(first[0]);
					changeSong();
			}
		}

		function display(array)
		{
			var table = document.getElementById("table");
			var row = table.insertRow();

			var ans = row.insertCell(0);
			ans.innerHTML = (array[0]["a"]);
		}

		function countDown()
		{
			if(time == 0)
			{
				gameOver();
			}
			else if(over == false)
			{
			time = time-1;
			var sec = time%60;
			var min = Math.floor(time/60);
			if (sec < 10)
			{
				var display = min.toString() + ":0" + sec.toString();	
			}
			else{
				var display = min.toString() + ":" + sec.toString();
			}
			$("#timer").text(display)
			}
		}

		function quit()
		{
			window.location = "/";
		}