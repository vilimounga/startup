function loadScores() {
    let recordedData = [];
    const recordedDataText = localStorage.getItem('recordedData');
    if (recordedDataText) {
        recordedData = JSON.parse(recordedDataText);
    }

    // Retrieve the username from localStorage
    const userName = localStorage.getItem('userName');

    console.log("User Name:", userName);

    // Sort recorded data based on number of steps in descending order
    recordedData.sort((a, b) => b.steps - a.steps);

    const tableBodyEl = document.querySelector('.table tbody');

    if (recordedData.length) {
        for (const [i, data] of recordedData.entries()) {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const stepsTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = data.userName; // Use the username retrieved from localStorage
            stepsTdEl.textContent = data.steps;

            // Generate current date
            const currentDate = new Date();
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            dateTdEl.textContent = formattedDate;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(stepsTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colspan="4">Be the first to record your data</td></tr>';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadScores();
});
