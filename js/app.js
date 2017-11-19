$(document).ready(function() {
  // get a reference to the date
  var dateField = $('.date');

  var dateObject = new Date();
  var date = dateObject.getUTCDate();
  var month = dateObject.getMonth() + 1;
  var year = dateObject.getFullYear();
  var $fahrenheitButton = $('button[name=fahrenheit-button]');
  var $celsiusButton = $('button[name=celsius-button]');
  var fahrenheitTemperature = "";
  var celsiusTemperature = "";

  dateField.text("The forecast for " + month + "-" + date + "-" + year);

  // Click method for the submit button
  $('button[name=submit-location-button]').click(function() {
    var key = 'd254d028dca5b10573704452f3a39f8d';
    var latitude = $('#latitude').val();
    var longitude = $('#longitude').val();

    $.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + key + '/' + latitude + ',' + longitude, function(data) {
      var weatherJSON = data;
      var currentWeather = weatherJSON['currently'];
      var currentIcon = currentWeather['icon'];
      var currentSummary = currentWeather['summary'];
      fahrenheitTemperature = currentWeather['temperature'];
      celsiusTemperature = ((fahrenheitTemperature - 32) * (5 / 9)).toFixed(2);

      // Determine whether the temp should be displayed in Fahrenheit or Celsius.
      if ($fahrenheitButton.hasClass('selected')) {
        $('.temperature').text(fahrenheitTemperature + '°' + ' Fahrenheit.');
      } else {
        $('.temperature').text(celsiusTemperature + '°' + ' Celsius.');
      }

      $('.summary').text(currentSummary);
      $('.weather-icon').attr("id", currentIcon);

      var skycons = new Skycons({
        color: "#6BB5EC"
      });

      skycons.set("clear-day", Skycons.CLEAR_DAY);
      skycons.set("clear-night", Skycons.CLEAR_NIGHT);
      skycons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
      skycons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
      skycons.set("cloudy", Skycons.CLOUDY);
      skycons.set("rain", Skycons.RAIN);
      skycons.set("sleet", Skycons.SLEET);
      skycons.set("snow", Skycons.SNOW);
      skycons.set("wind", Skycons.WIND);
      skycons.set("fog", Skycons.FOG);
      skycons.play();
    });
  });

  // Click method for the fahrenheit buttons.
  $fahrenheitButton.click(function() {
    // Make sure the temperature field isn't empty so that we don't try to call methods without first submitting temperature.
    if (!$('.temperature').text().length == 0) {
      if (!$(this).hasClass('selected')) {
        $('.temperature').text(fahrenheitTemperature + '°' + ' Fahrenheit');

        if ($celsiusButton.hasClass('selected')) {
          $celsiusButton.removeClass('selected');
        }
        $(this).addClass('selected');
      }
    } else {
      if (!$(this).hasClass('selected')) {
        if ($celsiusButton.hasClass('selected')) {
          $celsiusButton.removeClass('selected');
        }
        $(this).addClass('selected');
      }
    }
  });

  // Click method for the celsius button.
  $celsiusButton.click(function() {
    // Make sure the temperature field isn't empty so that we don't try to call methods without first submitting temperature.
    if (!$('.temperature').text().length == 0) {
      if (!$(this).hasClass('selected')) {
        $('.temperature').text(celsiusTemperature + '°' + ' Celsius');

        if ($fahrenheitButton.hasClass('selected')) {
          $fahrenheitButton.removeClass('selected');
        }
        $(this).addClass('selected');
      }
    } else {
      if (!$(this).hasClass('selected')) {
        if ($fahrenheitButton.hasClass('selected')) {
          $fahrenheitButton.removeClass('selected');
        }
        $(this).addClass('selected');
      }
    }
  });

});
