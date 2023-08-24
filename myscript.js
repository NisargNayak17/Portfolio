window.addEventListener("load",function(){
document.querySelector(".fa-bars").addEventListener("click", openMenu);
document.querySelector(".fa-times").addEventListener("click", closeMenu);


var sidebar = document.getElementById("side");


function closeMenu(){
    sidebar.style.right="-200px";
    document.querySelector(".fa-bars").style.display = "block";
    document.querySelector(".fa-times").style.display = "none";
}

function openMenu(){
    sidebar.style.right="0";
    sidebar.style.display="block";
    document.querySelector(".fa-bars").style.display = "none";
    document.querySelector(".fa-times").style.display = "block";  
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyRvdQVlq8J3Srfe98ECv7S5A-IzwET_wu_bB4oDfoVUT9Jlqt_INne5NybU-zhrYAJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";

       setTimeout(function(){
           msg.innerHTML= "";
        },5000);
        form.reset()

      })
      
      .catch(error => console.error('Error!', error.message))
  })

});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(var i=0;i<tablinks.length;i++){
        tablinks[i].classList.remove("active-link");
    }
    for(var i=0;i<tabcontents.length;i++){
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



