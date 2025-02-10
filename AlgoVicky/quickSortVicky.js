// let array3 = [1, 167, 28, 16, 190, 33, 12, 88, 10];
// let array3 = [
//   1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
// ];

function quickSortvicky(array3) {
  // if (array.length === 1) {
  //   return array;
  // }
  if (array3.length === 1) {
    console.log("test");

    return array3;
  }
  console.log(array3);
  // const pivot = array3[array3.length - 1];

  // let array2Left = [];
  // let array2Right = [];
  const pivot = array3[array3.length - 1];
  console.log(pivot);

  let array2Left = [];
  let array2Right = [];
  // for (let i = 0; i < array3.length; i++) {
  for (let i = 0; i < array3.length - 1; i++) {
    // array3[i] < pivot
    //   ? array2Left.push(array3[i])
    //   : array2Right.push(array3[i]);

    array3[i] < pivot
      ? array2Left.push(array3[i])
      : array2Right.push(array3[i]);
    // console.log(array2);
  }

  if (array2Left.length > 0 && array2Right.length > 0) {
    // console.log(array2Left, pivot, array2Right);

    return [
      ...quickSortvicky(array2Left),
      pivot,
      ...quickSortvicky(array2Right),
    ];
    // } else if (array2Left.length > 0) {
    //   console.log(array2Left, pivot);
    //   return [...quickSortvicky(array2Left), pivot];
  } else if (array2Left.length > 0) {
    console.log(array2Left);
    return [...quickSortvicky(array2Left), pivot];
  } else {
    console.log(array2Right);
    return [...quickSortvicky(array2Right)];
    return [pivot, ...quickSort(arrRight)];
  }
}

console.log(
  quickSortvicky([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 93,
  ])
  // quickSortvicky(array3)
);
// quickSortvicky(array);
