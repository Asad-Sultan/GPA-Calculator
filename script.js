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
// var labels = [];

class Subject {
  constructor(name, max, weight) {
    this.name = name;
    this.max = max;
    this.weight = weight;
  }
}

var subObj = [];

subObj.push(new Subject("physics", [40, 40, 30, 40, 20], [10, 10, 20, 40, 20]));

subObj.push(new Subject("pf", [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]));

subObj.push(new Subject("ict", [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]));

subObj.push(new Subject("eng", [0, 0, 0, 0], [0, 0, 0, 0]));

subObj.push(new Subject("logics", [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));

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
      let b = document.createElement("button");

      t.type = "number";
      t.id = "change-txt";
      t.className = "change-field";

      b.innerHTML = "Change?";
      b.id = "change-btn";
      b.className = "change-btn btn";
      div.append(t);
      div.append(b);

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

function createInputs(subject) {
  var labels = [];
  for (let i = 0; i < subject.max.length; i++) {
    let containerDiv = document.createElement("div");
    let twoDiv = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");
    let total = document.createElement("label");

    input.type = "number";
    input.id = "criteria-" + i;
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
    document.getElementById("cardDiv").appendChild(containerDiv);
  }
  addListeners(labels);
}

function calculateTotal(subject) {
  let totalMarks = 0;
  for (let i = 0; i < subject.max.length; i++) {
    let id = "criteria-" + i;
    let marks = document.getElementById(id).value;
    if (marks < 0) marks = 0;
    if (marks > subject.max[i]) marks = subject.max[i];
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

createInputs(subObj[0]);

document.getElementById("sub").onclick = () => {
  document.getElementById("cardDiv").innerHTML = "";

  for (let i = 0; i < subObj.length; i++) {
    if (document.getElementById("sub").value === subObj[i].name) {
      changingSubject = subObj[i];
      createInputs(subObj[i]);
    }
  }
};

document.getElementById("calculate-btn").onclick = () => {
  let marks = 0;

  for (let i = 0; i < subObj.length; i++) {
    if (document.getElementById("sub").value === subObj[i].name) {
      marks = calculateTotal(subObj[i]);
    }
  }

  document.getElementById("showMarks").innerHTML = marks;
  document.getElementById("showGrade").innerHTML = getGrade(marks);

  Array.from(document.getElementsByClassName("results")).forEach((element) => {
    element.style.display = "flex";
  });
};
