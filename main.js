/**
 * Created by Jonathan_Del_Toro on 14/02/2017.
 */
function lookAndSay(number,times = 1){
    let result = number.toString();
    const reducer = (acc,element) => {
        let i = acc.length-1;
        if(i>=0 && acc[i] && acc[i][0] === element){
            acc[i].push(element);
        }else{
            acc.push([element]);
        }
        return acc;
    }
    const counter = element => '' + element.length + element.pop();
    while(times-- >= 1){
        result = result.split('').reduce(reducer,[]).map(counter).join('');
    }
    return result;
}
console.log('Testing 11,1 should be 21: ',lookAndSay(11,1));
console.log('Testing 11,2 should be 1211: ',lookAndSay(11,2));
console.log('Testing 11,3 should be 111221: ',lookAndSay(11,3));
console.log('Testing 222112 should be 322112: ',lookAndSay(222112));