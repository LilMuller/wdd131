// arrays + objects
const tips = [
  "Never risk more than 2% per trade.",
  "Wait for confirmation before entering trades.",
  "Control emotions, not the market."
];

const lessons = [
  "What is Forex?",
  "Support and Resistance",
  "Risk Management Basics"
];

// DOM interaction
document.addEventListener("DOMContentLoaded", () => {

  // conditional + template literal + DOM
  const tip = tips[Math.floor(Math.random() * tips.length)];
  const tipElement = document.getElementById("market-tip");
  if (tipElement) {
    tipElement.textContent = `Today's Insight: ${tip}`;
  }

  // array method (forEach)
  const lessonList = document.getElementById("lesson-list");
  if (lessonList) {
    lessons.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      lessonList.appendChild(li);
    });
  }

  // mindset section
  const mindset = document.getElementById("mindset");
  if (mindset) {
    mindset.textContent = `Discipline beats emotion. Stick to your plan.`;
  }

});

// form + localStorage + event
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const userData = { name, email, message };

    localStorage.setItem("contactData", JSON.stringify(userData));

    document.getElementById("formOutput").textContent =
      `Thanks ${name}, we received your message!`;
  });
}