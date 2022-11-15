const buttonElements =document.querySelectorAll("button");
let row=0;
let letter=0;
const wordForTheDay='GREAT'
const wordElements=document.querySelectorAll('.word-row')
let gameOver= false;
let guessedCorrectly=false
buttonElements.forEach((element)=> {
    element.addEventListener('click', function() {
    keypress(element.attributes["data-key"].value);
    });
});

function populateWord(key){
    if (letter< 5){
wordElements[row].querySelectorAll('.word')[letter].innerText= key;
// console.log(wordElements)
letter+=1;
    }
}

function checkWord(){
   
    const letterElements= wordElements[row].querySelectorAll('.word');
    let numOfCorrectAlphabets=0;
    letterElements.forEach((element,index)=>{
        const indexOfLetterInWordOfTheDay= wordForTheDay.toLowerCase().indexOf(element.innerText.toLowerCase());
        if (element.innerText.toLowerCase() === wordForTheDay.toLowerCase()[index]){
            numOfCorrectAlphabets+=1;
            element.classList.add('word-green');
            
            }else if(indexOfLetterInWordOfTheDay>0){
                element.classList.add('word-yellow');
                
            }else{
                element.classList.add('word-grey');
            }


        /*if (indexOfLetterInWordOfTheDay === index){
            element.classList.add('word-green');
            }else if(indexOfLetterInWordOfTheDay>0){
                element.classList.add('word-yellow');
            }else{
                element.classList.add('word-grey');
            }

            all green
            if (element.innerText.toLowerCase() === wordForTheDay.toLowerCase()[index]){
            element.classList.add('word-green');
            }else if(indexOfLetterInWordOfTheDay>0){
                element.classList.add('word-yellow');
            }else{
                element.classList.add('word-grey');
            }
    */
    });

    if(numOfCorrectAlphabets==5){
        gameOver= true;
        guessedCorrectly=true;
        alert('Congratulations! You have guessed the word')
    }
    else if(row==5){
        gameOver=true;
        alert('Better Luck Next time. The word was: '+wordForTheDay)

    }

    

}

function enterWord(){
    if (letter<5){
        alert('Please Enter word of length 5');
    }
     else{
        checkWord();
        row+=1
        letter=0
    }
}

function deleteLetter(){
    const letterElements= wordElements[row].querySelectorAll('.word')
    for (let index = letterElements.length-1; index >= 0; index--) {
        const element = letterElements[index];
        // console.log(element.innerText)
        if(element.innerText != ''){
            element.innerText ='';
            letter -=1;
            break;
        }
        
    }
}

function keypress(key){
    if(!gameOver){
        if (key.toLowerCase()=="enter"){
            enterWord();
        } else if (key.toLowerCase()=="del"){
            deleteLetter();
        }else{
            populateWord(key);
        }
    } else if(gameOver && guessedCorrectly){
        alert('New word comes tomorrow...Please come again Tomorrow')
    }
   
    
    
}