let participants = [
  {
    ID: 1,
    name: "Owais Zakir",
    vote: 0,
  },
];
let first = document.querySelector("table");
participants.forEach((item) => {
  first.innerHTML += `
    <tr id = "row">
        <td><span id = "rowNumber">${item.ID}</span></td>
        <td><button id = "rowBtn">${item.name}</button></td>
        <td><span id = "rowNumber">${item.vote}</span></td>
    </tr>
`;
});

let addBtn = document.querySelector("#addParticipant");

addBtn.addEventListener("click", () => {
  let table = document.querySelector("table");
  let userValue = document.querySelector("#participant").value;
  if (userValue) {
    participants.push({
      ID: participants.length + 1,
      name: userValue,
      vote: 0,
    });

    table.innerHTML += `
        <tr id = "row">
          <td>${participants.length}</td>
          <td><button id = "rowBtn">${userValue}</button></td>
          <td>0</td>
        </tr>
      `;

    document.querySelector("#participant").value = "";

    let row = document.querySelectorAll("#rowBtn");
    row.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(btn);
      });
    });
    console.log("ok");
  } else {
    alert("Please enter a participant's name.");
  }
});
