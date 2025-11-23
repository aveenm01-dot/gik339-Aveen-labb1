/* Före blocket X är undefined, Efter som X har inte värde än. 
S är fel Eftersom finns inte i blocket
och samma sak med Z */


console.log(X);
/*console.log(S);*/
/*console.log(Z);*/
/* Uppgiften2 reflektin punk1:   
Var: fungerar både inne och efter blocket. Var föjler inte blocket gränser, så X finns kvar även när jag går ut ur blocket.
Let: fungerar bara inne i blocket där den är skapad. utanför blocket finns den inte , därför blir det fel om jag  försöker använda S innan och efter blocket.
Const: fungerar också bara inne i blocket, precis som let men skillnaden är bara att värdet får inte ändras , Z fungerar i blocket men ger fel utanför. */

{
  var X = 3;  /*var-variabel*/
  let S = 4; /*let-variabel*/
  const Z = 6; /*const-variabel*/

 /* I blocket X,S,Z fungerar i blocket. */
  console.log(X);
  console.log(S);
  console.log(Z);
}
/* Efter blocket 
X fungerar 
S  och Z ger fel efter blocket.*/
console.log(X);
/*console.log(S);*/
/*console.log(Z);*/


/* Uppgift3: */ 



console.log("'3' == 3:", '3' == 3); /*Här jag jömförar värdena ,`3` strängen omvadlas till ett tal. och då blir `3` == 3 rätt (truthy). */
console.log("'3' === 3:", '3' === 3);// `3` strängen och 3 ser lika ut, men === kollar på typen ,det läser`3´ som en text och den andra 3 är ett tal, så de är inte lika (falsy).//
console.log("NaN === NaN:", NaN === NaN);//NaN betyder att något inte är ett riktigt nummer. och det kan inte jämföra NaN med någonting , därför blir NaN === NaN alltid false.//
console.log("null == undefined:", null == undefined);// När man använder == ser JavaScript null och undefined som samma sak. därför resultatet blir truthy.//
console.log("null === undefined:", null === undefined); // === kollar både värde och typ. Null och undefined har olika typer, så de läser inte som samma och resultatet blir false.//


let result = undefined ? "truthy" : "falsy";
console.log(result);/* När jag testade undefined ? "truthy" : "falsy" förstod jag att JavaScript ser undefind som ett falskt värde. Därför blev resultatet "falsy".


/* Uppgift 4*/
 

 function greet (name){
  return "Hej " +name;
 }
 console.log(greet("Solaf"));
 let resultat = greet ("Evin");
 console.log(resultat);
 /*Den här funktionen tar ett namn och gör om det till texten "Hej"plus namnet.När jag körde funktionenmed Solaf skriver ut Hej Solaf, sen sapade jag resultatet i variablen resultat och när jag loggde den visas Hej Evin.*/
 /*Funktionsdeklaration: det här är det vanligaste sättet att skriva en funktion . Den får ett namn direkt och man kan använda den även om den står längre ner i koden.Det gör allt tydligt och lätt att följa, därför jag har använt den här funktionen.
  Funktionsuttryck: här lägger man funktionen i en variabel, då måste man har skrivit funktionen innan man använder den. 
  Arrowfunktion: Den funkar bra för enkla funktioner men den beter sig lite annorlunda med this , så den passar inte alltid i mer avancerade situationer.*/
 /* del 3: */
 let name ="Lari";
 console.log (name);

 
 {
  console.log(name);
 }
 /* Variabeln name är tillgänglig både utanför och inuti bloket, därför skrivs Lari ut två gånger. */






