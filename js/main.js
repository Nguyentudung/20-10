gsap.registerPlugin(ScrollTrigger);

// Create floating flowers and hearts
function createFloatingElements() {
    const container = document.getElementById("flowerContainer");
    const flowerEmojis = ["🌸", "🌺", "🌹", "🌷", "🌻", "🌼", "💐", "💮", "🏵️"];
    const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝"];

    // Create flowers
    for (let i = 0; i < 15; i++) {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.textContent =
            flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = Math.random() * 100 + "%";
        flower.style.top = Math.random() * 100 + "%";
        container.appendChild(flower);

        // Animate with GSAP
        gsap.to(flower, {
            y: -100,
            x: Math.random() * 100 - 50,
            rotation: Math.random() * 360,
            duration: 10 + Math.random() * 10,
            ease: "none",
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 5,
        });
    }

    // Create hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent =
            heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";
        container.appendChild(heart);

        // Animate with GSAP
        gsap.to(heart, {
            y: -80,
            x: Math.random() * 80 - 40,
            rotation: Math.random() * 360,
            duration: 8 + Math.random() * 8,
            ease: "none",
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 5,
        });
    }
}

// Initialize floating elements
createFloatingElements();

// Send Love Button Animation
document.getElementById("sendLoveBtn").addEventListener("click", function () {
    const hiddenMessage = document.getElementById("hiddenMessage");

    // Toggle message visibility
    if (hiddenMessage.classList.contains("show-message")) {
        hiddenMessage.classList.remove("show-message");
        hiddenMessage.classList.add("hidden-message");
    } else {
        hiddenMessage.classList.remove("hidden-message");
        hiddenMessage.classList.add("show-message");

        // Create floating hearts on click
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const heart = document.createElement("div");
                heart.className = "heart";
                heart.textContent = "💖";
                heart.style.left = 50 + Math.random() * 20 - 10 + "%";
                heart.style.top = "50%";
                document.getElementById("home").appendChild(heart);

                gsap.to(heart, {
                    y: -200,
                    x: Math.random() * 100 - 50,
                    opacity: 0,
                    rotation: Math.random() * 360,
                    duration: 2,
                    ease: "power2.out",
                    onComplete: () => heart.remove(),
                });
            }, i * 100);
        }
    }
});

// Scroll animations
gsap.from(".hero-content h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
});

gsap.from(".hero-content h2", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
});

gsap.from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
});

gsap.from("#sendLoveBtn", {
    y: 30,
    opacity: 2,
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
});

// ScrollTrigger animations for sections
gsap.utils.toArray(".card-hover").forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
    });
});

gsap.utils.toArray(".gallery-item").forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Mobile menu toggle
document.getElementById("mobileMenuBtn").addEventListener("click", function () {
    // This would typically toggle a mobile menu
    // For simplicity, we're just showing an alert
    alert("Menu di động sẽ hiển thị ở đây");
});
