function generate() {
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let desc = document.getElementById("desc").value;
  let skills = document.getElementById("skills").value.split(",");
  let exp = document.getElementById("exp").value;

  document.getElementById("pname").innerText = name;
  document.getElementById("pjob").innerText = job;
  document.getElementById("pdesc").innerText = desc;
  document.getElementById("pexp").innerText = exp;

  let skillsContainer = document.getElementById("pskills");
  skillsContainer.innerHTML = "";

  skills.forEach(skill => {
    let div = document.createElement("div");

    div.innerHTML = `
      <p>${skill}</p>
      <div class="skill-bar">
        <div class="skill-fill" style="width:80%"></div>
      </div>
    `;

    skillsContainer.appendChild(div);
  });

  let file = document.getElementById("photo").files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = e => {
      document.getElementById("pimage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

/* TEMPLATE SWITCH */
function changeTemplate() {
  let cv = document.getElementById("cv");
  let template = document.getElementById("template").value;

  cv.className = "cv " + template;
}

/* PDF */
function downloadPDF() {
  let element = document.getElementById("cv");

  html2pdf().set({
    margin: 0,
    filename: 'cv.pdf',
    html2canvas: { scale: 3 },
    jsPDF: { unit: 'mm', format: 'a4' }
  }).from(element).save();
}