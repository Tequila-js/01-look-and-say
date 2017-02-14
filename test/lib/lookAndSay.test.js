import test from 'tape';
import lookAndSay from '../../lib/lookAndSay';

const fixture = [
    { start: 1, n: 1, expected: '11' },
    { start: 2, n: 1, expected: '12' },
    { start: 11, n: 2, expected: '21' }
];

test('with start=11 and n=1', t => {
  const start = 1;
  const n = 1;

  const actual = lookAndSay(start, n);
  const expected = '11';
  const msg = `should return ${expected}`;

  t.equal(actual, expected, msg);

  t.end();
});

test('with start=2 and n=1', t => {
  const start = 2;
  const n = 1;

  const actual = lookAndSay(start, n);
  const expected = '12';
  const msg = `should return ${expected}`;

  t.equal(actual, expected, msg);

  t.end();
});

test('with start=11 and n=2', t => {
  const start = 11;
  const n = 2;

  const actual = lookAndSay(start, n);
  const expected = '1211';
  const msg = `should return ${expected}`;

  t.equal(actual, expected, msg);

  t.end();
});
