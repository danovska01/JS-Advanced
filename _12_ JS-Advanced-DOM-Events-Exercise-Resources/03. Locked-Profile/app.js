function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const showMoreBtn = profile.querySelector('button');
        const lockRadio = profile.querySelector('input[value="lock"]');
        const unlockRadio = profile.querySelector('input[value="unlock"]');
        const hiddenFields = profile.querySelector('.profile div');

        showMoreBtn.addEventListener('click', function () {
            if (unlockRadio.checked) {
                const isHidden = hiddenFields.style.display === 'none';

                if (isHidden) {
                    hiddenFields.style.display = 'block';
                    showMoreBtn.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    showMoreBtn.textContent = 'Show more';
                }
            }
        });

        // lockRadio.addEventListener('click', function () {
        //     hiddenFields.style.display = 'none';
        //     showMoreBtn.textContent = 'Show more';
        // });

        unlockRadio.addEventListener('click', function () {
            hiddenFields.style.display = 'none';
            showMoreBtn.textContent = 'Show more';
        });
    });
}

// Call the function when the window is loaded
window.onload = lockedProfile;
