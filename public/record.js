document.addEventListener("DOMContentLoaded", function() {
    const stepsInput = document.getElementById("stepsInput");
    const caloriesInput = document.getElementById("caloriesInput");
    const waterIntakeInput = document.getElementById("waterIntakeInput");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function() {
        const steps = stepsInput.value;
        const calories = caloriesInput.value;
        const waterIntake = waterIntakeInput.value;

        // Get existing data from local storage or initialize an empty array
        let recordedData = JSON.parse(localStorage.getItem("recordedData")) || [];

        // Push the new data to the array
        recordedData.push({
            steps: steps,
            calories: calories,
            waterIntake: waterIntake
        });

        // Store the updated array in local storage
        localStorage.setItem("recordedData", JSON.stringify(recordedData));

        // Optionally, you can provide feedback to the user that their data has been saved
        alert("Congrats! Your data has been saved for today");

        // Clear input fields after submission
        stepsInput.value = "";
        caloriesInput.value = "";
        waterIntakeInput.value = "";

        window.location.href = "progress.html";

    });
});
