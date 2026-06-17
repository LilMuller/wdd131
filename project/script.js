// arrays + objects
const tips = [
  "Never risk more than 2% per trade.",
  "Wait for confirmation before entering trades.",
  "Control emotions, not the market.",
  "Review your setup before opening a position."
];

const benefits = [
  {
    title: "Plan first",
    text: "Check the trend, news, and your risk level before every trade."
  },
  {
    title: "Use a checklist",
    text: "Make sure your entry, stop-loss, and target are all set in advance."
  },
  {
    title: "Review after every trade",
    text: "Write down what worked, what failed, and what you will improve next time."
  }
];

const lessons = [
  {
    title: "What is Forex?",
    description: "Learn how currency pairs move and how the global market operates."
  },
  {
    title: "Support and Resistance",
    description: "Understand key zones where price often reacts and reverses."
  },
  {
    title: "Risk Management Basics",
    description: "Practice position sizing, stop-loss placement, and reward-to-risk planning."
  },
  {
    title: "Trend and Momentum",
    description: "See how momentum indicators can help confirm the direction of price."
  }
];

const routines = [
  "Review market conditions before the session begins.",
  "Check that your stop-loss and profit target match your plan.",
  "Take a short break after a losing trade to stay objective.",
  "End the day by noting what you learned from your trades."
];

// DOM interaction
document.addEventListener("DOMContentLoaded", () => {

  // conditional + template literal + DOM
  const tip = tips[Math.floor(Math.random() * tips.length)];
  const tipElement = document.getElementById("market-tip");
  if (tipElement) {
    tipElement.textContent = `Today's Insight: ${tip}`;
  }

  // lessons cards
  const lessonList = document.getElementById("lesson-list");
  if (lessonList) {
    lessons.forEach(item => {
      const card = document.createElement("article");
      card.className = "lesson-card";
      card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
      lessonList.appendChild(card);
    });
  }

  // benefits list
  const benefitsList = document.getElementById("benefits-list");
  if (benefitsList) {
    benefits.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.title}:</strong> ${item.text}`;
      benefitsList.appendChild(li);
    });
  }

  // routine list
  const routineList = document.getElementById("routine-list");
  if (routineList) {
    routines.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      routineList.appendChild(li);
    });
  }

  // mindset section
  const mindset = document.getElementById("mindset");
  if (mindset) {
    mindset.textContent = `Discipline beats emotion. A good trader follows the plan, accepts losses, and learns from every result.`;
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