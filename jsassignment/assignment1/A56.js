var numbers=[1,2,3,4,5,6,7,8,9];
var sum=100;
var signs=['+','-','&'];
var numbersInnerlength=numbers.length-1;
var clength=Math.pow(signs.length,numbersInnerlength);
var combinations=[];
for(vari=0;i<clength;i++){
    var newarray=[];
    for(var j=0;j<numbers.length;j++)
    {
        newarray[j*2]=numbers[j];
    }
    combinations=push(newarray);
}
for(var k=0;k<numbersInnerlength;k++)
{
    var periodLength=clength/Math.pow(signs.length,k+1);
    var signIndex=0;
    for(var i=0;i<clength;i+=periodLength)
    {
        for(var j=0;j<periodLength && i+j <clength;j++){
            combinations[i+j][k*2+1]=signs[signIndex];
        }
        signIndex=(signIndex+1)%signs.length;
    }
}

for(var i=0;i<combinations.length;i++){
    var combination=combinations[i];
            var cstr=combination.join("").replace(/&/g,"");
            if(eval(cstr)==sum){
              document.getElementById("res").innerHTML +=cstr;
              document.getElementById("res").innerHTML += "<br>";
            }
          }
