$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat-main__message__list">
         <div class="chat-main__message__list__user">
           <div class="chat-main__message__list__user__username">
             ${message.user_name}
           </div>
           <div class="chat-main__message__list__user__time">
             ${message.created_at}
           </div>
         </div>
         <div class="chat-main__message__list__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="chat-main__message__list">
         <div class="chat-main__message__list__user">
           <div class="chat-main__message__list__user__username">
             ${message.user_name}
           </div>
           <div class="chat-main__message__list__user__time">
             ${message.created_at}
           </div>
         </div>
         <div class="chat-main__message__list__text">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action');
 
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message').append(html);
    $('form')[0].reset();
    $('.chat-main__message').animate({ scrollTop: $('.chat-main__message')[0].scrollHeight});
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  })
  .always(function(){
    $(".chat-main__form__sent").prop("disabled",false);
  })
})
});