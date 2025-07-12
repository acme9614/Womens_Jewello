function openDrawer() {
  document.getElementById("drawer").classList.remove("-translate-x-full");
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("menuButton").classList.add("hidden");
}

function closeDrawer() {
  document.getElementById("drawer").classList.add("-translate-x-full");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("menuButton").classList.remove("hidden");
}


// drawers menu
function navigateToScheme() {
    Toaster.postMessage('navigateScheme');
  }
  
  function navigateToBankDetails() {
    Toaster.postMessage('navigateBankDetails');
  }
  
  function navigateToKyc() {
    Toaster.postMessage('navigateKyc');
  }
  
  function navigateToRate() {
    Toaster.postMessage('navigateRate');
  }
  
  function navigateSchemeRecords() {
    Toaster.postMessage('navigateSchemeRecords');
  }
  
  function navigateToCustomerCard() {
    Toaster.postMessage('navigateCustomerCard');
  }

  function navigateTransactionHistory() {
    Toaster.postMessage('navigateTransactionHistory');
  }

  function navigateToMyOrder() {
    Toaster.postMessage('navigateToMyOrder');
  }

  function navigateToUserProfile() {
    Toaster.postMessage('navigateToUserProfile');
  }

  function navigateToDigitalGold() {
    Toaster.postMessage('navigateToDigitalGold');
  }

  function navigateToPanchang() {
    Toaster.postMessage('navigateToPanchang');
  }

  function navigateToFeedback() {
    Toaster.postMessage('navigateToFeedback');
  }

  function navigateToSetting() {
    Toaster.postMessage('navigateToSetting');
  }

  function setUserName(username) {
    // Find the element by ID and set the text content
    document.getElementById("user-name-display").innerText = "Welcome, " + username;
}
function navigateToHomePage() {
    Toaster.postMessage('navigateToHomePage');
}



// swiper 

 const swiper = new Swiper(".heroSwiper", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });




  // services 

   AOS.init({
    duration: 1000,
    once: false,
    disable: false, // 👈 Add this line
  });

  let expanded = false;
  function toggleBoxes() {
    const container = document.getElementById("boxContainer");
    const arrow = document.getElementById("arrowIcon");

    if (!expanded) {
      container.classList.remove("max-h-[8.5rem]");
      arrow.classList.add("rotate-180");
      expanded = true;
    } else {
      container.classList.add("max-h-[8.5rem]");
      arrow.classList.remove("rotate-180");
      expanded = false;
    }
  }
