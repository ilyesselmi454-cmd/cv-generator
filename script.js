function generate() {
  let job = document.getElementById("job").value.toLowerCase();
  let gender = document.getElementById("gender").value;

  let cv = document.getElementById("cv");
  let header = document.querySelector(".header");

  // RESET
  header.className = "header";

  // THEME PAR METIER
  if (job.includes("dev") || job.includes("informatique")) {
    header.classList.add("blue");
  } else if (job.includes("marketing")) {
    header.classList.add("green");
  } else {
    header.classList.add("dark");
  }

  // THEME GENRE
  if (gender === "female") {
    header.classList.add("pink");
  }

  document.getElementById("pname").innerText = name.value;
  document.getElementById("pjob").innerText = job;
  document.getElementById("pemail").innerText = email.value;
  document.getElementById("pphone").innerText = phone.value;
  document.getElementById("pdesc").innerText = desc.value;
  document.getElementById("pexp").innerText = exp.value;

  let skillsContainer = document.getElementById("pskills");
  skillsContainer.innerHTML = "";

  skills.value.split(",").forEach(skill => {
    let div = document.createElement("div");
    div.className = "skill";
    div.innerHTML = `
      <p>${skill}</p>
      <div class="skill-bar">
        <div class="skill-fill" style="width:80%"></div>
      </div>
    `;
    skillsContainer.appendChild(div);
  });

  let file = photo.files[0];
  if(file){
    let reader=new FileReader();
    reader.onload=e=>pimage.src=e.target.result;
    reader.readAsDataURL(file);
  }
}

function downloadPDF(){
  html2pdf().from(document.getElementById("cv")).save();
}