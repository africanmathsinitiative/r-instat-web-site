
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const teamContainer = document.querySelector('.team-container');

    const scrollAmount = teamContainer.offsetWidth / 4; // Calculate the amount to scroll

    prevBtn.addEventListener('click', () => {
        teamContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        teamContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

