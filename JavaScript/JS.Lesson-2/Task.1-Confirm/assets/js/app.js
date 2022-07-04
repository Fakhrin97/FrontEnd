



function Ok(){
   if (confirm("Dou You Want Enter Site?") == true) {
      document.getElementById('ok').style.opacity=('1')
      document.getElementById('ok').style.display=('block')
      document.getElementById('btn').style.display=('none')
      document.body.style.background=('black')

    } else {
      document.getElementById('ok').style.opacity=('0')
    }
}