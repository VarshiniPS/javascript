var yearsprint=0;
var currentyear=2021;

function leapyears(){
    while(yearsprint<20){
        if((currentyear%4===0)&&(!((currentyear%100===0)&&(currentyear%400!==0))))
            {
                document.write(currentyear+"<br>");
                yearsprint++;
                currentyear++;
            }else{
                currentyear++;
            }
        
    }
}

leapyears();