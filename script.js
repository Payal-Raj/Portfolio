// ─── TABS ──────────────────────────────────────────────────────
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) tablink.classList.remove("active-link");
  for (let tabcontent of tabcontents) tabcontent.classList.remove("active-tab");
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ─── MOBILE MENU ───────────────────────────────────────────────
let sidemenu = document.getElementById("sidemenu");
function openmenu() { sidemenu.style.right = "0"; }
function closemenu() { sidemenu.style.right = "-250px"; }

// Close menu when a nav link is clicked
document.querySelectorAll('#sidemenu li a').forEach(link => {
  link.addEventListener('click', closemenu);
});

// ─── PORTFOLIO FILTER ──────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.work-list .work');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    projects.forEach(project => {
      const show = filter === 'all' || project.classList.contains(filter);
      project.style.display = show ? 'block' : 'none';
    });
    if (typeof AOS !== 'undefined') AOS.refresh();
  });
});

// ─── NAVBAR SCROLL SHADOW ──────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
  } else {
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
  }
});

// ─── ACTIVE NAV LINK ON SCROLL ─────────────────────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('nav ul li a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = '#ff004f';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));