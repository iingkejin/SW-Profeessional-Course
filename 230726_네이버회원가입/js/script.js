// label 클릭 했을 때
// 클릭된 label의 자식인 checkbox-img에 Checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  // 클릭된 label의 자식인 .checkbox-img class에
  //  checked 라는 class가 포함되어 있다면 
  // <input type="checkbox">의 속성 checked
  if($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img.checked 라는클래스가 있을 때
    $(this).children("input[type='checkbox']").attr('checked', true);
  } else {
    $(this).children("input[type='checkbox']").removeAttr('checked');
  }
})


// .total을 체크하면 .agree 올 체크
// .total을 언체크하면 .agree 전부 언체크

// .total .checkbox-img가 .checked 클래스를 가지고 있다면
// .agree안 .checkbox-img에 checked class add
// .agree안 input checkbox를 checked true

// .total .checkbox-img가 .checked 클래스를 가지고 있지 않다면
// .agree 안 .checkbox-img에 checked class remove
// .agree 안 input checkbox를 checked false
$('.total label').on('click', function(){
  if($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
  } else {

  }
})