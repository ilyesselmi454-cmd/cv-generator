document.getElementById("name").addEventListener("input", function() {
  document.getElementById("cv-name").innerText = this.value;
});

document.getElementById("bio").addEventListener("input", function() {
  document.getElementById("cv-bio").innerText = this.value;
});
document.getElementById("photo").addEventListener("change", function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    document.getElementById("cv-photo").src = reader.result;
  };

  reader.readAsDataURL(file);
});
function downloadPDF() {
  const element = document.getElementById("cv");

  html2pdf()
    .from(element)
    .save("mon-cv.pdf");
}