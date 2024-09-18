document.addEventListener('DOMContentLoaded', function() {
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const textColorInput = document.getElementById('textColor');

    const savedTextColor = localStorage.getItem('textColor');
    if (savedTextColor) {
        document.documentElement.style.setProperty('--text-color', savedTextColor);
    }

    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            const textColor = textColorInput.value;
            localStorage.setItem('textColor', textColor);
            document.documentElement.style.setProperty('--text-color', textColor);
            alert('Settings saved!');
        });
    }
});

// Name form submission
const nameForm = document.getElementById('nameForm');
if (nameForm) {
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('userName').value;
        localStorage.setItem('userName', name);
        window.location.href = 'fullstory.html';
    });
}

// Replace placeholders with the user's name
const userNameElement = document.getElementById('userName');
if (userNameElement) {
    const userName = localStorage.getItem('userName') || '[Name]';
    userNameElement.textContent = userName;
}

bgMusic.play()
;