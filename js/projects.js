let currentIndex = 0;

function changeSlide(direction) {
    const container = document.querySelector('.container');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > cards.length - 1) {
        currentIndex = cards.length - 1;
    }

    const translateValue = -currentIndex * cardWidth;
    container.style.transform = `translateX(${translateValue}px)`;
}