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

var subObj = [];
var noOfCards = 0;

subObj.push(
  new Subject("physics", [40, 40, 30, 40, 20], [10, 10, 20, 40, 20], 3)
);

subObj.push(new Subject("pf", [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], 4));

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

function addListeners(labels) {
  labels.forEach((element) => {
    element.addEventListener("contextmenu", (ev) => {
      ev.preventDefault();
      let div = document.createElement("div");
      let t = document.createElement("input");
      // let b = document.createElement("button");

      t.type = "number";
      t.id = "change-txt";
      t.className = "change-field";

      // b.innerHTML = "Change?";
      // b.id = "change-btn";
      // b.className = "change-btn btn";
      div.append(t);
      // div.append(b);

      div.className = "hoveringPrompt";
      div.style.left = ev.clientX.toString() + "px";
      div.style.top = ev.clientY.toString() + "px";

      changingIndex = labels.indexOf(element);

      document.querySelectorAll(".hoveringPrompt").forEach((el) => {
        el.remove();
      });

      document.body.appendChild(div);

      document.onkeydown = function (evt) {
        evt = evt || window.event;
        if ("key" in evt) {
          if (evt.key === "Enter") {
            updateMax(element);
          } else if (evt.key === "Escape") {
            document.querySelectorAll(".hoveringPrompt").forEach((element) => {
              element.remove();
            });
          }
        }
      };

      document.getElementById("change-btn").onclick = function () {
        updateMax(element);
      };
    });
  });
}

function addListenersRemove(removeBtns) {
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = removeBtns.indexOf(btn);
      document.getElementById("card-" + index).remove();
      document.getElementById("sub").appendChild(cardsUsed[index]);
    });
  });
}

function createInputs(subject) {
  //TODO: GIVE IDS TO ALL NEW ELEMENTS
  //FIXME: RENAME ALL PREVIOUS IDS ACCORDINGLY

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
  let removeBtn = document.createElement("button");

  headingDiv.className = "card-header";
  heading.innerHTML = subName;
  removeBtn.className = "btn remove-btn";
  removeBtn.id = "remove-btn-" + noOfCards;
  removeBtn.innerHTML = "<ion-icon name='close-outline'></ion-icon>";

  removeBtns.push(removeBtn);

  headingDiv.appendChild(heading);
  headingDiv.appendChild(removeBtn);

  innerDiv.appendChild(headingDiv);

  let crhr = document.createElement("h3");
  crhr.innerHTML = subject.creditHR + "Hrs";
  innerDiv.appendChild(crhr);

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
  addListeners(labels);
  addListenersRemove(removeBtns);
  noOfCards++;
}

function calculateSubTotal(subject, cardNo) {
  let totalMarks = 0;
  for (let i = 0; i < subject.max.length; i++) {
    let id = "criteria-" + i + "-" + cardNo;
    let marks = document.getElementById(id).value;
    if (marks < 0) marks = 0;
    if (marks > subject.max[i]) marks = subject.max[i];
    if (subject.max[i] > 0)
      totalMarks += (marks / subject.max[i]) * subject.weight[i];
  }
  return totalMarks.toFixed(2);
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
  let grades = [];
  let totalHrs = 0;
  let totalGP = 0;

  console.log(selectedSubjects);

  for (let i = 0; i < subObj.length; i++) {
    selectedSubjects.forEach((subject) => {
      if (subject.name === subObj[i].name) {
        marks.push(
          calculateSubTotal(subObj[i], selectedSubjects.indexOf(subject))
        );
        obtainedSubs.push(subObj[i]);
      }
    });
  }

  console.log(marks);

  let m = Array.from(document.querySelectorAll("#showMarks"));
  m.forEach((label) => {
    label.innerHTML = marks[m.indexOf(label)];
  });

  let g = Array.from(document.querySelectorAll("#showGrade"));
  g.forEach((label) => {
    let grade = getGrade(marks[g.indexOf(label)]);
    label.innerHTML = grade;
    grades.push(grade);
  });

  for (let i = 0; i < grades.length; i++) {
    totalGP += grades[i] * subObj[i].creditHR;
    totalHrs += subObj[i].creditHR;
  }

  document.getElementById("cgpa").innerHTML = totalGP / totalHrs;

  Array.from(document.getElementsByClassName("results")).forEach((element) => {
    element.style.display = "flex";
  });
};
