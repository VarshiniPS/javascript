var isSquare = function () {
    for(var i=1;i<=20;i++){
    if(i > 0 && Math.sqrt(i) % 1 === 0){
        console.log(i);
    }
    }
};

isSquare();
