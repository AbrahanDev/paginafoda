const textElements = document.querySelectorAll('.reveal-text'); 
textElements.forEach(element => {
  const text = element.textContent;
  element.textContent = ''; // Borramos el texto original

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.animationDelay = `${i * 0.1}s`; // Retraso para cada letra
    element.appendChild(span);
  }
});
