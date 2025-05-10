document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to the content section
    const content = document.querySelector('.content');
    
    content.addEventListener('mouseenter', () => {
        content.style.transform = 'scale(1.02)';
        content.style.transition = 'transform 0.3s ease';
    });

    content.addEventListener('mouseleave', () => {
        content.style.transform = 'scale(1)';
    });

    // Add a click animation to the title
    const title = document.querySelector('.title');
    
    title.addEventListener('click', () => {
        title.style.transform = 'rotate(360deg)';
        title.style.transition = 'transform 1s ease';
        
        setTimeout(() => {
            title.style.transform = 'rotate(0deg)';
        }, 1000);
    });
});