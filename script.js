function generate() {

  pname.innerText = name.value;
  pjob.innerText = job.value;
  pemail.innerText = email.value;
  pphone.innerText = phone.value;
  pdesc.innerText = desc.value;
  pexp.innerText = exp.value;

  pskills.innerHTML = "";

  skills.value.split(",").forEach(skill => {
    pskills.innerHTML += `<span class="skill">${skill}</span>`;
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
    filename:'cv-modern.pdf',
    html2canvas:{scale:3},
    jsPDF:{unit:'mm',format:'a4'}
  }).from(cv).save();
}

/* SUGGESTIONS */
desc.onfocus=()=>descHelp.innerText="Ex: Développeur créatif et motivé...";
desc.onblur=()=>descHelp.innerText="";

skills.onfocus=()=>skillsHelp.innerText="Ex: HTML, CSS, JS";
skills.onblur=()=>skillsHelp.innerText="";