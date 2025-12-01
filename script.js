// --- Loader Logic ---
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});

// --- Mascot Eye Tracking Logic ---
document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    const pupilsArray = Array.from(pupils);

    pupilsArray.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const radian = Math.atan2(e.pageX - eyeX, e.pageY - eyeY);
        
        // The '5' is the distance the pupil can move from the center.
        // Adjust this value to control the range of movement.
        const x = Math.round(5 * Math.sin(radian));
        const y = Math.round(5 * Math.cos(radian));

        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});
