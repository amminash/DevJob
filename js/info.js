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
    // Changing the color of the body to midnight when the theme switch button is clicked
    document.body.style.backgroundColor = "var(--midnight)";

    // Changing the color of the header to midnight when the theme switch button is clicked
    document.querySelector('header').style.backgroundColor = "var(--very-dark-blue)";

    document.querySelector('.company-info-container .company-name ').style.color = "white";

    document.querySelector('.company-site').style.color = "white";
    document.querySelector('.company-site').style.backgroundColor = "var(--gray)";

    document.querySelector('.document').style.backgroundColor = "var(--very-dark-blue)";
    document.querySelector('.document').style.color = "white";

    document.querySelector('.time-info').style.color = "var(--gray)";

    document.querySelectorAll(".body .heading").forEach((element) => {
        element.style.color = "white";
    });

    document.querySelector('footer').style.backgroundColor = "var(--very-dark-blue)";

    document.querySelector('h4').style.color = "white";

    


    themeState = 2;
  } else {
    // Changing the background of the search bar in light mode
    theme_switch.style.margin = "0 0.2rem";
    themeToggle.forEach((element) => {
      element.classList.replace("search-bar-dark", "search-bar-light");
    });
    // Changing the color of the body to light grey when the theme switch button is clicked
    document.body.style.backgroundColor = "var(--light-grey)";

    // Changing the color of the header to midnight when the theme switch button is clicked
    document.querySelector('header').style.backgroundColor = "white";

    document.querySelector('.company-info-container .company-name ').style.color = "black";

    document.querySelector('.company-site').style.color = "var(--light-voilet)";
    document.querySelector('.company-site').style.backgroundColor = "var(--light-grey)";

    document.querySelector('.document').style.backgroundColor = "white";
    document.querySelector('.document').style.color = "black";

    document.querySelector('.time-info').style.color = "var(--light-voilet)";

    document.querySelectorAll(".body .heading").forEach((element) => {
        element.style.color = "black";
    });

    document.querySelector('footer').style.backgroundColor = "white";

    document.querySelector('h4').style.color = "black";


    themeState = 1;
  }
});




