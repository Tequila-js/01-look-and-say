import "babel-polyfill";

function lookAndSay(start, n) {
    return Array(n).fill(0).reduce(acc => look(acc), start);
}

function look(start) {
    const ary = start.toString().split("");

    const groupByDigit = ary.reduce((acc, item) => {
       const previousGroup = acc[acc.length-1] || false;

       if(!previousGroup.hasOwnProperty(item)) {
           return acc.concat({ [item]: 1 });
       }

       return acc.slice(0,-1).concat({
           [item]: previousGroup[item] + 1
       });
    }, []);

    return groupByDigit.reduce((acc, item) => {
        const [key, value] = Object.entries(item)[0];
        return acc + value + key;
    }, "");
}

export default lookAndSay;
