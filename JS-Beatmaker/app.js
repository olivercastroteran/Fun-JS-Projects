window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#60d394',
    '#d36060',
    '#9c54aa',
    '#bebc45',
    '#6860d3',
    '#60b2d3'
  ];

  // Start the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  // Create a function that makes bubbles
  const createBubbles = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    // Remove bubble
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  };
});
