var arr=[1,2,3,4,5];
var flag=0;
function check(x){
for(i=0;i<arr.length;i++)
{
    if(x==arr[i])
    {
        flag=1;
    }
    
}

if(flag==1)
console.log("element found");
else
console.log("element not found");
}

check(8);