var random1 = document.querySelector('.darth-sidious .char-score');
var random2 = document.querySelector('.darth-maul .char-score');
var random3 = document.querySelector('.obi-wan .char-score');
var random4 = document.querySelector('.luke-skywalker .char-score');


function randomNumber(){
    random1.innerHTML = Math.floor(Math.random()*(300-100)+100);
    random2.innerHTML = Math.floor(Math.random()*(300-100)+100);
    random3.innerHTML = Math.floor(Math.random()*(300-100)+100);
    random4.innerHTML = Math.floor(Math.random()*(300-100)+100);
}
randomNumber();
var  img = document.querySelectorAll('.character');
var chosenOne = document.querySelector('#selected-character');
var defender = document.querySelector('#defender');
img.forEach(e => {
    e.addEventListener('click',()=> {
        selectedChar = e.innerHTML
        if(chosenOne.innerHTML == '')
        {
            chosenOne.innerHTML = selectedChar
            e.remove();
            
        }else if(defender.innerHTML == ''){
            defender.innerHTML = selectedChar;
            e.remove();
        }
       
})
})


$("#attack-button").on('click',function(){
    var scoreSelected = document.querySelector('#selected-character .char-score');
    var scoreDefender = document.querySelector('#defender .char-score')
    var attackSelected = Math.floor(Math.random()*(20-10)+10);
    var attackDefender = Math.floor(Math.random()*(20-10)+10);
    scoreSelected.innerHTML -= attackSelected;
    scoreDefender.innerHTML -= attackDefender;
    if(scoreSelected.innerHTML <=0){
        alert('You lost');
        chosenOne.remove()
    }
    if(scoreDefender.innerHTML <= 0){
        alert('You won');
        defender.remove();
    }
    
})

//var attack = document.querySelector('#attack-buton');
