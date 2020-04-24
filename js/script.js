$(document).ready(function () {
  $(".abacus").each(function (_, abacus) {
    var NumArray = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "one",
      "two",
      "three",
      "four",
    ];

    var topBeadsContainer = $(abacus).find(".beads-container-top");

    var topHoursLast = $(topBeadsContainer).find(".hours-last");
    var hoursLastDisplayNumber = $(topHoursLast).find(".display-number");

    var topHoursFirst = $(topBeadsContainer).find(".hours-first");
    var hoursFirstDisplayNumber = $(topHoursFirst).find(".display-number");

    var topMinutesLast = $(topBeadsContainer).find(".minutes-last");
    var minutesLastDisplayNumber = $(topMinutesLast).find(".display-number");

    var topMinutesFirst = $(topBeadsContainer).find(".minutes-first");
    var minutesFirstDisplayNumber = $(topMinutesFirst).find(".display-number");

    var topSecondsLast = $(topBeadsContainer).find(".seconds-last");
    var secondsLastDisplayNumber = $(topSecondsLast).find(".display-number");

    var topSecondsFirst = $(topBeadsContainer).find(".seconds-first");
    var secondsFirstDisplayNumber = $(topSecondsFirst).find(".display-number");

    // --------------------------------------------------------------------------------------
    var bottomBeadsContainer = $(abacus).find(".beads-container-bottom");

    var bottomHoursLast = $(bottomBeadsContainer).find(".hours-last");
    var bottomHoursFirst = $(bottomBeadsContainer).find(".hours-first");

    var bottomMinutesLast = $(bottomBeadsContainer).find(".minutes-last");
    var bottomMinutesFirst = $(bottomBeadsContainer).find(".minutes-first");

    var bottomSecondsLast = $(bottomBeadsContainer).find(".seconds-last");
    var bottomSecondsFirst = $(bottomBeadsContainer).find(".seconds-first");

    // ---------------------------------------------------------------------------------------
    setInterval(function () {
      var date = new Date();
      var secondsObject = digitsToObject(date.getSeconds());
      var minutesObject = digitsToObject(date.getMinutes());
      var hoursObject = digitsToObject(date.getHours());

      // ----------------- to display the time
      $(secondsFirstDisplayNumber).text(secondsObject.firstDigit);
      $(secondsLastDisplayNumber).text(secondsObject.secondDigit);

      $(minutesFirstDisplayNumber).text(minutesObject.firstDigit);
      $(minutesLastDisplayNumber).text(minutesObject.secondDigit);

      $(hoursFirstDisplayNumber).text(hoursObject.firstDigit);
      $(hoursLastDisplayNumber).text(hoursObject.secondDigit);

      // ----------------------- for seconds

      //       for seconds first digit
      if (secondsObject.firstDigit !== 5) {
        $(bottomSecondsFirst)
          .removeClass(NumArray)
          .addClass(NumArray[secondsObject.firstDigit]);
        secondsObject.firstDigit > 5
          ? $(topSecondsFirst).addClass("five")
          : $(topSecondsFirst).removeClass("five");
      } else {
        $(topSecondsFirst).addClass("five");
        $(bottomSecondsFirst).removeClass(NumArray);
      }

      //       for seconds second digit
      if (secondsObject.secondDigit !== 5) {
        $(bottomSecondsLast)
          .removeClass(NumArray)
          .addClass(NumArray[secondsObject.secondDigit]);
        secondsObject.secondDigit > 5
          ? $(topSecondsLast).addClass("five")
          : $(topSecondsLast).removeClass("five");
      } else {
        $(topSecondsLast).addClass("five");
        $(bottomSecondsLast).removeClass(NumArray);
      }

      //       ------------------- for Minutes

      //       for Minutes first digit
      if (minutesObject.firstDigit !== 5) {
        $(bottomMinutesFirst)
          .removeClass(NumArray)
          .addClass(NumArray[minutesObject.firstDigit]);
        minutesObject.firstDigit > 5
          ? $(topMinutesFirst).addClass("five")
          : $(topMinutesFirst).removeClass("five");
      } else {
        $(topMinutesFirst).addClass("five");
        $(bottomMinutesFirst).removeClass(NumArray);
      }

      //       for minutes second digit
      if (minutesObject.secondDigit !== 5) {
        $(bottomMinutesLast)
          .removeClass(NumArray)
          .addClass(NumArray[minutesObject.secondDigit]);
        minutesObject.secondDigit > 5
          ? $(topMinutesLast).addClass("five")
          : $(topMinutesLast).removeClass("five");
      } else {
        $(topMinutesLast).addClass("five");
        $(bottomMinutesLast).removeClass(NumArray);
      }

      //       ------------------- for Hours

      //       for Hours first digit
      if (hoursObject.firstDigit !== 5) {
        $(bottomHoursFirst)
          .removeClass(NumArray)
          .addClass(NumArray[hoursObject.firstDigit]);
        hoursObject.firstDigit > 5
          ? $(topHoursFirst).addClass("five")
          : $(topHoursFirst).removeClass("five");
      } else {
        $(topHoursFirst).addClass("five");
        $(bottomHoursFirst).removeClass(NumArray);
      }

      //       for hours second digit
      if (hoursObject.secondDigit !== 5) {
        $(bottomHoursLast)
          .removeClass(NumArray)
          .addClass(NumArray[hoursObject.secondDigit]);
        hoursObject.secondDigit > 5
          ? $(topHoursLast).addClass("five")
          : $(topHoursLast).removeClass("five");
      } else {
        $(topHoursLast).addClass("five");
        $(bottomHoursLast).removeClass(NumArray);
      }
    }, 1000);
  });

  // convert digits to object
  function digitsToObject(number) {
    return {
      firstDigit: parseInt(number / 10),
      secondDigit: parseInt(number % 10),
    };
  }
});
