/**
 * Created by Jonathan_Del_Toro on 14/02/2017.
 */
function lookAndSay(number,times = 1){
    let result = number.toString();
    let temp = '', count = 0, index = 0;
    const reducer = (acc,element,indexReducer) => {
        (indexReducer===0)?(temp = '', count = 0, index = 0):'';
        if(temp !== element){
            temp = element;
            count = 1;
            index ++;
        }else{
            count++;
        }
        acc[index] = '' + count + temp;
        return acc;
    }
    while(times>=1){
        result = result.split('').reduce(reducer,[]).join('');
        times--;
    }
    return result;
}
console.log('Testing 11,1 should be 21: ',lookAndSay(11,1));
console.log('Testing 11,2 should be 1211: ',lookAndSay(11,2));
console.log('Testing 11,3 should be 111221: ',lookAndSay(11,3));