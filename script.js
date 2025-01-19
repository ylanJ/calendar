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

// Function to generate the calendar
const generateCalendar = () => {
  calendar.innerHTML = ""; // Clear the calendar content first
  const year = 2025;
  const month = 0; // January (0-based index)
  const firstDay = new Date(year, month, 1).getDay(); // Day of the week for Jan 1
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in January

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("day", "empty");
    calendar.appendChild(emptyDiv);
  }

  // Add each day to the calendar
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.innerHTML = `<strong>${i}</strong>`;

    if (tasks[i]) {
      // Add event indicator (circle) if a task exists for this day
      const circle = document.createElement("div");
      circle.classList.add("circle");
      dayDiv.appendChild(circle);
    }

    if (detailsListedMode) {
      // In "Details Listed Mode", display task directly in the day cell
      if (tasks[i]) {
        const taskLabel = document.createElement("p");
        taskLabel.textContent = tasks[i];
        taskLabel.style.fontSize = "12px";
        taskLabel.style.marginTop = "5px";
        dayDiv.appendChild(taskLabel);
      }
    } else {
      // In "Hover Mode", show task details in the details box on hover
      dayDiv.addEventListener("mouseover", () => {
        details.textContent = tasks[i] || "No events scheduled.";
      });
      dayDiv.addEventListener("mouseleave", () => {
        details.textContent = "Hover over a date to see events.";
      });
    }

    calendar.appendChild(dayDiv);
  }
};

// Function to toggle between modes
const toggleMode = () => {
  detailsListedMode = !detailsListedMode; // Toggle the mode state
  toggleButton.textContent = detailsListedMode
    ? "Switch to Hover Mode"
    : "Switch to Details Listed Mode";
  generateCalendar(); // Re-render the calendar to reflect the current mode
};

// Attach the toggleMode function to the button's click event
toggleButton.addEventListener("click", toggleMode);

// Generate the initial calendar in Hover Mode
generateCalendar();
