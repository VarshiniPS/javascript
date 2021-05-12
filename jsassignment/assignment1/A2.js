function max(n1,n2,n3)
{
    var res=(n1 > n2) ?(n1 > n3 ? n1 : n3) :(n2 > n3 ? n2 : n3);
    console.log(res);
}
max(4,8,6);