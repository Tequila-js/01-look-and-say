function lookAndSay(ins,times=1){
  let res = '';

  while(times>0){

    ins = ins+res;
    res = '';
    let current = ins[0];
    let count = 0;
    for (var i = 0; i < ins.length;   i++) {

      if(ins[i]===current){
        count++;
      }else{
        res = res+count+''+current;
        count = 0;
        current = ins[i];
          i--;
      }

      if(i == ins.length-1){
          res = res+count+''+current;
      }

    }

    ins = '';
    times--;
  }

  return res;

}

console.log(lookAndSay(11552));
//212512
