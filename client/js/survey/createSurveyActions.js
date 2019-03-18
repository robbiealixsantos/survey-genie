function createNewSurvey() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let creds = "title=" + title + "&description=" + description;
    console.log(creds);
    
    ajaxPost("/api/surveys", creds, function(response) {
        console.log("in the createNewSurvey callback");
        console.log(response);
    });
}

document.getElementById("submit-new-survey").onclick = function(e) {
    e.preventDefault();
    createNewSurvey();
 };