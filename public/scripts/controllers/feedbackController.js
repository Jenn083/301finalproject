'use strict';

(function(module) {
  const feedbackController = {};

  feedbackController.index = () => {
    $('#feedback').show().siblings().hide();
    loadFeedback();
    $('#button').on('click', send);
  };

  var loadFeedback = () => {
    // load feedback from database
    $.get('/feedback/all')
     .then( (feedback) => {
       $('#guestbook').empty();
       feedback.rows.map( (item) => {
         var comment = `
           <div class="comment">
             <h2 class="sender">${item.author}</h2>
             <p class="message">${item.message}</p>
           </div>
         `;
         $('#guestbook').append(comment);
       });
     });
  }

  var send = (event) => {
    event.preventDefault();
    var name = $('#nameSender').val();
    var message = $('#feedbackContent').val();

    var comment = `
      <div class="comment">
        <h2 class="sender">${name}</h2>
        <p class="message">${message}</p>
      </div>
    `;
    $('#guestbook').append(comment);
    $('#nameSender').val('');//reset val to empty string
    $('#feedbackContent').val('');
    var feedback = {
      author: name,
      message: message
    };
    // save to database
    $.post('/feedback/insert', feedback);
  }


  module.feedbackController = feedbackController;
})(window);
