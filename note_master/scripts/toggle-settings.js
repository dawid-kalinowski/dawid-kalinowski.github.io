document.addEventListener("DOMContentLoaded", function() {
    const settingsPanel = document.querySelector('.settings');
    const toggleSettingsButton = document.getElementById('toggleSettings');

    // hide the settings panel by default
    settingsPanel.style.display = 'none';

    // toggle settings panel visibility when the button is clicked
    toggleSettingsButton.addEventListener('click', function() {
        if (settingsPanel.style.display === 'none') {
            settingsPanel.style.display = 'flex';
        } else {
            settingsPanel.style.display = 'none';
        }
    });

    // hide the settings panel if user clicks outside of it
    // document.addEventListener('click', function(event) {
    //     if (!settingsPanel.contains(event.target) && event.target !== toggleSettingsButton) {
    //         settingsPanel.style.display = 'none';
    //     }
    // });
});
