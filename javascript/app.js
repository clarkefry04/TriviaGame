var welcomePage;
var mainContent; //var that stores most of the html content for the page
var qT; //question timer
var counter;
var score = 0; //number of correct answers
var incorrect = 0; //number of incorrect answers
var unanswered = 0; //number of unanswered questions
var i = -1 //Counter used to iterate through questions and check answers
var setQuesTimer;
var countDown;

function startGame() {
	numGuesses = 9;
	score = 0;
	incorrect = 0;
	welcomePage =  "<div id='welcoming'><h1>Royals Trivia!</h1><br><p>Please Press 'Start Game' to begin.</p><div class='button'><button class='btn btn-info btn-warning' id='startGame'>Start Game</button></div></div>";
	$("#quiz").html(welcomePage);
}

//on click for start button
	$("#quiz").on("click", "#startGame", function(){
		i++;
		showQuestion();
	});

	$("#quiz").on("click", ".answer", function(){		
		clearInterval(countDown); //onClick for comparing questions and answers
		response = $(this).text();
		console.log(response);
		
		 if(response === questionList[i].answer){
			correct();
		}	
			else {
				wrong();
			}	
	});


startGame();


function timer() {
countDown = setInterval(decrement, 1000);
qT = 16;
	 function decrement() {
		if (qT>0) {
			qT--;
			$(".timer").html("<h2 class='timeID'>Time:</h2><h3 class ='timeID'>" + qT + "</h3>")
		}
		if (qT === 0) {
			clearInterval(countDown);
			$(".timer").html("<h2>Times Up!</h2>");
			outOfTime();
		}
	}
};

function showQuestion() {

	clearTimeout(setQuesTimer);
	timer();
	mainContent = "<div class='question'><h2 class='quest'>" + questionList[i].question + "</h2></div>" + "<div id='answers'>" + "<h3 class='first answer'> A) " + answerList[i][0] + "</h3><h3 class='answer'> B) " + answerList[i][1] +  "</h3><h3 class='answer'> C) " + answerList[i][2] + "</h3><h3 class='answer'> D) " + answerList[i][3] + "</h3></div>";
	$("#quiz").html(mainContent);
};

function correct() {
	clearInterval(countDown);
	setQuesTimer = setTimeout(showQuestion, 3000);
	score++;
	mainContent = "<h1>Congratulations!<br><br>" + questionList[i].answer + " is correct!";
	$("#quiz").html(mainContent);
	if (i<11) {
		i++;
	}
	else {
		endGame();
	}
};

function wrong(){
	clearInterval(countDown);
 	var setQuesTimer = setTimeout(showQuestion, 3000);
 	incorrect++;
 	mainContent = "<h1><br>Sorry!</h1><br><h2> The correct answer was " + questionList[i].answer + ".</h2>"
 	$("#quiz").html(mainContent);
 	if (i<11) {
		i++;
	}
	else {
		endGame();
	}
};

function outOfTime() {
	clearInterval(countDown);
	unanswered++;
	mainContent = "<h1>Whoops!</h1><p>Looks like you ran out of time.</p>";
	$("#quiz").html(mainContent);
			i++;
	setTimeout(showQuestion, 3000);
};

function endGame() {
	clearInterval(countDown);
	clearTimeout(setQuesTimer);
	mainContent = "<h1>Congratulations!</h1><h1 class='endGame'>You answered: " + score + " correct!</h1><h1 class='endGame'>You missed: " + incorrect + "</h1><h1 class='endGame'>Time Expired: " + unanswered + "</h1><br><div class='button'><button class='btn btn-info btn-warning' id='reset'>Reset Game</button></div></div>"
	$(".timer").html(" ");
	$("#quiz").html(mainContent);
 	$("#quiz").on("click", "#reset", function(){
 		startGame();
 	});
};

var questionList = [
		{ 	question: "What year did the Royals win their first World Series?",
			answer: " A) 1985"
		},
		{
			question: "What Royal led the A.L. in batting average in 1976, 1980 and 1990?",
			answer : " B) George Brett"
		},
		{
			question:"Who currently holds the Royals home run record?",
			answer : " A) Mike Moustakas"
		},
		{
			question:"Who recorded the last out of the 2015 World Series?",
			answer: " D) Wade Davis"
		},
		{	question:"Who was MVP of the 2015 World Series?",
			answer : " C) Salvador Perez"
		},
		{	question:"Who was the last Royals pitcher to win a Cy Young?",
			answer: " B) Zach Greinke"
		} ,
		{	question:"Who led the Royals in steals in 2017?",
			answer: " C) Whit Merrifield"
		},
		{
			question:"How many consecutive games did the Royals win in the 2014 Postseason?", 
			answer: " C) 8"
		},
		{
			question:"How many home runs did Mike Moustakas hit in the 2014 Posteason?", 
			answer: " C) 5"
		},
		{	question:"Who is the current GM of the Royals?",
			answer: " D) Dayton Moore"
		},
		{	question:"What is the name of the all time winningest manager in Royals history?",
			answer: " B) Ned Yost"
		},
		{	question:"What starting NFL quarterback is Ned Yost neighbors and friends with?", 
			answer: " A) Matt Ryan"
		}
	];
//array of answers wherein one of the choices in each array will return 
//a boolean = true when compared to the questionList[i].answer
var answerList = [
		["1985", "2015", "2014", "1980"],
		["Frank White", "George Brett", "Mike Sweeney", "Eric Hosmer" ],
		["Mike Moustakas", "Steve Balboni", "Alex Gordon", "Jonny Damon"],
		["Greg Holland", "Yordano Ventura", "Kelvin Herrera", "Wade Davis"],
		["Eric Hosmer", "Lorenzo Cain", "Salvador Perez", "Alcides Escobar"],
		["Wade Davis", "Zach Greinke", "Gil Meche", "Brett Saberhagen"],
		["Terrance Gore", "Jerrod Dyson","Whit Merrifield", "Lorenzo Cain"],
		["6", "2", "8", "5" ],
		["1", "7", "5", "3"],
		["Ned Yost", "Andy Reid", "David Glass", "Dayton Moore"],
		["Tony Pena", "Ned Yost", "Bob Lemon", "Dick Howser"],
		["Matt Ryan", "Aaron Rodgers", "Alex Smith","Eli Manning"],
];


















