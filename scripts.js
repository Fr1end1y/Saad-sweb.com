alert('Welcome to my Website! ;)');
var Creator = "Saad_Sabih";
console.log(Creator);

/*var matha = 2;
var mathb = 4;
var mathc = 8;
var d = matha+mathb+mathc;
console.log(d);

var firstName = "Saad";
var lastName = "Sabih";
var age = 15;
console.log(firstName,"",lastName,"is",age,"years old.");*/
/*
var taka = 80;
var cupon = 1;

 if (taka >= 100){
console.log('Yes,you can buy a pc.');
 }else if  ( cupon = 1 ){
console.log('Yes,you can get a pc with your cupon');
 }else {
console.log('Sorry! you can not buy or get a car.')
 };*/
/* var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day; */

/*for (var i = 1;i <= 100;i++){
console.log(i);
}

for (var i = 1;i <= 100;i++){
	if(i%2==1){
		document.write(i,"<br>")
		console.log(i,"<br>")
	}
}*/
/*
var i = 50;
while (i >= 10){
document.write( i , "<br>" );
i-- ;
}*/
/*var i = 50;
do {
document.write( i , "<br>" );
i-- ;
}while (i >= 10)*/
/*
var country=["Bangladesh","India","Pakistan","USA",69,96]
country[6]="Uganda";
document.getElementById("demo").innerHTML = country[6]; */

/*var country = ["Bangladesh","India","Pakistan","USA",69,96 ]

country[6] = "Uganda";

document.getElementById("demo").innerHTML = country[6];*/
/*
var age=10
age >= 18 ? document.write ("Yes,You can vote!.") : document.write ("No,You can't vote!.") */
/*
function oddName(){
	var i;
	for ( i = 1; i<=20; i++ ){
		if(i%2 == 1){
			document.write(i, "<br>");
		}
	}	
}

oddName();

// Second Function
var x = customFunction(5,6);

function customFunction(a,b){
	return a*b;
}

document.getElementById("demo").innerHTML = x;

*/
/*
function oddNumber(){
	var i;
	for(i=1;i<=20;i++){
		if (i%2==1){
			document.write(i,"<br>");
		}
	}
}
oddNumber();
var x = customFunction(5,6);
function customFunction(a,b){
	return a*b;
}
document.getElementById("demo").innerHTML=x;*/
/*
var car={name:"Lamborgini",color:"black",model:"Aventador"}
document.getElementById("demo").innerHTML = car.name;*/
function weightConverter(numValue){
	document.getElementById("outputKg").innerHTML = numValue/2.204;
}