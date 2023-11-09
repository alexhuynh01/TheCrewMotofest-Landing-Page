var videos = ["/assets/video/LAMBORGHINI_URUS_16-9_H264_7sec.mp4", "/assets/video/COBRA_SHELBY_16-9_NO_RATINGS_7sec.mp4", "/assets/video/FORD_BRONCO_16-9_NO_RATINGS_7sec.mp4", "/assets/video/B_ROLL_REVUELTO_16-9_H264_EMEA_7sec.mp4" ];
var currentIndex = 0;

function nextVideo() {
  var video = document.getElementById('myVideo');
  
  if (currentIndex < 3) {
    // Nếu chưa đến video thứ 5, chuyển sang video tiếp theo trong danh sách
    currentIndex++;
  } else {
    // Nếu đã đến video thứ 5, quay lại video đầu tiên
    currentIndex = 0;
  }
  
  video.src = videos[currentIndex];
  video.load();
  video.play();
}
