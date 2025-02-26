document.addEventListener("DOMContentLoaded", function () {
    // Select all ring lines dynamically
    const rings = {
        seconds: document.querySelector(".ring-1 .line"),  // Outer ring (seconds)
        minutes: document.querySelector(".ring-2 .line"),  // Second ring (minutes)
        hours: document.querySelector(".ring-3 .line"),    // Third ring (hours)
        days: document.querySelector(".ring-4 .line"),     // Fourth ring (days)
        months: document.querySelector(".ring-5 .line"),   // Fifth ring (months)
        years: document.querySelector(".ring-6 .line")     // Sixth ring (years)
    };

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate(); // Gets last day of the current month
    }

    function updateRotation() {
        const now = new Date();
        const year = now.getFullYear(); // Current year
        const month = now.getMonth(); // 0 (Jan) to 11 (Dec)
        const day = now.getDate(); // 1 to 31
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
    
        const daysInMonth = getDaysInMonth(year, month); // Get correct number of days in the month
        const dayRotation = (day / daysInMonth) * 360; // Adjust rotation based on month length
    
        // Correct year rotation formula
        const yearRotation = ((year - 2000) * 360) / 1000; 
    
        // Rotation calculations
        const rotations = {
            seconds: seconds * 6,         // 1 second = 6 degrees
            minutes: minutes * 6,         // 1 minute = 6 degrees
            hours: hours * 15,            // 1 hour = 15 degrees
            days: dayRotation,            // Days rotation (variable degrees based on month length)
            months: month * 30,           // 1 month = 30 degrees
            years: yearRotation           // Correct year rotation based on formula
        };
    
        // Apply transformations
        Object.keys(rings).forEach((key) => {
            rings[key].style.transform = `translate(-50%, -100%) rotate(${rotations[key]}deg)`;
        });
    }
    

    // Update every second
    setInterval(updateRotation, 1000);

    // Initial call
    updateRotation();
});
