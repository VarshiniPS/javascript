var arr1 = [1,4,6];
var arr2= [2,3,5];

function merge(a, b) {
var i = a.length - 1;
var j = b.length - 1;
var k = i + j + 1; //(a.length + b.length - 1) == (i + j + 2 - 1) == (i + j + 1)

while (k >= 0) {
if (a[i] > b[j] || j < 0) {
a[k] = a[i];
i--;
} else {
a[k] = b[j];
j--;
}
k--;
}
return a;
}

console.log(merge(arr1, arr2));

