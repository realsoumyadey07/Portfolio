// hamburger menu handeling
let logo = document.getElementById("logo");
      let hamburger = document.getElementById("menu-icon");
      let upmenu = document.getElementById("upmenu");
      function openmenu() {
        upmenu.style.top = "0";
        hamburger.style.display = "none";
        logo.style.display = "none";
      }
      function closemenu() {
        upmenu.style.top = "-700%";
        hamburger.style.display = "block";
        logo.style.display = "block";
      }