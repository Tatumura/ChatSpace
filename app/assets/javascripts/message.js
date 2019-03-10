$(function() {
  function buildHTML(message) {
        var insertImage = '';
    if (message.image_url) {
      Image = `<img src="${message.image_url}">`;
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
                    ${Image}
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
});
