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
      skillsContainer.innerHTML += `
        <div class="skill">
          <p>${skill}</p>
          <div class="skill-bar">
            <div class="skill-fill" style="width:${Math.floor(Math.random()*100)}%"></div>
          </div>
        </div>
      `;
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

/* PDF FIX FINAL */
function downloadPDF(){

  let original = document.getElementById("cv");
  let clone = original.cloneNode(true);

  let style = document.getElementById("pdfStyle").value;

  if(style === "premium"){
    clone.classList.add("pdf-premium");
  }
  if(style === "linkedin"){
    clone.classList.add("pdf-linkedin");
  }

  clone.style.position = "absolute";
  clone.style.left = "-9999px";
  document.body.appendChild(clone);

  html2pdf().set({
    margin:0,
    filename:'cv-pro.pdf',
    image:{type:'jpeg',quality:1},
    html2canvas:{scale:4,useCORS:true,backgroundColor:"#ffffff"},
    jsPDF:{unit:'mm',format:'a4'}
  }).from(clone).save().then(()=>{
    document.body.removeChild(clone);
  });
}

/* SUGGESTIONS */
document.getElementById("desc").onfocus = () => {
  descHelp.innerText = "Ex: Développeur motivé avec projets modernes.";
};
document.getElementById("desc").onblur = () => {
  descHelp.innerText = "";
};

document.getElementById("skills").onfocus = () => {
  skillsHelp.innerText = "Ex: HTML, CSS, JavaScript";
};
document.getElementById("skills").onblur = () => {
  skillsHelp.innerText = "";
};