$(document).ready(function() {
  // Set reusable variables.
  var transitionSpeed = 250;

  // Get reference to key UI components
  var $form = $('.search-form');
  var $formInput = $('.search-form input');

  $('.cancel-button').hide();

  $formInput.click(function() {
    if ($(this).hasClass('closed-input')) {
      $('.magnifying-handle').animate(
        {
          left: '105%',
          top: '102%',
          width: '0px'
        },
        transitionSpeed,
        function() {
          $formInput.removeClass('closed-input');
          $form.animate(
            {
              width: '400px'
            },
            transitionSpeed,
            function() {
              if (!$('.cancel-button').hasClass('cancel-visible')) {
                $('.cancel-button').show();
                $('.cancel-button').addClass('cancel-visible');
              }
            }
          );
        }
      );
    }
  });

  $('.cancel-button').click(function() {
    if ($('.cancel-button').hasClass('cancel-visible')) {
      $('.cancel-button').removeClass('cancel-visible');
    }
    window.setTimeout(function() {
      $formInput.addClass('closed-input');
      $form.animate(
        {
          width: '30px'
        },
        transitionSpeed,
        function() {
          $('.magnifying-handle').animate(
            {
              left: '90%',
              top: '115%',
              width: '19px'
            },
            transitionSpeed,
            function() {
              $('.cancel-button').hide();
            }
          );
        }
      );
    }, 250);
  });
});
