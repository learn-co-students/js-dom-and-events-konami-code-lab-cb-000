const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  
  const body = document.querySelector('body');

  let index = 0;

  body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      // console.log('keep going');
      if (index === code.length) {
        alert('Beep boop beep boop');
        index = 0;
      }
    } else {
      index = 0;
    }

  };

}