// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // For now, just show the collected data
        resultDiv.innerHTML = "<h2>Form Submitted!</h2><pre>" + JSON.stringify(data, null, 2) + "</pre>";

        // Later, you can send this data to your Flask backend via fetch()
        // fetch("/predict", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(prediction => {
        //     resultDiv.innerHTML = "<h2>Prediction: " + prediction.result + "</h2>";
        // });
    });
});
