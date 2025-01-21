document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    offset: 120,
    duration: 600,
    easing: 'ease-in-out',
    delay: 100,
  });
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
}, 5000);

closeBtn.addEventListener("click", () => {
  popupFormSection.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
});


gsap.registerPlugin();

// GSAP animations for the highlight and text

document.addEventListener("DOMContentLoaded", () => {
  const highlight = document.querySelector('.highlight');
  const textDBMC = document.querySelectorAll('.text-style')[1]; // "DBMC" text

  const tl = gsap.timeline();

  tl.to(
    textDBMC,
    {
      x: 150,
      duration: 1,
      ease: "power2.out",
    },
    0.2
  );

  tl.to(
    highlight,
    {
      width: '10vw',
      height: '13vh',
      duration: 1,
      ease: "power2.ease",
    },
    "-=1.45"
  );
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

// ------- form -------

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contact-form");
//   const submitButton = document.querySelector(".submit-btn");

//   function validateForm() {
//     const name = document.getElementById("name").value.trim();
//     const phoneNumber = document.getElementById("phone_number").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const inquiryFrom = document.getElementById("inquiry_from").value;
//     const budget = document.getElementById("budget").value;


//     return (
//       name !== "" &&
//       phoneNumber !== "" &&
//       email !== "" &&
//       inquiryFrom !== "" &&
//       budget !== ""
//     );
//   }

//   // Event listener for button hover
//   submitButton.addEventListener("mouseenter", function () {
//     if (!validateForm()) {
//       const container = submitButton.parentElement;
//       const randomX = Math.random() * 400 - 150; // Random X-axis position
//       const randomY = Math.random() * 100 - 50; // Random Y-axis position
//       container.style.transform = `translate(${randomX}px, ${randomY}px)`;
//     }
//   });

//   // Event listener for form submission
//   form.addEventListener("submit", function (event) {
//     if (!validateForm()) {
//       event.preventDefault();
//       alert("Please fill out all required fields!");
//     }
//   });
// });


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
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    }
  }
});

//------ service expert js ---------

const servicesContainer = document.querySelector(".two-cols");

function calculateScrollAmount() {
  let containerWidth = servicesContainer.scrollWidth;
  let visibleWidth = window.innerWidth;
  return -(containerWidth - visibleWidth);
}

const scrollTween = gsap.to(servicesContainer, {
  x: calculateScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".scroll-wrapper",
  start: "top 20%",
  end: () => `+=${calculateScrollAmount() * -2}`,
  pin: true,
  animation: scrollTween,
  scrub: 1.5,
  invalidateOnRefresh: true,
  // markers: true,
});

// service section js 

const menuData = {
  'Regional': {
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70',
    followers: [
      { name: 'LocalMemes', count: '5.2M', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167' },
      { name: 'RegionalHumor', count: '3.8M', image: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e' },
      { name: 'StateComedy', count: '2.4M', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f' },
      { name: 'CityGiggles', count: '1.5M', image: 'https://images.unsplash.com/photo-1542219559-928dafa01bbd' }
    ]
  },
  'Premium Meme': {
    image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3',
    followers: [
      { name: 'Sarcastic_us', count: '10.1M', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79' },
      { name: 'Clips', count: '14.7M', image: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e' },
      { name: 'LaughPremium', count: '9.2M', image: 'https://images.unsplash.com/photo-1564869730597-e96c6a2a7543' },
      { name: 'TopHumor', count: '12.3M', image: 'https://images.unsplash.com/photo-1531925470850-1b5893569f8d' }
    ]
  },
  'Tech & Coding': {
    image: 'https://images.unsplash.com/photo-1526378720209-9aece41f11c6',
    followers: [
      { name: 'CodeHumor', count: '8.4M', image: 'https://images.unsplash.com/photo-1554184732-dc44c2f0dc56' },
      { name: 'DevMemez', count: '6.3M', image: 'https://images.unsplash.com/photo-1582719478250-c89f3d3f1e5e' },
      { name: 'ProgramLaughs', count: '7.8M', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
      { name: 'TechGiggles', count: '5.4M', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475' }
    ]
  },
  'Fitness Memes': {
    image: 'https://images.unsplash.com/photo-1518972559570-8dcc1487ff22',
    followers: [
      { name: 'GymLaughs', count: '4.7M', image: 'https://images.unsplash.com/photo-1502767089025-6572583495b4' },
      { name: 'LiftHumor', count: '5.9M', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
      { name: 'WorkoutJokes', count: '3.2M', image: 'https://images.unsplash.com/photo-1518128954654-0f1e9874971b' },
      { name: 'HealthFails', count: '2.8M', image: 'https://images.unsplash.com/photo-1531497865142-41b6c3b6d0a7' }
    ]
  },
  'Travel & Adventure': {
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    followers: [
      { name: 'TravelJokes', count: '2.3M', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' },
      { name: 'WanderHumor', count: '3.1M', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' },
      { name: 'AdventureFails', count: '2.5M', image: 'https://images.unsplash.com/photo-1556910103-1e84c6e0836b' },
      { name: 'GlobeLaughs', count: '1.9M', image: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e' }
    ]
  },
  'Foodies Unite': {
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df',
    followers: [
      { name: 'FoodLaughs', count: '7.5M', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e' },
      { name: 'RecipeFails', count: '6.8M', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b' },
      { name: 'ChefLOL', count: '4.1M', image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7' },
      { name: 'DishHumor', count: '3.9M', image: 'https://images.unsplash.com/photo-1510626176961-4b67d3cb2352' }
    ]
  },
  'Relationship Humor': {
    image: 'https://images.unsplash.com/photo-1521133573898-74653402cdb5',
    followers: [
      { name: 'CoupleFails', count: '12.1M', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9' },
      { name: 'DatingLOL', count: '9.8M', image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df' },
      { name: 'LoveLaughs', count: '8.4M', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
      { name: 'BreakupGiggles', count: '6.3M', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' }
    ]
  },
  'Student Life': {
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
    followers: [
      { name: 'StudyLaughs', count: '11.4M', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df' },
      { name: 'ExamFails', count: '8.6M', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4' },
      { name: 'CampusGiggles', count: '5.8M', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' },
      { name: 'HostelHumor', count: '6.2M', image: 'https://images.unsplash.com/photo-1529333166433-975d3a385a8a' }
    ]
  },
  'Advertise': {
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
    followers: [
      { name: 'StudyLaughs', count: '11.4M', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df' },
      { name: 'ExamFails', count: '8.6M', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4' },
      { name: 'CampusGiggles', count: '5.8M', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' },
      { name: 'HostelHumor', count: '6.2M', image: 'https://images.unsplash.com/photo-1529333166433-975d3a385a8a' }
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

// Initial setup function
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

const exploreButtons = document.querySelectorAll(".explore-btn");

exploreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetPopupId = button.getAttribute("data-target");
    const popup = document.querySelector(targetPopupId);


    if (popup) {
      document.querySelectorAll(".popup-holder").forEach(p => {
        p.style.display = "none";
      });

      popup.style.display = "block";

      const showcaseBlock = button.closest(".showcase-block");
      showcaseBlock.style.position = "relative";
      popup.style.position = "absolute";
      popup.style.zIndex = "1000";
    }
  });
});

// popup form js 

document.addEventListener("click", event => {
  const isPopup = event.target.closest(".popup-holder");
  const isButton = event.target.classList.contains("explore-btn");

  if (!isPopup && !isButton) {
    document.querySelectorAll(".popup-holder").forEach(popup => {
      popup.style.display = "none"; // Hide all popups
    });
  }
});

document.querySelectorAll('.popup-option-button').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('selected');
  });
});



// ---------------main form -----------

document.querySelectorAll('.option-button').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('selected');
  });
});


let url = "https://script.google.com/macros/s/AKfycby_q8zim1wei8g09rFLDvhAXkFh9IIhZpO_f83Uv6omN4i4s9LsNeETmryTZ1-lPcyP/exec";

function showError(inputElement, message) {
  // Remove any existing error message for the input
  inputElement.parentNode.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Create a new error message
  let errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  // Append the error message
  inputElement.parentNode.appendChild(errorElement);
}
// Validation logic for both forms
function validateForm(form, nameInput, phoneInput, emailInput) {
  let isValid = true;

  // Remove existing error messages
  form.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Validate name (must be more than 3 characters)
  if (nameInput.value.trim().length <= 3) {
    isValid = false;
    showError(nameInput, "Name must be more than 3 characters.");
  }

  // Validate phone number (must be exactly 10 digits)
  if (!/^\d{10}$/.test(phoneInput.value.trim())) {
    isValid = false;
    showError(phoneInput, "Contact Number must be exactly 10 digits.");
  }

  // Validate email (must end with @gmail.com)
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

// Handle main form submission
// Function to display error messages
function showError(inputElement, message) {
  // Remove any existing error message for the input
  inputElement.parentNode.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Create a new error message
  let errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  // Append the error message
  inputElement.parentNode.appendChild(errorElement);
}

// Validation logic for both forms
function validateForm(form, nameInput, phoneInput, emailInput) {
  let isValid = true;

  // Remove existing error messages
  form.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Validate name (must be more than 3 characters)
  if (nameInput.value.trim().length <= 3) {
    isValid = false;
    showError(nameInput, "Name must be more than 3 characters.");
  }

  // Validate phone number (must be exactly 10 digits)
  if (!/^\d{10}$/.test(phoneInput.value.trim())) {
    isValid = false;
    showError(phoneInput, "Contact Number must be exactly 10 digits.");
  }

  // Validate email (must end with @gmail.com)
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput, "Email must be a valid @gmail.com address.");
  }

  return isValid;
}

// Main form submission
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

// Popup form submission
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
