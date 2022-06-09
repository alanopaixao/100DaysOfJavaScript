const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

function showPosition(position) {
  userLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    longitude: ${position.coords.longitude} <br>
    ${position.coords.latitude} ${position.coords.longitude}
    `;
}
