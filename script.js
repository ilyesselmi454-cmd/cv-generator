function val(id){
  let el = document.getElementById(id);
  return el ? el.value : "";
}

function set(id,value){
  let el = document.getElementById(id);
  if(el) el.innerText = value || "";
}

function generate(){

  // TEXT
  set("pname", val("name"));
  set("pjob", val("job"));
  set("pemail", val("email"));
  set("pphone", val("phone"));
  set("pdesc", val("desc"));
  set("pexp", val("exp"));

  // SKILLS
  let box = document.getElementById("pskills");
  box.innerHTML = "";

  let skills = val("skills").split("\n");

  skills.forEach(skill=>{
    if(skill.trim()){
      let level = Math.floor(Math.random()*40)+60;

      let div = document.createElement("div");
      div.className = "skill";

      div.innerHTML = `
        <p>${skill}</p>
        <div class="skill-bar">
          <div class="skill-fill" style="width:${level}%"></div>
        </div>
      `;

      box.appendChild(div);
    }
  });

  // IMAGE (FIX IMPORTANT)
  let fileInput = document.getElementById("photo");
  let img = document.getElementById("pimage");

  if(fileInput && fileInput.files && fileInput.files[0]){
    let reader = new FileReader();
    reader.onload = function(e){
      img.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}

/* PDF */
function downloadPDF(){

  let element = document.getElementById("cv");

  html2pdf().set({
    margin: 0,
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "px", format: [794,1123] }
  }).from(element).save();
}