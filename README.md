# Notes Manager – Advanced DOM & localStorage Project

A clean, modular notes app built with vanilla JavaScript (ES6 modules) that demonstrates:

- Dynamic note creation  
- Persistent storage using `localStorage`  
- Auto-loading notes on page refresh  
- Delete functionality with event delegation  
- Proper separation of concerns using import/export modules  

## Features
- Add notes with timestamp
- Delete individual notes (event delegation on container)
- All notes saved automatically to browser's `localStorage`
- Notes persist after refresh or closing the browser
- Fully responsive and clean UI

## File Structure
├── index.html         → Main page
├── style.css          → Simple styling
├── main.js            → App logic & event handlers
├── storage.js         → localStorage module (save/load/delete)
└── renderer.js        → DOM rendering module

