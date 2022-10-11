//
// Functions for Fizz Buzz
//

function getValues() {
  let firstFactor = document.getElementById("firstFactor").value;
  let secondFactor = document.getElementById("secondFactor").value;
  let stopValue = document.getElementById("stopValue").value;

  firstFactor = parseInt(firstFactor);
  secondFactor = parseInt(secondFactor);

  if (Number.isInteger(firstFactor) && Number.isInteger(secondFactor)) {
    let numbers = generateFizzBuzz(firstFactor, secondFactor, stopValue);
    displayFizzBuzz(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter only integers for first and second factors.",
    });
  }
}

function generateFizzBuzz(first, second, stop) {
  let alNumArray = [];
  for (let i = 1; i <= stop; i++) {
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

// function displayFizzBuzz(items) {
//   let length = items.length;
//   let templateRows = "";
//   for (let i = 0; i < length; i++) {
//     let number = items[i];
//     templateRows += `<tr><td>${number}</td></tr>`;
//   }
//   document.getElementById("results").innerHTML = templateRows;
// }

function displayFizzBuzz(items) {
  let length = items.length;
  let className = "nonFactor";
  let templateRows = "";
  for (let i = 0; i < length; i++) {
    let number = items[i];

    if (number == "Fizz") {
      className = "bg-warning";
    } else if (number == "Buzz") {
      className = "bg-dark text-light";
    } else if (number == "FizzBuzz") {
      className = "bg-danger text-warning";
    } else className = "table-";

    if (i % 5 == 0) {
      templateRows += "<tr>";
    }
    templateRows += `<td class="${className}"> ${number} </td>`;

    if ((i + 1) % 10 == 0) {
      templateRows += "</tr>";
    }
  }

  document.getElementById("results").innerHTML = templateRows;
}
