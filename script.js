const registerButton = document.getElementById("register-btn");
const countdownContainer = document.getElementById("countdown-container");
const quoteElement = document.getElementById("quote");

registerButton.addEventListener("click", () => {
    const name = prompt("Enter your name:");
    const birthDate = new Date(prompt("Enter your birthdate (YYYY-MM-DD):"));
    const expectedYears = parseInt(prompt("Enter how many years you expect to live:"));

    const weeksInYear = 52;
    const weeksLived = Math.floor((Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 7));
    const totalWeeks = expectedYears * weeksInYear;

    countdownContainer.innerHTML = "";
    for (let i = 0; i < totalWeeks; i++) {
        const square = document.createElement("div");
        square.className = weeksLived >= i ? "square lived" : "square";

        // Check if it's the last box and add a special class for red color
        if (i === totalWeeks - 1) {
            square.classList.add("last-week");
        }

        countdownContainer.appendChild(square);
    }

    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = `"${data.content}" - ${data.author}`;
        });

    const headingElement = document.getElementById("heading");
    headingElement.textContent = `Time Left For ${name}`;
    registerButton.style.display = "none";
    document.getElementById("about-btn").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("quote1").style.display = "none";
});
