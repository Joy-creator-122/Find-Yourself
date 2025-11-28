// index.js - small behavior for opening page
document.addEventListener('DOMContentLoaded', ()=>{
  const start = document.getElementById('start-btn');
  // small focus animation when clicking start
  start.addEventListener('click', ()=>{
    start.blur();
  });
});
