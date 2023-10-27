// -------------- Locale storeg and validation ---------------

let First_Name = document.querySelector("#first_name");
let Last_Name = document.querySelector("#last_name");
let Phone_Number = document.querySelector("#phone_number");
let Email = document.querySelector("#email");
let message_contact = document.querySelector("#message-contact");
// -è----------------

let users = JSON.parse(localStorage.getItem("object")) || [];

function check() {
  let user = {
    F: First_Name.value,
    L: Last_Name.value,
    Ph: Phone_Number.value,
    E: Email.value,
    M: message_contact.value,
  };
  users.push(user);
  console.log(users);
  localStorage.setItem("object", JSON.stringify(users));
}


function showUser() {
  
  var tableContent = "";

  for (let index = 0; index < users.length; index++) {
    //users[index][0].split(",");
    let arrr = users[index];
  
    tableContent += `
    <tr>
        <th>${arrr.F}</th>
        <th>${arrr.L}</th>
        <th>${arrr.Ph}</th>
        <th>${arrr.E}</th>
        <th>${arrr.M}</th>
    </tr> `;
  }

  document.querySelector("#showContactData table tbody").innerHTML = tableContent;
  showDivContact();
}

function showDivContact() {
  let div = document.getElementById("showContactData");
  div.classList.remove("hideContactDetail");
  div.classList.add('showContactData');
}

function hideDivContact() {
  let div = document.getElementById("showContactData");
  div.classList.add("hideContactDetail");
  div.classList.remove('showContactData');
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

//--------------- incre/decre---------------------

function decrementEvent(quantiteId, prixId, prixProduit) {
  const Qnt = document.getElementById(quantiteId);
  const prix = document.getElementById(prixId);

  if (Qnt.innerText > 1) {
    Qnt.innerText = parseInt(Qnt.innerText) - 1;
    prix.innerText = parseInt(prix.innerText) - prixProduit;
  }
}
function incrementEvent(quantiteId, prixId, prixProduit) {
  const Qnt = document.getElementById(quantiteId);
  const prix = document.getElementById(prixId);

  Qnt.innerText = parseInt(Qnt.innerText) + 1;
  prix.innerText = parseInt(prix.innerText) + prixProduit;
}

