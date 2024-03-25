function init() {
    showJob("bec");
}

function showJob(companyName) {
    const jobTitle = document.getElementById("jobTitle");
    const jobTimeSpan = document.getElementById("jobTimeSpan");
    const tasks = document.getElementById("tasks");
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }
    readJobDescription("resources/" + companyName + ".json")
        .then((job) => {
            job["tasks"].forEach(taskDescription => addTask(taskDescription))
            jobTitle.textContent = job["title"];
            jobTimeSpan.textContent = job["timeSpan"];
        })
}

function readJobDescription(textPath) {
    return fetch(textPath)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

function addTask(description) {
    let tasks = document.getElementById("tasks");
    let task = document.createElement("li");
    task.appendChild(document.createTextNode(description));
    tasks.appendChild(task);
}
