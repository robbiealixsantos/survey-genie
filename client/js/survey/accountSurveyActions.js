//$(document).ready equivalent without jQuery
document.addEventListener("DOMContentLoaded", function(event) { 
    getSurveysForUser();
});

function getSurveysForUser() {
    ajaxGetTest("/api/surveys", function(response) {
        var obj = JSON.parse(response);
    
        if (Object.keys(obj).length) {
            removeElement("#no-surveys");
            var info = 'Click on a survey title to add/edit questions';
            appendElement('p', "#account-container", info);

            var surveysTable = '<tbody id="user-surveys"><th>Title</th><th>Description</th><th>Times Taken</th><th>Created Date</th><tbody>';
            appendElement('table', "#account-container", surveysTable);

            var addNewSurvey = 'Click <a href="create-survey.html">here</a> to create a new survey.</p>';

            for (var i = 0; i < obj.length; i++) {
                var createdDate = new Date(obj[i].createdDate).toDateString();
                var surveyInfo = '<td><a href="/survey.html?id=' + obj[i]._id + '">' + obj[i].title + '</a></td><td>' + obj[i].description + '</td><td>' + obj[i].timesTaken + '</td><td>'
                    + createdDate + '</td>';
                appendElement('tr', "#user-surveys", surveyInfo);
            } 

            appendElement('div', "#account-container", addNewSurvey);
        } else {
            var noSurveys = '<p id="no-surveys">You do not have any surveys yet. ' + addNewSurvey + '</p>';
            appendElement('div', "#account-container", noSurveys);
        }
    });
}
