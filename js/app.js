$(document).ready(function() {
  // Get reference to key UI components
  var $form = $('.search-form');

  $form.click(function() {
    $(this).css({
      width: '400px'
    })
  });

  $('#quick-check').click(function() {
    $form.css({
      width: '30px'
    })
  });
});
