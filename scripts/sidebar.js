let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});

function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  console.log(touchstartX - touchendX < -100)
  if (touchendX - touchstartX < -100) {
    sidebar.classList.remove("open");
  }
  if (touchendX > touchstartX && touchstartX - touchendX < -100) { //todo ZMIENIC WARTOSCI
    sidebar.classList.add("open");
  }
}

sidebar.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

sidebar.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})


$( ".link-list" ).hover(
  function() {
    $( ".link-list" ).addClass("open")
    $( ".link-list" ).removeClass("closed")
    $( ".bxs-chevron-down" ).addClass("bx-rotate-180")
},
function() {
  $( ".link-list" ).removeClass("open")
  $( ".link-list" ).addClass("closed")
  $( ".bxs-chevron-down" ).removeClass("bx-rotate-180")
}
  )