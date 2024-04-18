document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName"); 

    const stepsInput = document.getElementById("stepsInput");
    const caloriesInput = document.getElementById("caloriesInput");
    const waterIntakeInput = document.getElementById("waterIntakeInput");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function() {
        const steps = stepsInput.value;
        const calories = caloriesInput.value;
        const waterIntake = waterIntakeInput.value;

        let recordedData = JSON.parse(localStorage.getItem("recordedData")) || [];

        recordedData.push({
            userName: userName, 
            steps: steps,
            calories: calories,
            waterIntake: waterIntake
        });

        localStorage.setItem("recordedData", JSON.stringify(recordedData));

        alert("Congrats! Your data has been saved for today");

        stepsInput.value = "";
        caloriesInput.value = "";
        waterIntakeInput.value = "";

        window.location.href = "progress.html";

    });
});
