const fibonacci = n =>
  Array.from({ length: n })
    .reduce(
      (acc, val, i) => acc
            .concat(i > 1 ? acc[i - 1] + acc[i - 2] : i)
      ,[]
    );

console.log(fibonacci(20)); 
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]