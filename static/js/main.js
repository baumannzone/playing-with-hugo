const App = {
  init: function () {
    App.main();
  },

  main: function () {
    // Play Sound
    function playSound() {
      console.log( 'Playing sound!' );
      audio.currentTime = 0;
      audio.play();
    }

    // Stop Sound
    function stopSound() {
      console.log( 'Stoping sound!' );
      audio.pause();
      audio.currentTime = 0;
    }

    const audio = document.querySelector( 'audio' );
    const element = document.getElementById( 'sound' );

    element.addEventListener( 'mouseover', playSound );
    element.addEventListener( 'mouseleave', stopSound );
  },
};

App.init();