let Button1 = document.getElementById("buttonA");
let button2 = document.getElementById("buttonB1");

Button1.onclick = function(){
Button1.style.display = "none";
button2.style.display = "block";

let A = document.createElement("p");
let B = document.createElement("p");
let C = document.createElement("p");
let D = document.createElement("p");
A.innerHTML ="ABDESSALAM STAILI";
B.innerHTML ="NM :  0646906318";
C.innerHTML ="MALADIE :";
D.innerHTML = "GMAIL : A.STAILI@studient.youcode";
document.getElementById("A").appendChild(A);
document.getElementById("A").appendChild(B);
document.getElementById("A").appendChild(C);
document.getElementById("A").appendChild(D);
button2.onclick = function(){
    window.open("page-doctor.html","_self");
}


}


let butA = document.getElementById("but1");
let butB = document.getElementById("but2");

butA.onclick =function(){
    
}
butB.onclick =function(){
    window.open("Patient.html","_self");
}

