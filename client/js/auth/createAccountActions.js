function createNewAccount() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let creds = "name=" + name + "&email=" + email + "&password=" + password + "&passwordConfirm=" + password;

    ajaxPost("/api/users/register", creds, function(response) {
        document.location.replace("/login.html");
    });
}

document.getElementById("submit-new-account").onclick = function(e) {
    e.preventDefault();
    createNewAccount();
 };


