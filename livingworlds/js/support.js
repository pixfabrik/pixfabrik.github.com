// ----------
function useHash() {
  var hash = window.location.hash;
  $('.faq-item').removeClass('selected');
  $(hash).addClass('selected');
}

// ----------
$(document).ready(function() {
  var $toc = $('.toc');
  
  $('.faq-item').each(function(i, el) {
    var $el = $(el);
    var $header = $el.find('h3');
    
    $('<a>')
      .addClass('toc-item')
      .attr('href', '#' + $el.attr('id'))
      .text($header.text())
      .appendTo($toc);
  });
  
  $(window).on('hashchange', useHash);
  useHash();
});
