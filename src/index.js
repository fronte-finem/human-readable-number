module.exports = function toReadable (number) {
    if (number < 20) return FIRST20[number];

    if (number < 100) {
        let a = number % 10;
        let b = (number - a) / 10;
        let res = TENS[b];
        return a ? `${res} ${toReadable(a)}` : res;
    }

    if (number < 1000) {
        let a = number % 100;
        let b = (number - a) / 100;
        let res = `${FIRST20[b]} hundred`;
        return a ? `${res} ${toReadable(a)}` : res;
    }

    if (number < 10000) {
        let a = number % 1000;
        let b = (number - a) / 1000;
        let res = `${FIRST20[b]} thousand`;
        return a ? `${res} ${toReadable(a)}` : res;
    }

    throw new Error("Not implemented for number > 9999");
}

const TENS = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
}

const FIRST20 = {
    0:  "zero",
    1:  "one",
    2:  "two",
    3:  "three",
    4:  "four",
    5:  "five",
    6:  "six",
    7:  "seven",
    8:  "eight",
    9:  "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
}
