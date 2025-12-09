// main.js
import { storage } from './storage.js';
import { renderNotes } from './renderer.js';

const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.getElementById('notesContainer');

// Load notes on page load
function loadNotes() {
  const notes = storage.getNotes();
  renderNotes(notes, notesContainer);
}
loadNotes();

// Add new note
addBtn.addEventListener('click', () => {
  const text = noteInput.value;
  if (text.trim() === '') return;

  storage.addNote(text);
  noteInput.value = '';
  loadNotes();
});

// Event delegation for delete buttons
notesContainer.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('[data-delete]');
  if (!deleteBtn) return;

  const id = Number(deleteBtn.dataset.delete);
  storage.deleteNote(id);
  loadNotes();
});