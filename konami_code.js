const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let keyIndex = 0;

  function konamiCodeHandler(e) {
    const pressedKey = parseInt(e.detail || e.which || e.location);

    if (pressedKey === code[keyIndex]) {
      keyIndex++;

      if (keyIndex === code.length) {
        alert('Congrats! You entered the Konami Code!');

        keyIndex = 0;
      }
    } else {
      keyIndex = 0;
    }
  }

  document.addEventListener('keydown', konamiCodeHandler);
}
