'use strict';

(function(module) {
  const feedbackController = {};

  feedbackController.index = () => {
    $('#feedback').show().siblings().hide();
    $('#button').on('click', send);
  };

  var send = (event) => {
    event.preventDefault();
    var name = $('#nameSender').val();
    var feedback = $('#feedbackContent').val();

    var comment = `
      <div class="comment">
        <h2 class="sender">${name}</h2>
        <p class="message">${feedback}</p>
      </div>
    `;
    $('#guestbook').append(comment);
    $('#nameSender').val('');
    $('#feedbackContent').val('')
  }


  module.feedbackController = feedbackController;
})(window);
