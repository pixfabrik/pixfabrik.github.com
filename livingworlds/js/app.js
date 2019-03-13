(function() {
  var imagePaths = [
    'jan.png',
    'feb.png',
    'mar.png'
  ];
  
  var index = 1;
  
  function next() {
    var url = '/livingworlds/img/' + imagePaths[index];
    index = (index + 1) % imagePaths.length;
    var readyTime = Date.now() + 5000;
    var img = new Image();
    img.onload = function() {
      setTimeout(function() {
        $('.scene').attr({
          src: url
        });
        next();
      }, Math.max(1, readyTime - Date.now()));
    };
    img.src = url;
  }
  $(document).ready(function() {
    next();
  });
})();
