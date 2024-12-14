const row = document.querySelector(".row");
const loading = document.querySelector(".loading");
const card = document.querySelector(".card");
const rowDetails = document.querySelector(".row-details");
let data = [];
import { getDescription } from "./details.js";
let getDataDesc = new getDescription();
export class Display {
  async getApi(type = "mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "793b60e8c5msh8d06a5e001eb695p1778b7jsn35cd5fdcb6ad",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`,
        options
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  async getCard(type) {
    let cartona = ``;
    let data_cards = [];
    loading.classList.remove("d-none");
    row.classList.add("d-none");
    data_cards = await this.getApi(type);
    loading.classList.add("d-none");
    row.classList.remove("d-none");
    for (const element of data_cards) {
      cartona += `<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="inner flex-grow-1 h-100">
          <div class="card text-center h-100 position-relative  mb-3" id="${
            element.id
          }">
            <figure>
              <img src="${
                element.thumbnail
              }" class="card-img-top p-1" alt="game">
              <figcaption>
                <div class="card-body">
                  <div class="top d-flex justify-content-between align-items-center">
                    <h5 class="card-title mt-1 opacity-50">${element.title.split(
                      " ",
                      2
                    )}</h5>
                    <button class="btn btn-primary">Free</button>
                  </div>
                  <p class="card-text p-1 opacity-50">${element.short_description.split(
                    " ",
                    8
                  )}</p>
                </div>
                <div class="card-footer opacity-50 bg-dark  position-absolute bottom-0  start-0 end-0">
                  <div class="content d-flex justify-content-between ">
                    <span class="type-game">${element.genre}</span>
                    <span class="type-play-game">${element.platform}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>`;
    }
    row.innerHTML = cartona;
    getDataDesc.CardClickListeners();
  }

  getDetails(data) {
    let box = `<div class="col-lg-6 pt-5">
                 <img src="${data.thumbnail}" alt="game" class = "w-100">
                       </div>
                        <div class="col-lg-6 pt-5  ">
                            <h2 class = "text-white-50">The title  :<span class = "text-white"> ${data.title}</span></h2>
                            <p class = "text-white-50">Category :<span class = "text-white"> ${data.genre}</span></p>   
                            <p class = "text-white-50">Platform< : <spa class = "text-white"n>${data.platform}</span></p>
                            <p class = "text-white-50">Description : <spa class = "text-white"n>${data.description}</span></p>
                        </div>
                        <buttom class = "btn btn-close position-absolute end-0 bg-white"></buttom>
                        `;
    rowDetails.innerHTML = box;
    document.querySelector(".games").classList.toggle("d-none");
    document.querySelector(".btn-close").addEventListener("click", function () {
      document.querySelector(".games").classList.toggle("d-none");
    });
  }
}
