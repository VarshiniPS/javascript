function guess(){
    var notoguess=56;
    var numofguess=1;
    num=prompt("guess the num");
    if(num>notoguess)
         {
            numofguess++;
    console.log("too large");
         }
        else if(num<notoguess)
            {
                numofguess++;
                console.log("too small");
            }
    else{
        console.log("you guessed it right in "+ numofguess + "attempt(s)");
    }
        
        
    
}

guess();