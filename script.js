const calendar = document.getElementById("calendar");
const details = document.getElementById("eventDetails");

// Generate the calendar for January 2025
const generateCalendar = () => {
  const year = 2025;
  const month = 0; // January
  const firstDay = new Date(year, month, 1).getDay(); // Get day of the week for Jan 1
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in January

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("day", "empty");
    calendar.appendChild(emptyDiv);
  }

  // Add days with events
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.innerHTML = `<strong>${i}</strong>`;
    
    // Example: Add a circle for events on specific days
    if ([1, 8, 15, 22, 29].includes(i)) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      dayDiv.appendChild(circle);
    }

    // Add hover functionality
    dayDiv.addEventListener("mouseover", () => {
      const events = {
        1: "New Year's Day",
        8: "Evelyn's Birthday",
        15: "Fishing Frenzy",
        22: "Spring Harvest",
        29: "Revent's Birthday",
      };
      details.textContent = events[i] || "No events scheduled.";
    });

    // Reset details on mouse leave
    dayDiv.addEventListener("mouseleave", () => {
      details.textContent = "Hover over a date to see events.";
    });

    calendar.appendChild(dayDiv);
  }
};

generateCalendar();
