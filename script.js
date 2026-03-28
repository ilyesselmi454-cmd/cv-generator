// GENERATE CV
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

  // SKILLS
  let skillsContainer = document.getElementById("pskills");
  skillsContainer.innerHTML = "";

  skills.forEach(skill => {
    let div = document.createElement("div");
    div.classList.add("skill");

    div.innerHTML = `
      ${skill}
      <div class="skill-bar" style="width:80%"></div>
    `;

    skillsContainer.appendChild(div);
  });

  // PHOTO
  let file = document.getElementById("photo").files[0];

  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("pimage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// PDF VERSION FIX
function downloadPDF() {
  let element = document.getElementById("cv");

  if (!element) {
    alert("Erreur: CV non trouvé");
    return;
  }

  let opt = {
    margin: 5,
    filename: 'cv-pro.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  // IMPORTANT : attendre que tout charge
  setTimeout(() => {
    html2pdf().set(opt).from(element).save();
  }, 700);
}

// INTERACTIVE SUGGESTIONS
document.getElementById("desc").addEventListener("focus", () => {
  document.getElementById("descHelp").innerText =
    "Ex: Développeur web motivé avec passion pour la création de sites modernes.";
});
document.getElementById("desc").addEventListener("blur", () => {
  document.getElementById("descHelp").innerText = "";
});

document.getElementById("skills").addEventListener("focus", () => {
  document.getElementById("skillsHelp").innerText =
    "Ex: HTML, CSS, JavaScript, Python";
});
document.getElementById("skills").addEventListener("blur", () => {
  document.getElementById("skillsHelp").innerText = "";
});

document.getElementById("exp").addEventListener("focus", () => {
  document.getElementById("expHelp").innerText =
    "Ex: Stage développeur web, création de sites pour clients.";
});
document.getElementById("exp").addEventListener("blur", () => {
  document.getElementById("expHelp").innerText = "";
});
