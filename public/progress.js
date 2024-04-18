const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        label: 'Steps',
        data: [2000, 2200, 2500, 2300, 2400, 2600, 2700],
        borderColor: 'green',
        borderWidth: 2,
        fill: false
    }, {
        label: 'Water Intake',
        data: [5, 6, 7, 8, 6, 5, 6],
        borderColor: 'blue',
        borderWidth: 2,
        fill: false
    }, {
        label: 'Calories',
        data: [1500, 1600, 1700, 1800, 1700, 1600, 1550],
        borderColor: 'red',
        borderWidth: 2,
        fill: false
    }]
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        color: 'white'
                    }
                }
            }
        },
        backgroundColor: 'white'
    }
});
