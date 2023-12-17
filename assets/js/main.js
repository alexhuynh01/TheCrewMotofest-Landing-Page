  var videos = [
      "assets/video/LAMBORGHINI_URUS_16-9_H264_7sec.mp4",
      "assets/video/COBRA_SHELBY_16-9_NO_RATINGS_7sec.mp4",
      "assets/video/FORD_BRONCO_16-9_NO_RATINGS_7sec.mp4",
      "assets/video/B_ROLL_REVUELTO_16-9_H264_EMEA_7sec.mp4"
  ];
  var currentIndex = 0;

  function nextVideo() {
      var video = document.getElementById('myVideo');

      if (currentIndex < videos.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }

      if (video.canPlayType('video/mp4') !== '') {
          video.src = videos[currentIndex];
          video.load();
          video.play();
      } else {
          console.error('Trình duyệt không hỗ trợ định dạng video.');
      }
  }
