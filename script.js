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
    div.classList.add("skill");

    div.innerHTML = `
      ${skill}
      <div class="skill-bar" style="width:${Math.random()*100}%"></div>
    `;

    skillsContainer.appendChild(div);
  });

  // PHOTO
  let file = document.getElementById("photo").files[0];

  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let img = document.getElementById("pimage");
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function downloadPDF() {
  let element = document.getElementById("cv");

  setTimeout(() => {
    html2pdf().set({
      margin: 0,
      filename: 'cv-pro.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(element).save();
  }, 500);
}