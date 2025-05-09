document.addEventListener('DOMContentLoaded', function() {
    // API Demo Button on open-api.html
    const apiRequestButton = document.getElementById('apiRequestButton');
    const apiResponsePre = document.getElementById('apiResponse');

    if (apiRequestButton && apiResponsePre) {
        apiRequestButton.addEventListener('click', function() {
            if (apiResponsePre.style.display === 'none' || apiResponsePre.style.display === '') {
                apiResponsePre.style.display = 'block';
                apiRequestButton.textContent = 'API Жауабын Жасыру';
            } else {
                apiResponsePre.style.display = 'none';
                apiRequestButton.textContent = 'API Сұранысын Көрсету';
            }
        });
    }

    // Fraud schemes toggle on cybersecurity.html
    const fraudSchemeToggles = document.querySelectorAll('.toggle-fraud');
    fraudSchemeToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const details = this.nextElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });

    // Simple dropdown functionality (can be enhanced)
    // This is a very basic hover implementation for desktop.
    // For mobile, you might need a click-based toggle.
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        // No JS needed if using CSS :hover for dropdowns as in the example style.css
        // If click is needed:
        // const dropbtn = dropdown.querySelector('.dropbtn');
        // dropbtn.addEventListener('click', function(event) {
        //    event.preventDefault();
        //    const content = this.nextElementSibling;
        //    content.style.display = content.style.display === 'block' ? 'none' : 'block';
        // });
    });

});
