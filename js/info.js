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
    document.querySelector('.main').style.backgroundColor = "var(--very-dark-blue)";


    // Change .main background color
    document.querySelector('.main').style.backgroundColor = "var(--very-dark-blue)";
    document.querySelector('.main').style.color = "white";

    document.querySelector('.time-info').style.color = "var(--gray)";

    document.querySelectorAll(".body .heading").forEach((element) => {
        element.style.color = "white";
    });

    document.querySelector('footer').style.backgroundColor = "var(--very-dark-blue)";

    document.querySelector('h4').style.color = "white";

    //header
    document.querySelector(".hero-inner .rest").style.backgroundColor="var(--midnight)"
    document.querySelectorAll(".hero-inner .rest").forEach(e => {
      e.style.color = "white"
    })
    document.querySelector(".csite").style.backgroundColor = "var(--very-dark-blue)"
    


    themeState = 2;
  } else {
    // Changing the background of the search bar in light mode
    // alert("Another mode")
    theme_switch.style.margin = "0 0.2rem";
    themeToggle.forEach((element) => {
      element.classList.replace("search-bar-dark", "search-bar-light");
    });
    // Changing the color of the body to light grey when the theme switch button is clicked
    document.body.style.backgroundColor = "var(--light-grey)";

    // Changing the color of the header to midnight when the theme switch button is clicked
    document.querySelector('.main').style.backgroundColor = "white";

    document.querySelector('.main').style.backgroundColor = "white";
    document.querySelector('.main').style.color = "black";

    document.querySelector('.time-info').style.color = "var(--light-voilet)";

    document.querySelectorAll(".body .heading").forEach((element) => {
        element.style.color = "black";
    });

    document.querySelector('footer').style.backgroundColor = "white";

    document.querySelector('h4').style.color = "black";

        //header
        document.querySelector(".hero-inner .rest").style.backgroundColor="var(--white)"
        document.querySelectorAll(".hero-inner .rest").forEach(e => {
          e.style.color = "black"
        })
        document.querySelector(".csite").style.backgroundColor = "var(--light-grey)"

    themeState = 1;
  }
});




