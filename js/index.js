import { getLink } from "./homePage.js";
import { Display } from "./ui.js";
const getNameLink = new getLink();
const display = new Display();
function run() {
  getNameLink.getNameLink();
  display.getCard();
}
run();
