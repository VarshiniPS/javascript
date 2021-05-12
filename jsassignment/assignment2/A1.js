function double(x)
{
    var doubleres=x*2;
    return doubleres;
}

function square(x){
    var squareres=x*x;
    return squareres;
}

function composedValue(a,b,c){
    var value=b(c);
    var ans=a(value);
    return ans;
}

g=composedValue(square,double,5);
document.write(g);
/*
var f1=function(value1){
    var value=parseInt(value1);
    function compose(f1,f2){
        console.log(f1(f2(value)));
    }
    compose(square,double);
}
var f2=function(value1){
    var value=parseInt(value1);
    function compose(f1,f2){
        console.log(f1(f2(value)));
    }
    compose( double,square);
}

function isEven(value){
    return (value%2 ==0);
}

find=function(x,y)
{
    if (y == isEven)
    for (i=0; i<x.length;i++)
    {
        if (isEven(x[i]) == true)
        return x[i];
    }
        
}

function map(x,y){
    var out=[];
    if(y == square)
        for (i=0;i<x.length;i++)
            out.push(square(x[i]));
    if(y == Math.sqrt)
    for (i=0;i<x.length;i++)
            out.push(Math.sqrt(x[i]));
    return out;
}*/