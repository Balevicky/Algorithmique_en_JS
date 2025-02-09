let array1 = [1, 26, 16, 219, 10, 36, 45, 190, 2, 200, 6, 17, 0];

function sectionSort(array1) {}
for (let i = 0; i < array1.length; i++) {
  let indexMin = i;
  for (let j = i + 1; j < array1.length; j++) {
    if (array1[j] > array1[i]) {
      indexMin = j;
      [array1[i], array1[j]] = [array1[j], array1[i]];
      console.log(array1);
    }
  }
}
