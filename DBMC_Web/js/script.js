document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    offset: 120,
    duration: 600,
    easing: 'ease-in-out',
    delay: 100,
  });
});

// navlink 
// Menu Toggle Functionality
const menuOpener = document.querySelector('.menu-opener');
const navLinks = document.querySelector('.nav-linked');

menuOpener.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuOpener.classList.toggle('active');
});

// Fixed Navbar on Scroll
document.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navlink');
  const body = document.body;
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    navbar.classList.add('fixed-nav');
    body.classList.add('fixed-nav-padding');
  } else {
    navbar.classList.remove('fixed-nav');
    body.classList.remove('fixed-nav-padding');
  }
});
// -------------- hero section and preloader----------------

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const heroSection = document.querySelector(".main-container-section");
  const popupFormSection = document.querySelector(".popup-form-section");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.getElementById("close");
  const preloader = document.querySelector(".pre-loader");

  gsap.set([heroSection, overlay, popupFormSection], { opacity: 0 });
  gsap.set(body, { overflow: "hidden" });
  gsap.set(".left-content, .right-content", { x: "0%", opacity: 1 });
  gsap.set(preloader, { height: "100vh", display: "block" });
  gsap.set(".orange", { height: "0%", top: "100%" });

  const enableScroll = () => {
    body.style.overflow = "auto";
  };

  const disableScroll = () => {
    body.style.overflow = "hidden";
  };

  const initAnimations = () => {
    document.querySelectorAll(".pre-reveal").forEach((elem) => {
      const parent = document.createElement("span");
      const child = document.createElement("span");
      parent.className = "parent";
      child.className = "child";
      child.innerHTML = elem.innerHTML;
      parent.appendChild(child);
      elem.innerHTML = "";
      elem.appendChild(parent);
    });
  };

  const startHeroAnimation = () => {
    const tl = gsap.timeline();
    tl.to(heroSection, { opacity: 1, duration: 1, ease: "power2.inOut" });
    tl.fromTo(".left-content", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" }, 0.2);
    tl.fromTo(".right-content", { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2, ease: "power2.out" }, 0.2);

    gsap.matchMedia().add("(max-width: 768px)", () => {
        tl.to(".highlight", { width: "17vw", height: "78%", duration: 1, ease: "power2.inOut" }, 1);
    }).add("(min-width: 769px)", () => {
        tl.to(".highlight", { width: "12vw", height: "78%", duration: 1, ease: "power2.inOut" }, 1);
    });

    tl.to(".style-DBMC", { x: "14vw", duration: 1, ease: "power2.out" }, "-=0.35");
};


  const loaderAnimation = () => {
    const tl = gsap.timeline();
    tl.from(".parent .child span", { x: 200, stagger: 0.2, duration: 1.1, ease: "power3.out" });
    tl.to(".parent .child", { y: "-100%", duration: 1, ease: "circ.out" });
    tl.fromTo(".orange", { height: "0%", top: "100%" }, { height: "100%", top: "0%", duration: 1.2, ease: "power2.inOut" }, 0);
    tl.to([preloader, ".orange"], {
      height: "0%",
      duration: 1.5,
      ease: "expo.inOut",
      onComplete: () => {
        preloader.style.display = "none";
        enableScroll();
        startHeroAnimation();
        
        // Show popup form after 10 seconds only after preloader is completed
        setTimeout(() => {
          gsap.to([popupFormSection, overlay], {
            opacity: 1,
            duration: 0.5,
            onStart: () => {
              popupFormSection.style.display = "block";
              overlay.style.display = "block";
              disableScroll();
            },
          });
        }, 10000);
      },
    }, "-=0.5");
  };

  closeBtn.addEventListener("click", () => {
    gsap.to([popupFormSection, overlay], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        popupFormSection.style.display = "none";
        overlay.style.display = "none";
        enableScroll();
      },
    });
  });

  initAnimations();
  loaderAnimation();
});

document.addEventListener("DOMContentLoaded", () => {
  const smoothLinks = document.querySelectorAll(".smooth");
  const offset = 70;

  smoothLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); 

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth", 
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
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    390: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    260: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const showcaseBlocks = document.querySelectorAll(".showcase-block");

// Function to open popup and stop Swiper autoplay
function openPopup(image) {
  const targetPopupId = image.getAttribute("data-target");
  const popup = document.querySelector(targetPopupId);
  if (popup) {
    document.querySelectorAll(".popup-holder").forEach(p => {
      p.style.display = "none";
    });
    popup.style.display = "block";
    
    // Stop Swiper autoplay when popup opens
    swiper.autoplay.stop();
  }
}

// Attach click event to each showcase block image
showcaseBlocks.forEach(block => {
  const image = block.querySelector("img");
  if (image) {
    image.addEventListener("click", () => {
      openPopup(image);
    });
  }
});

// Close popup when clicking outside & restart Swiper autoplay
document.addEventListener("click", (e) => {
  const isPopupClick = e.target.closest(".popup-holder");
  const isImageClick = e.target.closest(".showcase-block img");

  if (!isPopupClick && !isImageClick) {
    document.querySelectorAll(".popup-holder").forEach(popup => {
      popup.style.display = "none";
    });

    // Restart Swiper autoplay when popup closes
    swiper.autoplay.start();
  }
});

//-------- service expert js ---------

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  // For desktop/laptop devices (min-width: 768px)
  mm.add("(min-width: 768px)", () => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const twoCols = document.querySelector(".two-cols");

    // Create horizontal scroll animation for larger screens
    const scrollTween = gsap.to(twoCols, {
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

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  // For mobile devices (max-width: 767px) — no horizontal scroll effect.
  mm.add("(max-width: 767px)", () => {
    ScrollTrigger.refresh();
  });

  AOS.refresh();
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


// price section js

// const toggle = document.getElementById('billingToggle');
// const prices = document.querySelectorAll('.price');
// const billingPeriods = document.querySelectorAll('.billing-period:not(:first-child)');
const plans = document.querySelectorAll('.plan');

// // Initialize the middle card as active
plans[1].classList.add('active');

// // Add click event listeners to plans
plans.forEach(plan => {
  plan.addEventListener('click', () => {
    plans.forEach(p => p.classList.remove('active'));
    plan.classList.add('active');
  });
});

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('yearly');
//   const isYearly = toggle.classList.contains('yearly');

//   prices.forEach(price => {
//     const monthlyPrice = price.getAttribute('data-monthly');
//     const yearlyPrice = price.getAttribute('data-yearly');
//     price.textContent = isYearly ? yearlyPrice : monthlyPrice;
//   });

//   billingPeriods.forEach(period => {
//     const monthlyText = period.getAttribute('data-monthly');
//     const yearlyText = period.getAttribute('data-yearly');
//     period.textContent = isYearly ? yearlyText : monthlyText;
//   });
// });


//  our buddies js 

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const profileCards = document.querySelectorAll(".profile-card");

  let currentIndex = 0;
  let isAnimating = false;
  let autoSlideInterval;

  // Profile data containing profile images and background images for 5 cards
  const profiles = [
    [
      { profileImage: "./images/Profile_section_img/ghanta.jpg", backgroundImage: "./images/bg_profileCard_img/ghanta.png" },
      { profileImage: "./images/Profile_section_img/laughtercolours.jpg", backgroundImage: "./images/bg_profileCard_img/loughterColors.png" },
      { profileImage: "./images/Profile_section_img/adultsociety.jpg", backgroundImage: "./images/bg_profileCard_img/adultsociety.png" },
      { profileImage: "./images/Profile_section_img/trolls_official.jpg", backgroundImage: "./images/bg_profileCard_img/troll_official.png" },
      { profileImage: "./images/Profile_section_img/adultgram.jpg", backgroundImage: "./images/bg_profileCard_img/adultgram.png" }
    ],
    [
      { profileImage: "./images/Profile_section_img/world_cinema.jpg", backgroundImage: "./images/bg_profileCard_img/world_cinema.png" },
      { profileImage: "./images/Profile_section_img/relatable.jpg", backgroundImage: "./images/bg_profileCard_img/relatable.png" },
      { profileImage: "./images/Profile_section_img/popIn.jpg", backgroundImage: "./images/bg_profileCard_img/popins.png" },
      { profileImage: "./images/Profile_section_img/the_indian_film.jpg", backgroundImage: "./images/bg_profileCard_img/indiafilm.png" },
      { profileImage: "./images/Profile_section_img/scribled_strories.jpg", backgroundImage: "./images/bg_profileCard_img/scribled.png" }
    ],
    [
      { profileImage: "./images/Profile_section_img/classy_women.jpg", backgroundImage: "./images/bg_profileCard_img/classyWomen.png" },
      { profileImage: "./images/Profile_section_img/Rw.jpg", backgroundImage: "./images/bg_profileCard_img/real_women.png" },
      { profileImage: "./images/Profile_section_img/sarif_Girls.jpg", backgroundImage: "./images/bg_profileCard_img/sarifGril.png" },
      { profileImage: "./images/Profile_section_img/womanEmpire.jpg", backgroundImage: "./images/bg_profileCard_img/women_empire.png" },
      { profileImage: "./images/Profile_section_img/girl_kingdom.jpg", backgroundImage: "./images/bg_profileCard_img/girl_Kingdom.png" }
    ],
    [
      { profileImage: "./images/Profile_section_img/indiaTalent.jpg", backgroundImage: "./images/bg_profileCard_img/india_talent.png" },
      { profileImage: "./images/Profile_section_img/wakeup.jpg", backgroundImage: "./images/bg_profileCard_img/wake_up.png" },
      { profileImage: "./images/Profile_section_img/singing_lover.jpg", backgroundImage: "./images/bg_profileCard_img/singing_lover.png" },
      { profileImage: "./images/Profile_section_img/singer_cafe.jpg", backgroundImage: "./images/bg_profileCard_img/singerCafe.png" },
      { profileImage: "./images/Profile_section_img/inianIdol.jpg", backgroundImage: "./images/bg_profileCard_img/indianIdot.png" }
    ],
    [
      { profileImage: "./images/Profile_section_img/fox.jpg", backgroundImage: "./images/bg_profileCard_img/fox.png" },
      { profileImage: "./images/Profile_section_img/lofii.jpg", backgroundImage: "./images/bg_profileCard_img/lofi.png" },
      { profileImage: "./images/Profile_section_img/crazyycrossovers.jpg", backgroundImage: "./images/bg_profileCard_img/crazy.png" },
      { profileImage: "./images/Profile_section_img/infinite.jpg", backgroundImage: "./images/bg_profileCard_img/infinite.png" },
      { profileImage: "./images/Profile_section_img/emptiness.jpg", backgroundImage: "./images/bg_profileCard_img/emptiness.png" }
    ],

  ];

  // Function to update the profile cards with the current set of profiles
  function updateProfileCards(index) {
    const selectedProfiles = profiles[index % profiles.length];

    profileCards.forEach((card, i) => {
      if (selectedProfiles[i]) {
        // Add exit animation to the current active card
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          card.classList.add('exit');
        }

        // Update the profile image and background image after the exit animation starts
        setTimeout(() => {
          const profileImage = card.querySelector(".profile-image img");
          const backgroundImage = card.querySelector(".background-image");

          profileImage.src = selectedProfiles[i].profileImage;
          backgroundImage.style.backgroundImage = `url(${selectedProfiles[i].backgroundImage})`;

          // Add the enter animation after updating the content
          card.classList.remove('exit');
          card.classList.add('enter');

          // After the enter animation completes, remove the enter class and add active
          setTimeout(() => {
            card.classList.remove('enter');
            card.classList.add('active');
          }, 500); // Adjust the delay to match the duration of the enter animation
        }, 500); // Adjust the delay to match the duration of the exit animation
      }
    });
  }

  // Function to initialize the cards
  function initializeCards() {
    cards[currentIndex].classList.add('active');
    cards[(currentIndex + 1) % cards.length].classList.add('prev');
    cards[(currentIndex + 2) % cards.length].classList.add('next');
    updateProfileCards(currentIndex); // Initialize profile section with the first set of 5 cards
    startAutoSlide(); // Start auto-slide
  }

  // Function to update the cards when next/prev is clicked
  function updateCards(direction) {
    if (isAnimating) return;
    isAnimating = true;
    stopAutoSlide(); // Stop auto-slide during manual navigation

    const currentCard = cards[currentIndex];
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % cards.length
      : (currentIndex - 1 + cards.length) % cards.length;
    const nextCard = cards[nextIndex];

    cards.forEach(card => {
      card.classList.remove('active', 'prev', 'next');
    });

    if (direction === 'next') {
      currentCard.classList.add('slide-next-out');
      nextCard.classList.add('slide-next-in');
    } else {
      currentCard.classList.add('slide-prev-out');
      nextCard.classList.add('slide-prev-in');
    }

    setTimeout(() => {
      nextCard.classList.remove(direction === 'next' ? 'slide-next-in' : 'slide-prev-in');
      nextCard.classList.add('active');

      currentIndex = nextIndex;

      cards[(currentIndex + 1) % cards.length].classList.add('prev');
      cards[(currentIndex + 2) % cards.length].classList.add('next');

      updateProfileCards(currentIndex); // Update profile section with the next set of 5 cards

      setTimeout(() => {
        currentCard.classList.remove(direction === 'next' ? 'slide-next-out' : 'slide-prev-out');
        isAnimating = false;
      }, 600);

      startAutoSlide(); // Restart auto-slide after manual navigation
    }, 50);
  }

  // Function to start auto-slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      updateCards('next');
    }, 5000); // Change card every 5 seconds
  }

  // Function to stop auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Add event listeners for next/prev buttons
  nextBtn.addEventListener('click', () => updateCards('next'));
  prevBtn.addEventListener('click', () => updateCards('prev'));

  // Initialize the first set of cards
  initializeCards();
});
