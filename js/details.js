import { Display } from "./ui.js";
export class getDescription {
  CardClickListeners() {
    let display = new Display();
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", async function (e) {
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "793b60e8c5msh8d06a5e001eb695p1778b7jsn35cd5fdcb6ad",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,
            options
          );
          const data = await response.json();
          display.getDetails(data);
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
}
