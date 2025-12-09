// renderer.js
export function renderNotes(notes, container) {
  container.innerHTML = notes.length === 0 
    ? '<p style="text-align:center; color:#666;">No notes yet. Add one above!</p>'
    : notes.map(note => `
      <div class="note" data-id="${note.id}">
        <small>${note.date}</small>
        <p>${note.text.replace(/\n/g, '<br>')}</p>
        <button data-delete="${note.id}">✕</button>
      </div>
    `).join('');
}