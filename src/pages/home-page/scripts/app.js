const numberBtn = document.querySelectorAll(".card__btn--number");
const boxRankAdd = document.querySelector(".card__rank--stars");
const btnNextStep = document.querySelector(".card__btn--next");
const cardInfo = document.querySelector(".card__info");
const results = document.querySelector(".card__info--results");

let choice = "";

function choiceRank(e) {
  choice = e.target.dataset.option;
  numberBtn.forEach((button) => button.classList.remove("selected"));
  e.target.classList.add("selected");

  addStar();
  nextStep();
}

function addStar() {
  removeAllStars();
  if (choice === "one") {
    for (let i = 0; i < 1; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      boxRankAdd.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }

  if (choice === "two") {
    for (let i = 0; i < 2; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      boxRankAdd.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "three") {
    for (let i = 0; i < 3; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      boxRankAdd.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "four") {
    for (let i = 0; i < 4; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      boxRankAdd.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "five") {
    for (let i = 0; i < 5; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      boxRankAdd.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
}

function removeAllStars() {
  while (boxRankAdd.firstChild) {
    boxRankAdd.removeChild(boxRankAdd.firstChild);
  }
}

function nextStep() {
  btnNextStep.classList.add("active");
}

function showResult() {
  removeAllStars();
  btnNextStep.classList.remove("active");
  btnNextStep.classList.add("pressed");
  cardInfo.classList.add("active");

  if (choice === "one") {
    for (let i = 0; i < 1; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");

      boxStar.classList.add("card__box--img");
      results.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "two") {
    for (let i = 0; i < 2; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      results.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "three") {
    for (let i = 0; i < 3; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      results.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "four") {
    for (let i = 0; i < 4; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      results.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
  if (choice === "five") {
    for (let i = 0; i < 5; i++) {
      const boxStar = document.createElement("div");
      const imgStar = document.createElement("img");
      boxStar.classList.add("card__box--img");
      results.appendChild(boxStar);

      imgStar.classList.add("card__img");
      imgStar.src = "/images/star.png";
      boxStar.appendChild(imgStar);
    }
  }
}

btnNextStep.addEventListener("click", showResult);
numberBtn.forEach((number) => number.addEventListener("click", choiceRank));
