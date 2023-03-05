const API_KEY = "hvDRApXBOyrAcoGg7Wlfi3Ju8xw";
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

    function displayStatus(data) {
        let modalTitle = document.getElementById("resultsModalTitle");
        modalTitle.innerText = "API Key Status";

        let modalBody = document.getElementById("results-content");
        modalBody.innerHTML = `Your key is valid until<br>${data.expiry}`;
        resultsModal.show();
    }

    
}


/* https://ci-jshint.herokuapp.com/api?api_key=hvDRApXBOyrAcoGg7Wlfi3Ju8xw */