const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM element
const form = document.querySelector(".fact-form");
const btn = document.querySelector(".btn-open");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from supabase
const loadFacts = async function () {
  const res = await fetch(
    "https://befagikyrhoxnilkfsod.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZmFnaWt5cmhveG5pbGtmc29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNzU0MTYsImV4cCI6MTk5OTg1MTQxNn0.Ufiq48UZQwJ3pCzuLQkQ6pe86ZWtmCyfXeQRH4qZu6U",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZmFnaWt5cmhveG5pbGtmc29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNzU0MTYsImV4cCI6MTk5OTg1MTQxNn0.Ufiq48UZQwJ3pCzuLQkQ6pe86ZWtmCyfXeQRH4qZu6U",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
};
loadFacts();

const createFactsList = function (dataArray) {
  const html = dataArray
    .map((fact) => {
      return `            
    <li class="fact">
      <p>
        ${fact.text}
        <a
          href="${fact.source}"
          target="_blank"
          class="source"
          >(Source)</a
        >
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((category) => category.name === fact.category).color
      }"
        >${fact.category}</span
      >
      <div class="vote-buttons">
        <button>👍 ${fact.votesInteresting}</button>
        <button>🤯 ${fact.votesMindblowing}</button>
        <button>⛔ ${fact.votesFalse}</button>
      </div>
    </li>`;
    })
    .join("");

  factsList.insertAdjacentHTML("afterbegin", html);
};

// Toggle form visibility
btn.addEventListener("click", (e) => {
  form.classList.toggle("hidden");
  btn.textContent === "Close"
    ? (btn.textContent = "Share a fact")
    : (btn.textContent = "Close");
});
