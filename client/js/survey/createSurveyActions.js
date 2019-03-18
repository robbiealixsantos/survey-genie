function createNewSurvey() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let creds = "title=" + title + "&description=" + description;

    ajaxPost("/api/surveys", creds, function(response) {
        document.location.replace("/account.html");
    });
}

document.getElementById("submit-new-survey").onclick = function(e) {
    e.preventDefault();
    createNewSurvey();
};

