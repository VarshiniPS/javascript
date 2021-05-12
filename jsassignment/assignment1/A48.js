/*var a=function(arr){
size=arr.length

for(i=1;i<((size)+2);i++)
{
    for(n=1;n<5;n++)
    {
    console.log(arr[i]);   
    }
console.log('<br/>');
}
}
a(["hello","world","in","a","frame"]);
*/

var i, j, k;
var n = 9;
for (i = 0; i <= n; i++) {
for (j = 1; j <= i; ++j)
document.write(j);
for (k = n - i; k >= 1; k--)
document.write("*");
document.write('<br/>');
}
