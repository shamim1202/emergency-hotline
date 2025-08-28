/*-----------------> *** All Card Call Button Code *** <---------------*/
const callBtns = document.getElementsByClassName("btn-call");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", () => {
    const title =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;

    const number =
      callBtn.parentNode.parentNode.children[2].children[0].innerText;

    const date = new Date().toLocaleTimeString();

    const coin = document.getElementById("coin").innerText;
    let currentCoin = Number(coin) - 20;

    if (currentCoin < 0) {
      return alert("Don't Have Sufficient Coin!");
    } else {
      const callHistoryDiv = document.getElementById("history-list");
      const div = document.createElement("div");
      div.innerHTML = `<div class="call-log bg-[#f5fff6] flex items-center justify-between my-5 p-4 rounded-xl">
            <div>
              <p class="mb-1 text-sm font-medium md:text-xl md:font-semibold">${title}</p>
              <p class="text-sm  text-gray-500 md:text-xl md:font-medium">${number}</p>
            </div>
            <div>
              <p class="text-xs md:text-xl">${date}</p>
            </div>
          </div>`;
      callHistoryDiv.appendChild(div);
      document.getElementById("coin").innerText = currentCoin;
    }
  });
}

/*-----------------> *** History Clear Function *** <---------------*/
document.getElementById("btn-clear").addEventListener("click", () => {
  const callHistoryDiv = document.getElementById("history-list");
  callHistoryDiv.innerHTML = "";
});

/*---------------> Save Service As a Favourite <----------------- */
let heart = 0;
const favouriteBtns = document.getElementsByClassName("fav-btn");
const heartUi = document.getElementById("heart");

for (const favouriteBtn of favouriteBtns) {
  favouriteBtn.addEventListener("click", () => {
    heart++;
    heartUi.innerText = heart;
  });
}
