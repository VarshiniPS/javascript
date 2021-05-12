/*var myarray = [5, 10, 3, 2];

//var output = [];
var sum = 0;

for(i=0;i<myarray.length;i++){
  sum=sum+myarray[i];
  
}
console.log(sum)*/

var cumsum=[] ;
j = [0,1,2,3,4];
function runtot(){
for(var a=0;a<j.length;a++) {
  if(a==0) cumsum[a] = j[0];
  else cumsum[a] = cumsum[a-1] + j[a];
}


console.log(cumsum);
}

runtot();