var n=prompt("please enter a number");
var choose=prompt("choose btw sum or product");

if(choose=="sum"){
    for(i=1;i<=n;i++)
    {
        var sum=0;
      sum=sum+i;
        console.log(sum);
    }
}else if(choose=="product")
    {
         var prod=1;
        for(i=1;i<=n;i++)
    {
        
        prod=prod*i;
    }
        console.log(prod);
    }

