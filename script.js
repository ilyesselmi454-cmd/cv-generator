function generate() {
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let desc = document.getElementById("desc").value;
  let skills = document.getElementById("skills").value.split(",");
  let exp = document.getElementById("exp").value;

  document.getElementById("pname").innerText = name;
  document.getElementById("pjob").innerText = job;
  document.getElementById("pcontact").innerText = email + " | " + phone;
  document.getElementById("pdesc").innerText = desc;
  document.getElementById("pexp").innerText = exp;

  let skillsContainer = document.getElementById("pskills");
  skillsContainer.innerHTML = "";

  skills.forEach(skill => {
    let div = document.createElement("div");
    div.draggable = true;

    div.innerHTML = `
      <p>${skill}</p>
      <div class="skill-bar">
        <div class="skill-fill" style="width:80%"></div>
      </div>
    `;

    skillsContainer.appendChild(div);
  });

  let file = document.getElementById("photo").files[0];
  if(file){
    let reader=new FileReader();
    reader.onload=e=>{
      document.getElementById("pimage").src=e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

/* TEMPLATE */
function changeTemplate(){
  let cv=document.getElementById("cv");
  cv.className="cv "+document.getElementById("template").value;
}

/* PDF */
function downloadPDF(){
  html2pdf().from(document.getElementById("cv")).save();
}

/* AUTO FILL */
function autoFill(){
  document.getElementById("desc").value="Développeur web passionné...";
  document.getElementById("skills").value="HTML,CSS,JS";
  document.getElementById("exp").value="Projets web personnels";
}

/* SUGGESTIONS */
document.getElementById("desc").onfocus=()=>descHelp.innerText="Parle de toi...";
document.getElementById("desc").onblur=()=>descHelp.innerText="";