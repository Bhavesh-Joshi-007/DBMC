document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    offset: 120,
    duration: 600,
    easing: 'ease-in-out',
    delay: 100,
  });
});


// navlink 

const menuOpener = document.querySelector('.menu-opener');
const navLinks = document.querySelector('.nav-linked');

menuOpener.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuOpener.classList.toggle('active');
});

// popup form js 

const popupFormSection = document.querySelector(".popup-form-section");
const overlay = document.querySelector(".overlay");
const closeBtn = document.getElementById("close");
const body = document.body;


setTimeout(() => {
  popupFormSection.style.display = "block";
  overlay.style.display = "block";
  body.classList.add("no-scroll");
}, 8000);

closeBtn.addEventListener("click", () => {
  popupFormSection.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
});


gsap.registerPlugin();

// GSAP animations for the highlight and text
document.addEventListener("DOMContentLoaded", () => {
  const mainContainerPreloader = document.querySelector(".main_container_preloader");
  const preloader = document.querySelector(".preloader");
  const percentageText = document.querySelector(".percentage");
  const heroSection = document.querySelector(".main-container-section");

  // Initially hide the hero section
  heroSection.style.opacity = "0";

  // GSAP Timeline for Preloader
  const tlPreloader = gsap.timeline();
  let percentage = 0;

  const interval = setInterval(() => {
    if (percentage < 100) {
      percentage++;
      percentageText.textContent = `${percentage}%`;
    } else {
      clearInterval(interval);
      // Fade out the preloader and its container
      tlPreloader.to(mainContainerPreloader, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          mainContainerPreloader.style.display = "none"; // Completely hide the preloader container
          // Fade in the hero section
          gsap.to(heroSection, {
            opacity: 1,
            duration: 1,
            onComplete: () => startHeroAnimation(),
          });
        },
      });
    }
  }, 30);

  // Hero Section Animation
  const startHeroAnimation = () => {
    const highlight = document.querySelector(".highlight");
    const textDBMC = document.querySelectorAll(".text-style")[1]; // "DBMC" text

    const tlHero = gsap.timeline();

  tlHero
    .to(
      textDBMC,
      {
        x: '10vw', // Responsive slide distance
        duration: 1,
        ease: "power2.out",
      },
      0.2
    )
    .to(
      highlight,
      {
        width: "9vw", // Responsive width
        height: "70%", // Responsive height
        duration: 1,
        ease: "power2.ease",
      },
      "-=1.45"
    );

  };
});



// smooth scroll effect 

document.addEventListener("DOMContentLoaded", () => {
  const smoothLinks = document.querySelectorAll(".smooth");
  const offset = 70;

  smoothLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Smooth scroll to the target element, accounting for the offset
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth", // Smooth scrolling
        });
      }
    });
  });
});


// ------------number count-------------- 


const counters = document.querySelectorAll(".num span");
let activated = false;

window.addEventListener("scroll", () => {
  const container = document.querySelector(".info-about-list");
  const containerOffsetTop = container.offsetTop;
  const containerHeight = container.offsetHeight;

  if (
    window.pageYOffset > containerOffsetTop - containerHeight - 200 &&
    !activated
  ) {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-count"));
      let count = 0;

      const updateCount = () => {
        if (count < target) {
          count += Math.ceil(target / 100);
          counter.innerText = count > target ? target : count;
          setTimeout(updateCount, 80);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });

    activated = true;
  }
});

// case staduy carousel effect 

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      on: {
        init: function () {
          console.log('Breakpoint: 1024px - 3 slides per view');
        },
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      on: {
        init: function () {
          console.log('Breakpoint: 768px - 2 slides per view');
        },
      },
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      on: {
        init: function () {
          console.log('Breakpoint: 480px - 1 slide per view');
        },
      },
    },
    390: {
      slidesPerView: 1,
      spaceBetween: 10,
      on: {
        init: function () {
          console.log('Breakpoint: 480px - 1 slide per view');
        },
      },
    },
    260: {
      slidesPerView: 1,
      spaceBetween: 10,
      on: {
        init: function () {
          console.log('Breakpoint: 480px - 1 slide per view');
        },
      },
    },
  },
});

//------ service expert js ---------
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollWrapper = document.querySelector(".scroll-wrapper");
  const twoCols = document.querySelector(".two-cols");

  gsap.to(twoCols, {
    x: () => -(twoCols.scrollWidth - scrollWrapper.offsetWidth) + "px",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: scrollWrapper,
      start: "top 20%",
      end: () => "+=" + (twoCols.scrollWidth - scrollWrapper.offsetWidth),
      scrub: true,
      pin: true,
      // markers: true,
    },
  });
  AOS.refresh();
});


//----------- popup holder js ---------------

const showcaseBlocks = document.querySelectorAll(".showcase-block");

function openPopup(image) {
  const targetPopupId = image.getAttribute("data-target");
  const popup = document.querySelector(targetPopupId);
  if (popup) {
    document.querySelectorAll(".popup-holder").forEach(p => {
      p.style.display = "none";
    });
    popup.style.display = "block";
  }
}
showcaseBlocks.forEach(block => {
  const image = block.querySelector("img");
  if (image) {
    image.addEventListener("click", () => {
      openPopup(image);
    });
  }
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
  const isPopupClick = e.target.closest(".popup-holder");
  const isImageClick = e.target.closest(".showcase-block img");

  if (!isPopupClick && !isImageClick) {
    document.querySelectorAll(".popup-holder").forEach(popup => {
      popup.style.display = "none";
    });
  }
});


// ---------------main form -----------

document.querySelectorAll('.option-button').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('selected');
  });
});


let url = "https://script.google.com/macros/s/AKfycby_q8zim1wei8g09rFLDvhAXkFh9IIhZpO_f83Uv6omN4i4s9LsNeETmryTZ1-lPcyP/exec";

function showError(inputElement, message) {
  inputElement.parentNode.querySelectorAll(".error-message").forEach((el) => el.remove());

  let errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  inputElement.parentNode.appendChild(errorElement);
}
function validateForm(form, nameInput, phoneInput, emailInput) {
  let isValid = true;

  form.querySelectorAll(".error-message").forEach((el) => el.remove());

  if (nameInput.value.trim().length <= 3) {
    isValid = false;
    showError(nameInput, "Name must be more than 3 characters.");
  }

  if (!/^\d{10}$/.test(phoneInput.value.trim())) {
    isValid = false;
    showError(phoneInput, "Contact Number must be exactly 10 digits.");
  }

  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput, "Email must be a valid @gmail.com address.");
  }

  return isValid;
}


// Service selection logic
function handleServiceSelection(buttons, hiddenInput) {
  let selectedServices = [];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const service = button.getAttribute("data-value");
      if (selectedServices.includes(service)) {
        selectedServices = selectedServices.filter((s) => s !== service);
        button.classList.remove("selected");
      } else {
        selectedServices.push(service);
        button.classList.add("selected");
      }
      hiddenInput.value = selectedServices.join(", ");
      console.log("Updated hidden input value:", hiddenInput.value);
    });
  });
}

// Handle main form services
const mainButtons = document.querySelectorAll(".option-button");
const mainHiddenInput = document.getElementById("selected-services");
handleServiceSelection(mainButtons, mainHiddenInput);

// Handle popup form services
const popupButtons = document.querySelectorAll(".popup-option-button");
const popupHiddenInput = document.getElementById("popup-selected-services");
handleServiceSelection(popupButtons, popupHiddenInput);

function showError(inputElement, message) {
  inputElement.parentNode.querySelectorAll(".error-message").forEach((el) => el.remove());

  let errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  inputElement.parentNode.appendChild(errorElement);
}

function validateForm(form, nameInput, phoneInput, emailInput) {
  let isValid = true;

  form.querySelectorAll(".error-message").forEach((el) => el.remove());

  if (nameInput.value.trim().length <= 3) {
    isValid = false;
    showError(nameInput, "Name must be more than 3 characters.");
  }

  if (!/^\d{10}$/.test(phoneInput.value.trim())) {
    isValid = false;
    showError(phoneInput, "Contact Number must be exactly 10 digits.");
  }

  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput, "Email must be a valid @gmail.com address.");
  }

  return isValid;
}

let mainForm = document.getElementById("web_form");
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInput = document.getElementById("username");
  let phoneInput = document.getElementById("contact-number");
  let emailInput = document.getElementById("email");

  if (validateForm(mainForm, nameInput, phoneInput, emailInput)) {
    let formData = new FormData(mainForm);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((finalRes) => {
        alert("Form submitted successfully!");
        mainForm.reset();
        mainHiddenInput.value = "";
        mainButtons.forEach((button) => button.classList.remove("selected"));
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting the form. Please try again.");
      });
  }
});

let popupForm = document.querySelector("#popup-form form");
popupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInput = popupForm.querySelector("[name='name']");
  let phoneInput = popupForm.querySelector("[name='phone']");
  let emailInput = popupForm.querySelector("[name='email']");

  if (validateForm(popupForm, nameInput, phoneInput, emailInput)) {
    let formData = new FormData(popupForm);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((finalRes) => {
        alert("Popup form submitted successfully!");
        popupForm.reset();
        popupHiddenInput.value = "";
        popupButtons.forEach((button) => button.classList.remove("selected"));
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting the popup form. Please try again.");
      });
  }
});


// let url = "https://script.google.com/macros/s/AKfycby8Ui-9DaG7k412MXnWVRV1hIJLJKVMlWamSzSVI5z6b3hUXk07E-WxlA08TGLre43j/exec";

// // Function to show error message
// function showError(inputElement, message) {
//   inputElement.parentNode.querySelectorAll(".error-message").forEach((el) => el.remove());

//   let errorElement = document.createElement("div");
//   errorElement.className = "error-message";
//   errorElement.textContent = message;

//   inputElement.parentNode.appendChild(errorElement);
// }

// // Validation logic for both forms
// function validateForm(form, nameInput, phoneInput, emailInput) {
//   let isValid = true;

//   form.querySelectorAll(".error-message").forEach((el) => el.remove());

//   if (nameInput.value.trim().length <= 3) {
//     isValid = false;
//     showError(nameInput, "Name must be more than 3 characters.");
//   }

//   if (!/^\d{10}$/.test(phoneInput.value.trim())) {
//     isValid = false;
//     showError(phoneInput, "Contact Number must be exactly 10 digits.");
//   }

//   if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim())) {
//     isValid = false;
//     showError(emailInput, "Email must be a valid @gmail.com address.");
//   }

//   return isValid;
// }

// // Service selection logic
// function handleServiceSelection(buttons, hiddenInput) {
//   let selectedServices = [];
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const service = button.getAttribute("data-value");
//       if (selectedServices.includes(service)) {
//         selectedServices = selectedServices.filter((s) => s !== service);
//         button.classList.remove("selected");
//       } else {
//         selectedServices.push(service);
//         button.classList.add("selected");
//       }
//       hiddenInput.value = selectedServices.join(", ");
//       console.log("Updated hidden input value:", hiddenInput.value);
//     });
//   });
// }

// // Handle main form services
// const mainButtons = document.querySelectorAll(".option-button");
// const mainHiddenInput = document.getElementById("selected-services");
// handleServiceSelection(mainButtons, mainHiddenInput);

// // Handle popup form services
// const popupButtons = document.querySelectorAll(".popup-option-button");
// const popupHiddenInput = document.getElementById("popup-selected-services");
// handleServiceSelection(popupButtons, popupHiddenInput);

// // Function to check if the data already exists in Google Sheets
// // Function to check if the data already exists in Google Sheets
// function checkExistingData(formData, formType) {
//   fetch(url, {
//     method: 'GET',  // Use GET to check data first (no data to submit)
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     let isDuplicate = false;

//     for (let record of data) {
//       if (
//         (record.email === formData.email || record.phone === formData.phone)
//       ) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (isDuplicate) {
//       alert("You are already registered.");
//     } else {
//       submitFormData(formData, formType);  // If no duplicate, submit form data
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching data from Google Sheets:", error);
//     alert("Error checking registration status. Please try again.");
//   });
// }


// // Function to submit data to Google Sheets
// function submitFormData(formData, formType) {
//   const dataToSend = new FormData();
//   dataToSend.append("name", formData.name);
//   dataToSend.append("phone", formData.phone);
//   dataToSend.append("email", formData.email);
//   dataToSend.append("organization_name", formData.organization_name);
//   dataToSend.append("web_link", formData.web_link);
//   dataToSend.append("services", formData.services);

//   fetch(url, {
//     method: "POST",
//     body: dataToSend,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   })
//   .then((response) => response.text())
//   .then((finalRes) => {
//     alert("Registered successfully!");
//     if (formType === "popup") {
//       document.querySelector("#popup-form form").reset();
//     } else {
//       document.getElementById("web_form").reset();
//     }
//   })
//   .catch((error) => {
//     console.error("Error submitting form data:", error);
//     alert("There was an error submitting the form. Please try again.");
//   });

// }

// // Main form submission
// let mainForm = document.getElementById("web_form");
// mainForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let nameInput = document.getElementById("username");
//   let phoneInput = document.getElementById("contact-number");
//   let emailInput = document.getElementById("email");

//   if (validateForm(mainForm, nameInput, phoneInput, emailInput)) {
//     let formData = {
//       name: nameInput.value.trim(),
//       phone: phoneInput.value.trim(),
//       email: emailInput.value.trim(),
//       organization_name: document.getElementById("organization").value.trim(),
//       web_link: document.getElementById("website").value.trim(),
//       services: mainHiddenInput.value.trim(),
//     };

//     checkExistingData(formData, "main");
//   }
// });

// // Popup form submission
// let popupForm = document.querySelector("#popup-form form");
// popupForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let nameInput = popupForm.querySelector("[name='name']");
//   let phoneInput = popupForm.querySelector("[name='phone']");
//   let emailInput = popupForm.querySelector("[name='email']");

//   if (validateForm(popupForm, nameInput, phoneInput, emailInput)) {
//     let formData = {
//       name: nameInput.value.trim(),
//       phone: phoneInput.value.trim(),
//       email: emailInput.value.trim(),
//       organization_name: popupForm.querySelector("[name='organization_name']").value.trim(),
//       web_link: popupForm.querySelector("[name='web_link']").value.trim(),
//       services: popupHiddenInput.value.trim(),
//     };

//     checkExistingData(formData, "popup");
//   }
// });


// price section js

const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');
const billingPeriods = document.querySelectorAll('.billing-period:not(:first-child)');
const plans = document.querySelectorAll('.plan');

// Initialize the middle card as active
plans[1].classList.add('active');

// Add click event listeners to plans
plans.forEach(plan => {
  plan.addEventListener('click', () => {
    // Remove active class from all plans
    plans.forEach(p => p.classList.remove('active'));
    // Add active class to clicked plan
    plan.classList.add('active');
  });
});

toggle.addEventListener('click', () => {
  toggle.classList.toggle('yearly');
  const isYearly = toggle.classList.contains('yearly');

  prices.forEach(price => {
    const monthlyPrice = price.getAttribute('data-monthly');
    const yearlyPrice = price.getAttribute('data-yearly');
    price.textContent = isYearly ? yearlyPrice : monthlyPrice;
  });

  billingPeriods.forEach(period => {
    const monthlyText = period.getAttribute('data-monthly');
    const yearlyText = period.getAttribute('data-yearly');
    period.textContent = isYearly ? yearlyText : monthlyText;
  });
});











document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".myBuddiesSwiper", {  // Updated class name
    effect: "cards",
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true,
    },
    on: {
      slideChange: function () {
        updateProfileCards(this.realIndex);
      }
    }
  });

  function updateProfileCards(index) {
      const profiles = [
          [
            { name: "TravelJokes", followers: "2.3M Followers", image: "./image/demo_img1.jpg" },
            { name: "WanderHumor", followers: "3.1M Followers", image: "https://source.unsplash.com/100x100/?woman,face" },
            { name: "AdventureFails", followers: "2.5M Followers", image: "https://source.unsplash.com/100x100/?boy,face" },
            { name: "GlobalLaughs", followers: "1.9M Followers", image: "https://source.unsplash.com/100x100/?man,face" }
          ],
          [
            { name: "HappyTravels", followers: "3.8M Followers", image: "https://source.unsplash.com/100x100/?happy,face" },
            { name: "GlobeTrotter", followers: "2.1M Followers", image: "https://source.unsplash.com/100x100/?smile,face" },
            { name: "ComedyNomad", followers: "4.0M Followers", image: "https://source.unsplash.com/100x100/?laugh,face" },
            { name: "FunExplorer", followers: "1.5M Followers", image: "https://source.unsplash.com/100x100/?explorer,face" }
          ],
          [
            { name: "NomadJoker", followers: "3.2M Followers", image: "https://source.unsplash.com/100x100/?joker,face" },
            { name: "HumorGlider", followers: "2.9M Followers", image: "https://source.unsplash.com/100x100/?humor,face" },
            { name: "GiggleTrekkers", followers: "2.7M Followers", image: "https://source.unsplash.com/100x100/?trekker,face" },
            { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" }
          ]
      ];
  
      const selectedProfiles = profiles[index % profiles.length]; // Rotate between profile sets
      const profileCards = document.querySelectorAll(".profile-card");
  
      profileCards.forEach((card, i) => {
          if (selectedProfiles[i]) {  // Check if the profile exists before updating
              card.querySelector(".profile-image img").src = selectedProfiles[i].image;
              card.querySelector(".profile-name").textContent = selectedProfiles[i].name;
              card.querySelector(".profile-followers").textContent = selectedProfiles[i].followers;
          }
      });
  }
  

  updateProfileCards(0); // Initialize with first set of profiles
});