

function Check(){
    var text=document.getElementById("text").value
    var no=text.slice(-3,-2)
    
    console.log(no)
    if(no==1){
        document.body.style.background='yellow'
        document.getElementById('schedule').innerHTML=text
    }
    else if(no==2){
        document.body.style.background='red'
        document.getElementById('schedule').innerHTML=text
    }
    else if(no==3){
        document.body.style.background='black'
        document.getElementById('schedule').innerHTML=text
        document.getElementById('schedule').style.color='white'


    }
    else{
        document.body.style.background='white'
    }
    
    
}