const octaves = [1, 2, 3, 4, 5, 6, 7, 8];


function generateRandomNotewithOctave() {
    const selectedNotes = Array.from(document.querySelectorAll('input[name="note"]:checked'), checkbox => checkbox.value);
    const randomIndex = Math.floor(Math.random() * selectedNotes.length);
    console.log(selectedNotes[randomIndex] + currentOctaveChosen);
    return selectedNotes[randomIndex] + currentOctaveChosen;
}