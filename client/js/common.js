function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  
function isLoggedIn() {
  ajaxGet("/api/users/current")

  let token = getCookie("token");

  if (token) {
    return true;
  } else {
    return false;
  }
}

if (isLoggedIn()) {
  try {
    const logout = '<a id="logout-link" href="#">Logout</a>';
    appendElement("li", "#nav-items", logout);

    const account = '<a id="account-link" href="account.html">Account</a>';
    appendElement("li", "#nav-items", account);
  
    removeElement("#login-link");
    removeElement("#new-user-intro");

    const loggedInText = 'Click <a href="account.html">here</a> to access or create your surveys.';
    appendElement("p", "#intro-container", loggedInText);
  } catch (e) {

  }
}

try {
  document.getElementById("logout-link").onclick = function(e) {
    logout();
    document.location.replace("/index.html");
  };
} catch (e) {

}

function eraseCookieFromAllPaths() {
  var cookies = document.cookie.split("; ");
  for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
          var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
          var p = location.pathname.split('/');
          document.cookie = cookieBase + '/';
          while (p.length > 0) {
              document.cookie = cookieBase + p.join('/');
              p.pop();
          };
          d.shift();
      }
  }
}

function logout() {
  eraseCookieFromAllPaths();
}
