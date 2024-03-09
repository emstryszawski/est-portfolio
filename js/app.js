function init() {
  showJobDescription();
}

function showJobDescription() {
  const jobTitle = document.getElementById("jobTitle");
  const jobTimeSpan = document.getElementById("jobTimeSpan");
  const jobDescription = document.getElementById("jobDescription");

  const becCheckBox = document.getElementById("bec");
  const neoSmartCheckBox = document.getElementById("neoSmart");

  if (becCheckBox.checked) {
    readJobDescription("resources/bec.json")
      .then((job) => {
        jobDescription.textContent = job["description"];
        jobTitle.textContent = job["title"];
        jobTimeSpan.textContent = job["timeSpan"];
      });
  } else if (neoSmartCheckBox.checked) {
    readJobDescription("resources/neoSmart.json")
      .then((job) => {
        jobDescription.textContent = job["description"];
        jobTitle.textContent = job["title"];
        jobTimeSpan.textContent = job["timeSpan"];
      });
  }
}

function readJobDescription(textPath) {
  return fetch(textPath)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}


