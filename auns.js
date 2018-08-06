console.log(window.innerWidth);  ////uzzināsim ekrāna iekšējo platumu un garumu.... mainās līdz ar brauzera izmēru
console.log(window.innerHeight);

console.log(window.outerWidth); //// ārējais platums

console.log(window.location.replace);  //// maina atrāsanas adresi!

localStorage.setItem("test" ,1000);  //// saglabā brauzera iekšējā atmiņā - lai nav katru reizi no jauna jaļejuplādē no servera- glabājās ļoti ilgi - piemēram youtube visu laiku glabā info par defaulto izvēlēto izšķirtspēju

sessionStorage.setItem("sesssion", "My session"); /// saglabā brauzera iekšējā atminā, bet tikai uz vienu sesiju!!!

console.log(window.document);  //// izvada konsolē visu html dokumentu
console.log(window.document.body.children[0]); ///izvada bodija pirmo elementu!!!!
console.log(window.document.body.children[0].children[0]); //// izvada bodija mantinieka - mantinieka pirmo elementu!


console.log(window.document.body.children[0].children[0]. textContent="somthing else"); ////izmaina saturu caur Javascriptu

window.document.getElementById("sssasaead"). innerText= "some shape"; ////atrod elemntu ppēc viņa ID un piešķir viņam vertibu

window.document.getElementById("sssasaead"). style.backgroundColor="red"; ////atrod elementu pēc ID un caur stile piešķir css stilu


var btn= document.querySelector(button);
btn.onclick = function(){}
 
