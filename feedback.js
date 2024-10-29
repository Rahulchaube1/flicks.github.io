document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            stars.forEach(st => {
                st.style.color = st.getAttribute('data-value') <= selectedRating ? 'gold' : 'white';
            });
        });
    });

    document.querySelector('button[type="submit"]').addEventListener('click', function() {
        const feedbackText = document.querySelector('textarea').value;
        if (selectedRating > 0 && feedbackText.trim() !== "") {
            alert(`Thank you for your feedback!\nRating: ${selectedRating} stars\nComment: ${feedbackText}`);
            // Here you can send the data to your server or API
        } else {
            alert('Please provide a rating and feedback.');
        }
    });
});
