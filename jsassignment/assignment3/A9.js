function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;

}
    amithab=new
person("amithab","bachan",22,["C"],"24/10/1996",{city:"hydrabad",pincode:"521185"},"false","sr analyst")
    abhisheik=new
person("abhisheik",21,"HTML","08/06/1997","false","jr analyst")
    Aaradhya=new
person("Aaradhya",22,["C"],"24/11/1998",{city:"hydrabad",pincode:"521185"},"false","analyst")
var abhisheik=Object.create(amithab);
var Aaradhya=Object.create(amithab,abhisheik);

print=function()
{
    console.log(amithab);
    console.log(abhisheik.lname);
    console.log(abhisheik.address);
    console.log(Aaradhya.skills)
}();