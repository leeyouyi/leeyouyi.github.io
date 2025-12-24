function renderCalendar(currentDate, unsigned, signed) {
  const year = currentDate.getFullYear();
  const rocYear = year - 1911;
  const month = currentDate.getMonth(); // 0-11
  const unsignedDates = unsigned || [1, 2, 3, 4, 5, 6];
  const signedDates = signed || [7, 8, 9, 10, 11, 12, 13];

  // 1. 取得當月的第一天是星期幾 (0=週日)
  const firstDay = new Date(year, month, 1).getDay();

  // 2. 取得當月的總天數
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthYearSpan = document.getElementById("month-year");
  const calendarDaysGrid = document.getElementById("calendar-days");
  let count = 0;
  // 更新標題
  monthYearSpan.textContent = `${rocYear} 年 ${month + 1}月`;
  calendarDaysGrid.innerHTML = ""; // 清空舊的日期
  calendarDaysGrid.insertAdjacentHTML(
    "beforeend",
    '<span class="week-text">W1</span>'
  );
  // 3. 補齊開頭的空白格子
  for (let i = 0; i < firstDay; i++) {
    calendarDaysGrid.insertAdjacentHTML(
      "beforeend",
      '<span class="blank"></span>'
    );
    count++;
  }

  // 4. 填入當月的實際日期
  for (let day = 1; day <= daysInMonth; day++) {
    if (count % 7 === 0 && count !== 0) {
      calendarDaysGrid.insertAdjacentHTML(
        "beforeend",
        `<span class="week-text">W${Math.floor(count / 7) + 1}</span>`
      );
    }
    const dayElement = document.createElement("span");

    // 額外功能：標記今天的日期
    const today = new Date("2025-12-17");
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    ) {
      dayElement.classList.add("today");
    }
    if (unsignedDates.includes(day)) {
      dayElement.classList.add("unsigned");
    } else if (signedDates.includes(day)) {
      dayElement.classList.add("signed");
    } else {
      dayElement.textContent = day;
      dayElement.classList.add("day");
    }

    calendarDaysGrid.appendChild(dayElement);
    count++;
  }
}

function renderSeason(currentDate, activeDateData) {
  const year = currentDate.getFullYear();
  const rocYear = year - 1911;
  const month = currentDate.getMonth(); // 0-11

  const stampMissionBody = document.getElementById("stamp-mission-body");
  stampMissionBody.innerHTML = ""; // 清空舊的任務
  let season = "";
  if (month >= 0 && month <= 2) {
    season = "1";
  } else if (month >= 3 && month <= 5) {
    season = "2";
  } else if (month >= 6 && month <= 8) {
    season = "3";
  } else if (month >= 9 && month <= 11) {
    season = "4";
  }
  if (rocYear <= 115 && season == "1") {
    document.getElementById("prev-season").style.display = "none";
  } else {
    document.getElementById("prev-season").style.display = "inline-block";
  }

  const seasonYearSpan = document.getElementById("season-year");
  // 更新標題
  seasonYearSpan.textContent = `${rocYear} 年 第 ${season} 季`;

  // 只顯示前五個任務
  const nextActiveDateData = activeDateData
    .filter((_, index) => index <= 4)
    .map((item) => {
      return { ...item, taskFinished: [true, false, true] };
    });

  if (season == "1") {
    activeDateData.forEach((item, index) => {
      const stampItem = document.createElement("div");
      stampItem.classList.add("stamp-item");
      stampItem.setAttribute("data-bs-toggle", "modal");
      stampItem.setAttribute("data-bs-target", "#stamp-item-Modal");
      stampItem.setAttribute("title", "[開啟彈跳視窗]集章任務詳情");
      stampItem.setAttribute("data-id", "stamp-item-" + index);
      const stampImgBox = document.createElement("div");
      stampImgBox.classList.add("stamp-img-box", item.className);
      if (!item.taskFinished.every((status) => status)) {
        stampImgBox.classList.add("opacity-2");
      }
      const missionText = document.createElement("p");
      missionText.textContent = item.mission;
      stampItem.appendChild(stampImgBox);
      stampItem.appendChild(missionText);
      stampMissionBody.appendChild(stampItem);
    });
  } else {
    nextActiveDateData.forEach((item, index) => {
      const stampItem = document.createElement("div");
      stampItem.classList.add("stamp-item");
      stampItem.setAttribute("data-bs-toggle", "modal");
      stampItem.setAttribute("data-bs-target", "#stamp-item-Modal");
      stampItem.setAttribute("title", "[開啟彈跳視窗]集章任務詳情");
      stampItem.setAttribute("data-id", "stamp-item-" + index);
      const stampImgBox = document.createElement("div");
      stampImgBox.classList.add("stamp-img-box", item.className);
      // 全部顯示半透明效果
      stampImgBox.classList.add("opacity-2");
      const missionText = document.createElement("p");
      missionText.textContent = item.mission;
      stampItem.appendChild(stampImgBox);
      stampItem.appendChild(missionText);
      stampMissionBody.appendChild(stampItem);
    });
  }

  document.querySelectorAll(".stamp-item").forEach((item) => {
    item.addEventListener("click", () => {
      // 在這裡可以加入點擊集章圖片的邏輯，例如顯示任務詳情等
      const stampImgBox = item.querySelector(".stamp-img-box");
      const className = stampImgBox.className;
      const img = className.split(" ")[1];
      const modalImg = document.getElementById("stamp-item-img");
      modalImg.style.backgroundImage = `url('/inc/img/sign-in/${img}.png')`;

      const stampItemContent = document.querySelector("#stamp-item-content");
      const id = item.dataset.id;
      let itemData;
      if (season == "1") {
        itemData = activeDateData[id.split("stamp-item-")[1]];
      } else {
        itemData = nextActiveDateData[id.split("stamp-item-")[1]];
      }

      itemData.taskFinished.forEach((finished, idx) => {
        // 未完成任務
        if (!finished) {
          stampItemContent
            .querySelectorAll(".stamp-item-text")
            [idx].classList.remove("finished");
          stampItemContent
            .querySelectorAll(".stamp-item-text")
            [idx].classList.add("unfinished");
        }
        // 完成任務
        if (finished) {
          stampItemContent
            .querySelectorAll(".stamp-item-text")
            [idx].classList.remove("unfinished");
          stampItemContent
            .querySelectorAll(".stamp-item-text")
            [idx].classList.add("finished");
        }
      });
      if (!itemData.taskFinished.every((status) => status)) {
        document.getElementById("stamp-button").classList.add("disabled");
      } else {
        document.getElementById("stamp-button").classList.remove("disabled");
      }
    });
  });
}
