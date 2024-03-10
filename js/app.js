function init() {
    showJob("bec");
}

function showJob(companyName) {
    const jobTitle = document.getElementById("jobTitle");
    const jobTimeSpan = document.getElementById("jobTimeSpan");
    const jobDescription = document.getElementById("jobDescription");

    readJobDescription("resources/" + companyName + ".json")
        .then((job) => {
            jobDescription.textContent = job["description"];
            jobTitle.textContent = job["title"];
            jobTimeSpan.textContent = job["timeSpan"];
        })
}

function readJobDescription(textPath) {
    return fetch(textPath)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}


