function generate() {
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

function downloadPDF(){
  html2pdf().set({
    margin:0,
    filename:'cv-pro.pdf',
    html2canvas:{scale:3},
    jsPDF:{unit:'mm',format:'a4'}
  }).from(cv).save();
}