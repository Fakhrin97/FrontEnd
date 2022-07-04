var mood = document.getElementById("mood");

function Mood() {
  

  if (document.body.style.backgroundColor === "white") {
    
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    mood.style.right = "95%";
    mood.style.transform = "rotate(-720deg)";
    mood.className='fa-solid fa-plug-circle-exclamation'
   
   
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    mood.style.right = "20px";
    mood.style.transform = "rotate(720deg)";
    mood.className='fa-solid fa-lightbulb'  

  }
}
