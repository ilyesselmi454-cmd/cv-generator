function generate() {

  let nameVal = document.getElementById("name").value;
  let jobVal = document.getElementById("job").value;
  let emailVal = document.getElementById("email").value;
  let phoneVal = document.getElementById("phone").value;
  let descVal = document.getElementById("desc").value;
  let skillsVal = document.getElementById("skills").value;
  let expVal = document.getElementById("exp").value;

  document.getElementById("pname").innerText = nameVal || "Nom";
  document.getElementById("pjob").innerText = jobVal;
  document.getElementById("pemail").innerText = emailVal;
  document.getElementById("pphone").innerText = phoneVal;
  document.getElementById("pdesc").innerText = descVal;
  document.getElementById("pexp").innerText = expVal;

  let skillsContainer = document.getElementById("pskills");
  skillsContainer.innerHTML = "";

  skillsVal.split(",").forEach(skill => {
    if(skill.trim() !== ""){
      skillsContainer.innerHTML += `<span class="skill">${skill}</span>`;
    }
  });

  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = e => {
      document.getElementById("pimage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

/* THEME */
function changeTheme(){
  let cv = document.getElementById("cv");
  let theme = document.getElementById("theme").value;
  cv.className = "cv " + theme;
}

/* PDF */
function downloadPDF(){
  html2pdf().set({
    margin:5,
    filename:'cv-modern.pdf',
    html2canvas:{scale:3},
    jsPDF:{unit:'mm',format:'a4'}
  }).from(document.getElementById("cv")).save();
}

/* SUGGESTIONS */
document.getElementById("desc").onfocus = () => {
  descHelp.innerText = "Ex: Développeur créatif et motivé...";
};
document.getElementById("desc").onblur = () => {
  descHelp.innerText = "";
};

document.getElementById("skills").onfocus = () => {
  skillsHelp.innerText = "Ex: HTML, CSS, JS";
};
document.getElementById("skills").onblur = () => {
  skillsHelp.innerText = "";
};