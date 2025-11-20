let institutionInputArray = [
  {
    name: "Federal University of Technology Minna",
    qualification: "HND in Computer Science",
    grade: "Second Class Upper",
    year: "2020",
  },
];

// const qualificationSelectArray = ["Bachelor of Technology (B.Tech)"];
// const yearArray = ["2020"];
// const gradeInputArray = ["Second Class Upper"];
//rendering initial values
renderInstitutionTodos();
// renderQualificationTodos();
// renderYearTodos();
// renderGradeTodos();

//looping through arrays to display values
function renderInstitutionTodos() {
  let institutionHtmlTodo = "";
  for (let i = 0; i < institutionInputArray.length; i++) {
    const institutionTodoObject = institutionInputArray[i];
    const name = institutionTodoObject.name;
    const qualification = institutionTodoObject.qualification;
    const grade = institutionTodoObject.grade;
    const year = institutionTodoObject.year;
    const institutionHtml = `
        <div>${name}</div>
       <div> ${qualification}</div>
       <div> ${grade}</div>
       <div>${year}</div>
    <button onclick="institutionInputArray.splice(${i}, 1); renderInstitutionTodos();" class="delete-button">Delete</button>
    `;
    institutionHtmlTodo += institutionHtml;
  }

  const displayInstitution = document.querySelector(
    ".js-display-area-institution"
  );
  displayInstitution.innerHTML = institutionHtmlTodo;
}
// }

// function renderQualificationTodos() {
//   let qualificationHtmlTodo = "";
//   for (let i = 0; i < qualificationSelectArray.length; i++) {
//     const qualificationTodo = qualificationSelectArray[i];
//     const qualificationHtml = `<p>${qualificationTodo}</p>
//     <button onclick="qualificationSelectArray.splice(${i}, 1); renderQualificationTodos();">Delete</button>
//     `;
//     qualificationHtmlTodo += qualificationHtml;
//   }
//   console.log(qualificationHtmlTodo);
//   const displayQualification = document.querySelector(
//     ".js-display-area-qualification"
//   );
//   displayQualification.innerHTML = qualificationHtmlTodo;
// }

// function renderYearTodos() {
//   let yearHtmlTodo = "";
//   for (let i = 0; i < yearArray.length; i++) {
//     const yearTodo = yearArray[i];

//     const yearHtml = `<p>${yearTodo}</p>
//     <button onclick="yearArray.splice(${i}, 1); renderYearTodos();">Delete</button>`;
//     yearHtmlTodo += yearHtml;
//   }
//   const displayYear = document.querySelector(".js-display-area-year");
//   displayYear.innerHTML = yearHtmlTodo;
// }

// function renderGradeTodos() {
//   let gradeHtmlTodo = "";
//   for (let i = 0; i < gradeInputArray.length; i++) {
//     const gradeTodo = gradeInputArray[i];
//     const gradeHtml = `<p>${gradeTodo}</p>
//     <button onclick="gradeInputArray.splice(${i}, 1); renderGradeTodos();">Delete</button>`;
//     gradeHtmlTodo += gradeHtml;
//   }
//   console.log(gradeHtmlTodo);
//   const displayGrade = document.querySelector(".js-display-area-grade");
//   displayGrade.innerHTML = gradeHtmlTodo;
// }
function addRecord() {
  const institutionInput = document.querySelector(".js-institution-input");
  const qualificationSelect = document.querySelector(
    ".js-qualification-select"
  );
  const yearSelect = document.querySelector(".js-year-select");
  const gradeInput = document.querySelector(".js-grade-input");

  const institutionInputValue = institutionInput.value;
  const qualificationSelectValue = qualificationSelect.value;
  const yearSelectValue = yearSelect.value;
  const gradeInputValue = gradeInput.value;

  //pushing values to respective arrays
  institutionInputArray.push({
    name: institutionInputValue,
    qualification: qualificationSelectValue,
    grade: gradeInputValue,
    year: yearSelectValue,
  });

  //looping through arrays to display values
  institutionInput.value = "";
  qualificationSelect.value = "";
  yearSelect.value = "";
  gradeInput.value = "";

  renderInstitutionTodos();
}
// institutionInputArray = "";
