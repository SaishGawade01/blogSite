var menuImg = document.getElementById("mainMenuImg");
var menuDiv = document.getElementById("menuDiv");
var mainBodyTag = document.getElementById("mainBody");
var screenCover = document.getElementById("screenCover");

menuImg.addEventListener("click", toggleMenu);

screenCover.addEventListener("click", toggleMenu);

var menuStatusCount = 0;

function toggleMenu()
{
  if (menuStatusCount === 0)
  {
    menuDiv.style.left = "0";
    menuStatusCount = 1;
    mainBodyTag.style.overflow = "hidden";
    screenCover.style.display = "inline-block";
  }
  else {
    menuDiv.style.left = "-390px";
    menuStatusCount = 0;
    mainBodyTag.style.overflow = "initial";
    screenCover.style.display = "none";
  }

}
