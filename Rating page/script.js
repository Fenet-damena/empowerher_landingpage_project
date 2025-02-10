document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating');
    const submitBtn = document.getElementById('submit-btn');
    const selectedRatingSpan = document.getElementById('selected-rating');

    let selectedValue = 0;

    ratings.forEach(rating => {
        rating.addEventListener('click', () => {
            ratings.forEach(btn => btn.classList.remove('selected'));

            rating.classList.add('selected');
            selectedValue = rating.value;

            submitBtn.classList.add('active');
        });
    });

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (selectedValue > 0) {
                submitBtn.style.backgroundColor = "white";
                submitBtn.style.color = "black";

                localStorage.setItem('selectedRating', selectedValue);
                window.location.href = 'thank-you.html';
            } else {
                alert('Please select a rating before submitting.');
            }
        });
    }

    if (selectedRatingSpan) {
        selectedRatingSpan.textContent = localStorage.getItem('selectedRating') || 'N/A';
    }
});
