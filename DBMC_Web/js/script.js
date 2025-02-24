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


// hero section code and preloader js code 

document.addEventListener("DOMContentLoaded", () => {


  const body = document.body;
  const heroSection = document.querySelector(".main-container-section");
  const popupFormSection = document.querySelector(".popup-form-section");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.getElementById("close");
  const preloader = document.querySelector(".pre-loader");

  // Initial Setup
  gsap.set([heroSection, overlay, popupFormSection], { opacity: 0 });
  gsap.set(body, { overflow: "hidden" });
  gsap.set(".left-content, .right-content", { x: "0%", opacity: 1 }); // Reset for reload
  gsap.set(preloader, { height: "100vh", display: "block" }); // Ensure preloader is visible
  gsap.set(".orange", { height: "0%", top: "100%" }); // Reset orange div

  // Function to enable scrolling
  const enableScroll = () => {
    body.style.overflow = "auto";
  };

  // Function to disable scrolling
  const disableScroll = () => {
    body.style.overflow = "hidden";
  };

  // Text reveal setup
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

  // Hero section animation
  const startHeroAnimation = () => {
    const tl = gsap.timeline();

    // Show hero section
    tl.to(heroSection, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate left and right content
    tl.fromTo(
      ".left-content",
      { x: "-100%", opacity: 0 }, // Left content starts from the left
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      0.2 // Delay
    );
    
    tl.fromTo(
      ".right-content",
      { x: "100%", opacity: 0 }, // Right content starts from the right
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      0.2 // Delay
    );

    // Highlight animation
    tl.to(
      ".highlight",
      {
        width: "9vw",
        height: "70%",
        duration: 1,
        ease: "power2.inOut",
      },
      1
    );

    // Move "DBMC" text
    tl.to(
      ".style-DBMC",
      {
        x: "10vw",
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    );
  };

  // Preloader animation
  const loaderAnimation = () => {
    const tl = gsap.timeline();

    // Text animation
    tl.from(".parent .child span", {
      x: 200,
      stagger: 0.2,
      duration: 1.1,
      ease: "power3.out",
    });

    // Text move up
    tl.to(".parent .child", {
      y: "-100%",
      duration: 1,
      ease: "circ.out",
    });

    // Orange background expansion
    tl.fromTo(
      ".orange",
      { height: "0%", top: "100%" },
      {
        height: "100%",
        top: "0%",
        duration: 1.2,
        ease: "power2.inOut",
      },
      0
    );

    // Hide preloader and collapse orange
    tl.to(
      [preloader, ".orange"],
      {
        height: "0%",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: () => {
          preloader.style.display = "none"; // Hide preloader
          enableScroll(); // Enable scrolling
          startHeroAnimation(); // Start hero animation
        },
      },
      "-=0.5"
    );
  };

  // Close popup form
  closeBtn.addEventListener("click", () => {
    gsap.to([popupFormSection, overlay], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        popupFormSection.style.display = "none";
        overlay.style.display = "none";
        enableScroll(); // Enable scrolling after closing popup
      },
    });
  });

  // Initialize animations
  initAnimations();
  loaderAnimation();

  // Show popup form after 10 seconds
  setTimeout(() => {
    gsap.to([popupFormSection, overlay], {
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        popupFormSection.style.display = "block";
        overlay.style.display = "block";
        disableScroll(); // Disable scrolling when popup is shown
      },
    });
  }, 10000);
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

    // Cleanup function: when media query no longer matches, kill the animation and trigger.
    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  // For mobile devices (max-width: 767px) — no horizontal scroll effect.
  mm.add("(max-width: 767px)", () => {
    // Optionally refresh triggers or reset styles if needed.
    ScrollTrigger.refresh();
  });

  // Refresh AOS if you're using it
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

// our buddies card carousel 
// document.addEventListener('DOMContentLoaded', function () {
//   const cards = document.querySelectorAll('.testimonial-card');
//   const nextBtn = document.querySelector('.next');
//   const prevBtn = document.querySelector('.prev');
//   const profileCards = document.querySelectorAll(".profile-card");

//   let currentIndex = 0;
//   let isAnimating = false;
//   let autoSlideInterval;

//   const profiles = [
//     [
//       { name: "ghantaa", followers: "2.3M Followers", image: "./image/demo_img1.jpg" },
//       { name: "laughtercolours", followers: "3.1M Followers", image: "./image/img_2.jpeg" },
//       { name: "adultsociety", followers: "2.5M Followers", image: "./image/demo_img1.jpg" },
//       { name: "trolls_official", followers: "1.9M Followers", image: "./image/demo_img1.jpg" },
//       { name: "_adultgram_", followers: "1.9M Followers", image: "./image/demo_img1.jpg" }
//     ],
//     [
//       { name: "HappyTravels", followers: "3.8M Followers", image: "https://source.unsplash.com/100x100/?happy,face" },
//       { name: "GlobeTrotter", followers: "2.1M Followers", image: "https://source.unsplash.com/100x100/?smile,face" },
//       { name: "ComedyNomad", followers: "4.0M Followers", image: "https://source.unsplash.com/100x100/?laugh,face" },
//       { name: "FunExplorer", followers: "1.5M Followers", image: "https://source.unsplash.com/100x100/?explorer,face" },
//       { name: "FunExplorer", followers: "1.5M Followers", image: "https://source.unsplash.com/100x100/?explorer,face" }
//     ],
//     [
//       { name: "NomadJoker", followers: "3.2M Followers", image: "https://source.unsplash.com/100x100/?joker,face" },
//       { name: "HumorGlider", followers: "2.9M Followers", image: "https://source.unsplash.com/100x100/?humor,face" },
//       { name: "GiggleTrekkers", followers: "2.7M Followers", image: "https://source.unsplash.com/100x100/?trekker,face" },
//       { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" },
//       { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" }
//     ],
//     [
//       { name: "NomadJoker", followers: "3.2M Followers", image: "https://source.unsplash.com/100x100/?joker,face" },
//       { name: "HumorGlider", followers: "2.9M Followers", image: "https://source.unsplash.com/100x100/?humor,face" },
//       { name: "GiggleTrekkers", followers: "2.7M Followers", image: "https://source.unsplash.com/100x100/?trekker,face" },
//       { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" },
//       { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" }
//     ],
//     [
//       { name: "NomadJoker", followers: "3.2M Followers", image: "https://source.unsplash.com/100x100/?joker,face" },
//       { name: "HumorGlider", followers: "2.9M Followers", image: "https://source.unsplash.com/100x100/?humor,face" },
//       { name: "GiggleTrekkers", followers: "2.7M Followers", image: "https://source.unsplash.com/100x100/?trekker,face" },
//       { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" },
//       { name: "RoamLaughs", followers: "3.5M Followers", image: "https://source.unsplash.com/100x100/?roam,face" }
//     ],
//   ];

//   function updateProfileCards(index) {
//     const selectedProfiles = profiles[index % profiles.length];

//     profileCards.forEach((card, i) => {
//       if (selectedProfiles[i]) {
//         card.classList.remove('active');
//         card.classList.add('exit');

//         setTimeout(() => {
//           card.querySelector(".profile-image img").src = selectedProfiles[i].image;
//           card.querySelector(".profile-name").textContent = selectedProfiles[i].name;
//           card.querySelector(".profile-followers").textContent = selectedProfiles[i].followers;

//           card.classList.remove('exit');
//           card.classList.add('enter');

//           setTimeout(() => {
//             card.classList.remove('enter');
//             card.classList.add('active');
//           }, 500);
//         }, 500);
//       }
//     });
//   }

//   function initializeCards() {
//     cards[currentIndex].classList.add('active');
//     cards[(currentIndex + 1) % cards.length].classList.add('prev');
//     cards[(currentIndex + 2) % cards.length].classList.add('next');
//     updateProfileCards(currentIndex);
//     startAutoSlide();
//   }

//   function updateCards(direction) {
//     if (isAnimating) return;
//     isAnimating = true;
//     stopAutoSlide();

//     const currentCard = cards[currentIndex];
//     const nextIndex = direction === 'next'
//       ? (currentIndex + 1) % cards.length
//       : (currentIndex - 1 + cards.length) % cards.length;
//     const nextCard = cards[nextIndex];

//     cards.forEach(card => {
//       card.classList.remove('active', 'prev', 'next');
//     });

//     if (direction === 'next') {
//       currentCard.classList.add('slide-next-out');
//       nextCard.classList.add('slide-next-in');
//     } else {
//       currentCard.classList.add('slide-prev-out');
//       nextCard.classList.add('slide-prev-in');
//     }

//     setTimeout(() => {
//       nextCard.classList.remove(direction === 'next' ? 'slide-next-in' : 'slide-prev-in');
//       nextCard.classList.add('active');

//       currentIndex = nextIndex;

//       cards[(currentIndex + 1) % cards.length].classList.add('prev');
//       cards[(currentIndex + 2) % cards.length].classList.add('next');

//       updateProfileCards(currentIndex);

//       setTimeout(() => {
//         currentCard.classList.remove(direction === 'next' ? 'slide-next-out' : 'slide-prev-out');
//         isAnimating = false;
//       }, 600);

//       startAutoSlide();
//     }, 50);
//   }

//   function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//       updateCards('next');
//     }, 5000);
//   }

//   function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
//   }

//   nextBtn.addEventListener('click', () => updateCards('next'));
//   prevBtn.addEventListener('click', () => updateCards('prev'));

//   let touchStartX = 0;
//   let touchEndX = 0;

//   document.addEventListener('touchstart', e => {
//     touchStartX = e.touches[0].clientX;
//   });

//   document.addEventListener('touchend', e => {
//     touchEndX = e.changedTouches[0].clientX;
//     handleSwipe();
//   });

//   function handleSwipe() {
//     const swipeThreshold = 50;
//     const swipeDistance = touchEndX - touchStartX;

//     if (Math.abs(swipeDistance) > swipeThreshold) {
//       if (swipeDistance > 0) {
//         updateCards('prev');
//       } else {
//         updateCards('next');
//       }
//     }
//   }

//   initializeCards();
// });


document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const profileCards = document.querySelectorAll(".profile-card");

  let currentIndex = 0;
  let isAnimating = false;
  let autoSlideInterval;

  const profiles = [
      [
          { name: "ghantaa", followers: "8.8M Followers", image: "./images/Profile_section_img/ghanta.jpg" },
          { name: "laughtercolours", followers: "4.4M Followers", image: "./images/Profile_section_img/laughtercolours.jpg" },
          { name: "adultsociety", followers: "7.3M Followers", image: "./images/Profile_section_img/adultsociety.jpg" },
          { name: "trolls_official", followers: "10.6M Followers", image: "./images/Profile_section_img/trolls_official.jpg" },
          { name: "_adultgram_", followers: "5.5M Followers", image: "./images/Profile_section_img/Adultgram.jpg" }
      ],
      [
          { name: "worldcinemalife", followers: "439k Followers", image: "./images/Profile_section_img/world_cinema.jpg" },
          { name: "relatablehaiboss", followers: "565k Followers", image: "./images/Profile_section_img/relatable.jpg" },
          { name: "popinions", followers: "1M Followers", image: "./images/Profile_section_img/popIn.jpg" },
          { name: "the.indian.films", followers: "935k Followers", image: "./images/Profile_section_img/the_indian_film.jpg" },
          { name: "thescribbledstories", followers: "5.1M Followers", image: "./images/Profile_section_img/scribled_strories.jpg" }
      ],
      [
          { name: "classywomenn", followers: "1.2M Followers", image: "./images/Profile_section_img/classy_women.jpg" },
          { name: "Real.Woman.", followers: "1.7M Followers", image: "./images/Profile_section_img/Rw.jpg" },
          { name: "Sarifgirls", followers: "630k Followers", image: "./images/Profile_section_img/sarif_Girls.jpg" },
          { name: "thewomanempire", followers: "521k Followers", image: "./images/Profile_section_img/womanEmpire.jpg" },
          { name: "The.Girls.Kingdom", followers: "508k Followers", image: "./images/Profile_section_img/girl_kingdom.jpg" }
      ],
      [
          { name: "indiastalents", followers: "1M Followers", image: "./images/Profile_section_img/indiaTalent.jpg" },
          { name: "Wakeupdansin ", followers: "660k Followers", image: "./images/Profile_section_img/wakeup.jpg" },
          { name: "singing__lovers__", followers: "508k Followers", image: "./images/Profile_section_img/singing_lover.jpg" },
          { name: "Thesingercafe", followers: "478k Followers", image: "./images/Profile_section_img/singer_cafe.jpg" },
          { name: "randommusicrecommendation", followers: "3.5M Followers", image: "./images/Profile_section_img/girl_kingdom.jpg" }
      ],
      [
          { name: "Rebellouz edits", followers: "403k Followers", image: "./images/Profile_section_img/fox.jpg" },
          { name: "lofii.ediitz", followers: "307k Followers", image: "./images/Profile_section_img/lofii.jpg" },
          { name: "crazyycrossovers", followers: "113k Followers", image: "./images/Profile_section_img/crazyycrossovers.jpg" },
          { name: "infiniteeditsss_", followers: "100k Followers", image: "./images/Profile_section_img/infinite.jpg" },
          { name: "emptiness_xd", followers: "1.1M Followers", image: "./images/Profile_section_img/emptiness.jpg" }
      ],
  ];

  function updateProfileCards(index) {
      const selectedProfiles = profiles[index % profiles.length];

      profileCards.forEach((card, i) => {
          if (selectedProfiles[i]) {
              card.classList.remove('active');
              card.classList.add('exit');

              setTimeout(() => {
                  card.querySelector(".profile-image img").src = selectedProfiles[i].image;
                  card.querySelector(".profile-name").textContent = selectedProfiles[i].name;
                  card.querySelector(".profile-followers").textContent = selectedProfiles[i].followers;

                  card.classList.remove('exit');
                  card.classList.add('enter');

                  setTimeout(() => {
                      card.classList.remove('enter');
                      card.classList.add('active');
                  }, 500);
              }, 500);
          }
      });
  }

  function initializeCards() {
      cards[currentIndex].classList.add('active');
      cards[(currentIndex + 1) % cards.length].classList.add('prev');
      cards[(currentIndex + 2) % cards.length].classList.add('next');
      updateProfileCards(currentIndex);
      startAutoSlide();
  }

  function updateCards(direction) {
      if (isAnimating) return;
      isAnimating = true;
      stopAutoSlide();

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

          updateProfileCards(currentIndex);

          setTimeout(() => {
              currentCard.classList.remove(direction === 'next' ? 'slide-next-out' : 'slide-prev-out');
              isAnimating = false;
          }, 600);

          startAutoSlide();
      }, 50);
  }

  function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
          updateCards('next');
      }, 5000);
  }

  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  nextBtn.addEventListener('click', () => updateCards('next'));
  prevBtn.addEventListener('click', () => updateCards('prev'));

  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
  });

  document.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
  });

  function handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = touchEndX - touchStartX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
          if (swipeDistance > 0) {
              updateCards('prev');
          } else {
              updateCards('next');
          }
      }
  }

  initializeCards();
});