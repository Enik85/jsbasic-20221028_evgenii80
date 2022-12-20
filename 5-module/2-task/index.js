function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  let counter = 1;
  button.addEventListener('click', function() {
    text.hidden = Boolean(counter % 2);
    counter += 1;
  });
}

