let n = 7;
let x =0;
for(let i=2; i<n/2; i++)
{
    if(n%i==0) x =1;
}
if(x==1) console.log("not prime")
else console.log("Prime")