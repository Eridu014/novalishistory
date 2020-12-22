var el=document.getElementById("hamburger");
el.addEventListener('click',expand);

function expand(){
  if($("nav").hasClass("expanded")){
    $("nav").removeClass("expanded");
  }
    else
  $("nav").addClass("expanded");
}