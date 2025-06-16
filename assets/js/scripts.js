document.addEventListener('DOMContentLoaded', () => {
    const servicesSpan = document.querySelector('.services');
    const services = [
        "Flight Bookings",
        "Hotel Reservations",
        "Travel Insurance",
        "Visa Assistance",
        "Car Hire"
    ];
    let currentIndex = 0;

    // Function to set the line-height based on the current font-size
    function setServicesLineHeight() {
        const computedStyle = window.getComputedStyle(servicesSpan);
        const fontSize = parseFloat(computedStyle.fontSize);
        servicesSpan.style.lineHeight = `${fontSize}px`;
    }

    function animateService() {
        // Add a fade-out class to start the transition
        servicesSpan.classList.add('fade-out');

        // Wait for the fade-out to complete before changing text and fading in
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % services.length;
            servicesSpan.textContent = services[currentIndex];
            // Recalculate line-height in case font-size changed due to responsive CSS
            setServicesLineHeight();
            // Remove fade-out and add fade-in
            servicesSpan.classList.remove('fade-out');
            servicesSpan.classList.add('fade-in');

            // Remove fade-in after animation to prepare for next cycle
            setTimeout(() => {
                servicesSpan.classList.remove('fade-in');
            }, 500); // This should match your CSS transition duration
        }, 500); // This should match your CSS transition duration for fade-out
    }

    // Initial display
    servicesSpan.textContent = services[currentIndex];
    setServicesLineHeight(); // Set initial line-height

    // Set interval to change service every few seconds
    setInterval(animateService, 3000); // Change service every 3 seconds

    // Add an event listener to re-adjust line-height on window resize
    window.addEventListener('resize', setServicesLineHeight);


    // --- Burger Menu Functionality ---
    const burgerMenu = document.getElementById('burger-menu');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        mainNav.classList.toggle('open');
        document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('open');
            mainNav.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // --- Sticky Header Functionality ---
    const header = document.querySelector(".header");
    const topHeader = document.querySelector(".top-header");
    let stickyOffset = 0;

    // Calculate the offset based on the height of the top-header
    if (topHeader) {
        stickyOffset = topHeader.offsetHeight;
    }

    function stickyHeader() {
        if (window.scrollY > stickyOffset) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // Call the function on scroll
    window.addEventListener("scroll", stickyHeader);

    // Call it once on load to check initial position
    stickyHeader();


    // --- Scroll-to-Top Button Functionality ---
    const toTopBtn = document.getElementById("toTopBtn");

    // When the user scrolls down 200px from the top of the document, show the button
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    toTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll animation
        });
    });
});