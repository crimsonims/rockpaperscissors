//rock paper scissors
let human_score = 0
let computer_score = 0

function getHumanChoice(){
  let prom = prompt("rock, paper or scissors") 
  return prom.toLowerCase()
}
function getComputerChoice(){
  let x = Math.random(0,3)
  choice = Math.floor(x*3)
  if (choice == 0){
    return "rock"
  }
  if (choice == 1){
    return "paper"

  }
  if (choice == 2){
    return "scissors"
  }
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice==computerChoice){
alert(`human put ${humanChoice} computer put ${computerChoice} 
  
  its a draw

  score:
  human: ${human_score}
  computer:${computer_score}`
    )
    
  }
  if(humanChoice=="rock"){
    if(computerChoice=="paper"){
      computer_score+=1
alert(`human put ${humanChoice} computer put ${computerChoice}
  
  computer wins
  
    score:
    human: ${human_score}
    computer:${computer_score}`
      )
      
    }
    if(computerChoice=="scissors"){
      human_score+=1
alert(`human put ${humanChoice} computer put ${computerChoice} 
  
  human wins
  
    score:
    human: ${human_score}
    computer:${computer_score}`
      )
      
    }
  }
  if(humanChoice=="paper"){
    if(computerChoice=="rock"){
      human_score+=1
alert(`human put ${humanChoice} computer put ${computerChoice} 
  
  human wins
  
    score:
    human: ${human_score}
    computer:${computer_score}`
      )
      
    }
    if(computerChoice=="scissors")
      
      
      {
        computer_score+=1
  alert(`human put ${humanChoice} computer put ${computerChoice} 
    
    computer wins
    
      score:
      human: ${human_score}
      computer:${computer_score}`
        )
        
      }
  }
  if(humanChoice=="scissors"){
    if(computerChoice=="rock"){
      computer_score+=1
alert(`human put ${humanChoice} computer put ${computerChoice} 
  
  computer wins
  
    score:
    human: ${human_score}
    computer:${computer_score}`
      )
      
    }
    if(computerChoice=="paper"){
      human_score+=1
alert(`human put ${humanChoice} computer put ${computerChoice} 
  
  human wins
  
    score:
    human: ${human_score}
    computer:${computer_score}`
      )
      
    }
    
     
  }

}
  


let repeat = "yes"
while(repeat.toLowerCase()=="yes"){
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  repeat = prompt("do you wanna play more(yes/no)?: ")
  if (repeat == null) {
    repeat = "no"; 
  }
}
//end of rock paper scissors