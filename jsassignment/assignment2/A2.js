function double(x)
{
    var doubleres=x*2;
    return doubleres;
}

function square(x){
    var squareres=x*x;
    return squareres;
}

function composedValue(a,b){
    function z(m){
    val1=b(m);
    val2=a(val1);
    return val2;
}
return z;

}

f1=composedValue(square,double);
document.write(f1(10));