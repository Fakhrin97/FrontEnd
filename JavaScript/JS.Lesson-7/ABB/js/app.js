var search=document.querySelector('.search-logo')

search.addEventListener('click',()=>{
    var inp=document.querySelector('#search-inp')
    inp.classList.toggle('active') 
})

var lang=document.querySelector('#lang')

lang.addEventListener('click',()=>{
    var langIcon=document.querySelector('#lang i')
    langIcon.classList.toggle('avtive-lang')

    var selectLang=document.querySelector('#select-lang')
    selectLang.classList.toggle('active')
})


var menuIcon=document.querySelector('#menu')
console.log(menuIcon);
menuIcon.addEventListener('click',function(){
    
    var menuBar=document.querySelector('.menu-bar')
    menuBar.classList.toggle('active-bar')
})


var searchphone=document.querySelector('#hhh')

searchphone.addEventListener('click',()=>{
    var inp1=document.querySelector('#search-inp')
    inp1.classList.toggle('active') 
})
