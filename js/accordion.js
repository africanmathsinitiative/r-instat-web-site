// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add a click event listener to each accordion header
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const toggleButton = header.querySelector('.toggle-button');

    header.addEventListener('click', () => {
        // Toggle the max-height of the content
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            toggleButton.textContent = '+';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            toggleButton.textContent = '-';
        }
    });
});
