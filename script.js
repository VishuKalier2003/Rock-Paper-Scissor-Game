const start = document.getElementById("start-btn");      // Accessing the start button...

// Event Listener for mouse enter added...
start.addEventListener("mouseenter", () => {
    start.style.animationName = "buttonGlow";
    start.style.animationDuration = "2s";
    start.style.animationDelay = "0.5s";
    start.style.animationIterationCount = "infinite";
});

// Event Listener for mouse leave added...
start.addEventListener("mouseleave", () => {
    start.style.animationName = "buttonGlow";
    start.style.animationDuration = "0.5s";
    start.style.animationDelay = "0.5s";
    start.style.animationIterationCount = "1";
});

// Event Listener for Click added...
start.addEventListener("click", () => {
    document.getElementById("player-div").style.translate = '700px 0px';
    document.getElementById("player-div").style.transitionDuration = '2s';
    document.getElementById("computer-div").style.translate = '-700px 0px';
    document.getElementById("computer-div").style.transitionDuration = '2s';
});

// Accessing buttons of various choices for the Player...
const pRock = document.getElementById("p-rock");
const pPaper = document.getElementById("p-paper");
const pScissor = document.getElementById("p-scissor");

let userChoice;        // Variable for storing User choice...
let computerChoice;     // Variable for storing Computer choice...

// Event Listeners when User clicks any of the above choices...
pRock.addEventListener("click", () => {
    userChoice = 1;
});

pPaper.addEventListener("click", () => {
    userChoice = 2;
});

pScissor.addEventListener("click", () => {
    userChoice = 3;
});

// Function to create random choice for the Computer...
Randomize = () => {computerChoice = Math.floor((Math.random() * 3) + 1);};

let userScore = 0;       // User Score...
let computerScore = 0;   // Computer Score...

// Function to determine Victory...
Victory = () => {
    Randomize();     // Function call...
    if((computerChoice == 1) && (userChoice == 2))
        userScore++;
    else if((computerChoice == 1) && (userChoice == 3))
        computerScore++;
    else if((computerChoice == 2) && (userChoice == 1))
        computerScore++;
    else if((computerChoice == 2) && (userChoice == 3))
        userScore++;
    else if((computerChoice == 3) && (userChoice == 1))
        userScore++;
    else if((computerChoice == 3) && (userChoice == 2))
        computerScore++;
};

// Function to Highlight the Output...
HighLight = () => {
    if (userChoice == 1)
        pRock.style.color = "black";
    else if (userChoice == 2)
        pPaper.style.color = "black";
    else
        pScissor.style.color = "black";
    if (computerChoice == 1)
        document.getElementById("c-rock").style.color = "black";
    else if (computerChoice == 2)
        document.getElementById("c-paper").style.color = "black";
    else
        document.getElementById("c-scissor").style.color = "black";
};

// Reloading the Font after a Game...
FontReload = () => {
    pRock.style.color = "white";
    pPaper.style.color = "white";
    pScissor.style.color = "white";
    document.getElementById("c-rock").style.color = "white";
    document.getElementById("c-paper").style.color = "white";
    document.getElementById("c-scissor").style.color = "white";
};

// Generating the Results of the Matches of Three...
ShowResult = () => {
    Victory();        // Function call...
    document.getElementById("player").innerHTML = userScore;
    document.getElementById("player").style.color = "rgb(255, 0, 0)";
    document.getElementById("computer").innerHTML = computerScore;
    document.getElementById("computer").style.color = "rgb(0, 0, 255)";
    HighLight();     // Function call...
};

// Function to check the number of Matches played...
MatchesPlayed = () => {
    if(played == 4) {
        document.getElementById("reload").style.translate = '0px 700px';
        document.getElementById("reload").transitionDuration = '2s';
        document.getElementById("player-div").style.translate = '-700px 0px';
        document.getElementById("player-div").style.transitionDuration = '2s';
        document.getElementById("computer-div").style.translate = '700px 0px';
        document.getElementById("computer-div").style.transitionDuration = '2s';
        if(userScore > computerScore)
            document.getElementById("reload").innerHTML = "The Winner of the Game is the Player";
        else if(userScore < computerScore)
            document.getElementById("reload").innerHTML = "The Winner of the Game is the Computer";
        else
            document.getElementById("reload").innerHTML = "This Game is a Draw";
    }
    if (played > 4)
        location.reload();     // Reloading the window...
};

let played = 1;
const match = document.getElementById("match");

// Event Listener for Click added to the 'match' id...
match.addEventListener("click", () => {
    FontReload();     // Function call...
    ShowResult();     // Function call...
    played++;
    MatchesPlayed();   // Function call...
});