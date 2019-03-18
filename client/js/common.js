//$(document).ready equivalent without jQuery
document.addEventListener("DOMContentLoaded", function(event) { 
  isLoggedIn();
});

function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  
function isLoggedIn() {
  ajaxGet("/api/users/current", "", function(response) {
    console.log("in the callback: " + response);
  });

  let token = getCookie("token");
  if (token) {
    hideElement("#login-link");
  }
}

