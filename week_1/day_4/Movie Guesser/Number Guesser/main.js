//Make random number
var randomNumber = Math.floor(Math.random() * 11);

//set up document elements
let submissionElement = document.getElementById("guess");
let outputElement = document.getElementById("output");

//submit button clicked
function submit(){
    console.log(randomNumber);
    console.log(submissionElement.value);
    if (!isValid()) {
        alert("Please make a guess before submitting");
        return;
    }

    if(submissionElement.value == randomNumber){
        outputElement.innerHTML = "That guess is correct. Reload to guess a new number"
    }else{
        outputElement.innerHTML = "That guess was incorrect try again"
    }
}

//checks if submission is valid
function isValid() {
    return submissionElement.value != "";
  }