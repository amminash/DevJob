// Theme switch: the small circle
const theme_switch = document.querySelector(".small-circle");
const themeToggle = document.querySelectorAll(".theme-toggle ");
// 1 for light mode;
let themeState = 1;
theme_switch.addEventListener("click", (e) => {
  e.preventDefault();
  if (themeState == 1) {
    // Changing the background of the search bar in dark mode
    theme_switch.style.margin = "0 1.6rem";
    themeToggle.forEach((element) => {
      element.classList.replace("search-bar-light", "search-bar-dark");
    });
    // changing the colors of the borders
    document
      .querySelectorAll(".border-theme")
      .forEach((element) =>
        element.classList.replace("border-theme-light", "border-theme-dark")
      );
    // Changing the color of the filter icon
    document.querySelector(".location-filter a").style.color = "var(--white)";
    // Changing the color of the body to midnight when the theme switch button is clicked
    document.body.style.backgroundColor = "var(--midnight)";
    // Changing the color of the cards
    document.querySelectorAll(".info").forEach((element) => {
      element.style.backgroundColor = "var(--very-dark-blue)";

      // Changing the color of job type to light grey when the dark-mode is switched on
      document.querySelectorAll(".job-type").forEach((element) => {
        element.style.color = "var(--light-grey)";
      });
      
    });
    // Changing the color of the job type
    themeState = 2;
  } else {
    // Changing the background of the search bar in light mode
    theme_switch.style.margin = "0 0.2rem";
    themeToggle.forEach((element) => {
      element.classList.replace("search-bar-dark", "search-bar-light");
    });
    // changing the colors of the borders
    document
      .querySelectorAll(".border-theme")
      .forEach((element) =>
        element.classList.replace("border-theme-dark", "border-theme-light")
      );
    // Changing the color of the filter icon
    document.querySelector(".location-filter a").style.color =
      "var(--dark-grey)";
    // Changing the color of the body to light grey when the theme switch button is clicked
    document.body.style.backgroundColor = "var(--light-grey)";
    //  Changing the color of the cards
    document.querySelectorAll(".info").forEach((element) => {
      element.style.backgroundColor = "var(--white)";
    });

    // Changing the color of job type to midnight when the light-mode is switched on
    document.querySelectorAll(".job-type").forEach((element) => {
      element.style.color = "var(--midnight)";
    });

    themeState = 1;
  }
});

// setting the borders of the inputs to none when they are clicked on
// document.querySelectorAll("input").forEach((element) => {
//   element.addEventListener("focus", () => {
//     element.style.border = "none";
//     element.style.outline = "none";
//   });
// });

// Popping the check button when the checkBox is clicked
let check = document.querySelector(".full-time .check");
document.getElementById("full-time").addEventListener("click", () => {
  check.style.visibility = "visible";
  check.style.color = "var(--light-voilet)";
});

check.addEventListener("click", (e) => {
  e.preventDefault();
  check.style.visibility = "hidden";
  document.querySelector(".full-time input[type='checkbox']").checked = false;
});

// The filter window - on
document.querySelector(".filterIcon").addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".filter-popUp").style.display = "block";
  document.body.style.position = "fixed";
  if (themeState == 1) {
    document.querySelector(".filter-popUp").style.backgroundColor =
      "var(--white)";
    document.querySelector("#popUplocation").style.backgroundColor =
      "var(--white)";
    document.querySelector(".full-time-popup").style.color = "var(--midnight)";
  } else {
    document.querySelector(".filter-popUp").style.backgroundColor =
      "var(--very-dark-blue)";
    document.querySelector("#popUplocation").style.backgroundColr =
      "var(--very-dark-blue)";
    document.querySelector(".full-time-popup").style.color =
      "var(--light-grey)";
  }
});

// The filter window - off
document.querySelector(".overlay").addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.position = "";
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".filter-popUp").style.display = "none";
});
