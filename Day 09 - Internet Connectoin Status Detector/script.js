const image = document.querySelector(".image");
const statusDisplay = document.getElementById("status");
const bgColor = document.querySelector(".image");

window.addEventListener("load", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
  if (statusDisplay.textContent == "Online") {
    bgColor.style.backgroundColor = "greenyellow";
  } else {
    bgColor.style.backgroundColor = "red";
  }
});

window.addEventListener("offline", (event) => {
  statusDisplay.textContent = "Offline";
  bgColor.style.backgroundColor = "red";
  image.setAttribute("src", "image/wifioff.png");
});

window.addEventListener("online", (event) => {
  statusDisplay.textContent = "Online";
  image.setAttribute("src", "image/wifion.jpg");
  bgColor.style.backgroundColor = "greenyellow";
});
