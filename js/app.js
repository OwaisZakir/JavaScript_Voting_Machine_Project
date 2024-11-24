let participants = [
  {
    ID: 1,
    name: "Owais Zakir",
    vote: 9,
  },
];

let first = document.querySelector("table");
participants.forEach((item) => {
  first.innerHTML += `
      <tr id="row">
          <td><span class="rowNumber">${item.ID}</span></td>
          <td><button id="rowBtn" title = "Click Me To Increase Vote" >${item.name}</button></td>
          <td><span id="voteNumber" class="rowNumber">${item.vote}</span></td>
      </tr>
    `;
});

let rowButtons = document.querySelectorAll("#rowBtn");
rowButtons.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    participants[index].vote += 1;

    let voteNumbers = document.querySelectorAll("#voteNumber");
    voteNumbers[index].textContent = participants[index].vote;
  });
});

let addBtn = document.querySelector("#addParticipant");
addBtn.addEventListener("click", () => {
  let userValue = document.querySelector("#participant").value;
  if (userValue) {
    participants.push({
      ID: participants.length + 1,
      name: userValue,
      vote: 0,
    });

    first.innerHTML += `
        <tr id="row">
          <td><span class="rowNumber">${participants.length}</span></td>
          <td><button id="rowBtn">${userValue}</button></td>
          <td><span id="voteNumber" class="rowNumber">0</span></td>
        </tr>
      `;

    document.querySelector("#participant").value = "";

    let rowButtons = document.querySelectorAll("#rowBtn");
    rowButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        participants[index].vote += 1;

        let voteNumbers = document.querySelectorAll("#voteNumber");
        voteNumbers[index].textContent = participants[index].vote;
      });
    });
  } else {
    alert("Please enter a participant's name.");
  }
});
let reloadBtn = document.querySelector("#reload")

reloadBtn.addEventListener("click",()=>{
  window.location.reload();
})