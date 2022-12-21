let on = document.querySelector(".on");
let off = document.querySelector(".off");

on.addEventListener("click", () => {
     let img = document.querySelectorAll('img');
     img.forEach((element, index, array) => {
          element.setAttribute("src", "On.gif");
          on.style.backgroundColor = "rgb(34, 173, 52)";
          off.style.backgroundColor = "rgb(223, 146, 31)";
     })
})

off.addEventListener("click", () => {
     let img = document.querySelectorAll('img');
     img.forEach((element, index, array) => {
          element.setAttribute("src", "Off.gif");
          on.style.backgroundColor = "rgb(223, 146, 31)";
          off.style.backgroundColor = "rgb(34, 173, 52)";
     })
})