import "babel-polyfill";

function lookAndSay(start, n) {
    return Array(n).fill(0).reduce(acc => look(acc), start);
}

function look(start) {
    const ary = start.toString().split("");

    const groupByDigit = ary.reduce((group, digit) => {
       const previousGroup = group[group.length-1] || false;

       if(!previousGroup.hasOwnProperty(digit)) {
           return group.concat({ [digit]: 1 });
       }

       return group.slice(0,-1).concat({
           [digit]: previousGroup[digit] + 1
       });
    }, []);

    return groupByDigit.reduce((acc, group) => {
        const [key, value] = Object.entries(group)[0];
        return acc + value + key;
    }, "");
}

export default lookAndSay;
