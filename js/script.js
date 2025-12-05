// ===== Initial Welcome Message =====
displayWelcomeMessage();

// ===== Function to Display Personalized Welcome Message with Effects =====
function displayWelcomeMessage() {
    // Default name
    const userResponse = "Hi My Name is Ridwan";

    // Determine greeting and emoji based on time
    const hour = new Date().getHours();
    let greeting = "";
    let emoji = "";

    if (hour < 12) {
        greeting = "Good morning";
        emoji = "🌅";
    } else if (hour < 18) {
        greeting = "Good afternoon";
        emoji = "🌤️";
    } else {
        greeting = "Good evening";
        emoji = "🌙";
    }

    const message = `${emoji} ${greeting}, ${userResponse}`;

    // Typing effect
    const container = document.getElementById("welcome-speech");
    container.innerHTML = "";
    let i = 0;
    const speed = 50;
    const typing = setInterval(() => {
        container.innerHTML += message.charAt(i);
        i++;
        if (i >= message.length) clearInterval(typing);
    }, speed);

    // Floating / bouncing text effect
    let pos = 0;
    let direction = 1;
    setInterval(() => {
        container.style.transform = `translateY(${pos}px)`;
        pos += 0.5 * direction;
        if (pos > 5 || pos < -5) direction *= -1;
    }, 30);

    // Subtle glow effect
    container.style.transition = "text-shadow 0.3s ease";
    setInterval(() => {
        container.style.textShadow = "0 0 6px #cc00ff, 0 0 12px #3600fa";
    }, 500);
}

// ===== Form Validation Function (currently empty) =====
function validateForm() { }

// ===== Carousel Functionality =====
const slides = document.querySelectorAll('.slides img');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(nextSlide, 3000);