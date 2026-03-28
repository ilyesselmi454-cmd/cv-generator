function generate() {

  let cv = document.getElementById("cv");
  cv.className = "cv " + template.value;

  let jobText = job.value.toLowerCase();

  // RESET
  cv.classList.remove("male","female","dev-theme","marketing-theme","design-theme");

  // GENRE
  if (gender.value === "female") {
    cv.classList.add("female");
  } else {
    cv.classList.add("male");
  }

  // METIER
  if (jobText.includes("dev")) {
    cv.classList.add("dev-theme");
  } else if (jobText.includes("marketing")) {
    cv.classList.add("marketing-theme");
  } else if (jobText.includes("design")) {
    cv.classList.add("design-theme");
  }

  pname.innerText = name.value;
  pjob.innerText = job.value;
  pemail.innerText = email.value;
  pphone.innerText = phone.value;
  pdesc.innerText = desc.value;
  pexp.innerText = exp.value;

  pskills.innerHTML = "";

  skills.value.split(",").forEach(skill => {
    pskills.innerHTML += `
      <div class="skill">
        <p>${skill}</p>
        <div class="skill-bar">
          <div class="skill-fill" style="width:80%"></div>
        </div>
      </div>
    `;
  });

  let file = photo.files[0];
  if(file){
    let reader=new FileReader();
    reader.onload=e=>pimage.src=e.target.result;
    reader.readAsDataURL(file);
  }
}

/* TEMPLATE */
function changeTemplate(){
  cv.className = "cv " + template.value;
}

/* PDF */
function downloadPDF(){
  html2pdf().set({
    margin:5,
    filename:'cv-pro.pdf',
    html2canvas:{scale:3},
    jsPDF:{unit:'mm',format:'a4'}
  }).from(cv).save();
}

/* SUGGESTIONS */
desc.onfocus=()=>descHelp.innerText="Ex: Développeur motivé avec projets modernes...";
desc.onblur=()=>descHelp.innerText="";
skills.onfocus=()=>skillsHelp.innerText="Ex: HTML, CSS, JavaScript";
skills.onblur=()=>skillsHelp.innerText="";