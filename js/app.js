$(document).ready(function() {
  // Set reusable variables.
  var transitionSpeed = 250;

  // Get reference to key UI components
  var $form = $('.search-form');

  $form.click(function() {
    $('.magnifying-handle').animate({
      // top: '130%',
      left: '105%',
      top: '102%',
      width: '0px'
    }, transitionSpeed, function() {
      $form.animate({
        width: '400px'
      }, transitionSpeed, function() {
        if(!$('.cancel-button').hasClass('cancel-visible')){
          $('.cancel-button').addClass('cancel-visible');
        }
      });
    });
  });

  $('#quick-check').click(function() {
    if($('.cancel-button').hasClass('cancel-visible')) {
      $('.cancel-button').removeClass('cancel-visible');
    }

    window.setTimeout(function () {
      $form.animate({
        width: '30px'
      }, transitionSpeed, function() {
        $('.magnifying-handle').animate({
          left: '90%',
          top: '115%',
          width: '19px'
        }, transitionSpeed);
      });
    }, 250);
  });
});
