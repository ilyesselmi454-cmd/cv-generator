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

  let cv = document.getElementById("cv");
  let style = document.getElementById("pdfStyle").value;

  // reset
  cv.classList.remove("pdf-premium","pdf-linkedin");

  if(style === "premium"){
    cv.classList.add("pdf-premium");
  }
  if(style === "linkedin"){
    cv.classList.add("pdf-linkedin");
  }

  html2pdf().set({
    margin:0,
    filename:'cv-pro.pdf',
    image:{type:'jpeg',quality:1},
    html2canvas:{scale:4,backgroundColor:"#ffffff"},
    jsPDF:{unit:'mm',format:'a4'}
  }).from(cv).save();
}