const toggleBassButton = document.getElementById('toggleBassButton');
const bassContainer = document.getElementById('bass-container');

toggleBassButton.addEventListener('click', function () {
    if (bassContainer.style.display === 'none') {
        fretboardContainer.style.display = 'none';
        pianoContainer.style.display = 'none';
        bassContainer.style.display = 'block';
    } else {
        bassContainer.style.display = 'none';
    }
});
