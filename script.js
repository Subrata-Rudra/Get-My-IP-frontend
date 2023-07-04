function func() {
  const main = document.querySelector(".main");
  const mainUrl = "https://get-my-ip-by-subrata.onrender.com/ip";
  fetch(mainUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      main.innerHTML = "Your Device's IP Address is ➡ " + res.IP_Address
    });
}


function getApi(){
  const apiDetails = document.querySelector(".apiDetails")
  const apiUrl = "https://get-my-ip-by-subrata.onrender.com/ip";
  apiDetails.innerHTML = "API is " + apiUrl
}