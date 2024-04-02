document.addEventListener("DOMContentLoaded", function () {
    const settingsPanel = document.querySelector('.settings');
    const toggleSettingsButton = document.getElementById('toggleSettings');

    toggleSettingsButton.addEventListener('click', function () {
        settingsPanel.classList.toggle('show-settings');
        // Check if the settings panel is now visible
        if (settingsPanel.classList.contains('show-settings')) {
            // If visible, remove the 'hidden' class to display the panel
            settingsPanel.classList.remove('hidden');
        } else {
            // If hidden, wait for the transition to end, then hide the panel
            settingsPanel.addEventListener('transitionend', function () {
                settingsPanel.classList.add('hidden');
            }, { once: true });
        }
    });
});
