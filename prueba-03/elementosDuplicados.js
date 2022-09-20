var numbers = [1, 3, 3, 4, 4, 4];

function countDuplicate(numbers) {
  var repeated = [];
  var temporary = [];

  numbers.forEach((value, index) => {
    temporary = Object.assign([], numbers);
    temporary.splice(index, 1);

    if (temporary.indexOf(value) != -1 && repeated.indexOf(value) == -1)
      repeated.push(value);
  });

  return repeated;
}

console.log(countDuplicate(numbers));
