import { Display } from "./ui.js";
const links = document.querySelectorAll("nav .nav-item > a");
const display = new Display();
export class getLink {
  getNameLink() {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", async function handleClick(e) {
        for (let j = 0; j < links.length; j++) {
          links[j].classList.remove("active");
          links[j].classList.add("text-white");
          links[j].classList.remove("fw-bold");
        }
        links[i].classList.add("active");
        if (links[i].classList.contains("active")) {
          links[i].classList.remove("text-white");
          links[i].classList.add("fw-bold");
          return await display.getCard(links[i].innerHTML);
        }
      });
    }
  }
}
