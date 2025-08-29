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
      return alert("\u274C কল করার জন্য আপনার পর্যাপ্ত পরিমান কয়েন নেই।");
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
      return alert(
        `\uD83D\uDCDE ${title} এর হটলাইন নম্বর ${number} এ কল করা হচ্ছে...`
      );
    }
  });
}

/*-----------------> *** All Card Copy Button Code *** <---------------*/
let copy = 0;
const copyUi = document.getElementById("number-of-copy");
const copyBtns = document.getElementsByClassName("btn-copy");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", () => {
    const title =
      copyBtn.parentNode.parentNode.children[1].children[0].innerText;
    const hotLine =
      copyBtn.parentNode.parentNode.children[2].children[0].textContent.replace(
        /\D/g,
        ""
      );
    navigator.clipboard.writeText(hotLine);

    copy++;
    copyUi.textContent = copy;
    return alert(
      `\uD83D\uDCCB ${title} এর হটলাইন ${hotLine} নাম্বারটি কপি করা হয়েছে`
    );
  });
}

/*-----------------> *** History Clear Function *** <---------------*/
document.getElementById("btn-clear").addEventListener("click", () => {
  const callHistoryDiv = document.getElementById("history-list");
  callHistoryDiv.innerHTML = "";
  return alert("\uD83E\uDDF9 কল লিস্ট থেকে সকল তথ্য মুছে ফেলা হয়েছে");
});

/*---------------> *** Save Service As a Favourite *** <--------------- */
let heart = 0;
const favouriteBtns = document.getElementsByClassName("fav-btn");
const heartUi = document.getElementById("heart");
for (const favouriteBtn of favouriteBtns) {
  favouriteBtn.addEventListener("click", () => {
    heart++;
    heartUi.innerText = heart;
    return alert("\u2764\uFE0F সেবাটি আপনার পছন্দের তালিকায় যোগ করা হয়েছে");
  });
}
