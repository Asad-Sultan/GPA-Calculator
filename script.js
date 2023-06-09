var selectedSubjects = [];
var removeBtns = [];
var cardsUsed = [];

class Subject {
  constructor(displayName, name, assessmentMode, max, weight, creditHR) {
    this.displayName = displayName;
    this.name = name;
    this.assessmentMode = assessmentMode;
    this.max = max;
    this.weight = weight;
    this.creditHR = creditHR;
  }
}

class ColorPallete {
  constructor() {
    this.kulfa();
  }
  kulfa() {
    document.documentElement.style.setProperty("--colorBackground", "#f3deba");
    document.documentElement.style.setProperty("--colorApp", "#dbc8a7");
    document.documentElement.style.setProperty("--colorInputBackground", "#d3d3d3");
    document.documentElement.style.setProperty("--colorMain", "#9ed7a9");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#8ec298");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#6f9776");
    document.documentElement.style.setProperty("--colorBoxShadow", "rgba(17, 20, 17, 0.5)");
    document.documentElement.style.setProperty("--colorText", "#1f1c18");
    document.documentElement.style.setProperty("--colorInputBorders", "#675d50");
    document.getElementById("kulfa").checked = true;
    document.querySelector("link[rel~='icon']").href = "favicon/favicon-kulfa.png";
  }
  saffron() {
    document.documentElement.style.setProperty("--colorBackground", "#e4dccf");
    document.documentElement.style.setProperty("--colorApp", "#cdc6ba");
    document.documentElement.style.setProperty("--colorInputBackground", "#d3d3d3");
    document.documentElement.style.setProperty("--colorMain", "#ea5455");
    document.documentElement.style.setProperty("--colorMain_ShadeOne", "#d34c4c");
    document.documentElement.style.setProperty("--colorMain_ShadeTwo", "#bb4344");
    document.documentElement.style.setProperty("--colorBoxShadow", "rgba(23, 8, 8, 0.5)");
    document.documentElement.style.setProperty("--colorText", "#00162e");
    document.documentElement.style.setProperty("--colorInputBorders", "#002b5b");
    document.getElementById("saffron").checked = true;
    document.querySelector("link[rel~='icon']").href = "favicon/favicon-saffron.png";
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
    document.getElementById("fruitCocktail").checked = true;
    document.querySelector("link[rel~='icon']").href = "favicon/favicon-fc.png";
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
    document.getElementById("breeze").checked = true;
    document.querySelector("link[rel~='icon']").href = "favicon/favicon-breeze.png";
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
    document.getElementById("dracula").checked = true;
    document.querySelector("link[rel~='icon']").href = "favicon/favicon-dracula.png";
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
    document.getElementById("sky").checked = true;
    document.querySelector("link[rel~='icon']").href = "favicon/favicon-sky.png";
  }
}

const color = new ColorPallete();

var subObj = [];
var noOfCards = 0;

// First Array: Maximum Marks
// Second Array: Weightage
// Third Value: Credit Hours

subObj.push(
  new Subject(
    "Applied Physics",
    "physics",
    ["Assignments", "Quizes", "Project", "Mid", "Final"],
    [40, 40, 20, 30, 40],
    [10, 10, 20, 20, 40],
    3
  )
);

subObj.push(
  new Subject(
    "English",
    "eng",
    ["Assignments", "Quizes", "Mid", "Final"],
    [40, 55, 30, 40],
    [20, 10, 30, 40],
    3
  )
);

subObj.push(
  new Subject(
    "ICT Theory",
    "ict-theory",
    ["Assignments", "Quizes", "Presentation", "Mid", "Final"],
    [70, 55, 20, 20, 40],
    [10, 10, 20, 20, 40],
    3
  )
);

subObj.push(new Subject("ICT Lab", "ict-lab", ["Tasks"], [100], [100], 1));

subObj.push(
  new Subject(
    "Logics",
    "logics",
    ["Assignments", "Quizes", "Project", "Mid", "Final"],
    [30, 30, 20, 20, 40],
    [10, 10, 20, 20, 40],
    3
  )
);

subObj.push(
  new Subject(
    "PF Theory",
    "pf-theory",
    ["Assignments", "Quizes", "Project", "Mid", "Final"],
    [40, 40, 10, 40, 60],
    [10, 10, 10, 20, 50],
    3
  )
);

subObj.push(new Subject("PF Lab", "pf-lab", ["Tasks", "Viva", "Project"], [40, 30, 30], [40, 30, 30], 1));

var changingSubject = subObj[0];
var changingIndex = 0;

let i = 0;
subObj.forEach((subject) => {
  let opt = document.createElement("option");
  opt.value = subject.name;
  opt.innerHTML = subject.displayName;
  opt.id = "sub-" + i;
  document.getElementById("sub").appendChild(opt);
  i++;
});

if (document.cookie == "kulfa") color.kulfa();
if (document.cookie == "saffron") color.saffron();
if (document.cookie == "fruitCocktail") color.fruitCocktail();
if (document.cookie == "breeze") color.breeze();
if (document.cookie == "dracula") color.dracula();
if (document.cookie == "sky") color.sky();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function changeColor() {
  let colors = document.getElementById("themes-div");
  let radioBtns = document.querySelectorAll(".radio-dot");
  colors.addEventListener("click", () => {
    radioBtns.forEach((btn) => {
      if (btn.checked) {
        if (btn.value == "kulfa") color.kulfa();
        if (btn.value == "saffron") color.saffron();
        if (btn.value == "fruitCocktail") color.fruitCocktail();
        if (btn.value == "breeze") color.breeze();
        if (btn.value == "dracula") color.dracula();
        if (btn.value == "sky") color.sky();
        document.cookie = btn.value + "; expires=Tue, 31 Dec 2030 23:59:59 GMT";
      }
    });
  });
}

changeColor();

function addListenersRemove(removeBtns) {
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("sgpa-div").style.display = "";
      document.getElementById("sgpa-wrapper").style.maxHeight = "0px";
      let index = removeBtns.indexOf(btn);
      let btnID = Array.from(btn.id).lastIndexOf("-");
      let newID = "";

      for (let x = btnID + 1; x < btn.id.length; x++) {
        newID += btn.id[x];
      }

      let remElement = document.getElementById("subject-" + newID).parentElement;

      for (let x = 450; x >= 0; x--) {
        sleep(1).then(() => {
          remElement.style.maxHeight = x + "px";
        });
      }

      // document.getElementById("subject-" + newID).remove();
      sleep(500).then(() => {
        remElement.remove();
      });

      let alphabeticalOrderIndex = 0;
      let allOptions = document.querySelectorAll("option");
      let last = false;

      for (let x = 1; x < allOptions.length; x++) {
        if (cardsUsed[index].innerHTML.toLowerCase().localeCompare(allOptions[x].innerHTML.toLowerCase()) === -1) {
          last = false;
          alphabeticalOrderIndex = x;
          break;
        } else {
          last = true;
        }
      }

      if (last) {
        document.getElementById("sub").appendChild(cardsUsed[index]);
      } else {
        document.getElementById("sub").insertBefore(cardsUsed[index], allOptions[alphabeticalOrderIndex]);
      }

      cardsUsed.splice(index, 1);
      selectedSubjects.splice(index, 1);
      removeBtns.splice(index, 1);
      document.getElementById("sub").value = "Choose Subject";
    });
  });
}

function createInputs(subject) {
  selectedSubjects.push(subject);

  let outerDivWrapper = document.createElement("div");
  let outerDiv = document.createElement("div");
  let innerDiv = document.createElement("div");

  outerDivWrapper.className = "subject-wrapper";

  outerDiv.className = "subject-div";
  outerDiv.id = "subject-" + noOfCards;
  innerDiv.className = "subject-card";

  let subName = "";
  document.querySelectorAll("option").forEach((element) => {
    if (element.value === document.getElementById("sub").value) {
      subName = element.innerHTML;
    }
  });

  let headingDiv = document.createElement("div");
  let heading = document.createElement("h2");
  let removeBtn = document.createElement("button");

  headingDiv.className = "subject-header";
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
    let slash = document.createElement("label");
    let weightage = document.createElement("span");
    let maxTooltip = document.createElement("span");
    let weightTooltip = document.createElement("span");

    input.type = "number";
    input.id = "criteria-" + i + "-" + noOfCards;
    input.className = "obtained-marks-input";
    input.min = 0;
    input.max = subject.max[i];

    slash.innerText = " / ";
    total.innerText = subject.max[i];
    total.className = "max-marks";

    maxTooltip.innerHTML = "Max Marks";
    maxTooltip.className = "max-marks-tooltip";
    total.append(maxTooltip);

    weightage.className = "weightage-text";
    weightage.innerHTML = "(" + subject.weight[i] + ")";

    weightTooltip.innerHTML = "Weightage";
    weightTooltip.className = "weightage-tooltip";
    weightage.append(weightTooltip);

    label.innerText = subject.assessmentMode[i] + " ";
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

  statgradeLabel.innerHTML = "GPA: ";
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

  outerDivWrapper.append(outerDiv);

  // document
  //   .getElementById("app")
  //   .insertBefore(outerDivWrapper, document.getElementById("calculate-btn-div"));

  insertAfter(outerDivWrapper, document.getElementById("subject-add"));
  addListenersRemove(removeBtns);
  noOfCards++;
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function calculateSubTotal() {
  let totalMarks = [];
  let ids = [];
  let allCards = document.querySelectorAll(".assessment-row");

  allCards.forEach((card) => {
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

document.getElementById("add-btn").onclick = () => {
  document.getElementById("sgpa-div").style.display = "";
  if (document.getElementById("sub").value === "Choose Subject") return;
  document.getElementById("sgpa-wrapper").style.maxHeight = "0px";

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
  document.getElementById("sub").value = "Choose Subject";

  // sleep(500).then(() => {
  Array.from(document.getElementsByClassName("subject-wrapper")).forEach((element) => {
    for (let i = 0; i <= 450; i++) {
      sleep(1).then(() => {
        element.style.maxHeight = i + "px";
      });
    }
    // element.className = "subject-wrapper-new";
  });
  // });
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
        obtainedSubs.push(subObj[i]);
      }
    }
  });

  obtainedSubs.reverse();

  for (let i = 0; i < allMarks.length; i++) {
    let totalMarksSub = 0;
    for (let j = 0; j < allMarks[i].length; j++) {
      if (allMarks[i][j] < 0) allMarks[i][j] = 0;
      if (allMarks[i][j] > obtainedSubs[i].max[j]) allMarks[i][j] = obtainedSubs[i].max[j];
      totalMarksSub += (allMarks[i][j] / obtainedSubs[i].max[j]) * obtainedSubs[i].weight[j];
    }
    marks.push(totalMarksSub.toFixed(1));
  }

  let m = Array.from(document.querySelectorAll("#show-marks"));
  m.forEach((label) => {
    label.innerHTML = marks[m.indexOf(label)];
  });

  let g = Array.from(document.querySelectorAll("#show-grade"));
  g.forEach((label) => {
    let grade = getGrade(marks[g.indexOf(label)]).toFixed(2);
    label.innerHTML = grade;
    grades.push(grade);
  });

  for (let i = 0; i < grades.length; i++) {
    totalGP += grades[i] * obtainedSubs[i].creditHR;
    totalHrs += obtainedSubs[i].creditHR;
  }

  // document.getElementById("sgpa-div").style.display = "flex";
  document.getElementById("sgpa").innerHTML = (totalGP / totalHrs).toFixed(2);

  for (let i = 0; i <= 450; i++) {
    sleep(1).then(() => {
      document.getElementById("sgpa-wrapper").style.maxHeight = i + "px";
      // element.style.maxHeight = i + "px";
    });
  }

  Array.from(document.getElementsByClassName("results-wrapper")).forEach((element) => {
    for (let i = 0; i <= 450; i++) {
      sleep(1).then(() => {
        element.style.maxHeight = i + "px";
      });
    }
  });

  // Array.from(document.getElementsByClassName("results")).forEach((element) => {
  //   element.style.display = "flex";
  // });
};

let themePopup = document.querySelector(".theme-popup").style;
document.getElementById("show-themes").onclick = () => {
  themePopup.visibility = "visible";
  themePopup.opacity = "1";
};

document.getElementById("close-themes").onclick = () => {
  themePopup.visibility = "hidden";
  themePopup.opacity = "0";
};

let usagePopup = document.querySelector(".usage-popup").style;
document.getElementById("usage-popup-open").onclick = () => {
  usagePopup.visibility = "visible";
  usagePopup.opacity = "1";
};

document.getElementById("usage-popup-close").onclick = () => {
  usagePopup.visibility = "hidden";
  usagePopup.opacity = "0";
};
