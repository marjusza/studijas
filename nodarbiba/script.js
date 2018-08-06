console.log("Esmu failā!");



var nosaukums = 5;
var y =6;
var t = 667;

console.log(typeof nosaukums);
console.log(typeof teksts);

var long="garais";
console.log(long);
console.log(typeof long);



var tru =true;
console.log(tru);
console.log(typeof tru);


//objekti

var objekts= [1,2,3];  //masīvs -mainīgais ar vairākām veŗtībām
console.log(objekts);
console.log(typeof objekts);

console.log(objekts[1]); ///parādīt vienu elementu no masīva

objekts[2]=null; //izdzēst elementu no masīva
console.log(objekts);

console.log(objekts[1]===objekts[2]);  ///trīs vienādojumzīmes - salīdzina gan vērtību gan to tipus

var ob = {

    name: "Mar",
    phone: "9090",
 }


 console.log(ob);
 console.log(typeof ob);

 console.log(ob.name);
 console.log(typeof ob.name);

var rr = 2;
var ee = 4;
 function calc(){console.log( ee*rr) };
 calc();


 var returnedValue = calc(); ////mainīgajam piešķir vērtību ko atriež funkcija

 function New(x, y) {return x+y;/////funkcija ar ieliktajiem mainīgajiem
}
console.log (New(5,10));


////loģiskās struktūras

/// true =1
///false = 0

var condition= true;

if(condition){console.log("condition executed!!!!!!!!!!!!!!!!!");} else{console.log("false");}

switch(mynumber) {case 30: console.log(30); break;
     case 15: console.log(15);break;}
 


if((1==1)&&(2==2)){console.log("true");} else(console.log("false"));  //// && nozīmē un  - ja 1 ir vienāds ar 1 UNtajā pašā laikā 2 ir vienāds ar 2 tad....

console.log((1==1)||(2==2)); ////  "||" nozimē "vai"  izpildās - ja viens no nosacījumiem izpildījās

console.log((1==1)&&(2==3)||(3==3));  ///true, jo "vai 3==3"

console.log(a==b ? "true" : "false") ///// tas pats IF tikai saisinātais pieraksts!


///// TIPI - primitivie un norādes

//primitivie

var anumber =5;
console.log(anumber);



///norādes tipi

a = {a:5};
b =a;
a = {a:4};

var array = [1,2,3];
var barray = array;
console.log(barray);

array.push(4);

console.log(array);
console.log(barray);  //// būs vienādi 


/// kompetences - scope


var test = "global";
console.log(test);

function localScope(){console.log(test);}

function localScope2(){ var test ="local"; console.log(test);}  //// mainīgais ir pārdefinēts iekšā funkcijā .... un līdz ar to pieder tikai šai funkcijai - ārpus šis funkcijas mainīgais test atkal būs "global"""

