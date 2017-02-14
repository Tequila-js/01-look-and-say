function lookAndSay(n){
var n = '11112213133';
var test = true;

return String(n).split('').filter(function(v,i,a) {
  test = test ? v == a[0] : test;
  return !test;
}).join('') ;
}