function generate() {
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value.toLowerCase();
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementById("gender").value;
  let desc = document.getElementById("desc").value;
  let skills = document.getElementById("skills").value.split(",");
  let exp = document.getElementById("exp").value;

  document.getElementById("pname").innerText = name;
  document.getElementById("pjob").innerText = job;
  document.getElementById("pemail").innerText = email;
  document.getElementById("pphone").innerText = phone;
  document.getElementById("pdesc").innerText = desc;
  document.getElementById("pexp").innerText = exp;

  let cv = document.getElementById("cv");
  cv.className = "cv";

  // AUTO THEME
  if (job.includes("dev") || job.includes("informatique")) {
    cv.classList.add("blue-theme");
  } else if (job.includes("marketing")) {
    cv.classList.add("green-theme");
  }

  if (gender === "female") {
    cv.classList.add("pink-theme");
  }

  // SKILLS
  let skillsContainer = document.getElementById("pskills");
  skillsContainer.innerHTML = "";

  skills.forEach(skill => {
    let div = document.createElement("div");
    div.classList.add("skill");

    div.innerHTML = `
      <p>${skill}</p>
      <div class="skill-bar">
        <div class="skill-fill" style="width:80%"></div>
      </div>
    `;

    skillsContainer.appendChild(div);
  });

  // PHOTO
  let file = document.getElementById("photo").files[0];
  if(file){
    let reader=new FileReader();
    reader.onload=e=>{
      document.getElementById("pimage").src=e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// PDF
function downloadPDF(){
  html2pdf().from(document.getElementById("cv")).save();
}

// SUGGESTIONS
document.getElementById("desc").onfocus=()=>{
  descHelp.innerText="Ex: Développeur web passionné...";
};
document.getElementById("desc").onblur=()=>descHelp.innerText="";