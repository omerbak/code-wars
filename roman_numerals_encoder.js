function solution(number) {
  let resultArr = [];
  while (number > 0) {
    switch (true) {
      case number >= 1000:
        resultArr.push("M");
        number -= 1000;
        break;
      case number >= 900:
        resultArr.push("CM");
        number -= 900;
        break;
      case number >= 500:
        resultArr.push("D");
        number -= 500;
        break;
      case number >= 400:
        resultArr.push("CD");
        number -= 400;
        break;
      case number >= 100:
        resultArr.push("C");
        number -= 100;
        break;
      case number >= 90:
        resultArr.push("XC");
        number -= 90;
        break;
      case number >= 50:
        resultArr.push("L");
        number -= 50;
        break;
      case number >= 40:
        resultArr.push("XL");
        number -= 40;
        break;
      case number >= 10:
        resultArr.push("X");
        number -= 10;
        break;
      case number >= 9:
        resultArr.push("IX");
        number -= 9;
        break;
      case number >= 5:
        resultArr.push("V");
        number -= 5;
        break;
      case number >= 4:
        resultArr.push("IV");
        number -= 4;
        break;
      case number >= 1:
        resultArr.push("I");
        number -= 1;
        break;
      default:
        return "Something went error";
    }
  }
  return resultArr.join("");
}
