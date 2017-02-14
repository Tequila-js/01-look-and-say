# Look And Say

Let’s define a function `lookAndSay` as follow: read off the digits of the input, counting the number of digits in groups of same digit. Here are some examples of this function:

* lookAndSay(1) = 11 — because 1 is read off as “one 1” or 11
* lookAndSay(11) = 21  — because 11 is read off as “two 1s” or 21.
* lookAndSay(111221) = 312211 — because 111221 is read off as “three 1s, two 2s and one 1” or 312211

When the define a “Look and Say” sequence as repeatedly called the “Look and Say” function on its output.
Given a number `start` and number of iteration `n`, *calculate* the nth number in a “Look and Say” sequence starting with `start`.

Reusing the previous example with start = 11 and n = 2, `LookAndSay(11,2)` would be the same as `lookAndSay(lookAndSay(11)) = 1211`.

Since this sequence grows quickly we will use a string representation for the number in sequence to avoid number overflow.

