(function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentNode;
      accordionItem.classList.toggle('active');
    });
  });
})();


// Создание плеера при загрузке API YouTube
function onYouTubeIframeAPIReady() {
  // Замените 'YOUR_VIDEO_ID' на реальный идентификатор видео YouTube
  const videoId = 'L_A5cyPegcg';

  const player = new YT.Player('player', {
    videoId: videoId,
    playerVars: {
      autoplay: 0, // Измените на 1, если хотите, чтобы видео автоматически воспроизводилось
    },
  });
}

