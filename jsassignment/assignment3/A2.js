class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
    Rectangle.prototype.area=function getarea(){
        return this.width*this.height;
    };


const obj=new Rectangle(3,5);

console.log(obj.area());