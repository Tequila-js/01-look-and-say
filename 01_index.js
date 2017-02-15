function lookAndSay(number, iterations) {
  return iterations <= 1? processNumber(`${number}`): lookAndSay(processNumber(`${number}`), iterations - 1);

  function processNumber(number) {
    let [str, result, current, counter] = [number.split(''), [], null, 0], total = str.length;

    str.forEach((item, index) => {
      if (index === 0) [current, counter] = [item, 1];
      else if (item != current) (result.push(`${counter}${current}`), [current, counter] = [item, 1]);
      else counter += 1;

      if (index == total - 1) result.push(`${counter}${current}`);
    });
    return result.join('');
  }
}

console.log('Testing: lookAndSay(1, 1)');
console.log( lookAndSay(1, 1) );
console.log('Testing: lookAndSay(11, 1)');
console.log( lookAndSay(11, 1) );
console.log('Testing: lookAndSay(111221, 1)');
console.log( lookAndSay(111221, 1) );
console.log('Testing: lookAndSay(11, 2)');
console.log( lookAndSay(11, 2) );
console.log('Testing: lookAndSay(11, 3)');
console.log( lookAndSay(11, 3) );
