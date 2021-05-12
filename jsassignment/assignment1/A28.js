var hlimit=prompt("enter the higher limit");
for(i=2;i<=hlimit;i++)
{
    flag=0;
    for(j=2;j<i;j++)
        {
            if(i%j==0)
                {
                    flag=1;
                    break;
                }
        }
    if(flag==0){
        console.log(i);
    }
}