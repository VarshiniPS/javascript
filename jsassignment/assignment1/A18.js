function calculation(a,b,c)
{
    return ((a+b)/c);
}

//res=calculation(1,1,0);infinity
//res=calculation(-1,-1,0);-imfinity
res=calculation(1,-1,0);//NaN
console.log(res);