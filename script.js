function generate(){

  set("pname", val("name"));
  set("pjob", val("job"));
  set("pemail", val("email"));
  set("pphone", val("phone"));
  set("pdesc", val("desc"));
  set("pexp", val("exp"));

  let box = document.getElementById("pskills");
  box.innerHTML = "";

  let skills = val("skills").split("\n"); // ENTER

  skills.forEach(skill=>{
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
}

  // IMAGE FIX
  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = function(e){
      document.getElementById("pimage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function val(id){
  return document.getElementById(id).value;
}

/* PDF FIX PRO */
function downloadPDF(){

  let element = document.getElementById("cv");

  html2pdf().set({
    margin: [0, 0, 0, 0],
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 3,
      useCORS: true
    },
    jsPDF: {
      unit: "px",
      format: [794, 1123],
      orientation: "portrait"
    }
  }).from(element).save();
}