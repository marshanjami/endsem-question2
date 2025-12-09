// storage.js
const STORAGE_KEY = 'my-notes-app';

export const storage = {
  // Get all notes
  getNotes() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Save all notes
  saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  },

  // Add a new note
  addNote(text) {
    const notes = this.getNotes();
    notes.push({
      id: Date.now(),  // simple unique ID
      text: text.trim(),
      date: new Date().toLocaleString()
    });
    this.saveNotes(notes);
    return notes;
  },

  // Delete a note by ID
  deleteNote(id) {
    let notes = this.getNotes();
    notes = notes.filter(note => note.id !== id);
    this.saveNotes(notes);
    return notes;
  }
};