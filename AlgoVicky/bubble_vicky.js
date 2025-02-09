const form = document.querySelector("form");
const graph = document.querySelector(".graph");
const submitID = document.getElementById("submit");
let array = [1, 26, 16, 219, 10, 36, 45, 190];
let array1 = [];

// console.log(array);

function bubbleVicky(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[i]) {
          [array[i], array[j]] = [array[j], array[i]];
          let useurIdi = document.getElementById("user" + array[i]);
          let useurIdj = document.getElementById("user" + array[j]);
          // useurIdi.textContent = array[j];
          // useurIdj.textContent = array[i];
          useurIdj.id = "user" + array[i];
          useurIdi.id = "user" + array[j];
          console.log(useurIdi);
          console.log(useurIdj);
          useurIdi.style.height = array[j] + "px";
          useurIdj.style.height = array[i] + "px";
          // console.log(array);
        }
      }
    }, 300);
    // console.log(array);
  }
  //   ================= METHODE SORT
  //   console.log(array.sort((a, b) => a - b));
}

// bubbleVicky(array);

// // console.log(submit);
// ================================
function trieCreergraphique() {
  for (const user of array) {
    let useurId = document.getElementById("user" + user);
    if (!useurId) {
      graph.innerHTML += `
      <span class="spanDysplay" id="user${user}"></span>
      `;
      let useurId = document.getElementById("user" + user);
      // console.log(useurId);
      useurId.style.height = user + "px";
      useurId.style.background = "red";
      useurId.style.display = " inline flex";
      // useurId.style.transform = "rotateX(180deg)";
      useurId.style.width = "10px";
    }
  }
}
// ==================================
trieCreergraphique(array);

submitDisplay.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(saisie.value);
  trieCreergraphique(array);
  bubbleVicky(array);

  // setInterval(trie, 1000);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(typeof saisie.value);
  array.push(Number(saisie.value));
  saisie.value = "";
  console.log(array);
});
