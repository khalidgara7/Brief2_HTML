// -------------- Locale storeg and validation ---------------

let First_Name  = document.querySelector("#first_name");
let Last_Name  = document.querySelector("#last_name");
let Phone_Number  = document.querySelector("#phone_number");
let Email = document.querySelector("#email");
let message_contact  = document.querySelector("#message-contact");


let users = JSON.parse(localStorage.getItem('object')) || [];
let F,L,Ph,E,M;
let obj =[]
function check(){
let obj1 = [
        F = First_Name.value,
        L = Last_Name.value ,
        Ph = Phone_Number.value ,
        E = Email.value,
        M = message_contact.value
    ]
    obj.push(obj1)
    localStorage.setItem('object',JSON.stringify(obj));
    
}

var test  = "";
let storedData = localStorage.getItem("object");
var tableContent = "";
function showUser(){
    
for (let index = 0; index < users.length; index++) {
    users[index][0].split(',');
    let arrr =users[index]
    tableContent += `
    <tr>
        <th>${arrr[0]}</th>
        <th>${arrr[1]}</th>
        <th>${arrr[2]}</th>
        <th>${arrr[3]}</th>
        <th>${arrr[4]}</th>
    </tr> `;
}
       
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

//--------------- incre/decre---------------------

let dec = document.getElementById("decrement");
let inc = document.getElementById("increment");
let Qnt = document.getElementById("Quantite");
let prix = document.getElementById("prix");

function decrementEvent(){
   Qnt.innerText = parseInt(Qnt.innerText)-1;
   console.log(Qnt.InnerText ,Qnt.innerText);
   prix.innerText = parseInt(prix.innerText) * parseInt(Qnt.innerText)  ;
}
function incrementEvent(){
    Qnt.innerText = parseInt(Qnt.innerText)+1; 
    console.log(Qnt.InnerText ,Qnt.innerText);
    prix.innerText = parseInt(prix.innerText) * parseInt(Qnt.innerText) ;
 }
 console.log("hhhh")