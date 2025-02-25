document.addEventListener("DOMContentLoaded", function () {
    const outerRingLine = document.querySelector(".ring-1 .line"); // Outer ring (seconds)
    const secondRingLine = document.querySelector(".ring-2 .line"); // Second ring (minutes)
    const thirdRingLine = document.querySelector(".ring-3 .line"); // Third ring (hours)
    const fourthRingLine = document.querySelector(".ring-4 .line"); // Fourth ring (months)
    const fifthRingLine = document.querySelector(".ring-5 .line"); // Fifth ring (years)

    function updateRotation() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const month = now.getMonth(); // 0 (Jan) to 11 (Dec)

        // Ring 1 (Seconds)
        const secondsRotation = seconds * 6; // 1 second = 6 degrees

        // Ring 2 (Minutes)
        const minutesRotation = minutes * 6; // 1 minute = 6 degrees

        // Ring 3 (Hours)
        const hoursRotation = hours * 15; // 1 hour = 15 degrees

        // Ring 4 (Months)
        const monthsRotation = month * 30; // 1 month = 30 degrees

        // Ring 5 (Years)
        const yearsRotation = (month / 12) * 360; // 1 year = 360 degrees, gradual rotation per month

        // Apply transformations
        outerRingLine.style.transform = `translate(-50%, -100%) rotate(${secondsRotation}deg)`;
        secondRingLine.style.transform = `translate(-50%, -100%) rotate(${minutesRotation}deg)`;
        thirdRingLine.style.transform = `translate(-50%, -100%) rotate(${hoursRotation}deg)`;
        fourthRingLine.style.transform = `translate(-50%, -100%) rotate(${monthsRotation}deg)`;
        fifthRingLine.style.transform = `translate(-50%, -100%) rotate(${yearsRotation}deg)`;
    }

    // Update every second
    setInterval(updateRotation, 1000);

    // Initial call
    updateRotation();
});
