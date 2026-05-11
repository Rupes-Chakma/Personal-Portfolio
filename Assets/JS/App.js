const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill all fields");
    } else {
      alert("Message sent successfully!");
      form.reset();
    }
  });
}

// Time & Date
function updateClock() {
  const now = new Date();

  document.getElementById("time").innerHTML = now.toLocaleTimeString();

  document.getElementById("date").innerHTML = now.toDateString();
}

updateClock();
setInterval(updateClock, 1000);
