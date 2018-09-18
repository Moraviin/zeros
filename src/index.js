module.exports = function getZerosCount(n) {
res=0; 
while(n > 0){
  n /= 5;
  n=Math.floor(n);
  res += n;
}
return res;
}
