$(function(){

  var leastMessage = window.leastMessage;

  function buildHTML(message) {
        var  insertImage = '';
    if (message.image_url) {
       insertImage = `<img src="${message.image_url}">`;
    }

        var html = `<div class='chat-body' data-id="${message.id}">
                  <div class='chat-body--name'>
                    ${message.name}
                  </div>
                  <div class='chat-body--time'>
                    ${message.created_at}
                  </div>
                  <div class='chat-body--message'>
                    ${message.body}
                      </div>
                    ${ insertImage}
                  </div>
                </div>`;
    return html;
  }



  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/message'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.message').append(html);
      $('.textbox').val('')
    })
    .fail(function() {
      alert('error');
    });
  });

  var interval = setInterval(function() {
    var leastMessage = $('.chat-body:last').data('id');
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href.json,
        type: 'GET',
        date: { id: leastMessage },
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML = '';
        data.forEach(function(message) {
          insertHTML += buildHTML(message);
          leastMessage = message;
        });
        $('.messageslists').append(insertHTML);
      })

            .fail(function(json) {
        alert('自動更新に失敗しました');
      });
    } else {
      clearInterval(interval);
    }} , 5000 );
  });
