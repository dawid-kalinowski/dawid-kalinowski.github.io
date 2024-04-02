let pause = false;
// check if currently played note matches displayed note (without an octave)
document.addEventListener('noteChanged', function (event) {
    if (!pause && !withOctave) {
        const currentNotePlaying = event.detail.currentNotePlaying;
        const currentNoteNav = document.querySelector(`.${CURRENT_NOTE_CLASS}`);

        if (currentNoteNav.textContent.trim() === currentNotePlaying) {
            console.log("dobrze");
            currentNoteNav.style.color = 'green';
            console.log(withoutInterval);
            if (withoutInterval) { pause = true; setTimeout(() => { updateNotesDisplay(); pause = false; }, 1000); }
            else if (!withInterval) { setTimeout(() => revertColorOfCurrentNote(), 1000); }
        }
    }
}

);




document.addEventListener('noteChanged', function (event) {
    if (!pause && withOctave) {
        const currentNotePlaying = event.detail.currentNotePlaying;
        const currentOctavePlaying = event.detail.currentOctavePlaying;
        const currentNoteNav = document.querySelector(`.${CURRENT_NOTE_CLASS}`);
        const currentOctaveChosen = document.querySelector('#octaveInput').value;

        if (currentNoteNav.textContent.trim() === currentNotePlaying &&
            currentOctaveChosen === currentOctavePlaying) {
            console.log("dobrze");
            currentNoteNav.style.color = 'green';
            console.log(withoutInterval);
            if (withoutInterval) {
                pause = true;
                setTimeout(() => {
                    updateNotesDisplay();
                    pause = false;
                }, 1000);
            }
            else if (!withInterval) {
                setTimeout(() => revertColorOfCurrentNote(), 1000);
            }
        }
    }
});