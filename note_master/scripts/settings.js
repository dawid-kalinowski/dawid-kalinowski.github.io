let submitButton = document.getElementById('start-button');
const toggleFretboardButton = document.getElementById('toggleFretboardButton');
const fretboardContainer = document.getElementById('fretboardContainer');
let withOctave = false;


document.addEventListener('DOMContentLoaded', function () {
    submitButton.disabled = false; // enable the submit button by default
});

// when nointerval is checked, disable intervalinput
document.getElementById('noInterval').addEventListener('change', function () {
    document.getElementById('intervalInput').disabled = this.checked;
});

document.getElementById('withOctave').addEventListener('change', function () {
    document.getElementById('octaveInput').disabled = !this.checked;
    withOctave = this.checked;
});


// function to select or unselect a specific note to later display it or not
function toggleNote(note) {
    const button = document.querySelector(`button[value="${note}"]`);
    const checkbox = document.querySelector(`input[value="${note}"]`);

    button.disabled = true;

    setTimeout(function () {
        button.disabled = false;
    }, 100);

    button.classList.toggle('selected');
    checkbox.checked = !checkbox.checked;

    const checkedNotes = Array.from(document.querySelectorAll('input[name="note"]:checked')).map(input => input.value);
    console.log(checkedNotes);

    // disable the start button if there are less than 2 notes selected
    submitButton.disabled = checkedNotes.length < 2;
}

// function to select notes based on a filter condition
function selectNotes(filterCondition) {
    const notes = Array.from(document.querySelectorAll('input[name="note"]'));
    notes.forEach(note => {
        const button = document.querySelector(`button[value="${note.value}"]`);
        if (filterCondition(note.value)) {
            note.checked = true;
            button.classList.add('selected');
        } else {
            note.checked = false;
            button.classList.remove('selected');
        }
    });
    submitButton.disabled = !notes.some(note => filterCondition(note.value));
}

function selectAllSharpNotes() {
    selectNotes(value => value.endsWith('♯'));
}

function selectAllNaturalNotes() {
    selectNotes(value => !value.endsWith('♯'));
}

function selectAllNotes() {
    selectNotes(() => true);
}
function unselectAllNotes() {
    selectNotes(() => false);
}

function toggleButtons() {
    const applyAdvancedCheckbox = document.getElementById('applyAdvanced');
    const settingsContainer = document.querySelector('.settings');
    const buttons = settingsContainer.querySelectorAll('.menu, .display-notes, .custom-checkbox input, .note-button, #octaveInput');
    buttons.forEach(button => {
        if (button.id !== 'toggleAdvancedSettings' && button.id !== 'noInterval' && button.id !== 'toggleFretboardButton') {
            button.disabled = applyAdvancedCheckbox.checked;
        }
    });
}


toggleFretboardButton.addEventListener('click', function () {
    if (fretboardContainer.style.display === 'none') {
        fretboardContainer.style.display = 'block';
    } else {
        fretboardContainer.style.display = 'none';
    }
});