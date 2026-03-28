function val(id){ return document.getElementById(id).value; }
function set(id,v){ document.getElementById(id).innerText = v; }

/* GENERATE */
function generate(){

  set("pname", val("name") || "Nom");
  set("pjob", val("job"));
  set("pemail", val("email"));
  set("pphone", val("phone"));
  set("pdesc", val("desc"));
  set("pexp", val("exp"));

  let box = document.getElementById("pskills");
  box.innerHTML = "";

  val("skills").split(",").forEach(skill=>{
    if(skill.trim()){
      let level = Math.floor(Math.random()*40)+60;
      box.innerHTML += `
        <div class="skill">
          <p>${skill}</p>
          <div style="background:#ddd;height:6px">
            <div class="skill-fill" style="width:${level}%"></div>
          </div>
        </div>
      `;
    }
  });

  saveData();
}

/* AUTO FILL (IA SIMPLE) */
function autoFill(){
  let job = val("job").toLowerCase();

  if(job.includes("dev")){
    document.getElementById("desc").value = "Développeur passionné avec expérience en projets modernes.";
    document.getElementById("skills").value = "HTML, CSS, JavaScript, React";
  }
  else if(job.includes("marketing")){
    document.getElementById("desc").value = "Spécialiste marketing orienté résultats.";
    document.getElementById("skills").value = "SEO, Ads, Social Media";
  }
}

/* SAVE */
function saveData(){
  let data = {
    name: val("name"),
    job: val("job"),
    email: val("email"),
    phone: val("phone"),
    desc: val("desc"),
    skills: val("skills"),
    exp: val("exp")
  };
  localStorage.setItem("cv", JSON.stringify(data));
}

/* LOAD */
window.onload = ()=>{
  let data = JSON.parse(localStorage.getItem("cv") || "{}");
  for(let key in data){
    let el = document.getElementById(key);
    if(el) el.value = data[key];
  }
};

/* TEMPLATE */
function changeTemplate(){
  document.getElementById("cv").className = "cv " + val("template");
}

/* PDF */
function downloadPDF(){
  html2pdf().set({
    html2canvas:{scale:3},
    jsPDF:{format:'a4'}
  }).from(document.getElementById("cv")).save();
}

/* SUGGESTIONS */
desc.onfocus=()=>descHelp.innerText="Décris ton profil pro...";
desc.onblur=()=>descHelp.innerText="";

skills.onfocus=()=>skillsHelp.innerText="Sépare par virgules";
skills.onblur=()=>skillsHelp.innerText="";