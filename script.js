document.addEventListener('DOMContentLoaded', function () {
    // declaring variables
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const showcaseLink = document.getElementById('showcase-link');

    // array of objects for each of the links in the navbar
    const links = [
        { href: "/pages/homepage/index.html", text: "Home",},
        { href: "/pages/products/products.html", text: "Products", },
        { href: "/pages/about-us/about-us.html", text: "About Us", },
        { href: "/pages/contact/contact.html", text: "Contact",  },
        { href: "/pages/references/references.html", text: "References", }
    ];

    // Get current URL path
        const currentPath = window.location.pathname;

    // looping through the array and creating html elememts for each of the links
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        
        // give element class "active" if the href matches the path
        if (link.href === currentPath) {
            a.classList.add('active');
        }
        navbar.appendChild(li);
        li.appendChild(a);

    });


    showcaseLink.href = "/pages/products/products.html";


    // listen for click on the hamburger menu
    menuIcon.addEventListener('click', function () {

        //toggle class "open" on navbar and menuIcon
        navbar.classList.toggle('open');
        menuIcon.classList.toggle('open');


        if (navbar.classList.contains('open')) {
            menuIcon.style.transform = 'rotate(90deg)';
        } else {
            menuIcon.style.transform = 'rotate(0deg)';
        }
    });
});
