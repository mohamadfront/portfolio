 
 
 


  // تطبيق الثيم فوراً
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }

  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (8 + Math.random() * 4) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  const statusMessages = [
    'Initializing...',
    'Loading assets...',
    'Preparing portfolio...',
    'Almost ready...',
    'Finalizing...'
  ];

  let progress = 0;
  let currentStatus = 0;

  function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const percentage   = document.getElementById('percentage');
    const statusEl     = document.getElementById('status');
    const preloader    = document.getElementById('preloader');

    progress += Math.random() * 12 + 3;
    if (progress > 100) progress = 100;

    progressFill.style.width = progress + '%';
    percentage.textContent = Math.floor(progress) + '%';

    const statusIndex = Math.floor((progress / 100) * (statusMessages.length - 1));
    if (statusIndex !== currentStatus && statusIndex < statusMessages.length) {
      currentStatus = statusIndex;
      statusEl.textContent = statusMessages[statusIndex];
    }

    if (progress < 100) {
      setTimeout(updateProgress, 150 + Math.random() * 250);
    } else {
      statusEl.textContent = 'Ready!';
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => {
          preloader.style.display = 'none';
          AOS.init({ duration: 800, once: true });
        }, 600);
      }, 800);
    }
  }

  createParticles();
  setTimeout(updateProgress, 300);


 const { animate, splitText, stagger } = anime

  const { chars: chars1 } = splitText('.home-profession-1', {chars: true })
    const { chars: chars2 } = splitText('.home-profession-2', {chars: true })

    animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

    animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});



const swiperProjects = new Swiper('.projects-swiper', {

  loop: true,
spaceBetween: 24,
slidesPerView: 'auto',
grabCursor: true,
speed:600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay:{
    delay: 3000,
    disableOnInteraction: false,

 },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    550: {
      slidesPerView: 'auto',
      spaceBetween: 24
    }
  }

})


const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) =>{
  tab.addEventListener('click',() =>{
    const targetSelector = tab.dataset.target,
    targetContent = document.querySelector(targetSelector)
    
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    tab.classList.add('work-active')
    targetContent.classList.add('work-active')

  })
})


// services 

const servicesButton = document.querySelectorAll('.services-button')
servicesButton.forEach(button =>{
  const heightInfo = document.querySelector('.services-info')
  heightInfo.style.height = heightInfo.scrollHeight + 'px'
  button.addEventListener('click',() => {

    const servicesCards = document.querySelectorAll('.services-card'),
    currentCard = button.parentNode,
    currentInfo = currentCard.querySelector('.services-info'),
    isCardOpen = currentCard.classList.contains('services-open')

servicesCards.forEach(card => {
  card.classList.replace('services-open', 'services-close')
  const info = card.querySelector('.services-info')
  info.style.height = '0'
})

if(!isCardOpen){
  currentCard.classList.replace('services-close' , 'services-open')
  currentInfo.style.height = currentInfo.scrollHeight + 'px'
}

  })
})


// contact

const copyBtn = document.getElementById('contact-btn'),
 copyEmail = document.getElementById('contact-email').textContent
 copyBtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'



    setTimeout(() => {
      copyBtn.innerHTML = ' Copy email  <i class="ri-file-copy-line"></i>'
    },2000)
  })
 })


 const textYear = document.getElementById('footer-year'),
 currentYear = new Date().getFullYear()

 textYear.textContent = currentYear



 const sections = document.querySelectorAll('section[id]')
 const scrollActive = () => {
 const scrollY = window.scrollY
 sections.forEach(section => {
  const id = section.id,
  top = section.offsetTop - 50,
  height = section.offsetHeight,
  link = document.querySelector('.nav-menu a[href*=' + id + ']')
  if(!link) return
  link.classList.toggle('active-link', scrollY > top && scrollY <= top + height) 
 })
 }

 window.addEventListener('scroll',scrollActive)




 const cursor = document.querySelector('.cursor')
 let mouseX = 0,mouseY = 0
 const cursorMove = () => {
  cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
      cursor.style.transform = 'translate(-50%, -50%)'
      requestAnimationFrame(cursorMove)


 }

 document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
 })
 cursorMove()


 const a =document.querySelectorAll('a')
 a.forEach(item => {
  item.addEventListener('mousemove', () => {
    cursor .classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
 })

 const cursorTargets = document.querySelectorAll('.services-button, .work-button, .contact-button, .theme-toggle, .modal-close, .modal-zoom-hint, .lightbox-close, .lightbox-arrow')
 cursorTargets.forEach(item => {
  item.addEventListener('mousemove', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
 })



 const sr =ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2000',
  delay: 300,
  // reset: true,
 })
 sr.reveal(`.home-image, .projects-container, .work-container, .contact-container`)
 sr.reveal(`.home-data`, {delay:900, origin:'bottom'})
 sr.reveal(`.home-info`,{delay:1200, origin:'bottom'})
  sr.reveal(`.home-social, .home-cv`,{delay:1500})
 sr.reveal(`.about-data`,{ origin:'left'})
  sr.reveal(`.about-image`,{ origin:'right'})
    sr.reveal(`.services-card`,{ interval:100})




 /* ===== THEME TOGGLE ===== */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// اقرأ التفضيل المحفوظ
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});




// ضع هذا الكود في ملف main.js بعد تهيئة swiper
const projects = [
  {
  title: "Tashkelah ",
  type: "Freelance",
  desc: "Tashkelah is a modern and responsive landing page for a sports booking mobile application. It allows users to easily book football fields, manage matches, and stay connected with their team.",

  did: "Converted the Figma design into a fully functional website using HTML, CSS, Bootstrap, and JavaScript. Focused on clean UI/UX, smooth interactions, and a fully responsive layout across all devices. Implemented sections like hero, features, testimonials, FAQ, and app download.",

  imgs: [
    "img/tashkelah1.jpeg",
    "img/tashkelah2.jpeg",
    "img/tashkelah3.jpeg",
    "img/tashkelah4.jpeg"
  ],
  link: ""
  },
{
  title: "Mobile Services Web Application",
  type: "Freelance",

  desc: "A responsive web application for managing digital services and mobile store operations. It allows users to handle balance transfers, activate gaming packages such as PUBG and Free Fire, and browse different service categories through a clean and interactive interface.",

  did: "Designed and developed a fully responsive web application using HTML, CSS, Bootstrap, and JavaScript. Built an interactive UI for managing mobile services including balance transfer system, product/service selection, and categorized tabs. Focused on clean UI/UX, responsiveness, and user-friendly interaction across all devices.",

  imgs: [
    "img/syr1.jpeg",
    "img/syr2.jpeg",
    "img/syr3.jpeg",
    "img/syr4.jpeg",
    "img/syr5.jpeg"
  ],
  link: ""
},
 {
  title: "Aravira AI Learning Platform",
  type: "Freelance",

  desc: "A responsive e-learning platform designed for teaching Artificial Intelligence in Arabic. It allows users to browse courses, watch lessons, and explore educational content through a modern and user-friendly interface.",

  did: "Converted the Figma design into a fully responsive website using HTML, CSS, Bootstrap, and JavaScript. Built a structured course layout with interactive sections for lessons and content browsing. Developed an additional dashboard interface for managing platform data and improving user experience. Focused on clean UI/UX, responsiveness, and smooth navigation across all devices.",

  imgs: [
    "img/aravira1.jpeg",
    "img/aravira2.jpeg",
    "img/aravira3.jpeg",
    "img/aravira4.jpeg"
  ],
  link: ""
},
  {
  title: "Quick Builders Landing Page",
  type: "Freelance",
  desc: "Quick Builders is a modern one-page website for a construction and interior design company. It highlights services, previous projects, and provides easy ways for clients to get in touch.",
  
  did: "I converted the design from Figma into a fully responsive website using HTML, CSS, and JavaScript. I focused on clean layout, smooth scrolling, and showcasing projects in a visually appealing way.",
  
  imgs: [
    "img/quick1.jpeg",
    "img/quick2.jpeg",
    "img/quick3.jpeg"
  ],
  
  link: ""
},

   {
  title: "Events Platform",
  type: "Internship Project",

  desc: "Events is a platform designed to showcase upcoming events, allowing users to explore detailed event information, search for specific events, and discover new activities easily.",

  did: "I designed the UI/UX from scratch and developed the frontend using HTML, CSS, and JavaScript. I also integrated the platform with a Laravel backend, handling dynamic data and APIs. In addition, I built a full dashboard system to manage events, users, and advertisements. This project was developed during my internship at Almonqed Company.",

  imgs: [
    "img/event1.jpeg",
    "img/event2.jpeg",
    "img/event3.jpeg",
    "img/event4.jpeg",
    "img/event5.jpeg",
    "img/event6.jpeg",
    "img/event7.jpeg"
  ],

  link: ""
},

{
  title: "Product Management Dashboard",
  type: "Freelance",

  desc: "A dashboard system designed to manage products, pricing, and order activation, with a clean and user-friendly interface.",

  did: "I designed and developed the dashboard using React, focusing on component structure, state management, and reusable UI. The project includes product listing, pricing management, and order handling features, all built with a responsive and modern design.",

  imgs: [
    "img/dash1.jpeg",
    "img/dash2.jpeg",
    "img/dash3.jpeg",
    "img/dash4.jpeg"
  ],

  link: ""
},

   {
  title: "Industrial Services Platform",
  type: "Internship Project",

  desc: "A web platform built for construction companies and industrial businesses to present their services and projects in a clean and professional way.",

  did: "I developed the frontend using React, focusing on reusable components and responsive layout. I worked on implementing the provided design and ensuring smooth user experience across different devices. This project was built during my internship at Almonqed Company.",

  imgs: [
    "img/factory.jpeg",
    "img/factory2.jpeg",
    "img/factory3.jpeg",
    "img/factory4.jpeg",
    "img/factory5.jpeg",
    "img/factory6.jpeg",
    "img/factory7.jpeg",
    "img/factory8.jpeg"
  ],

  link: ""
},
];

// ===== Image Slideshow (cards) =====
document.querySelectorAll('.projects-card').forEach(card => {
  const imgs = card.querySelectorAll('.projects-img');
  if (!imgs.length) return;
  if (imgs.length <= 1) return;

  let current = 0;
  setInterval(() => {
    imgs[current].style.opacity = '0';
    current = (current + 1) % imgs.length;
    imgs[current].style.opacity = '1';
  }, 2500);
});

// ===== Modal =====
const modal      = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalSlide = document.getElementById('modalSlideshow');
const modalDots  = document.getElementById('modalDots');
const modalTitle = document.getElementById('modalTitle');
const modalType  = document.getElementById('modalType');
const modalDesc  = document.getElementById('modalDesc');
const modalDid   = document.getElementById('modalDid');
const modalLink  = document.getElementById('modalLink');

let modalInterval = null;
let currentSlide  = 0;

function buildDots(count) {
  modalDots.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('span');
    d.className = 'modal-dot' + (i === 0 ? ' active' : '');
    modalDots.appendChild(d);
  }
}

function setActiveDot(index) {
  modalDots.querySelectorAll('.modal-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

document.querySelectorAll('.projects-image').forEach((imgWrap, index) => {
  imgWrap.addEventListener('click', () => {
    const p = projects[index];

    modalTitle.textContent = p.title;
    modalType.textContent  = p.type;
    modalDesc.textContent  = p.desc;
    modalDid.textContent   = p.did;
    modalLink.href         = p.link;
    modalLink.style.display = p.link ? 'inline-flex' : 'none';

    // slideshow
    modalSlide.querySelectorAll('img').forEach(img => img.remove());
    p.imgs.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      if (i === 0) img.classList.add('active');
      modalSlide.insertBefore(img, modalDots);
    });

    buildDots(p.imgs.length);
    currentSlide = 0;

    if (modalInterval) clearInterval(modalInterval);
    if (p.imgs.length > 1) {
      modalInterval = setInterval(() => {
        const all = modalSlide.querySelectorAll('img');
        all[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % all.length;
        all[currentSlide].classList.add('active');
        setActiveDot(currentSlide);
      }, 2200);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  if (modalInterval) { clearInterval(modalInterval); modalInterval = null; }
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Touch & Mouse swipe for modal slideshow
let modalSwipeStartX = 0;
let modalSwiping = false;
let modalSwiped = false;

function modalSwipeEnd(endX) {
  const diff = modalSwipeStartX - endX;
  if (Math.abs(diff) < 50) return false;
  const all = modalSlide.querySelectorAll('img');
  if (all.length <= 1) return false;
  all[currentSlide].classList.remove('active');
  if (diff > 0) {
    currentSlide = (currentSlide + 1) % all.length;
  } else {
    currentSlide = (currentSlide - 1 + all.length) % all.length;
  }
  all[currentSlide].classList.add('active');
  setActiveDot(currentSlide);
  return true;
}

modalSlide.addEventListener('touchstart', e => {
  modalSwipeStartX = e.changedTouches[0].screenX;
  modalSwiped = false;
}, { passive: true });

modalSlide.addEventListener('touchend', e => {
  modalSwiped = modalSwipeEnd(e.changedTouches[0].screenX);
}, { passive: true });

modalSlide.addEventListener('mousedown', e => {
  modalSwipeStartX = e.screenX;
  modalSwiping = true;
  modalSwiped = false;
});

modalSlide.addEventListener('mousemove', e => {
  if (!modalSwiping) return;
  if (Math.abs(modalSwipeStartX - e.screenX) > 10) {
    modalSwiped = true;
  }
  e.preventDefault();
});

modalSlide.addEventListener('mouseup', e => {
  if (!modalSwiping) return;
  modalSwiping = false;
  modalSwiped = modalSwipeEnd(e.screenX);
});

modalSlide.addEventListener('mouseleave', () => {
  modalSwiping = false;
});


// ===== LIGHTBOX =====
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev  = document.getElementById('lightboxPrev');
const lightboxNext  = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

let lightboxImgs = [];
let lightboxIndex = 0;

function openLightbox(imgs, startIndex) {
  lightboxImgs = imgs;
  lightboxIndex = startIndex;
  updateLightbox();
  lightbox.classList.add('active');
}

function updateLightbox() {
  lightboxImg.src = lightboxImgs[lightboxIndex];
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImgs.length}`;
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lightboxPrev.addEventListener('click', e => {
  e.stopPropagation();
  lightboxIndex = (lightboxIndex - 1 + lightboxImgs.length) % lightboxImgs.length;
  updateLightbox();
});

lightboxNext.addEventListener('click', e => {
  e.stopPropagation();
  lightboxIndex = (lightboxIndex + 1) % lightboxImgs.length;
  updateLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + lightboxImgs.length) % lightboxImgs.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxImgs.length; updateLightbox(); }
});

// Click on modal slideshow image → open lightbox (only if no swipe)
modalSlide.addEventListener('click', e => {
  if (modalSwiped) { modalSwiped = false; return; }
  if (e.target.tagName !== 'IMG') return;
  const allImgs = [...modalSlide.querySelectorAll('img')].map(i => i.src);
  const clickedIndex = allImgs.indexOf(e.target.src);
  if (clickedIndex >= 0) openLightbox(allImgs, clickedIndex);
});

// Touch swipe for lightbox
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) < 50) return;
  if (diff > 0) {
    lightboxIndex = (lightboxIndex + 1) % lightboxImgs.length;
  } else {
    lightboxIndex = (lightboxIndex - 1 + lightboxImgs.length) % lightboxImgs.length;
  }
  updateLightbox();
}, { passive: true });















