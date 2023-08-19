var subjects = [];
var semesters = [];
var selectedSubjects = [];
var selectedSemesters = [];

function sum(array) {
  var sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
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

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class Subject {
  static noOfInstances = 0;
  constructor(displayName, name, assessmentMode, max, weight, creditHR, semester, add = true) {
    this.displayName = displayName;
    this.name = name;
    this.assessmentMode = assessmentMode;
    this.max = max;
    this.weight = weight;
    this.creditHR = creditHR;
    this.semester = semester;

    this.nthInstance = Subject.noOfInstances++;

    this.grade = 0;

    this.optionRepresentation = document.createElement("option");
    this.optionRepresentation.value = this.name;
    this.optionRepresentation.innerHTML = this.displayName;
    this.optionRepresentation.id = "sub-" + this.nthInstance;
    this.optionRepresentation.semester = this.semester;

    this.insertToDropdown();
    this.createCard();

    if (add) {
      subjects.push(this);
    }
  }
  insertToDropdown() {
    let allOptions = document.querySelectorAll("option");
    for (let x = 1; x < allOptions.length; x++) {
      if (this.optionRepresentation.semester < allOptions[x].semester) {
        document.getElementById("sub").insertBefore(this.optionRepresentation, allOptions[x]);
        return;
      } else if (this.optionRepresentation.semester === allOptions[x].semester) {
        if (this.optionRepresentation.innerHTML.toLowerCase().localeCompare(allOptions[x].innerHTML.toLowerCase()) === -1) {
          document.getElementById("sub").insertBefore(this.optionRepresentation, allOptions[x]);
          return;
        }
      }
    }

    document.getElementById("sub").appendChild(this.optionRepresentation);
  }
  removeEventListenerBehaviour() {
    document.getElementById("cgpa-div").style.display = "";
    document.getElementById("cgpa-wrapper").style.maxHeight = "0px";

    let remElement = document.getElementById("subject-" + this.nthInstance).parentElement;

    for (let x = 450; x >= 0; x--) {
      sleep(1).then(() => {
        remElement.style.maxHeight = x + "px";
      });
    }

    sleep(500).then(() => {
      remElement.remove();
    });

    this.insertToDropdown();

    document.getElementById("sub").value = "Choose Subject";
    for (let index = 0; index < selectedSubjects.length; index++) {
      console.log(selectedSubjects[index] == this);
      if (selectedSubjects[index] == this) {
        selectedSubjects.splice(index, 1);
        return;
      }
    }
  }
  createCard() {
    let outerDiv = document.createElement("div");
    let innerDiv = document.createElement("div");

    outerDiv.className = "subject-div";
    outerDiv.id = "subject-" + this.nthInstance;
    innerDiv.className = "subject-card";

    let headingDiv = document.createElement("div");
    let heading = document.createElement("h2");
    let removeBtn = document.createElement("button");

    headingDiv.className = "subject-header";
    heading.innerHTML = this.displayName;
    removeBtn.className = "btn remove-btn";
    removeBtn.id = "remove-btn-" + this.nthInstance;
    removeBtn.innerHTML = "<ion-icon name='trash-outline'></ion-icon>";

    removeBtn.addEventListener("click", () => {
      this.removeEventListenerBehaviour();
    });

    headingDiv.appendChild(heading);
    headingDiv.appendChild(removeBtn);

    innerDiv.appendChild(headingDiv);

    let crhrWrapper = document.createElement("div");
    let crhr = document.createElement("h3");
    let crhrNo = document.createElement("span");
    crhrWrapper.className = "crhr-wrapper";
    crhr.innerHTML = "Credit Hours: ";
    crhrNo.innerHTML = this.creditHR;
    crhrWrapper.appendChild(crhr);
    crhr.appendChild(crhrNo);
    innerDiv.appendChild(crhrWrapper);

    var labels = [];
    for (let i = 0; i < this.max.length; i++) {
      let containerDiv = document.createElement("div");
      let twoDiv = document.createElement("div");
      let input = document.createElement("input");
      let label = document.createElement("label");
      let total = document.createElement("label");
      let slash = document.createElement("label");
      let weightage = document.createElement("span");
      let maxTooltip = document.createElement("span");
      let weightTooltip = document.createElement("span");

      input.type = "number";
      input.id = "criteria-" + i + "-" + this.nthInstance;
      input.className = "obtained-marks-input";
      input.min = 0;
      input.max = this.max[i];

      slash.innerText = " / ";
      total.innerText = this.max[i];
      total.className = "max-marks";

      maxTooltip.innerHTML = "Max Marks";
      maxTooltip.className = "max-marks-tooltip";
      total.append(maxTooltip);

      weightage.className = "weightage-text";
      weightage.innerHTML = "(" + this.weight[i] + ")";

      weightTooltip.innerHTML = "Weightage";
      weightTooltip.className = "weightage-tooltip";
      weightage.append(weightTooltip);

      label.innerText = this.assessmentMode[i] + " ";
      label.appendChild(weightage);

      containerDiv.className = "assessment-row";
      twoDiv.className = "assessment-marks";

      labels.push(total);

      twoDiv.append(input);
      twoDiv.append(slash);
      twoDiv.append(total);

      containerDiv.appendChild(label);
      containerDiv.appendChild(twoDiv);
      innerDiv.appendChild(containerDiv);
    }
    outerDiv.appendChild(innerDiv);

    let resultWrapper = document.createElement("div");
    let resultDiv = document.createElement("div");
    let marksDiv = document.createElement("div");
    let statmarksLabel = document.createElement("label");
    let marksLabel = document.createElement("label");
    let gradeDiv = document.createElement("div");
    let statgradeLabel = document.createElement("label");
    let gradeLabel = document.createElement("label");

    resultWrapper.className = "results-wrapper";
    resultDiv.className = "results";
    marksDiv.className = "marks";

    statmarksLabel.innerHTML = "Marks: ";
    marksLabel.id = "show-marks";
    marksLabel.className = "show-marks";
    marksLabel.innerHTML = "";

    statgradeLabel.innerHTML = "GP: ";
    gradeLabel.id = "show-grade";
    gradeLabel.className = "show-grade";
    gradeLabel.innerHTML = "";

    marksDiv.appendChild(statmarksLabel);
    marksDiv.appendChild(marksLabel);

    gradeDiv.appendChild(statgradeLabel);
    gradeDiv.appendChild(gradeLabel);

    resultDiv.appendChild(marksDiv);
    resultDiv.appendChild(gradeDiv);
    resultWrapper.appendChild(resultDiv);

    outerDiv.appendChild(resultWrapper);

    this.cardRepresentation = document.createElement("div");
    this.cardRepresentation.className = "subject-wrapper";
    this.cardRepresentation.append(outerDiv);
  }
  insertCard() {
    insertAfter(this.cardRepresentation, document.getElementById("subject-add"));
    selectedSubjects.push(this);

    document.querySelectorAll("option").forEach((option) => {
      if (option.value === this.name) {
        option.remove();
      }
    });
  }
  calculateGrade() {
    var obtainedMarks = [];
    var marks = 0;

    for (let i = 2; i < (2 + this.assessmentMode.length); i++) {
      obtainedMarks.push(Math.max(Math.min(this.cardRepresentation.childNodes[0].childNodes[0].childNodes[i].childNodes[1].childNodes[0].value, this.max[i - 2]), 0));
    }

    for (let i = 0; i < this.assessmentMode.length; i++) {
      marks += obtainedMarks[i] / this.max[i] * this.weight[i];
    }

    this.grade = getGrade(marks);

    this.cardRepresentation.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML = marks.toFixed(1);
    this.cardRepresentation.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1].innerHTML = this.grade.toFixed(2);
  }
}

class Semester extends Subject {
  constructor(displayName, name, assessmentMode, max, weight, creditHR, semester) {
    super(displayName, name, assessmentMode, max, weight, creditHR, semester, false);
    semesters.push(this);
    this.cardRepresentation.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].innerHTML = "SGPA: ";

    // TODONE: add all subjects to local
    this.subjectsUsed = [];
    for (let i = 0; i < subjects.length; i++) {
      for (let j = 0; j < this.assessmentMode.length; j++) {
        if (subjects[i].displayName === this.assessmentMode[j]) {
          this.subjectsUsed.push(subjects[i]);
          break;
        }
      }
    }
  }
  removeEventListenerBehaviour() {
    // TODONE: override removelistener to remove all subjects from selectedSubjects
    document.getElementById("cgpa-div").style.display = "";
    document.getElementById("cgpa-wrapper").style.maxHeight = "0px";

    let remElement = document.getElementById("subject-" + this.nthInstance).parentElement;

    for (let x = 450; x >= 0; x--) {
      sleep(1).then(() => {
        remElement.style.maxHeight = x + "px";
      });
    }

    sleep(500).then(() => {
      remElement.remove();
    });

    this.insertToDropdown();

    document.getElementById("sub").value = "Choose Subject";
    for (let i = 0; i < this.subjectsUsed.length; i++) {
      for (let index = 0; index < selectedSubjects.length; index++) {
        if (selectedSubjects[index] == this.subjectsUsed[i]) {
          selectedSubjects.splice(index, 1);
          break;
        }
      }
    }

    for (let index = 0; index < selectedSemesters.length; index++) {
      if (selectedSemesters[index] == this) {
        selectedSemesters.splice(index, 1);
        break;
      }
    }

    // EXPERIMENTAL: 
    for (let i = 0; i < this.subjectsUsed.length; i++) {
      this.subjectsUsed[i].insertToDropdown();
    }
  }
  insertCard() {
    // TODONE: add subjects to selectedSubjects
    insertAfter(this.cardRepresentation, document.getElementById("subject-add"));
    selectedSemesters.push(this);

    for (let i = 0; i < this.subjectsUsed.length; i++) {
      for (let j = 0; j < this.assessmentMode.length; j++) {
        if (this.subjectsUsed[i].displayName === this.assessmentMode[j]) {
          selectedSubjects.push(this.subjectsUsed[i]);
          break;
        }
      }
    }

    document.querySelectorAll("option").forEach((option) => {
      if (option.value === this.name) {
        option.remove();
      }

      for (let i = 0; i < this.subjectsUsed.length; i++) {
        if (option.value === this.subjectsUsed[i].name) {
          option.remove();
        }
      }
    });
  }
  calculateGrade() {
    // TODONE: override gradecalculations
    var marks = 0;
    var obtainedMarks = [];
    var obtainedMarksForKeepSake = [];

    for (let i = 2; i < (2 + this.assessmentMode.length); i++) {
      obtainedMarks.push(Math.max(Math.min(this.cardRepresentation.childNodes[0].childNodes[0].childNodes[i].childNodes[1].childNodes[0].value, this.max[i - 2]), 0));
      obtainedMarksForKeepSake.push(Math.max(Math.min(this.cardRepresentation.childNodes[0].childNodes[0].childNodes[i].childNodes[1].childNodes[0].value, this.max[i - 2]), 0));
      // this.subjectsUsed[i - 2].grade = getGrade(obtainedMarks[i - 2]);
      marks += obtainedMarks[i - 2];
      obtainedMarks[i - 2] = getGrade(obtainedMarks[i - 2]) * this.weight[i - 2];
    }

    // TODO: Assign grade to each obj
    for (let i = 0; i < this.subjectsUsed.length; i++) {
      for (let j = 0; j < selectedSubjects.length; j++) {
        if (this.subjectsUsed[i].name === selectedSubjects[j].name) {
          selectedSubjects[j].grade = getGrade(obtainedMarksForKeepSake[i]);
        }
      }
    }
    // this.subjectsUsed[i - 2].grade = getGrade(obtainedMarks[i - 2]);

    // for (let i = 0; i < this.assessmentMode.length; i++) {
    //   marks += obtainedMarks[i] / this.max[i] * this.weight[i];
    // }

    this.grade = (sum(obtainedMarks) / this.creditHR);

    this.cardRepresentation.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML = marks.toFixed(1);
    this.cardRepresentation.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1].innerHTML = this.grade.toFixed(2);
  }
}

document.getElementById("add-btn").onclick = () => {
  document.getElementById("cgpa-div").style.display = "";
  if (document.getElementById("sub").value === "Choose Subject") return;
  document.getElementById("cgpa-wrapper").style.maxHeight = "0px";

  for (let i = 0; i < semesters.length; i++) {
    if (document.getElementById("sub").value === semesters[i].name) {
      semesters[i].insertCard();
      document.getElementById("sub").value = "Choose Subject";
      break;
    }
  }

  for (let i = 0; i < subjects.length; i++) {
    if (document.getElementById("sub").value === subjects[i].name) {
      subjects[i].insertCard();
      break;
    }
  }

  document.getElementById("sub").value = "Choose Subject";

  Array.from(document.getElementsByClassName("subject-wrapper")).forEach((element) => {
    for (let i = 0; i <= 450; i++) {
      sleep(1).then(() => {
        element.style.maxHeight = i + "px";
      });
    }
  });
};

document.getElementById("calculate-btn").onclick = () => {
  let totalHrs = [0, 0, 0, 0, 0, 0, 0, 0];
  let totalGP = [0, 0, 0, 0, 0, 0, 0, 0];
  let sgpa = [0, 0, 0, 0, 0, 0, 0, 0];

  if (selectedSubjects.length == 0 && selectedSemesters.length == 0) return;

  selectedSubjects.forEach((sub) => {
    sub.calculateGrade();
  });

  selectedSemesters.forEach((sem) => {
    sem.calculateGrade();
  })

  selectedSubjects.forEach((sub) => {
    totalGP[sub.semester - 1] += (sub.grade * sub.creditHR);
    totalHrs[sub.semester - 1] += sub.creditHR;
  });

  document.getElementById("cgpa").innerHTML = (sum(totalGP) / sum(totalHrs)).toFixed(2);

  for (let i = 0; i < sgpa.length; i++) {
    sgpa[i] = totalGP[i] / totalHrs[i];
  }
  console.log(totalGP, totalHrs, sgpa);

  for (let i = 0; i <= 450; i++) {
    sleep(1).then(() => {
      document.getElementById("cgpa-wrapper").style.maxHeight = i + "px";
    });
  }

  Array.from(document.getElementsByClassName("results-wrapper")).forEach((element) => {
    for (let i = 0; i <= 450; i++) {
      sleep(1).then(() => {
        element.style.maxHeight = i + "px";
      });
    }
  });
};

new Subject(
  "Applied Physics",
  "physics",
  ["Assignments", "Quizes", "Project", "Mid", "Final"],
  [40, 40, 20, 30, 40],
  [10, 10, 20, 20, 40],
  3,
  1
);

new Subject(
  "English",
  "eng",
  ["Assignments", "Quizes", "Mid", "Final"],
  [40, 55, 30, 40],
  [20, 10, 30, 40],
  3,
  1
);

new Subject(
  "ICT Theory",
  "ict-theory",
  ["Assignments", "Quizes", "Presentation", "Mid", "Final"],
  [70, 55, 20, 20, 40],
  [10, 10, 20, 20, 40],
  3,
  1
);

new Subject(
  "ICT Lab",
  "ict-lab",
  ["Tasks"],
  [100],
  [100],
  1,
  1
);

new Subject(
  "Logics",
  "logics",
  ["Assignments", "Quizes", "Project", "Mid", "Final"],
  [30, 30, 20, 20, 40],
  [10, 10, 20, 20, 40],
  3,
  1
);

new Subject(
  "PF Theory",
  "pf-theory",
  ["Assignments", "Quizes", "Project", "Mid", "Final"],
  [40, 40, 10, 40, 60],
  [10, 10, 10, 20, 50],
  3,
  1
);

new Subject(
  "PF Lab",
  "pf-lab",
  ["Tasks", "Viva", "Project"],
  [40, 30, 30],
  [40, 30, 30],
  1,
  1
);

new Subject(
  "Calculus",
  "calculus-and-analytic-geometry",
  ["Assignment", "Quiz", "Mids", "Final"],
  [20, 20, 20, 40],
  [20, 20, 20, 40],
  3,
  2
);

new Subject(
  "OOP Theory",
  "oop-theory",
  ["Assignment", "Quiz", "Project", "Mids", "Final"],
  [40, 40, 10, 40, 60],
  [10, 10, 10, 20, 50],
  3,
  2
);

new Subject(
  "Discrete Structures",
  "discrete-structures",
  ["Assignment", "Quiz", "Presentation", "Mids", "Final"],
  [75, 45, 20, 40, 40],
  [10, 10, 20, 20, 40], //TODO: confirm
  3,
  2
);

new Subject(
  "Sofware Engineering",
  "software-engineering",
  ["Assignment", "Quiz", "Project", "Mids", "Final"],
  [50, 40, 20, 30, 40],
  [10, 10, 20, 20, 40], //TODO: confirm
  3,
  2
);

new Semester(
  "First Semester",
  "first-semester",
  ["Applied Physics", "English", "ICT Theory", "ICT Lab", "Logics", "PF Theory", "PF Lab"],
  [100, 100, 100, 100, 100, 100, 100],
  [3, 3, 3, 1, 3, 3, 1],
  17,
  0.5
);