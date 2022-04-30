var menuImage = document.getElementById("mainMenuImg");
var menuDiv = document.getElementById("menuDiv");
var bodyX = document.getElementById("mainBody");
var screenCover = document.getElementById("screenCover");

menuImage.addEventListener("click", toggleMenu);

screenCover.addEventListener("click", toggleMenu);

var xmlgd = 0;
function toggleMenu()
{
  if(xmlgd === 0)
  {
   menuDiv.style.left="0";
   xmlgd=1;
   bodyX.style.position="fixed";
   screenCover.style.display="inline-block";
  }
  else{
    menuDiv.style.left ="-300px";
    xmlgd=0;
    bodyX.style.position="static";
    screenCover.style.display="none";
  }
  
}
