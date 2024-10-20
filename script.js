function navigateToSection(section) {
    if (window.location.pathname.endsWith('index.html')) {
        // If on the home page, scroll to the section
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    } else {
        // If not on the home page, redirect to home page and scroll
        window.location.href = `index.html#${section}`;
    }
}