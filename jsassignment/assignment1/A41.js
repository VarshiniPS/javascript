var rotate = function(nums, k) {
    for (let i = k; i> 0; i--) {
        nums.push(nums.shift()) ;
       
    }
    console.log( nums);
};


rotate([1,2,3,4,5,6],2);
