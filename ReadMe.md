# TradeX & Nivesh Paheli - FinTech Society Event Hub

This repository contains the source code for the official event website for the FinTech Society of IIT Bhilai. It serves as a dynamic, responsive landing page for two key events: **TradeX**, a high-tech virtual trading competition, and **Nivesh Paheli**, a financial treasure hunt.

The website is designed as a two-page static hub, with each page styled to match its event's theme:
* **TradeX:** A dark, futuristic purple theme with sci-fi fonts and "live" data animations.
* **Nivesh Paheli:** A mysterious, dark red and black theme with a "creepy" font for the title.

---

## 📸 Screenshots

*(You can replace these links with your own screenshots after uploading them to GitHub)*

| Desktop View (TradeX) | Mobile View (TradeX) |
| :---: | :---: |
| <img width="600" alt="TradeX Desktop View" src="https_github_readme_images/desktop.png"> | <img width="250" alt="TradeX Mobile View" src="https_github_readme_images/mobile.png"> |

| Nivesh Paheli Page | Event Details |
| :---: | :---: |
| <img width="600" alt="Nivesh Paheli Page" src="https://i.ibb.co/L8Gj6T7/nivesh-paheli-readme.png"> | <img width="600" alt="Event Details" src="https_github_readme_images/details.png"> |

---

## ✨ Key Features

This website is built with vanilla HTML, CSS, and JavaScript, and includes:

* **Dual-Event Structure:** Separate, custom-styled pages for `index.html` (TradeX) and `nivesh.html` (Nivesh Paheli).
* **Sticky Navigation Bar:** Easy navigation between events and key sections (Steps, Contact).
* **Live Countdown Timer:** A JavaScript-powered timer that counts down to the registration deadline.
* **Dynamic Components:**
    * **Animated Prize Counter:** Prize pool animates from 0 when it scrolls into view.
    * **Smooth Scrolling:** Anchor links in the nav bar and on the page scroll smoothly.
    * **Fade-in Animations:** All sections fade and slide in as the user scrolls.
* **Pure CSS Animations:**
    * **Zoom-in Title:** The "TradeX" title animates on page load.
    * **Data Blips:** Glowing "live data" blips on the event detail cards.
    * **Gradient Buttons:** Animated, sliding gradients on key call-to-action buttons.
* **Responsive Design:** A mobile-first layout that looks great on all devices, from small phones (iOS & Android) to wide-screen desktops.
* **Embedded Content:** Includes an embedded YouTube video guide and a collapsible FAQ section.
* **Interactive Footer:** Features "click-to-call" (`tel:`) and "click-to-email" (`mailto:`) links, along with social media icons.

---

## 🛠 Tech Stack

* **HTML5:** Semantic structure for accessibility and SEO.
* **CSS3:**
    * Flexbox & CSS Grid for modern, responsive layouts.
    * Custom Properties (Variables) for easy theme management.
    * Keyframe Animations for dynamic user experience.
    * Media Queries for device-specific responsiveness.
* **JavaScript (ES6+):**
    * DOM manipulation for the countdown timer and prize counter.
    * `IntersectionObserver` API for efficient scroll-based animations.
    * Event listeners for smooth scrolling.

---

## 🚀 Getting Started

This is a static website with no build dependencies. You can run it locally right out of the box.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Aj1359/TradeX-website.git](https://github.com/Aj1359/TradeX-website.git)
    ```

2.  **Navigate to the directory:**
    ```bash
    cd TradeX-website
    ```

3.  **Ensure your images are in place:**
    This project uses local images. Make sure you have an `images/` folder in the root directory with the following files:
    * `f1.png` (FinTech Logo)
    * `f2.png` (StockGro Logo)
    * `img.png` (Main background)
    * `f3.png` (Secondary background)
    * `nivesh-poster.jpg` (Nivesh Paheli poster)
    * `favicon.ico` (Browser tab icon)

4.  **Open the website:**
    Simply open the `index.html` file in your favorite web browser.

---

## 📁 File Structure
. ├── index.html (Main TradeX landing page) ├── nivesh.html (Nivesh Paheli event page) ├── style.css (Main stylesheet for TradeX - Purple Theme) ├── nivesh-style.css (Stylesheet for Nivesh Paheli - Red Theme) ├── script.js (JavaScript for timers and animations) ├── favicon.ico ├── images/ │ ├── f1.png │ ├── f2.png │ ├── img.png │ ├── f3.png │  └── README.md

---

## 📞 Contact

This website was built for the **FinTech Society, IIT Bhilai**.

For any queries regarding the events, please contact: `fintech_society@iitbhilai.ac.in`