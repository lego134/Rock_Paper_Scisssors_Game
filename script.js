let rpsBtn = document.querySelectorAll(".rpsButton")
let display_user_choice = document.querySelector(".User_choice");
let computerEl = document.querySelector('.Computer_choice');
let RoundEl = document.querySelector(".Round");
let Score_user = document.querySelector("#User_score");
let Score_Computer = document.querySelector("#Computer_score");
let Score_Computer2 = -1;
let Score_user2 = -1;
let currentRoundNumber = 1;
const start = () => { 
  rpsBtn[0].onclick = () =>{
    display_user_choice.innerText = rpsBtn[0].value;
  }
  rpsBtn[1].onclick = () =>{
    display_user_choice.innerText = rpsBtn[1].value;
  }
  rpsBtn[2].onclick = () =>{
    display_user_choice.innerText = rpsBtn[2].value;
  }
    let ComputerArrey = ['Rock','Paper','Scissors'];
 
  let computerGuess = ComputerArrey[Math.floor(Math.random() * ComputerArrey.length)];
  computerEl.innerText = computerGuess
        

      const determineWinner = () => {
      if (rpsBtn[0].value === "Rock" && computerGuess === "Scissors") {
            Score_user2 += 1
            return Score_user.innerText = Score_user2;
      }
    
      if (rpsBtn[2].value === "Scissors" && computerGuess === "Paper") {
        Score_user2 += 1
        return Score_user.innerText = Score_user2;
      }
    
      if (rpsBtn[1].value === "Paper" && computerGuess === "Rock") {
        Score_user2 += 1
        return Score_user.innerText = Score_user2;
      }
    
      if (rpsBtn[2].value === "Scissors" && computerGuess === "Rock") {
        Score_Computer2 += 1
            return Score_Computer.innerText = Score_Computer2
      }
    
      if (rpsBtn[1].value === "Paper" && computerGuess === "Scissors") {
        Score_Computer2 += 1
        return Score_Computer.innerText = Score_Computer2
      }
    
      if (rpsBtn[0].value === "Rock" && computerGuess === "Paper") {
        Score_Computer2 += 1
        return Score_Computer.innerText = Score_Computer2
      }
      if (rpsBtn[0].value === computerGuess) {
            Score_user2 += 1
            return Score_user.innerText = Score_user2;
      }
      if (rpsBtn[1].value === computerGuess) {
        Score_user2 += 1
        return Score_user.innerText = Score_user2;
      }
      if (rpsBtn[0].value === computerGuess) {
        Score_user2 += 1
        return Score_user.innerText = Score_user2;
      }
    

      }
      const playGame =() =>{
       determineWinner()
      }
      const advanceRound = () => {
        playGame()
        RoundEl.innerText = "Round: " + currentRoundNumber++;
      }
      advanceRound()
}
start()