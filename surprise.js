const bloomButton = document.querySelector('#bloom');
bloomButton.addEventListener('click', () => {
 document.querySelector('#flowers').src = 'index1.html';
 bloomButton.textContent = 'Senin için yeniden… ♡';
 clearTimeout(window.bloomReset);
 window.bloomReset = setTimeout(() => { bloomButton.textContent = 'Yeniden çiçek açsın ↻'; }, 3500);
});
