// NAV BAR MANAGER

let links = document.getElementsByClassName('nav-bar-link');

// Assign onclick listener to each nav-link
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        // Clear .pressed from all links
        for (let j = 0; j < links.length; j++) {
            if (links[j].classList.contains('pressed')) {
                links[j].classList.remove('pressed');
            }
        }
        links[i].classList.add('pressed');
    });
}

// NAV MENU MANAGER

let dropBtn = document.getElementById('dropdown-btn');
let dropMenu = document.getElementById('nav-menu');

// Assign onclick listener to button
dropBtn.addEventListener('click', () => {
    dropMenu.classList.toggle('hidden');
});

let dropMenuLinks = document.getElementsByClassName('nav-menu-link');

// Assign onclick listener to each menu link
for (let i = 0; i < dropMenuLinks.length; i++) {
    dropMenuLinks[i].addEventListener('click', () => {
        if (!dropMenu.classList.contains('hidden')) {
            dropMenu.classList.add('hidden');
        }
    });
}

// If screen width > 1024, hide dropMenu
window.addEventListener('resize', () => {
    if (window.width > 1024 && !dropMenu.classList.contains('hidden')) {
        dropMenu.classList.add('hidden');
    }
});