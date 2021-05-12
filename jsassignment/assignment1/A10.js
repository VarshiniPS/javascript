var strings=["1.2","2.3","3.4"];
numberArray=function(strings){
    var size=strings.length;
    var a=[];
    for(i=0;i<size;i++)
        {
            a[i]=parseFloat(strings[i]);
        }
    
    return a;
    
}

var nums=numberArray(strings);
 console.log(nums);   
    