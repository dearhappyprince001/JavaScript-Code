//---------------->Right-Angle Triangle Patterns.

function rightAngleTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}
rightAngleTriangle(5);

//---------------->Inverted Right-Angle Triangle Patterns.

function invertedRightAngleTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}
invertedRightAngleTriangle(5);

//------------------->Pyramid Pattern

function pyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
pyramid(5);

//------------------>Number Triangle Pattern

function numberPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
numberPattern(5);

//------------------->Floyd's Triangle Pattern

function floydPattern(rows) {
  let number = 1;
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += number + " ";
      number++;
    }
    console.log(row);
  }
}
floydPattern(5);

//----------------->Hollow Square Pattern.

function hollowSquarePattern(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
      console.log("* ".repeat(n));
    } else {
      console.log("* " + "  ".repeat(n - 2) + "*");
    }
  }
}
hollowSquarePattern(5);
