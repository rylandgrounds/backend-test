const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Hours? ", function (h) {
  rl.question("Minutes? ", function (m) {
    console.log(timeConversion(h, m));
    rl.close();
  });
});
rl.on("close", function () {
  console.log("\n");
  process.exit(0);
});
function timeConversion(h, m) {
  h = parseInt(h);
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eightteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  if (m == 0 || 00) return `${words[h]} o' clock`;
  else if (!m) return `${words[h]} o' clock`;
  else if (m < 30) return `${words[m]} minutes past ${words[h]}!`;
  else if (m > 30) return `${words[60 - m]} minutes until ${words[h++]}!`;
  else if (m == 15) return `It's a quarter past ${words[h]}!`;
  else if (m == 45) return `It's a quarter to ${words[h++]}!`;
}
