const title = document.getElementById('title');
const notes = document.getElementById('notes');

const newNote = notes.appendChild(
  document.createElement('li')
);
newNote.innerText = title.getAttribute('placeholder');

title.addEventListener('input', (event) => {
  newNote.innerText = event.target.value;
});
