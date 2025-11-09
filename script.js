document.addEventListener("DOMContentLoaded", () => {

    // --- Component 1: Animated Prize Counter ---
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const prizeCounter = document.getElementById('prize-counter');
    let counterAnimated = false; 

    function startCounter() {
        if (prizeCounter && isInViewport(prizeCounter) && !counterAnimated) {
            counterAnimated = true; 
            const targetValue = 50000;
            const duration = 2000; 
            let start = 0;
            const stepTime = 50; 
            const steps = duration / stepTime;
            const increment = targetValue / steps;

            const counterInterval = setInterval(() => {
                start += increment;
                if (start >= targetValue) {
                    prizeCounter.innerText = targetValue.toLocaleString('en-IN');
                    clearInterval(counterInterval);
                } else {
                    prizeCounter.innerText = Math.ceil(start).toLocaleString('en-IN');
                }
            }, stepTime);
        }
    }

    // --- Component 2: Fade-in on Scroll ---
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 
    });

    hiddenElements.forEach(el => observer.observe(el));
    
    // --- Component 3: Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault(); 
            const targetElement = document.querySelector(this.getAttribute('href'));
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Component 4: Countdown Timer ---
    function startCountdown() {
        // Set the deadline: November 12, 2025, 09:25:00
        const deadline = new Date("November 12, 2025 09:25:00").getTime();

        const timerInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = deadline - now;

            // Calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Get the HTML elements
            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            const secondsEl = document.getElementById("seconds");

            if (distance < 0) {
                // Stop the timer when the deadline is reached
                clearInterval(timerInterval);
                document.getElementById("countdown-timer").innerHTML = "<div class='timer-expired'>Registration Closed</div>";
            } else if (daysEl && hoursEl && minutesEl && secondsEl) {
                // Update the timer
                daysEl.innerHTML = `0${days}`.slice(-2);
                hoursEl.innerHTML = `0${hours}`.slice(-2);
                minutesEl.innerHTML = `0${minutes}`.slice(-2);
                secondsEl.innerHTML = `0${seconds}`.slice(-2);
            }
        }, 1000);
    }
    // --- End of Countdown Timer ---


    // --- Run all functions on page load ---
    window.addEventListener('scroll', startCounter);
    startCounter(); 
    startCountdown(); // Start the timer
});