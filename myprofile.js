window.onload = function() {
    const progressBar = document.getElementById('progress-bar');
    const percentageText = document.querySelector('.progress-percentage');
    let width = 0;
    const targetWidth = 70; // Set the target progress percentage

    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            percentageText.textContent = width + '% Completed';
        }
    }, 20); // Adjust speed here
};
