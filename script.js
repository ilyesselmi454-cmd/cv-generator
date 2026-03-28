function val(id){
  return document.getElementById(id).value;
}

function set(id,value){
  document.getElementById(id).innerText = value || "";
}

function generate(){

  set("pname", val("name"));
  set("pjob", val("job"));
  set("pemail", val("email"));
  set("pphone", val("phone"));
  set("pdesc", val("desc"));
  set("pexp", val("exp"));

  let box = document.getElementById("pskills");
  box.innerHTML = "";

  val("skills").split("\n").forEach(skill=>{
    if(skill.trim()){
      box.innerHTML += `
        <div class="skill">
          <p>${skill}</p>
          <div class="skill-bar">
            <div class="skill-fill" style="width:${Math.random()*100}%"></div>
          </div>
        </div>
      `;
    }
  });

  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = e => pimage.src = e.target.result;
    reader.readAsDataURL(file);
  }
}

/* THEME DYNAMIQUE */
function changeTheme(){
  let cv = document.getElementById("cv");
  let theme = document.getElementById("theme").value;
  cv.className = "cv " + theme;
}

/* PDF */
function downloadPDF(){
  html2pdf().set({
    margin:0,
    html2canvas:{scale:3},
    jsPDF:{unit:"px",format:[794,1123]}
  }).from(document.getElementById("cv")).save();
}