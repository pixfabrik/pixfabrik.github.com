(function() {
  var imagePaths = [
    'jan.png',
    'feb.png',
    'mar.png',
    'apr.png'
  ];
  
  var index = 1;
  var $scene, $scene2;
  
  function next() {
    var url = '/livingworlds/img/' + imagePaths[index];
    index = (index + 1) % imagePaths.length;
    var readyTime = Date.now() + 5000;
    var img = new Image();
    img.onload = function() {
      setTimeout(function() {
        $scene2.attr({
          src: url
        });
        $scene2.addClass('shown');
        setTimeout(function() {
          $scene.attr({
            src: url
          });
          $scene2.removeClass('shown');
          next();
        }, 1000);
      }, Math.max(1, readyTime - Date.now()));
    };
    img.src = url;
  }
  
  $(document).ready(function() {
    $scene = $('.scene');
    $scene2 = $('.scene-2');
    $count = $('.count');
    
    var date = new Date();
    var isMay = date.getMonth() >= 4 || date.getFullYear() > 2019;
    if (isMay) {
      $count.text('five');
      imagePaths.push('may.png');
    }
    
    next();
  });
})();
