let pause = false;
// check if currently played note matches displayed note (without an octave)
document.addEventListener('noteChanged', function (event) {
    if (!pause) {
        let currentNotePlaying = withOctave ? event.detail.currentNotePlaying + event.detail.currentOctavePlaying : event.detail.currentNotePlaying;
        const currentNoteNav = document.querySelector(`.${CURRENT_NOTE_CLASS}`);
        console.log("obecnie wyswietlany dzwiek: " + currentNoteNav.textContent);
        if (currentNoteNav.textContent.trim() === currentNotePlaying) {
            console.log("dobrze");
            currentNoteNav.style.color = 'green';
            console.log(withoutInterval);
            if (withoutInterval) { pause = true; setTimeout(() => { updateNotesDisplay(); pause = false; }, 1000); }
            else if (!withInterval) { setTimeout(() => revertColorOfCurrentNote(), 1000); }
        }
    }
});