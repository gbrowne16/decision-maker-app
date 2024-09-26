
function getHouse(inputBudget, numPeople, life){



// put pic into html and then use variables to insert when needed
var closet = "Sourya_Venumbaka_before_1_tagged.webp";
var stables = "download-4.jpg";  
var niceFarm = "61c82819910c6c793c6a7cb1efa39d95.jpg";
var modFarm = "images.jpg";
var pent = "download-1.jpg";
var apartS = "download-3.jpg";
var apartB = "download-2.jpg";
var cabin = "download.jpg";
var house;

if ((inputBudget<100000) && life== "City"){
    house = closet
}
else if ((inputBudget<100000) && life=="Rural"){
    house = stables
}
else if((inputBudget<1000000) && life=="Rural" && numPeople<5){
    console.log("moderate farm house");
    house = modFarm
}
else if((inputBudget<1000000) && life=="Rural"&& numPeople>=5){
    console.log("cabin")
    house = cabin
}
else if((inputBudget<1000000) && life!="Rural"&& numPeople<5){
    house = apartS
}
else if((inputBudget<1000000) && life!="Rural"&& numPeople>=5){
    house = apartB
}

else if((inputBudget>=1000000) && life=="Rural"){
   house = niceFarm
}
else {
   house = pent
}
return house
}



function displayHouse(){
     
var yourHouse = getHouse(document.getElementById("budget").value, document.getElementById("people").value, document.getElementById("lifestyle").value);
console.log(yourHouse);  
document.getElementById("houseImage").src = yourHouse;
}