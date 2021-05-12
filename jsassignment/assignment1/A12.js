var test1=["stop", "quit","exit","quite"];
var test="";
var lengthOfNonQ=function(test1){
    var q=test1.indexOf("/q/");
 console.log(q);
    test=test1[0]+test1[1]+test1[2]+test1[3];
    console.log(test);
    console.log(q);
    if (q == -1){
        return test.length;
    }
    else return test.length-1;
}
var out= lengthOfNonQ(test1);
console.log(out);