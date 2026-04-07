// Start the experience, play music, and show first page
function startExperience() {
    // Play music
    let music = document.getElementById("bg-music");
    music.volume = 0.5; // Sets volume to 50%
    music.play();

    // Move from intro to Page 1
    showPage('page1');
}

// Function to smoothly switch between pages
function showPage(pageId) {
    // Hide all pages first
    const pages = document.querySelectorAll('.glass-card');
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });

    // Show the requested page
    const nextPage = document.getElementById(pageId);
    nextPage.classList.remove('hidden');
    nextPage.classList.add('active');

    // If it's the YES page, trigger confetti!
    if (pageId === 'yes-page') {
        fireConfetti();
    }
}

// Make the NO button run away on Page 3
const runawayBtn = document.getElementById('runaway-btn');

runawayBtn.addEventListener('mouseover', function() {
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate safe random positions
    const randomX = Math.random() * (windowWidth - 100);
    const randomY = Math.random() * (windowHeight - 50);
    
    // Apply new positions fixed to the screen
    this.style.position = 'fixed';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

// Confetti Effect Function
function fireConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        
        // Fire from multiple spots
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        }));
    }, 250);
}