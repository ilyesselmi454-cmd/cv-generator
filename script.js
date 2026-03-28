function val(id){
  return document.getElementById(id).value;
}

function set(id,value){
  document.getElementById(id).innerText = value || "";
}

function generate(){

  set("pname", val("name"));
  set("pjob", val("job"));
  set("pdesc", val("desc"));
  set("pexp", val("exp"));

  let box = document.getElementById("pskills");
  box.innerHTML = "";

  let skills = val("skills").split("\n");

  skills.forEach(skill=>{
    if(skill.trim()){
      let level = Math.floor(Math.random()*40)+60;

      box.innerHTML += `
        <div class="skill">
          <p>${skill}</p>
          <div class="skill-bar">
            <div class="skill-fill" style="width:${level}%"></div>
          </div>
        </div>
      `;
    }
  });

  // IMAGE
  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = function(e){
      document.getElementById("pimage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

/* PDF */
function downloadPDF(){
  html2pdf().set({
    margin:0,
    html2canvas:{scale:3},
    jsPDF:{unit:"px",format:[794,1123]}
  }).from(document.getElementById("cv")).save();
}