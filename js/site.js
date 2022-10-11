//
// Functions for Fizz Buzz
//

function getValues() {
  let firstFactor = document.getElementById("firstFactor").value;
  let secondFactor = document.getElementById("secondFactor").value;

  firstFactor = parseInt(firstFactor);
  secondFactor = parseInt(secondFactor);

  if (Number.isInteger(firstFactor) && Number.isInteger(secondFactor)) {
    let numbers = generateFizzBuzz(firstFactor, secondFactor);
    displayFizzBuzz(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter only integers for first and second factors.",
    });
  }
}

function generateFizzBuzz(first, second) {
  let alNumArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i % first == 0 && i % second == 0) {
      alNumArray.push("FizzBuzz");
    } else if (i % first == 0) {
      alNumArray.push("Fizz");
    } else if (i % second == 0) {
      alNumArray.push("Buzz");
    } else {
      alNumArray.push(i);
    }
  }
  return alNumArray;
}

function displayFizzBuzz(items) {
  let length = items.length;
  let className = "even";
  let templateRows = "";
  for (let i = 0; i < length; i++) {
    let number = items[i];
    templateRows += `<tr><td>${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
