function loadScores() {
    let recordedData = [];
    const recordedDataText = localStorage.getItem('recordedData');
    if (recordedDataText) {
        recordedData = JSON.parse(recordedDataText);
    }

    // Retrieve the username from localStorage
    const userName = localStorage.getItem('userName');

    // Sort recorded data based on the number of steps in descending order
    recordedData.sort((a, b) => b.steps - a.steps);

    const tableBodyEl = document.querySelector('.table tbody');

    if (recordedData.length) {
        // Clear existing table rows
        tableBodyEl.innerHTML = '';

        // Loop through each recorded data entry and add it to the leaderboard table
        recordedData.forEach((data, i) => {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const stepsTdEl = document.createElement('td');
            const caloriesTdEl = document.createElement('td');
            const waterTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = data.userName; // Use the username from recorded data
            stepsTdEl.textContent = data.steps;
            caloriesTdEl.textContent = data.calories;
            waterTdEl.textContent = data.water;
            
            const currentDate = new Date();
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            dateTdEl.textContent = formattedDate;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(stepsTdEl);
            rowEl.appendChild(caloriesTdEl);
            rowEl.appendChild(waterTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        });
    } else {
        // If there's no recorded data, display a message in the table
        tableBodyEl.innerHTML = '<tr><td colspan="6">Be the first to record your data</td></tr>';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadScores();
});
