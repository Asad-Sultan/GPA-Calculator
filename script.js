const allSubjects = [
  "Applied Physics",
  "Programming Fundamentals",
  "Introduction to Logics",
  "Introduction to Communication and Information",
  "English Composition and Comprehension",
];
const inputTypeList = [
  "Assignments",
  "Quizes",
  "Mid",
  "Final",
  "Project",
  "Lab",
];
var selectedSubjects = [];
var removeBtns = [];
var cardsUsed = [];
// var labels = [];

class Subject {
  constructor(name, max, weight, creditHR) {
    this.name = name;
    this.max = max;
    this.weight = weight;
    this.creditHR = creditHR;
  }
}

class ColorPallete {
  constructor() {
    this.vanilla();
  }
  vanilla() {
    document.documentElement.style.setProperty("--colorBackground", "#f3deba");
    document.documentElement.style.setProperty("--colorApp", "#dbc8a7");
    document.documentElement.style.setProperty("--colorInputBackground", "#d3d3d3");
    document.documentElement.style.setProperty("--colorMain", "#abc4aa");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#9ab099");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#606e5f");
    document.documentElement.style.setProperty("--colorBoxShadow", "rbga(17,20,17,0.5)");
    document.documentElement.style.setProperty("--colorText", "#1f1c18");
    document.documentElement.style.setProperty("--colorInputBorders", "#675d50");
  }
  saffron() {
    document.documentElement.style.setProperty("--colorBackground", "#e4dccf");
    document.documentElement.style.setProperty("--colorApp", "#cdc6ba");
    document.documentElement.style.setProperty("--colorInputBackground", "#d3d3d3");
    document.documentElement.style.setProperty("--colorMain", "#ea5455");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#d34c4c");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#bb4344");
    document.documentElement.style.setProperty("--colorBoxShadow", "rbga(23,8,8,0.5)");
    document.documentElement.style.setProperty("--colorText", "#00162e");
    document.documentElement.style.setProperty("--colorInputBorders", "#002b5b");
  }
  fruitCocktail() {
    document.documentElement.style.setProperty("--colorBackground", "#f9ed69");
    document.documentElement.style.setProperty("--colorApp", "#f08a5d");
    document.documentElement.style.setProperty("--colorInputBackground", "#d87c54");
    document.documentElement.style.setProperty("--colorMain", "#b83b5e");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#a63555");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#a63555");
    document.documentElement.style.setProperty("--colorBoxShadow", "rgba(18, 6, 9, 0.5)");
    document.documentElement.style.setProperty("--colorText", "#351638");
    document.documentElement.style.setProperty("--colorInputBorders", "#401a43");
  }
  breeze() {
    document.documentElement.style.setProperty("--colorBackground", "#393e46");
    document.documentElement.style.setProperty("--colorApp", "#222831");
    document.documentElement.style.setProperty("--colorInputBackground", "#2e3238");
    document.documentElement.style.setProperty("--colorMain", "#00adb5");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#008a91");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#33bdc4");
    document.documentElement.style.setProperty("--colorBoxShadow", "rgba(0, 17, 18, 0.5)");
    document.documentElement.style.setProperty("--colorText", "#dddddd");
    document.documentElement.style.setProperty("--colorInputBorders", "#eeeeee");
  }
  dracula() {
    document.documentElement.style.setProperty("--colorBackground", "#413543");
    document.documentElement.style.setProperty("--colorApp", "#2d2727");
    document.documentElement.style.setProperty("--colorInputBackground", "#342a36");
    document.documentElement.style.setProperty("--colorMain", "#8f43ee");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#7236be");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#a569f1");
    document.documentElement.style.setProperty("--colorBoxShadow", "rgba(14, 7, 24, 0.5)");
    document.documentElement.style.setProperty("--colorText", "#f0eb8d");
    document.documentElement.style.setProperty("--colorInputBorders", "#d8d47f");
  }
  sky() {
    document.documentElement.style.setProperty("--colorBackground", "#0f4c75");
    document.documentElement.style.setProperty("--colorApp", "#1b262c");
    document.documentElement.style.setProperty("--colorInputBackground", "#0c3d5e");
    document.documentElement.style.setProperty("--colorMain", "#3282b8");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#286893");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#478fbf");
    document.documentElement.style.setProperty("--colorBoxShadow", "rgba(5, 13, 18, 0.5)");
    document.documentElement.style.setProperty("--colorText", "#bbe1fa");
    document.documentElement.style.setProperty("--colorInputBorders", "#c2e4fb");
  }
}

const color = new ColorPallete();

var subObj = [];
var noOfCards = 0;

subObj.push(
  new Subject("physics", [40, 40, 30, 40, 20], [10, 10, 20, 40, 20], 3)
);

subObj.push(
  new Subject("pf", [40, 40, 40, 60, 10, 10], [10, 10, 20, 40, 10, 10], 4)
);

subObj.push(new Subject("ict", [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], 4));

subObj.push(new Subject("eng", [0, 0, 0, 0], [1, 1, 1, 1], 3));

subObj.push(new Subject("logics", [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], 3));

var changingSubject = subObj[0];
var changingIndex = 0;

function updateMax(element) {
  if (!(document.getElementById("change-txt").value === "")) {
    changingSubject.max[changingIndex] = Number(
      document.getElementById("change-txt").value
    );
    element.innerHTML = " / " + document.getElementById("change-txt").value;
  }

  document.querySelectorAll(".hoveringPrompt").forEach((element) => {
    element.remove();
  });
}

// function addListeners(labels) {
//   labels.forEach((element) => {
//     element.addEventListener("contextmenu", (ev) => {
//       ev.preventDefault();
//       let div = document.createElement("div");
//       let t = document.createElement("input");
//       // let b = document.createElement("button");

//       t.type = "number";
//       t.id = "change-txt";
//       t.className = "change-field";

//       // b.innerHTML = "Change?";
//       // b.id = "change-btn";
//       // b.className = "change-btn btn";
//       div.append(t);
//       // div.append(b);

//       div.className = "hoveringPrompt";
//       div.style.left = ev.clientX.toString() + "px";
//       div.style.top = ev.clientY.toString() + "px";

//       changingIndex = labels.indexOf(element);

//       document.querySelectorAll(".hoveringPrompt").forEach((el) => {
//         el.remove();
//       });

//       document.body.appendChild(div);

//       document.onkeydown = function (evt) {
//         evt = evt || window.event;
//         if ("key" in evt) {
//           if (evt.key === "Enter") {
//             updateMax(element);
//           } else if (evt.key === "Escape") {
//             document.querySelectorAll(".hoveringPrompt").forEach((element) => {
//               element.remove();
//             });
//           }
//         }
//       };

//       document.getElementById("change-btn").onclick = function () {
//         updateMax(element);
//       };
//     });
//   });
// }

function addListenersRemove(removeBtns) {
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = removeBtns.indexOf(btn);
      let btnID = Array.from(btn.id).lastIndexOf("-");
      let newID = "";
      for (let x = btnID + 1; x < btn.id.length; x++) {
        newID += btn.id[x];
      }
      document.getElementById("card-" + newID).remove();
      // document.getElementById("card-" + index).remove();
      document.getElementById("sub").appendChild(cardsUsed[index]);
      cardsUsed.splice(index, 1);
      selectedSubjects.splice(index, 1);
      removeBtns.splice(index, 1);
    });
  });
}

function createInputs(subject) {
  selectedSubjects.push(subject);

  let outerDiv = document.createElement("div");
  let innerDiv = document.createElement("div");
  outerDiv.className = "cardBody";
  outerDiv.id = "card-" + noOfCards;
  innerDiv.className = "cardDiv";

  let subName = "";
  document.querySelectorAll("option").forEach((element) => {
    if (element.value === document.getElementById("sub").value) {
      subName = element.innerHTML;
    }
  });

  let headingDiv = document.createElement("div");
  let heading = document.createElement("h2");
  ``;
  let removeBtn = document.createElement("button");

  headingDiv.className = "card-header";
  heading.innerHTML = subName;
  removeBtn.className = "btn remove-btn";
  removeBtn.id = "remove-btn-" + noOfCards;
  removeBtn.innerHTML = "<ion-icon name='trash-outline'></ion-icon>";

  removeBtns.push(removeBtn);

  headingDiv.appendChild(heading);
  headingDiv.appendChild(removeBtn);

  innerDiv.appendChild(headingDiv);

  let crhrWrapper = document.createElement("div");
  let crhr = document.createElement("h3");
  let crhrNo = document.createElement("span");
  crhrWrapper.className = "crhr-wrapper";
  crhr.innerHTML = "Credit Hours: ";
  crhrNo.innerHTML = subject.creditHR;
  crhrWrapper.appendChild(crhr);
  crhr.appendChild(crhrNo);
  innerDiv.appendChild(crhrWrapper);

  var labels = [];
  for (let i = 0; i < subject.max.length; i++) {
    let containerDiv = document.createElement("div");
    let twoDiv = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");
    let total = document.createElement("label");

    input.type = "number";
    input.id = "criteria-" + i + "-" + noOfCards;
    input.className = "numberBox";
    input.min = 0;
    input.max = subject.max[i];

    total.innerText = " / " + subject.max[i];
    total.title = "Right-click to edit maximum marks";

    label.innerText = inputTypeList[i];
    containerDiv.className = "rowInput";

    labels.push(total);

    twoDiv.append(input);
    twoDiv.append(total);

    containerDiv.appendChild(label);
    containerDiv.appendChild(twoDiv);
    innerDiv.appendChild(containerDiv);
  }
  outerDiv.appendChild(innerDiv);

  let resultDiv = document.createElement("div");
  let marksDiv = document.createElement("div");
  let statmarksLabel = document.createElement("label");
  let marksLabel = document.createElement("label");
  let gradeDiv = document.createElement("div");
  let statgradeLabel = document.createElement("label");
  let gradeLabel = document.createElement("label");

  resultDiv.className = "results";
  marksDiv.className = "marks";

  statmarksLabel.innerHTML = "Marks: ";
  marksLabel.id = "showMarks";
  marksLabel.className = "showMarks";
  marksLabel.innerHTML = "";

  statgradeLabel.innerHTML = "GPA: ";
  gradeLabel.id = "showGrade";
  gradeLabel.className = "showGrade";
  gradeLabel.innerHTML = "";

  marksDiv.appendChild(statmarksLabel);
  marksDiv.appendChild(marksLabel);

  gradeDiv.appendChild(statgradeLabel);
  gradeDiv.appendChild(gradeLabel);

  resultDiv.appendChild(marksDiv);
  resultDiv.appendChild(gradeDiv);

  outerDiv.appendChild(resultDiv);

  document
    .getElementById("app")
    .insertBefore(outerDiv, document.getElementById("calculate-btn-div"));
  // addListeners(labels);
  addListenersRemove(removeBtns);
  noOfCards++;
}

function calculateSubTotal() {
  let totalMarks = [];
  let ids = [];
  //queryselectall the ids of criterias
  let allCards = document.querySelectorAll(".rowInput");
  allCards.forEach(card => {
    ids.push(card.querySelectorAll("input")[0].id);
  });

  idsSep = [];
  let temp = [ids[0]];
  for (let i = 1; i < ids.length; i++) {
    let rainCheck = "";
    for (let j = ids[i].indexOf("-") + 1; j < ids[i].lastIndexOf("-"); j++) {
      rainCheck += ids[i][j];
    }
    if (rainCheck == "0") {
      idsSep.push(temp);
      temp = [];
    }
    temp.push(ids[i]);
  }
  idsSep.push(temp);

  for (let i = 0; i < idsSep.length; i++) {
    let subMarks = [];
    for (let j = 0; j < idsSep[i].length; j++) {
      let value = document.getElementById(idsSep[i][j]);
      subMarks.push(value.value);
    }
    totalMarks.push(subMarks);
  }

  return totalMarks;

  // for (let i = 0; i < subject.max.length; i++) {
  //   let id = "criteria-" + i + "-" + cardNo;
  //   let marks = document.getElementById(id).value;
  //   if (marks < 0) marks = 0;
  //   if (marks > subject.max[i]) marks = subject.max[i];
  //   if (subject.max[i] > 0)
  //     totalMarks += (marks / subject.max[i]) * subject.weight[i];
  // }
  // return totalMarks.toFixed(1);
}

function getGrade(marks) {
  if (marks >= 85) return 4;
  if (marks >= 80) return 4 - 1 / 3;
  if (marks >= 75) return 4 - 2 / 3;
  if (marks >= 71) return 3;
  if (marks >= 68) return 3 - 1 / 3;
  if (marks >= 64) return 3 - 2 / 3;
  if (marks >= 61) return 2;
  if (marks >= 58) return 2 - 1 / 3;
  if (marks >= 54) return 2 - 2 / 3;
  if (marks >= 50) return 1;
  return 0;
}

// createInputs(subObj[0]);

document.getElementById("add-btn").onclick = () => {
  // document.getElementById("cardDiv").innerHTML = "";

  for (let i = 0; i < subObj.length; i++) {
    if (document.getElementById("sub").value === subObj[i].name) {
      changingSubject = subObj[i];
      createInputs(subObj[i]);
    }
  }
  document.querySelectorAll("option").forEach((option) => {
    if (option.value === changingSubject.name) {
      cardsUsed.push(option);
      option.remove();
    }
  });
};

document.getElementById("calculate-btn").onclick = () => {
  let obtainedSubs = [];
  let marks = [];
  let allMarks = calculateSubTotal();
  let grades = [];
  let totalHrs = 0;
  let totalGP = 0;

  selectedSubjects.forEach((subject) => {
    for (let i = 0; i < subObj.length; i++) {
      if (subject.name === subObj[i].name) {
        // marks.push(
        //   calculateSubTotal(subObj[i], selectedSubjects.indexOf(subject))
        // );
        obtainedSubs.push(subObj[i]);
      }
    }
  });

  console.log(obtainedSubs);

  for (let i = 0; i < allMarks.length; i++) {
    let totalMarksSub = 0;
    for (let j = 0; j < allMarks[i].length; j++) {
      if (allMarks[i][j] < 0) allMarks[i][j] = 0;
      if (allMarks[i][j] > obtainedSubs[i].max[j]) allMarks[i][j] = obtainedSubs[i].max[j];
      totalMarksSub += (allMarks[i][j] / obtainedSubs[i].max[j]) * obtainedSubs[i].weight[j];
    }
    marks.push(totalMarksSub);
  }

  let m = Array.from(document.querySelectorAll("#showMarks"));
  m.forEach((label) => {
    label.innerHTML = marks[m.indexOf(label)];
  });

  let g = Array.from(document.querySelectorAll("#showGrade"));
  g.forEach((label) => {
    let grade = getGrade(marks[g.indexOf(label)]).toFixed(2);
    label.innerHTML = grade;
    grades.push(grade);
  });

  for (let i = 0; i < grades.length; i++) {
    totalGP += grades[i] * subObj[i].creditHR;
    totalHrs += subObj[i].creditHR;
  }

  document.getElementById("spga-wrapper").style.display = "flex";
  document.getElementById("sgpa").innerHTML = (totalGP / totalHrs).toFixed(2);

  Array.from(document.getElementsByClassName("results")).forEach((element) => {
    element.style.display = "flex";
  });
};
