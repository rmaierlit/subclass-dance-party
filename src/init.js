$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    //window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var dancerNumber = window.dancers.length;
    var between = $('body').width() / dancerNumber;
    var offset = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(offset);
      offset += between;
    }
  });

  $('.filterbutton').on('click', function(event) {
    $('img').addClass('filter');
  });

  $('.flipCatMode').on('click', function(event) {
    for (var i = 0; i < 20; i++) {
      var dancer = new OtherDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000);
      $('body').append(dancer.$node);
    }

    //edits background
    $('body').addClass('specialDancer');
  });

  $('.splitinhalf').on('click', function(event) {
    var dancerNumber = window.dancers.length;
    var half = Math.floor(dancerNumber / 2);

    var between = $('body').width() / dancerNumber;
    var offsetLeft = 20;
    var offsetRight = 20;

    for (var i = 0; i < window.dancers.length; i++) {
      if ( i < half) {
        window.dancers[i].split(offsetLeft, ($('body').width() * .2));
        offsetLeft += between;
      } else {
        window.dancers[i].split(offsetRight, ($('body').width() * .6));
        offsetRight += between;
      }
    }
  });
});



















