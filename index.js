
function CheckLove() {
    let YourName= document.getElementById("name1").value.trim();
let CrushName= document.getElementById("name2").value.trim();

let modal = document.getElementById('modal')
let displayScore = document.getElementById('score')
let displayResult = document.getElementById('message')
let action = document.getElementById('action')
let container = document.getElementById('container')
if (YourName === '' || CrushName === '' ) {
    document.getElementById('error').style.display = 'block'
} else {
    let number= Math.random()*100
    let love= Math.floor(number)+1
    container.style.display = 'none' 
    
    let message = ''
    modal.style.display = 'block'
    if (love >= 80) {
       message = YourName + " and " + CrushName + " are a perfect match "
       action.innerHTML = '❤️'
    }
    else if (love >= 50){
     message = YourName + " and " + CrushName + " are a good match " 
     action.innerHTML = '❤️‍🩹' 
    }
    else {
     message = YourName + " and " + CrushName + " are not match "  
     action.innerHTML = '💔'  
    }  
    
   displayResult.innerHTML = message
   displayScore.innerHTML =  love+"%" 
}
 
}
let close = document.getElementById('close')
close.onclick = function(){
    document.getElementById('modal').style.display = 'none' 
    document.getElementById('container').style.display = 'block'
    document.getElementById("name1").value = ''
    document.getElementById("name2").value = ''
    document.getElementById('error').style.display = 'none'
}
