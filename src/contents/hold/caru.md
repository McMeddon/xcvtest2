---
title: Caru
cover: "https://static.planetminecraft.com/files/image/minecraft/project/2025/560/18693672-f_xl.webp"
published: 2025-05-06
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Survival
licenseName: "licensed"
author: McMeddon
sourceLink: "https://planetminecraft.com/member/mcmeddon"
draft: false
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Image Carousel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles for the carousel */
        .carousel-container {
            position: relative;
            overflow: hidden; /* Hide slides that are not active */
            width: 100%;
        }
        .carousel-slides {
            display: flex; /* Arrange slides horizontally */
            transition: transform 0.5s ease-in-out; /* Smooth slide transition */
            width: 100%; /* Ensure slides container takes full width */
        }
        .carousel-slide {
            min-width: 100%; /* Each slide takes full width of the container */
            box-sizing: border-box;
        }
      .carousel-slide img {
            width: 100%;
            height: auto; /* Maintain aspect ratio */
            max-height: 70vh; /* Limit image height to 70% of viewport height */
            object-fit: cover; /* Cover the slide area, cropping if necessary */
            display: block;
        }
        /* Navigation Buttons */
        .carousel-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            border-radius: 0.375rem; /* Tailwind's rounded-md */
            z-index: 10;
            font-size: 1.5rem;
        }
        .carousel-button.prev {
            left: 10px;
        }
        .carousel-button.next {
            right: 10px;
        }
        /* Navigation Dots */
        .carousel-dots {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px; /* Space between dots */
            z-index: 10;
        }
        .carousel-dot {
            width: 12px;
            height: 12px;
            background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .carousel-dot.active {
            background-color: white; /* Active dot is solid white */
        }
    </style>
</head>
<body class="bg-gray-100 font-sans">
    <section class="w-full">
        <div id="imageCarousel" class="carousel-container">
            <div class="carousel-slides">
                <div class="carousel-slide">
                    <img src="https://placehold.co/1200x500/3498db/ffffff?text=Slide+1" alt="Slide 1 Image">
                </div>
                <div class="carousel-slide">
                    <img src="https://placehold.co/1200x500/e74c3c/ffffff?text=Slide+2" alt="Slide 2 Image">
                </div>
                <div class="carousel-slide">
                    <img src="https://placehold.co/1200x500/2ecc71/ffffff?text=Slide+3" alt="Slide 3 Image">
                </div>
                <div class="carousel-slide">
                    <img src="https://placehold.co/1200x500/f39c12/ffffff?text=Slide+4" alt="Slide 4 Image">
                </div>
            </div>
            <button class="carousel-button prev" id="prevBtn">&#10094;</button>
            <button class="carousel-button next" id="nextBtn">&#10095;</button>
            <div class="carousel-dots" id="carouselDots">
                </div>
        </div>
    </section>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.getElementById('imageCarousel');
            const slidesContainer = carousel.querySelector('.carousel-slides');
            const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
            const prevButton = document.getElementById('prevBtn');
            const nextButton = document.getElementById('nextBtn');
            const dotsContainer = document.getElementById('carouselDots');
            let currentIndex = 0;
            const totalSlides = slides.length;
            // --- Create Navigation Dots ---
            function createDots() {
                slides.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('carousel-dot');
                    dot.addEventListener('click', () => {
                        goToSlide(index);
                    });
                    dotsContainer.appendChild(dot);
                });
            }
            // --- Update Dots ---
            function updateDots() {
                const dots = Array.from(dotsContainer.children);
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            // --- Go to a specific slide ---
            function goToSlide(index) {
                if (index < 0) {
                    currentIndex = totalSlides - 1;
                } else if (index >= totalSlides) {
                    currentIndex = 0;
                } else {
                    currentIndex = index;
                }
                // Calculate the transformation needed to show the current slide
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
                updateDots();
            }
            // --- Event Listeners for Buttons ---
            prevButton.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
            });
            nextButton.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
            });
            // --- Initialize Carousel ---
            function initCarousel() {
                if (totalSlides > 0) {
                    createDots();
                    goToSlide(0); // Start with the first slide
                } else {
                    // Handle case with no slides
                    prevButton.style.display = 'none';
                    nextButton.style.display = 'none';
                    dotsContainer.style.display = 'none';
                    slidesContainer.innerHTML = '<p class="text-center p-4">No images to display.</p>';
                }
            }
            // --- Handle Window Resize ---
            // This ensures the slide translation is correct if the window size changes
            // For this simple translateX percentage based slider, it's often inherently responsive.
            // However, for more complex carousels, you might need to recalculate slide widths.
            window.addEventListener('resize', () => {
                // Re-apply the transform to ensure it's correct for the new width
                // No complex recalculation needed here due to percentage-based translation
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
            initCarousel();
        });
    </script>

</body>
</html>




# Markdown Tutorial

### Table

HTML Tag: `<table>`

It's an extension.

Separates column by **pipe (|)** and header by **dashes (-)**, and uses **colon (:)** for alignment.

The outer **pipes (|)** and alignment are optional. There are **3 delimiters** each cell at least for separating header.

Preview:

---

| Released | Date | Type |  |
| :- | :-: | --- | --|
| aaa  |  bbb   |   ccc | 
| ddd  |  eee   |   fff | 
| ✅	| 27. April 2025 | Source Files |
| ✅	| 28. April 2025 | 1.21.5 Java Wold |
| ✅	| 28. April 2025 | 1.21.5 Bedorck World |

---


---