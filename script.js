const calendar = document.getElementById("calendar");
const details = document.getElementById("details");
const toggleButton = document.getElementById("toggleButton");
let detailsListedMode = false;

// Task data for each day (example tasks)
const tasks = {
  1: "New Year's Day",
  8: "Evelyn's Birthday",
  15: "Fishing Frenzy",
  22: "Spring Harvest",
  29: "Revent's Birthday",
};

// Generate the calendar
const generateCalendar = () => {
  calendar.innerHTML = ""; // Clear existing calendar
  const year = 2025;
  const month = 0; // January
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add empty slots for days before the first day
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("day", "empty");
    calendar.appendChild(emptyDiv);
  }

  // Add days
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.innerHTML = `<strong>${i}</strong>`;
    
    if (tasks[i]) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      dayDiv.appendChild(circle);
    }

    if (!detailsListedMode) {
      // Hover Mode: Show task details on hover
      dayDiv.addEventListener("mouseover", () => {
        details.textContent = tasks[i] || "No events scheduled.";
      });
      dayDiv.addEventListener("mouseleave", () => {
        details.textContent = "Hover over a date to see events.";
      });
    } else {
      // Details Listed Mode: Display tasks directly in the calendar
      if (tasks[i]) {
        const taskLabel = document.createElement("p");
        taskLabel.textContent = tasks[i];
        taskLabel.style.fontSize = "12px";
        taskLabel.style.marginTop = "5px";
        dayDiv.appendChild(taskLabel);
      }
    }

    calendar.appendChild(dayDiv);
  }
};

// Toggle between modes
toggleButton.addEventListener("click", () => {
  detailsListedMode = !detailsListedMode;
  toggleButton.textContent = detailsListedMode
    ? "Switch to Hover Mode"
    : "Switch to Details Listed Mode";
  generateCalendar(); // Re-generate the calendar
});

generateCalendar();
