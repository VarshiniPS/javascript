var largestTolken=function(string){
    var count=0;
    var out="";
    for (i=0;i<string.length;i++)
    {
    if(string[i] =="a" || string[i] =="b" )
 {
     count=0
     out ="";
     } 
     else
     ++count;
    out +=string[i];
    }
    console.log(out);
    console.log(count);
    return out;
    }
    
    largestTolken("abrefvuygvabaknaaabbhjjagnjkk");