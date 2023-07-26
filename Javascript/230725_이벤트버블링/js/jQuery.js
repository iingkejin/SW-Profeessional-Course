$('.open-btn').on('click', function(){
  $('.overlay').addClass('is-open');
})

$('.close-btn').on('click', function(){
  $('.overlay').removeClass('is-open');
})

$('.overlay').on('click', function(e){
  // e.target과 .overlay가 일치하면 코드 실행
  if($(e.target).is('.overlay')) {
    $('.overlay').removeClass('is-open');
  }
  console.log($(e.target))
})