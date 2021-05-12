var arr=[1,2,3,4,5];
//var sum=0;

//using for loop
/*function Sum(){
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
}

Sum(arr);
console.log(sum);*/

//using while 

/*function whsum(){
var count=0;
var res=0;

while(count<arr.length)
{
res=res+arr[count];

count++;

}
return res;
}

var sum=whsum(arr,arr.length);
console.log(sum);

*/

//using recursion

function recsum(arr){
 if(arr.length===0){
    return 0;
        }
else{
return arr.shift()+recsum(arr);

            }
        
        }

console.log(recsum(arr));