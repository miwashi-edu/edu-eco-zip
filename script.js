document.addEventListener('DOMContentLoaded', function () {
    // declaring variables
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const showcaseLink = document.getElementById('cta-link');

    // array of objects for each of the links in the navbar
    const links = [
        { href: "/pages/homepage/index.html", text: "Home" },
        { href: "/pages/products/products.html", text: "Products" },
        { href: "/pages/about-us/about-us.html", text: "About Us" },
        { href: "/pages/contact/contact.html", text: "Contact" },
        { href: "/pages/references/references.html", text: "References" }
    ];

    // Check if navbar exists before trying to append links
    if (navbar) {
        // Get current URL path
        const currentPath = window.location.pathname;

        // looping through the array and creating html elements for each of the links
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            
            // ternary operator that gives element class "active" if the href matches the path
            currentPath === link.href ? a.classList.add('active') : a.classList.remove('active');
            
            li.appendChild(a);
            navbar.appendChild(li);

            a.addEventListener('click', function () {
                navbar.classList.remove('open');
                menuIcon.classList.remove('open');
            });
        });
    }

    // Check if showcaseLink exists before assigning href
    if (showcaseLink) {
        showcaseLink.href = "/pages/products/products.html";
    }

    // listen for click on the hamburger menu only if menuIcon exists
    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            //toggle class "open" on navbar and menuIcon
            navbar.classList.toggle('open');
            menuIcon.classList.toggle('open');
        });
    }
    
});
