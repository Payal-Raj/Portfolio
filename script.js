let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.work-list .work');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projects.forEach(project => {
      if (filter === 'all' || project.classList.contains(filter)) {
        project.style.display = 'block'; 
      } else {
        project.style.display = 'none';
      }
    });
    
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
  });
});




