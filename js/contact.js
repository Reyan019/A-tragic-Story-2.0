document.getElementById("generateCard").addEventListener("click", function () {
  let toName = document.getElementById("toName").value.trim();
  let fromName = document.getElementById("fromName").value.trim();
  let theme = document.querySelector(".theme-buttons button.active")?.dataset.theme;
  let fontStyle = document.getElementById("fontStyle").value;
  let backgroundColor = document.getElementById("backgroundColor").value;
  let customMessage = document.getElementById("customMessage").value.trim();

  if (toName === "" || fromName === "" || !theme) {
    alert("Please fill in all fields and select a theme.");
    return;
  }

  let cardTitle = document.getElementById("cardTitle");
  let poeticMessage = document.getElementById("poeticMessage");
  let customMessageDisplay = document.getElementById("customMessageDisplay");
  let toDisplay = document.getElementById("toDisplay");
  let fromDisplay = document.getElementById("fromDisplay");
  let leftEmoji = document.getElementById("leftEmoji");
  let rightEmoji = document.getElementById("rightEmoji");
  let card = document.getElementById("card");

  let themeMessages = {
    birthday: `🎂 Happy Birthday, ${toName}! 🎉 Wishing you a fantastic day.`,
    congratulations: `🎉 Congratulations, ${toName}! 🏆 Keep shining and achieving great things!`,
    love: `❤️ Dear ${toName}, you are truly special! Sending love your way 💖`,
    friendship: `😎 Hey ${toName}! You are an amazing friend! Stay awesome 🌟`,
    thankYou: `🙏 Thank you, ${toName}! Your kindness means the world to me.`,
    anniversary: `💍 Happy Anniversary, ${toName}! May your love continue to grow.`,
    babyShower: `🍼 Congratulations on your little bundle of joy, ${toName}!`,
    graduation: `🎓 Congratulations, ${toName}! Your hard work has paid off.`,
    getWellSoon: `💐 Get well soon, ${toName}! Wishing you a speedy recovery.`,
    sympathy: `🌷 Our deepest condolences, ${toName}. May you find peace and strength.`,
    christmas: `🎄 Merry Christmas, ${toName}! Wishing you joy and happiness.`,
    newYear: `🎆 Happy New Year, ${toName}! May this year bring you success and joy.`,
    easter: `🐣 Happy Easter, ${toName}! Wishing you a blessed and joyful day.`,
    valentinesDay: `💘 Happy Valentine's Day, ${toName}! You are loved beyond measure.`,
    mothersDay: `💐 Happy Mother's Day, ${toName}! Thank you for all you do.`,
    fathersDay: `👔 Happy Father's Day, ${toName}! Your love and guidance are cherished.`,
    housewarming: `🏡 Congratulations on your new home, ${toName}! May it be filled with joy.`,
    retirement: `🎉 Happy Retirement, ${toName}! Enjoy this new chapter of your life.`,
    goodLuck: `🍀 Good luck, ${toName}! May the gods smile upon your endeavors.`,
    wedding: `💍 Congratulations on your wedding, ${toName}! Wishing you a lifetime of love.`,
  };

  let poeticMessages = {
    birthday: `"By the gods of Asgard, may Odin grant you wisdom, Thor protect you with his hammer, and Freya bless you with love. Happy Birthday, ${toName}!"`,
    congratulations: `"May the Allfather guide your path, and the Valkyries sing of your triumphs. Congratulations, ${toName}!"`,
    love: `"As the stars shine in the night sky, so does my love for you, ${toName}. May Freya bless our bond forever."`,
    friendship: `"Like the mighty Yggdrasil, our friendship stands strong and eternal. Skål, ${toName}!"`,
    thankYou: `"By the grace of the gods, your kindness has touched my heart. Thank you, ${toName}."`,
    anniversary: `"May the gods bless your union, ${toName}, as you celebrate another year of love and companionship."`,
    babyShower: `"May the gods bless your child, ${toName}, with strength, wisdom, and a heart full of courage."`,
    graduation: `"May the wisdom of Odin and the strength of Thor guide you, ${toName}, as you embark on this new journey."`,
    getWellSoon: `"May the healing hands of Eir restore your health, ${toName}. Get well soon!"`,
    sympathy: `"May the gods welcome your loved one to Valhalla, ${toName}, and grant you peace in this time of sorrow."`,
    christmas: `"May the Yule log burn bright, and the gods bless your home with joy and warmth this Christmas, ${toName}."`,
    newYear: `"As the new year dawns, may the gods grant you prosperity, happiness, and success, ${toName}."`,
    easter: `"May the gods bless you with renewal and hope this Easter, ${toName}."`,
    valentinesDay: `"On this day of love, may Freya bless your heart, ${toName}, and fill it with eternal joy."`,
    mothersDay: `"May the goddess Frigg bless you, ${toName}, for your love and care are as boundless as the seas."`,
    fathersDay: `"May the strength of Thor and the wisdom of Odin guide you, ${toName}, on this Father's Day."`,
    housewarming: `"May the gods bless your new home, ${toName}, and fill it with laughter, love, and prosperity."`,
    retirement: `"As you enter this new chapter, may the gods grant you peace, joy, and endless adventures, ${toName}."`,
    goodLuck: `"May the gods smile upon your path, ${toName}, and grant you victory in all your endeavors."`,
    wedding: `"May the gods bless your union, ${toName}, and may your love be as eternal as the stars."`,
  };

  let themeEmojis = {
    birthday: { left: "🎂", right: "🎉" },
    congratulations: { left: "🏆", right: "🎊" },
    love: { left: "❤️", right: "💖" },
    friendship: { left: "🤝", right: "🌟" },
    thankYou: { left: "🙏", right: "💌" },
    anniversary: { left: "💍", right: "💑" },
    babyShower: { left: "🍼", right: "👶" },
    graduation: { left: "🎓", right: "📜" },
    getWellSoon: { left: "💐", right: "🌿" },
    sympathy: { left: "🌷", right: "🕊️" },
    christmas: { left: "🎄", right: "🎁" },
    newYear: { left: "🎆", right: "🎇" },
    easter: { left: "🐣", right: "🌼" },
    valentinesDay: { left: "💘", right: "🌹" },
    mothersDay: { left: "💐", right: "👩‍👧‍👦" },
    fathersDay: { left: "👔", right: "👨‍👧‍👦" },
    housewarming: { left: "🏡", right: "🔑" },
    retirement: { left: "🎉", right: "🌴" },
    goodLuck: { left: "🍀", right: "✨" },
    wedding: { left: "💍", right: "👰‍♀️" },
  };

  toDisplay.innerText = `To: ${toName}`;
  fromDisplay.innerText = `From: ${fromName}`;
  cardTitle.innerText = `💌 ${theme.charAt(0).toUpperCase() + theme.slice(1)} Greeting`;
  poeticMessage.innerText = poeticMessages[theme];
  customMessageDisplay.innerText = customMessage || "Warm wishes from all of us!";
  leftEmoji.innerText = themeEmojis[theme].left;
  rightEmoji.innerText = themeEmojis[theme].right;
  card.style.display = "flex";
  card.style.fontFamily = fontStyle;
  card.style.backgroundColor = backgroundColor;
});

// Theme button selection
document.querySelectorAll(".theme-buttons button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".theme-buttons button").forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Download Card as an Image
document.getElementById("downloadCard").addEventListener("click", async function () {
    const card = document.getElementById("card");
    const { jsPDF } = window.jspdf;

    try {
        // Show loading state
        this.disabled = true;
        this.textContent = "Generating PDF...";

        const canvas = await html2canvas(card, {
            scale: 3, // Higher resolution
            logging: false,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        });

        // Create PDF in landscape orientation
        const pdf = new jsPDF('l', 'mm', 'a4');

        // Calculate dimensions to fit A4 perfectly
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgRatio = canvas.width / canvas.height;
        const pdfRatio = pdfWidth / pdfHeight;

        let finalWidth, finalHeight;
        if (imgRatio > pdfRatio) {
            finalWidth = pdfWidth;
            finalHeight = pdfWidth / imgRatio;
        } else {
            finalHeight = pdfHeight;
            finalWidth = pdfHeight * imgRatio;
        }

        // Center the image on the page
        const x = (pdfWidth - finalWidth) / 2;
        const y = (pdfHeight - finalHeight) / 2;

        pdf.addImage(canvas, 'PNG', x, y, finalWidth, finalHeight);
        pdf.save('greeting_card.pdf');

    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Error generating PDF. Please try again.");
    } finally {
        // Reset button state
        this.disabled = false;
        this.textContent = "Download Card";
    }
});

document.getElementById("downloadCard").addEventListener("click", async function () {
    const card = document.getElementById("card");
    const { jsPDF } = window.jspdf;

    try {
        // Show loading state
        this.disabled = true;
        this.textContent = "Generating PDF...";

        const canvas = await html2canvas(card, {
            scale: 3, // Higher resolution
            logging: false,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        });

        // Create PDF in landscape orientation
        const pdf = new jsPDF('l', 'mm', 'a4');

        // Calculate dimensions to fit A4 perfectly
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgRatio = canvas.width / canvas.height;
        const pdfRatio = pdfWidth / pdfHeight;

        let finalWidth, finalHeight;
        if (imgRatio > pdfRatio) {
            finalWidth = pdfWidth;
            finalHeight = pdfWidth / imgRatio;
        } else {
            finalHeight = pdfHeight;
            finalWidth = pdfHeight * imgRatio;
        }

        // Center the image on the page
        const x = (pdfWidth - finalWidth) / 2;
        const y = (pdfHeight - finalHeight) / 2;

        pdf.addImage(canvas, 'PNG', x, y, finalWidth, finalHeight);
        pdf.save('greeting_card.pdf');

    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Error generating PDF. Please try again.");
    } finally {
        // Reset button state
        this.disabled = false;
        this.textContent = "Download Card";
    }
});