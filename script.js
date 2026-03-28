function generate(){

  document.getElementById("pname").innerText = val("name");
  document.getElementById("pjob").innerText = val("job");
  document.getElementById("pemail").innerText = val("email");
  document.getElementById("pphone").innerText = val("phone");
  document.getElementById("pdesc").innerText = val("desc");
  document.getElementById("pexp").innerText = val("exp");

  let box = document.getElementById("pskills");
  box.innerHTML = "";

  val("skills").split(",").forEach(skill=>{
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
    margin: 5,
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  }).from(element).save();
}