// Graphics
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Audio
const audio = new Audio('sound.mp3');

// Input
window.addEventListener('keydown', e => console.log(e.key));

// Storage / settings
localStorage.setItem('score', '100');

// Debug
console.log('Debug info');

// File access
// <input type="file" id="fileInput"> in HTML
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', e => {
  const reader = new FileReader();
  reader.onload = () => console.log(reader.result);
  reader.readAsText(e.target.files[0]);
});
