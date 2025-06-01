const divsAudioBrands = document.querySelectorAll('.logo-e-texto');

divsAudioBrands.forEach(div => {
  const audio = div.querySelector('.audio-themes');

  div.addEventListener('mouseenter', () => {
    audio.currentTime = 0;
    audio.play();
  });

  div.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
  });
});