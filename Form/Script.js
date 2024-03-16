document.addEventListener('DOMContentLoaded', function() {
    const words = ["Orders", "Registrations", "Bookings", "Feedback", "Surveys"];
    const typingText = document.querySelector('.typing-text');

    let currentIndex = 0;
    let currentWord = words[currentIndex];

    function typeNextWord() {
        typingText.textContent = currentWord;
        currentIndex = (currentIndex + 1) % words.length;
        currentWord = words[currentIndex];
    }

    setInterval(typeNextWord, 2000); 
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});
