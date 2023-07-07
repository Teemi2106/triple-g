function myHome(event) {
  event.preventDefault();
  window.location.href = "index.html";
}
function myProfile(event) {
  event.preventDefault();
  window.location.href = "profile.html";
}
function myContact(event) {
  event.preventDefault();
  window.location.href = "contact.html";
}

function mySubmit(event) {
  event.preventDefault();
  var name = document.getElementById("name");
  var mail = document.getElementById("mail");
  var text = document.getElementById("text");
  localStorage.setItem("Full Name", name);
  localStorage.setItem("Email Address", mail);
  var message = JSON.stringify(text);
  localStorage.setItem(message);
  alert("We've recieved your message ", name);
}

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 2000);
});
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector("#video2").style.display = "block";
  }, 2000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

document.addEventListener("click", window.location("zoom.html"));
