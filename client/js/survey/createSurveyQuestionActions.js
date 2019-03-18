//$(document).ready equivalent without jQuery
document.addEventListener("DOMContentLoaded", function(event) { 
    getSurvey();
});

function getSurvey() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");
    
    ajaxGetTest("/api/surveys/" + id, function(response) {
        var questionObject = JSON.parse(response);
        console.log(questionObject);

        
    });
}