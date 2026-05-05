document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Message sent successfully!");

  this.reset();
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill all required fields!");
    return;
  }

  // simple email check
  if (!email.includes("@")) {
    alert("Enter a valid email!");
    return;
  }

  alert("Message sent successfully!");
  this.reset();
});
// Date & Time
let time = document.getElementById("time");
if (time) {
  setInterval(() => {
    time.innerHTML = new Date().toLocaleString();
  }, 1000);
}
