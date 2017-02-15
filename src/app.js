import "babel-polyfill";

function lookAndSay(start, n) {
    return Array(n).fill(0).reduce(acc => {
        return look(acc);
    }, start);
}

function look(start){
    const ary =  start.toString().split("");

    const say = ary.reduce((acc, item, index) => {
       const prev = acc[acc.length-1];
       var obj = {};

       if(index === 0 || !prev.hasOwnProperty(item)) {
           obj[item] = 1;
       }
       else {
           obj[item] = prev[item] + 1;
           return acc.slice(0,-1).concat(obj);
       }

       return acc.concat(obj);

    }, []);

    return say.reduce((acc, item) => {
        const [key, value] = Object.entries(item)[0];
        return acc + value + key;
    }, "");
}

export default lookAndSay;
