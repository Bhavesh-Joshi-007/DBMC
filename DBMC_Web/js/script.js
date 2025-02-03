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
          x: 150,
          duration: 1,
          ease: "power2.out",
        },
        0.2
      )
      .to(
        highlight,
        {
          width: "10vw",
          height: "13vh",
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
// service section js 

const menuData = {
  'Regional': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'LocalMemes', count: '5.2M', image: './images/demo_service_section_img.jpg'},
      { name: 'RegionalHumor', count: '3.8M', image: './images/demo_service_section_img.jpg' },
      { name: 'StateComedy', count: '2.4M', image:'./images/demo_service_section_img.jpg'},
      { name: 'CityGiggles', count: '1.5M', image: './images/demo_service_section_img.jpg'}
    ]
  },
  'Premium Meme': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'Sarcastic_us', count: '10.1M', image:'./images/demo_service_section_img.jpg'},
      { name: 'Clips', count: '14.7M', image: './images/demo_service_section_img.jpg'},
      { name: 'LaughPremium', count: '9.2M', image: './images/demo_service_section_img.jpg'},
      { name: 'TopHumor', count: '12.3M', image: './images/demo_service_section_img.jpg'}
    ]
  },
  'Tech & Coding': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'CodeHumor', count: '8.4M', image: './images/demo_service_section_img.jpg'},
      { name: 'DevMemez', count: '6.3M', image: './images/demo_service_section_img.jpg'},
      { name: 'ProgramLaughs', count: '7.8M', image:  './images/demo_service_section_img.jpg'},
      { name: 'TechGiggles', count: '5.4M', image: './images/demo_service_section_img.jpg' }
    ]
  },
  'Fitness Memes': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'GymLaughs', count: '4.7M', image:  './images/demo_service_section_img.jpg'},
      { name: 'LiftHumor', count: '5.9M', image:  './images/demo_service_section_img.jpg'},
      { name: 'WorkoutJokes', count: '3.2M', image:  './images/demo_service_section_img.jpg'},
      { name: 'HealthFails', count: '2.8M', image:  './images/demo_service_section_img.jpg'}
    ]
  },
  'Travel & Adventure': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'TravelJokes', count: '2.3M', image:  './images/demo_service_section_img.jpg'},
      { name: 'WanderHumor', count: '3.1M', image:  './images/demo_service_section_img.jpg'},
      { name: 'AdventureFails', count: '2.5M', image: './images/demo_service_section_img.jpg'},
      { name: 'GlobeLaughs', count: '1.9M', image:  './images/demo_service_section_img.jpg' }
    ]
  },
  'Foodies Unite': {
    image:'./images/circle_people_image.jpg',
    followers: [
      { name: 'FoodLaughs', count: '7.5M', image: './images/demo_service_section_img.jpg'},
      { name: 'RecipeFails', count: '6.8M', image:  './images/demo_service_section_img.jpg'},
      { name: 'ChefLOL', count: '4.1M', image: './images/demo_service_section_img.jpg'},
      { name: 'DishHumor', count: '3.9M', image: './images/demo_service_section_img.jpg'}
    ]
  },
  'Relationship Humor': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'CoupleFails', count: '12.1M', image: './images/demo_service_section_img.jpg'},
      { name: 'DatingLOL', count: '9.8M', image:  './images/demo_service_section_img.jpg'},
      { name: 'LoveLaughs', count: '8.4M', image:  './images/demo_service_section_img.jpg'},
      { name: 'BreakupGiggles', count: '6.3M', image:  './images/demo_service_section_img.jpg'}
    ]
  },
  'Student Life': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'StudyLaughs', count: '11.4M', image:  './images/demo_service_section_img.jpg'},
      { name: 'ExamFails', count: '8.6M', image:  './images/demo_service_section_img.jpg'},
      { name: 'CampusGiggles', count: '5.8M', image:  './images/demo_service_section_img.jpg'},
      { name: 'HostelHumor', count: '6.2M', image:  './images/demo_service_section_img.jpg'}
    ]
  },
  'Advertise': {
    image: './images/circle_people_image.jpg',
    followers: [
      { name: 'StudyLaughs', count: '11.4M', image:  './images/demo_service_section_img.jpg'},
      { name: 'ExamFails', count: '8.6M', image:  './images/demo_service_section_img.jpg'},
      { name: 'CampusGiggles', count: '5.8M', image:  './images/demo_service_section_img.jpg'},
      { name: 'HostelHumor', count: '6.2M', image:  './images/demo_service_section_img.jpg'}
    ]
  },
};

function createMenuItems() {
  const menuItems = Object.keys(menuData);
  const container = document.querySelector('.circular-menu');
  const containerRect = container.getBoundingClientRect();
  const radius = containerRect.width * 0.39;

  menuItems.forEach((item, index) => {
    const angle = (index / menuItems.length) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.textContent = item;
    menuItem.dataset.name = item;

    menuItem.style.left = `${50 + (x / containerRect.width) * 100}%`;
    menuItem.style.top = `${50 + (y / containerRect.height) * 100}%`;
    menuItem.style.transform = 'translate(-50%, -50%)';

    menuItem.addEventListener('click', () => {
      stopWaveEffect();
      updateContent(item);
      startWaveEffect(menuItem);
    });

    container.appendChild(menuItem);
  });
}

// Wave effect function

let waveInterval;

function startWaveEffect(menuItem) {
  stopWaveEffect();

  const container = document.querySelector('.circular-menu');

  waveInterval = setInterval(() => {
    const wave = document.createElement('div');
    wave.className = 'wave-circle';
    wave.style.left = menuItem.style.left;
    wave.style.top = menuItem.style.top;
    wave.style.width = `${menuItem.offsetWidth}px`;
    wave.style.height = `${menuItem.offsetHeight}px`;

    container.appendChild(wave);

    gsap.to(wave, {
      scale: 2,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      onComplete: () => wave.remove(),
    });
  }, 1000);
}


function stopWaveEffect() {
  clearInterval(waveInterval);
}

function updateContent(menuItem) {
  const data = menuData[menuItem];
  if (!data) return;

  // Update center image with animation
  const centerImage = document.querySelector('.center-image');
  const newImage = document.createElement('img');
  newImage.src = data.image;
  newImage.alt = menuItem;
  newImage.className = 'center-image image-enter';

  centerImage.classList.add('image-exit');
  setTimeout(() => {
    centerImage.remove();
    document.querySelector('.center-image-container').appendChild(newImage);
  }, 100);

  // Update followers section
  const followersSection = document.querySelector('.followers-section');
  followersSection.innerHTML = ''; // Clear existing followers

  data.followers.forEach(follower => {
    const card = document.createElement('div');
    card.className = 'follower-card';
    card.innerHTML = `
      <img src="${follower.image}" alt="${follower.name}">
      <div class="follower-info">
        <div class="follower-name">${follower.name}</div>
        <div class="follower-count">${follower.count} Followers</div>
      </div>
    `;
    followersSection.appendChild(card);
  });

  // Update active menu item
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.toggle('active', item.dataset.name === menuItem);
  });
}

let currentIndex = 0;
const menuItems = Object.keys(menuData);

function autoChangeMenuItem() {
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });

  const menuElements = document.querySelectorAll('.menu-item');
  const currentItemElement = menuElements[currentIndex];

  if (currentItemElement) {
    currentItemElement.classList.add('active');
    startWaveEffect(currentItemElement);
  }

  const currentItem = menuItems[currentIndex];
  updateContent(currentItem);

  currentIndex = (currentIndex + 1) % menuItems.length;
}
function initializeMenu() {
  createMenuItems();

  const menuElements = document.querySelectorAll('.menu-item');
  if (menuElements.length > 0) {
    menuElements[0].classList.add('active');
    startWaveEffect(menuElements[0]);
  }

  const defaultItem = menuItems[0];
  updateContent(defaultItem);

  setInterval(autoChangeMenuItem, 8000);
}

// Call the initialize function
initializeMenu();


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