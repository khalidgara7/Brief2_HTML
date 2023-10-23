
// --------------- hide et afficher bar de accessoir sur la page index-----------
let buttons = document.getElementsByClassName("accessoire-element");
let reduitButton = document.getElementById("reduit_btn");

reduitButton.addEventListener("click", function () {
  for (let i = 0; i < buttons.length; i++) {
    if (i == 0) continue;

    if (buttons[i].classList.contains("hidden")) {
        buttons[i].classList.remove("hidden");
      } else 
        buttons[i].classList.add("hidden");
  }
});

// ------------------ ajouter  panier-------------
function handlePanier(){
    let panierContent = document.getElementById("panier_content");
    if(panierContent.classList.contains("hidden")){
        panierContent.classList.remove("hidden")    
    }else{
        panierContent.classList.add("hidden")
    }
}

