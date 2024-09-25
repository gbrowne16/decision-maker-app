var age
function getHouse(){
age =6

var inputBudget=  document.getElementById("budget").value;
var numPeople=  document.getElementById("people").value;
var life=  document.getElementById("lifestyle").value;
var outputBox=  document.getElementById("outputBox").value;
// put pic into html and then use variables to insert when needed
var closet ;
var stables ;  
var niceFarm;
var modFarm;
var pent;
var apartS;
var apartB;
var cabin;

if (inputBudget<100000 && life== "City"){
    closet
}
else if (inputBudget>1000000 && life=="Rural"){
    stables
}
else if(inputBudget>100000000 && life=="Rural"&& numPeople<5){
    modFarm
}
else if(inputBudget>100000000 && life=="Rural"&& numPeople>=5){
    cabin
}
else if(inputBudget>100000000 && life!="Rural"&& numPeople<5){
    apartS
}
else if(inputBudget>100000000 && life!="Rural"&& numPeople>=5){
    apartB
}
else if(inputBudget>100000000 && life=="Rural"&& numPeople<5){
    modFarm
}
else if(inputBudget<=100000000 && life=="Rural"){
    niceFarm
}
else if(inputBudget<=100000000 && life!="Rural"){
    niceFarm
    console.log(h)
}
}