import test from 'tape';
import lookAndSay from './app';

const fixture = [
    { start: 1,  n:1,  result:'11' },
    { start: 11,  n:1,  result:'21' },
    { start: 111221,  n:1,  result:'312211' },
    { start: 11, n:2, result:'1211' },
    { start: 111333221, n:1, result:'31332211' },
]

fixture.map(({ start, n, result }) => {
    const name = `with start=${start} and n=${n}, lookAndSay is read off as ${result}`;

    test(name, t => {
      const actual = lookAndSay(start, n);
      const expected = result;

      t.equal(actual, expected);

      t.end();
    });
})
