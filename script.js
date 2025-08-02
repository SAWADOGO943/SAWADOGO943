document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dobInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultText = document.getElementById('resultText');

    // Set default value for the input, similar to your image
    // Note: input type="date" expects "YYYY-MM-DD" format for its value
    dobInput.value = "2019-10-27";

    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        const dobString = dobInput.value;

        // Check if a date is selected
        if (!dobString) {
            resultText.textContent = "Please enter your date of birth.";
            resultText.style.color = "red";
            return;
        }

        const dob = new Date(dobString);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();

        // Adjust age if the birth month hasn't occurred yet this year,
        // or if it's the same month but the birth day hasn't occurred yet.
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        // Display the result
        resultText.textContent = `Your age is ${age} years old`;
        resultText.style.color = "#333"; // Reset color if it was red
    }

    // Call calculateAge once on load to show initial age if input has a default value
    calculateAge();
});