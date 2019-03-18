function createNewAccount() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let creds = "name=" + name + "&email=" + email + "&password=" + password;
    
    ajaxPost("/api/users/register", creds);
}

document.getElementById("submit-new-account").onclick = function(e) {
    e.preventDefault();
    createNewAccount();
 };


