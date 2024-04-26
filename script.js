

    // Get a reference to the About link
    var aboutLink = document.querySelector('a[href="about.html"]');

    // Add an event listener to handle the click event
    aboutLink.addEventListener('click', function(event) {
        // Prevent the default action of the link (i.e., navigating to about.html)
        event.preventDefault();

        // Redirect the user to the About page
        window.location.href = 'about.html';
    });

// Get a reference to the About link
var aboutLink = document.querySelector('a[href="about.html"]');
    
// Add an event listener to handle the click event
aboutLink.addEventListener('click', function(event) {
    // Prevent the default action of the link (i.e., navigating to about.html)
    event.preventDefault();

    // Redirect the user to the About page
    window.location.href = 'about.html';
});