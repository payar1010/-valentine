const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const image = document.getElementById("sceneImage");

let noIndex = 0;

const noTexts = [
  "اگر من پیامبر بشم و تو خدا چی؟ 😇",
  "اگر برات سوشی بیارم چی؟ 🍣",
  "اگه برای راحتیت پاهاتو رو شونه‌هام نگه دارم چی؟ 🥺",
  "توروفضااااا 🛸",
  "لطفاً 🥲",
  "پلیــــــــز 😭",
  "اگه نکنی من می‌میرم‌ها\nدکتر گفته 😔",
  "خب… من مردم",
  "داری با پیکر بی‌جان پایار حرف می‌زنی 😵",
  "الان من روحم\nمیام سراغت 👻",
  "نههههههه\nنههههههه\nنههههههه"
];

function resetButtons(yesText = "بله", noText = "خیر") {
  yesBtn.innerText = yesText;
  noBtn.innerText = noText;
}

function showImage(src) {
  image.src = src;
  image.classList.remove("hidden");
}

function hideImage() {
  image.classList.add("hidden");
}

function start() {
  question.innerText = "آیا ولنتاین من می‌شی شرمادورنا؟ 💖";
  resetButtons("بله", "خیر");
  hideImage();
}

yesBtn.onclick = () => {
  if (question.innerText.includes("آیا ولنتاین")) {
    question.innerText = "پس رانِ شما سروصدا رو برام کم می‌کنه؟ 😌";
    resetButtons("بله", "خیر");
    showImage("images/ran.webp");
  } else if (question.innerText.includes("رانِ شما")) {
    question.innerText = "قرارمون تو غذاخوری مورد علاقهٔ من دیگه؟\nبین خیابون دو ران؟ 🍗";
    resetButtons("بله حتماً", "بله مطمئناً");
    hideImage();
  } else if (question.innerText.includes("قرارمون")) {
    question.innerText = "پس قرارمون قطعی شد 💘\nولنتاین امسال مالِ ماست";
    resetButtons("", "");
    showImage("images/us.webp");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  } else {
    // هر بله‌ای در مسیر نه → پرش به مسیر بله
    question.innerText = "پس رانِ شما سروصدا رو برام کم می‌کنه؟ 😌";
    resetButtons("بله", "خیر");
    showImage("images/ran.webp");
  }
};

noBtn.onclick = () => {
  if (question.innerText.includes("رانِ شما")) {
    question.innerText = "توروفضااااا 😭\nیعنی ولنتاین من نمی‌شی؟";
    resetButtons("می‌شم", "نمی‌شم");
    hideImage();
    return;
  }

  if (noIndex === 1) {
    showImage("images/sushi.webp");
  } else {
    hideImage();
  }

  question.innerText = noTexts[noIndex % noTexts.length];
  resetButtons("باشه", "نه");
  noIndex++;
};

start();
