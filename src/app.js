export default function lookAndSay(num, times = 1) {
  let iteration = 0,
      output = num.toString();

  function tallyNumbers(num){
    const nums = num.split('');
    let counters = [[]],
        position = 0,
        previous = nums[0];

    nums.forEach((number, index) => {
      const current = nums[index];
      if (previous === current) {
        counters[position].push(current);
      } else {
        const next = position + 1;
        counters.push([]);
        counters[next].push(current);
        position++;
      }
      previous = current;
    });

    output = counters.map(count => count.length + count[0]).join('');
  }

  while (iteration < times){
    tallyNumbers(output);
    iteration++;
  }

  return output;
}
