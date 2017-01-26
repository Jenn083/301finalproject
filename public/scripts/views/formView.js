'use strict';

(function() {

  function handleNewComment(event) {
    event.preventDefault();
    var name = $('#nameSender').val();
    var feedback = $('#feedbackContent').val();

    var h2 = $('<h2 class="sender"></h2>');
    var p = $('<p class="message"></p>');

    $('#guestbook').append(h2);
    $('#guestbook').append(p);

    $('h2.sender').append(name);
    $('p.message').append(feedback);

    $('#nameSender').val('');
    $('#feedbackContent').val('');
  }

  $('#button').on('click', handleNewComment);

})(window);
